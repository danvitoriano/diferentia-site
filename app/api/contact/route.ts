import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, phone, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Nome e e-mail são obrigatórios." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  // Dev sem variáveis: só loga
  if (!supabaseUrl || !supabaseKey) {
    console.log("[lead]", { name, email, company, phone, message });
    return NextResponse.json({ ok: true });
  }

  // 1. Salva no Supabase
  const dbRes = await fetch(`${supabaseUrl}/rest/v1/leads`, {
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
      company: company ?? "",
      phone: phone ?? "",
      message: message ?? "",
    }),
  });

  if (!dbRes.ok) {
    const err = await dbRes.text();
    console.error("[lead] Supabase error:", err);
    return NextResponse.json(
      { error: "Erro ao registrar. Tente novamente." },
      { status: 500 }
    );
  }

  // 2. Notificação por e-mail (opcional — só roda se RESEND_API_KEY estiver configurada)
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_EMAIL ?? "vitoriano08@gmail.com";

  if (resendKey) {
    const html = `
      <div style="font-family:sans-serif;max-width:480px">
        <h2 style="color:#7C6FF7;margin-bottom:4px">Novo lead — Diferentia</h2>
        <hr style="border:1px solid #eee;margin-bottom:20px"/>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Empresa:</strong> ${company || "—"}</p>
        <p><strong>Telefone:</strong> ${phone || "—"}</p>
        <p><strong>Mensagem:</strong></p>
        <blockquote style="border-left:3px solid #7C6FF7;padding-left:12px;color:#555">
          ${message || "—"}
        </blockquote>
        <hr style="border:1px solid #eee;margin-top:20px"/>
        <p style="font-size:12px;color:#999">Enviado via diferentia.com.br</p>
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
        subject: `Novo lead: ${name} (${company || "sem empresa"})`,
        html,
      }),
    }).catch((err) => console.error("[lead] Resend error:", err));
  }

  return NextResponse.json({ ok: true });
}
