import Image from "next/image";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/itzzavdheshh?igsi=MTFkNTM5OGljOHV5aQ==",
    icon: Instagram,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Itzzavdheshh",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aavdhesh",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/itzzavdheshh",
    icon: Github,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1385290408698839223",
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 pb-8 pt-20 text-[#3b2418] md:px-12"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/header.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-[#f5e8d8]/[0.88]" />

      {/* Subtle gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(151,96,56,.18),transparent_34%),radial-gradient(circle_at_8%_88%,rgba(115,69,40,.14),transparent_31%)]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(74,43,25,.7)_0.6px,transparent_0.6px)] [background-size:6px_6px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-14 border-b border-[#70452f]/20 pb-16 lg:grid-cols-[1.45fr_.75fr_.9fr_.8fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8a5739]/35 bg-white/35 font-serif text-lg text-[#6a3d26] shadow-[0_10px_30px_rgba(82,48,28,.12)] backdrop-blur-sm">
                NØ
              </div>

              <div>
                <p className="font-serif text-[32px] tracking-[.08em] text-[#3d2418]">
                  NØIR BEAN
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[.42em] text-[#8b5739]">
                  Coffee atelier
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[430px] text-[13px] leading-7 text-[#523526]/75">
              A coffee atelier for slow rituals, bold flavour and beautifully
              engineered moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] uppercase tracking-[.36em] text-[#8a5739]">
              Navigation
            </p>

            <nav className="mt-7 flex flex-col gap-3 text-sm text-[#4c3022]/75">
              <a className="transition duration-300 hover:translate-x-1 hover:text-[#2f1b12]" href="/#home">Home</a>
              <a className="transition duration-300 hover:translate-x-1 hover:text-[#2f1b12]" href="/#coffee-story">Our story</a>
              <a className="transition duration-300 hover:translate-x-1 hover:text-[#2f1b12]" href="/#alchemy">Experience</a>
              <a className="transition duration-300 hover:translate-x-1 hover:text-[#2f1b12]" href="/menu">Menu</a>
              <a className="transition duration-300 hover:translate-x-1 hover:text-[#2f1b12]" href="/admin">Admin</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] uppercase tracking-[.36em] text-[#8a5739]">
              Contact
            </p>

            <div className="mt-7 space-y-4 text-sm text-[#4c3022]/75">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#8a5739]" />
                aavdhesh.dadhich@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#8a5739]" />
                +91 7690863039
              </div>

              <p className="pl-7 text-xs text-[#62412f]/60">
                Daily · 7 AM–12 AM
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-[9px] uppercase tracking-[.36em] text-[#8a5739]">
              Connect
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[#70452f]/20 bg-white/25 px-4 py-3 text-sm text-[#4c3022]/75 shadow-[0_10px_25px_rgba(82,48,28,.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#8a5739]/45 hover:bg-white/45 hover:text-[#2f1b12]"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#8a5739] transition duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    {label}
                  </span>

                  <span className="text-[#68432f]/45 transition group-hover:translate-x-1 group-hover:text-[#3e271b]/80">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center md:flex-row md:text-left">
          <span className="text-[9px] uppercase tracking-[.22em] text-[#5c3b2a]/55">
            © 2026 NØIR BEAN. All rights reserved.
          </span>

          <a
            href="https://www.linkedin.com/in/aavdhesh"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-left"
          >
            <span className="relative h-14 w-14 overflow-hidden rounded-full border border-[#70452f]/20 bg-white shadow-[0_10px_30px_rgba(82,48,28,.22)]">
              <Image
                src="/branding/avdhesh-logo.jpg"
                alt="Avdhesh Dadhich"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>

            <span>
              <span className="block text-[8px] uppercase tracking-[.32em] text-[#5c3b2a]/55">
                Designed &amp; developed by
              </span>

              <span className="mt-1 block font-serif text-2xl tracking-[.08em] text-[#7b4b31] transition duration-300 group-hover:tracking-[.14em] group-hover:text-[#4a2b1d]">
                Avdhesh Dadhich
              </span>
            </span>
          </a>

          <span className="text-[9px] uppercase tracking-[.22em] text-[#5c3b2a]/55">
            Crafted for the ritual
          </span>
        </div>
      </div>
    </footer>
  );
}