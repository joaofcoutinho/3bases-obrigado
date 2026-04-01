import Image from "next/image";

export default function ObrigadoPage() {
  return (
    <main className="bg-[#111111] text-white min-h-screen font-barlow overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — Confirmação de inscrição
      ══════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 pb-16 text-center"
        style={{
          backgroundImage: "url('/fundo4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-[rgba(17,17,17,0.72)]" />

        {/* Gradient fade-out inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">

          {/* Logo */}
          <div className="anim-fade-in mb-2">
            <Image
              src="/logo.png"
              alt="As Três Bases"
              width={160}
              height={56}
              priority
              className="object-contain"
            />
          </div>

          {/* Linha decorativa */}
          <div className="gradient-line anim-line w-16" />

          {/* Label */}
          <p
            className="anim-fade-in delay-1 text-white/55 uppercase tracking-[0.35em] text-xs font-semibold font-barlow-condensed"
          >
            Inscrição confirmada · Lista VIP
          </p>

          {/* Heading principal */}
          <h1
            className="anim-fade-up delay-2 font-barlow-condensed font-extrabold uppercase leading-none"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            Obrigado por{" "}
            <span className="gradient-text">se inscrever!</span>
          </h1>

          {/* Subheading */}
          <p
            className="anim-fade-up delay-3 text-white/80 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            Você está na Lista VIP. Entre agora no grupo da Lista VIP para acompanhar as novidades.
          </p>

          {/* Botão WhatsApp */}
          <a
            href="https://chat.whatsapp.com/JqTRE2wC5taCj1rNjG2BeL"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-fade-up delay-4 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-150 text-white font-barlow-condensed font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 rounded-full shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.529 5.855L.057 23.571a.75.75 0 0 0 .922.899l5.908-1.557A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.708 9.708 0 0 1-4.99-1.378l-.358-.214-3.717.979.993-3.63-.233-.374A9.715 9.715 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Entrar no grupo VIP
          </a>

          {/* Linha decorativa */}
          <div className="gradient-line anim-line delay-5 w-12" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          O QUE ACONTECE AGORA
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16 border-t border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto text-center">

          <p className="anim-fade-in text-white/55 uppercase tracking-[0.35em] text-xs font-semibold font-barlow-condensed mb-4">
            Próximos passos
          </p>

          <h2
            className="anim-fade-up delay-1 font-barlow-condensed font-bold uppercase leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            O que acontece{" "}
            <span className="gradient-text">a partir de agora</span>
          </h2>

          <p className="anim-fade-up delay-2 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Fique atento ao seu e-mail. Você será um dos primeiros a saber quando
            as vagas abrirem — com condições exclusivas para quem está na lista.
          </p>
        </div>

        {/* Grid de passos */}
        <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2"
                    stroke="url(#g1)" strokeWidth="1.8" />
                  <path d="M2 8l10 7 10-7" stroke="url(#g1)" strokeWidth="1.8" />
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="24" y2="0">
                      <stop stopColor="#4B8EDB" />
                      <stop offset="0.5" stopColor="#9B4CB8" />
                      <stop offset="1" stopColor="#C84B1F" />
                    </linearGradient>
                  </defs>
                </svg>
              ),
              step: "01",
              title: "Confirme seu e-mail",
              desc: "Verifique a caixa de entrada (e o spam) para garantir que você vai receber nossos avisos.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"
                    stroke="url(#g2)" strokeWidth="1.8" />
                  <circle cx="12" cy="9" r="2.5" stroke="url(#g2)" strokeWidth="1.8" />
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="24" y2="0">
                      <stop stopColor="#4B8EDB" />
                      <stop offset="0.5" stopColor="#9B4CB8" />
                      <stop offset="1" stopColor="#C84B1F" />
                    </linearGradient>
                  </defs>
                </svg>
              ),
              step: "02",
              title: "Aguarde o aviso",
              desc: "Quando as vagas abrirem, você será notificado antes de qualquer pessoa.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="url(#g3)" strokeWidth="1.8" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="g3" x1="0" y1="0" x2="24" y2="0">
                      <stop stopColor="#4B8EDB" />
                      <stop offset="0.5" stopColor="#9B4CB8" />
                      <stop offset="1" stopColor="#C84B1F" />
                    </linearGradient>
                  </defs>
                </svg>
              ),
              step: "03",
              title: "Garanta sua vaga",
              desc: "Acesse com prioridade e condições especiais disponíveis apenas para quem está na lista VIP.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`anim-fade-up delay-${i + 2} p-6 rounded-xl border border-white/[0.10] bg-white/[0.03] flex flex-col gap-4
                ${i < 2 ? "md:border-r-0 md:rounded-r-none" : ""}
                ${i > 0 ? "md:rounded-l-none" : ""}
              `}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="gradient-text font-barlow-condensed font-bold text-sm tracking-widest">
                  {item.step}
                </span>
              </div>
              <h3 className="font-barlow-condensed font-bold uppercase text-white text-lg leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BANNER PALCO — Mensagem de encerramento
      ══════════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-16 text-center"
        style={{
          backgroundImage: "url('/foto-palco3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.88)]" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="gradient-line anim-line w-12" />

          <h2
            className="anim-fade-up font-barlow-condensed font-extrabold uppercase leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Não é sobre aprender mais.
            <br />
            <span className="gradient-text">É sobre decidir melhor.</span>
          </h2>

          <p className="anim-fade-up delay-2 text-white/70 text-base md:text-lg leading-relaxed">
            Te vejo em breve dentro do programa.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#0A0A0A] py-10 px-6 md:px-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="As Três Bases"
            width={120}
            height={42}
            className="object-contain opacity-80"
          />
          <p className="text-white/30 text-xs font-barlow-condensed tracking-widest uppercase">
            © 2026 · As Três Bases
          </p>
        </div>
      </footer>

    </main>
  );
}
