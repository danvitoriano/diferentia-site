import { NextRequest, NextResponse } from "next/server";

const PROFILE_LABELS: Record<string, string> = {
  tecnologia: "Trabalho com tecnologia",
  outra_area: "Venho de outra área",
  estudante: "Sou estudante",
  ja_dou_aula: "Já dou aula de algo",
};

const VALID_PROFILES = new Set(Object.keys(PROFILE_LABELS));

export async function POST(req: NextRequest) {
  const { name, email, contact, profile, motivation } = await req.json();

  if (!name || !email || !contact || !profile) {
    return NextResponse.json(
      { error: "Nome, e-mail, contato e perfil são obrigatórios." },
      { status: 400 }
    );
  }

  if (!VALID_PROFILES.has(profile)) {
    return NextResponse.json(
      { error: "Perfil inválido." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.log("[waitlist/instrutoras]", {
      name,
      email,
      contact,
      profile,
      motivation,
    });
    return NextResponse.json({ ok: true });
  }

  const dbRes = await fetch(`${supabaseUrl}/rest/v1/waitlist_instrutoras`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name,
      email,
      contact,
      profile,
      motivation: motivation ?? "",
    }),
  });

  if (!dbRes.ok) {
    const err = await dbRes.text();
    console.error("[waitlist/instrutoras] Supabase error:", err);
    return NextResponse.json(
      { error: "Erro ao registrar. Tente novamente." },
      { status: 500 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_EMAIL ?? "vitoriano08@gmail.com";
  const profileLabel = PROFILE_LABELS[profile] ?? profile;

  if (resendKey) {
    const html = `
      <div style="font-family:sans-serif;max-width:480px">
        <h2 style="color:#7C6FF7;margin-bottom:4px">Lista de espera: Instrutoras de IA</h2>
        <hr style="border:1px solid #eee;margin-bottom:20px"/>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>WhatsApp ou Instagram:</strong> ${contact}</p>
        <p><strong>O que faz hoje:</strong> ${profileLabel}</p>
        <p><strong>Por que quer virar instrutora:</strong></p>
        <blockquote style="border-left:3px solid #7C6FF7;padding-left:12px;color:#555">
          ${motivation || ":"}
        </blockquote>
        <hr style="border:1px solid #eee;margin-top:20px"/>
        <p style="font-size:12px;color:#999">Enviado via diferentia.com.br/instrutoras</p>
      </div>
    `;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Diferentia <leads@diferentia.com.br>",
        to: [toEmail],
        reply_to: email,
        subject: `Lista de espera Instrutoras: ${name}`,
        html,
      }),
    }).catch((err) => console.error("[waitlist/instrutoras] Resend error:", err));
  }

  return NextResponse.json({ ok: true });
}
