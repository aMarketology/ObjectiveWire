import type { ReactNode } from 'react';
import Link from 'next/link';

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface Breadcrumb {
  href: string;
  label: string;
}

interface Stat {
  value: string;
  label: string;
}

interface InfoRow {
  label: string;
  value: string;
}

interface TocItem {
  id: string;
  label: string;
}

interface RelatedService {
  href: string;
  icon: string;
  label: string;
  desc: string;
}

interface ServicePageProps {
  icon: string;
  title: string;
  subtitle: string;
  category: string;
  lastUpdated: string;
  breadcrumbs: Breadcrumb[];
  stats: Stat[];
  infoRows: InfoRow[];
  tableOfContents: TocItem[];
  relatedServices: RelatedService[];
  ctaHeading: string;
  ctaBody: string;
  children: ReactNode;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

// â”€â”€â”€ ServiceSection â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function ServiceSection({ id, title, children }: ServiceSectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-black tracking-tight text-white mb-4 pb-2 border-b border-[#2d2d2d]">
        {title}
      </h2>
      <div className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-1">
        {children}
      </div>
    </section>
  );
}

// â”€â”€â”€ ServicePage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function ServicePage({
  icon,
  title,
  subtitle,
  category,
  lastUpdated,
  breadcrumbs,
  stats,
  infoRows,
  tableOfContents,
  relatedServices,
  ctaHeading,
  ctaBody,
  children,
}: ServicePageProps) {
  return (
    <div className="bg-[#121212] min-h-screen text-white">

      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-[#1c1c1e] border-b border-[#2d2d2d]">
        <div className="container max-w-6xl mx-auto px-4 py-10">

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-6 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={crumb.href} className="text-gray-500 hover:text-[#d97706] transition-colors">
                      {crumb.label}
                    </Link>
                    <span className="text-gray-700">/</span>
                  </>
                ) : (
                  <span className="text-[#d97706]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Category + icon */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl" role="img" aria-hidden="true">{icon}</span>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#d97706] font-mono">
              {category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 text-white max-w-3xl">
            {title}
          </h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed mb-8">
            {subtitle}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black text-white">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* â”€â”€ Body: 2-col grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

          {/* Main content */}
          <article className="min-w-0">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Info card */}
            <div className="bg-[#1c1c1e] rounded-xl border border-[#2d2d2d] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#2d2d2d] bg-[#242424]">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#d97706] font-mono">
                  Service Details
                </span>
              </div>
              <div className="divide-y divide-[#2d2d2d]">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex gap-3 px-4 py-2.5">
                    <span className="text-[11px] font-black uppercase tracking-wide text-gray-500 font-mono w-20 shrink-0 pt-0.5">
                      {row.label}
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">{row.value}</span>
                  </div>
                ))}
                <div className="flex gap-3 px-4 py-2.5">
                  <span className="text-[11px] font-black uppercase tracking-wide text-gray-500 font-mono w-20 shrink-0 pt-0.5">
                    Updated
                  </span>
                  <span className="text-sm text-gray-300">{lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Table of contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-[#1c1c1e] rounded-xl border border-[#2d2d2d] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#2d2d2d] bg-[#242424]">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d97706] font-mono">
                    On This Page
                  </span>
                </div>
                <ul className="divide-y divide-[#2d2d2d]">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#242424] transition-colors"
                      >
                        <span className="text-[#d97706] text-xs">â†’</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA card */}
            <div className="bg-[#d97706]/10 border border-[#d97706]/30 rounded-xl p-5">
              <h3 className="text-base font-black text-white mb-2">{ctaHeading}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{ctaBody}</p>
              <Link
                href="/get-help"
                className="block text-center bg-[#d97706] hover:bg-[#f59e0b] text-white font-black text-sm py-2.5 px-4 rounded-lg transition-colors"
              >
                Free Consultation
              </Link>
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div className="bg-[#1c1c1e] rounded-xl border border-[#2d2d2d] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#2d2d2d] bg-[#242424]">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d97706] font-mono">
                    Related Services
                  </span>
                </div>
                <ul className="divide-y divide-[#2d2d2d]">
                  {relatedServices.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-[#242424] transition-colors group"
                      >
                        <span className="text-lg shrink-0 mt-0.5">{s.icon}</span>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-[#d97706] transition-colors leading-tight">
                            {s.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-snug">{s.desc}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </aside>
        </div>
      </div>
    </div>
  );
}

