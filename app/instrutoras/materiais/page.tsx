import type { Metadata } from "next";
import Link from "next/link";
import { CopyButton } from "@/components/captacao/copy-button";
import {
  getCaptacaoMaterials,
  WAITLIST_URL,
} from "@/lib/captacao/instrutoras";

export const metadata: Metadata = {
  title: "Materiais de captação | Instrutoras de IA",
  robots: { index: false, follow: false },
};

export default function MateriaisPage() {
  const materials = getCaptacaoMaterials();

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <Link href="/instrutoras" className="brand">
            Diferentia<span className="dot">.</span>
          </Link>
          <Link href="/instrutoras" className="link-arrow">
            <span>Lista de espera</span> <span className="arr">←</span>
          </Link>
        </div>
      </header>

      <section className="section">
        <div className="wrap instrutoras-wrap instrutoras-wrap-wide">
          <div className="section-head reveal in">
            <span className="eyebrow"><i></i>Uso interno</span>
            <h1 className="section-title">Materiais de captação</h1>
            <p className="lead instrutoras-lead">
              Textos para Instagram e LinkedIn. Link da lista de espera:{" "}
              <a href={WAITLIST_URL} className="text-link">
                {WAITLIST_URL}
              </a>
            </p>
          </div>

          <div className="community-grid reveal in">
            {materials.map((material) => (
              <article key={material.id} className="perk">
                <div className="perk-head">
                  <h3>{material.title}</h3>
                  <CopyButton text={material.body} />
                </div>
                <p className="perk-body">{material.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
