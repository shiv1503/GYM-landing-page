import { siteConfig, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-border pt-16">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-10">
        <div>
          <div className="display text-[26px] mb-3.5">{siteConfig.name.toUpperCase()}</div>
          <p className="text-muted text-[13.5px] max-w-[38ch]">
            Built for people who show up. State-of-the-art equipment, real coaching, and a community that keeps
            you accountable.
          </p>
        </div>
        <div>
          <h5 className="mono text-[11.5px] uppercase tracking-wide text-muted mb-4">Quick Links</h5>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block text-muted no-underline text-sm mb-2.5 hover:text-lime">
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <h5 className="mono text-[11.5px] uppercase tracking-wide text-muted mb-4">Contact</h5>
          <a href={`tel:${siteConfig.phoneHref}`} className="block text-muted no-underline text-sm mb-2.5 hover:text-lime">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="block text-muted no-underline text-sm mb-2.5 hover:text-lime">
            {siteConfig.email}
          </a>
          <a href="#location" className="block text-muted no-underline text-sm mb-2.5 hover:text-lime">
            {siteConfig.address}
          </a>
        </div>
      </div>
      <div className="wrap border-t border-border py-5.5 flex justify-between items-center flex-wrap gap-3">
        <p className="m-0 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a
            href={siteConfig.social.instagram}
            aria-label="Instagram"
            className="w-9 h-9 border border-border rounded-full flex items-center justify-center no-underline text-xs text-muted hover:border-lime hover:text-lime"
          >
            IG
          </a>
          <a
            href={siteConfig.social.facebook}
            aria-label="Facebook"
            className="w-9 h-9 border border-border rounded-full flex items-center justify-center no-underline text-xs text-muted hover:border-lime hover:text-lime"
          >
            FB
          </a>
          <a
            href={siteConfig.social.youtube}
            aria-label="YouTube"
            className="w-9 h-9 border border-border rounded-full flex items-center justify-center no-underline text-xs text-muted hover:border-lime hover:text-lime"
          >
            YT
          </a>
        </div>
      </div>
    </footer>
  );
}
