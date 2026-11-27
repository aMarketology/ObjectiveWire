'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MessageItem {
  id: string;
  sender: string;
  handle: string;
  time: string;
  isMe?: boolean;
  body: string;
  forwarded?: {
    siteDomain: string;
    slug: string;
    title: string;
    quotedText?: string;
    sources?: string[];
    arcScore: number;
    arcTier: string;
    canEditSection: boolean;
  };
}

interface ThreadPreview {
  id: string;
  name: string;
  handle: string;
  arcScore: number;
  arcTier: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
  messages: MessageItem[];
}

const DEMO_THREADS: ThreadPreview[] = [
  {
    id: '1',
    name: 'Capta1n',
    handle: 'capta1n2985',
    arcScore: 280,
    arcTier: 'Trusted Reader',
    lastMessage: 'Forwarded a quote from M Station Apartments Shooting...',
    time: '2m',
    unread: true,
    messages: [
      {
        id: 'm1',
        sender: 'Capta1n',
        handle: 'capta1n2985',
        time: '12:52 PM',
        body: 'Check this specific section on the juvenile vs. adult docket split—worth tracking once the affidavit unseals.',
        forwarded: {
          siteDomain: 'objectivewire.org',
          slug: 'local/austin/east-austin-m-station-apartments-shooting-three-arrested-2026',
          title: 'Evening Shooting in Central East Austin: Three Suspects Detained After Child Suffers Critical Injuries',
          quotedText:
            'Under Texas law, suspects under age 17 are processed through the juvenile justice system rather than adult criminal court, and their identities are confidential by statute.',
          sources: ['FOX 7 Austin', 'Texas Family Code § 54.02'],
          arcScore: 280,
          arcTier: 'Trusted Reader',
          canEditSection: true,
        },
      },
      {
        id: 'm2',
        sender: 'You',
        handle: 'you',
        time: '12:55 PM',
        isMe: true,
        body: 'Got it—I put this on my Story Watchlist so we get alerted when Travis County unseals the adult affidavit.',
      },
    ],
  },
  {
    id: '2',
    name: 'Carson Scott',
    handle: 'carson-scott',
    arcScore: 540,
    arcTier: 'Editor',
    lastMessage: 'Forwarded: Tarik Skubal $450M Mets Deal',
    time: '1h',
    messages: [
      {
        id: 'm3',
        sender: 'Carson Scott',
        handle: 'carson-scott',
        time: '11:40 AM',
        body: 'Sharing the CBA luxury tax breakdown here.',
        forwarded: {
          siteDomain: 'objectivewire.com',
          slug: 'mlb/tarik-skubal-450-million-mets-deal-explained',
          title: "Tarik Skubal's Record $450M Mets Contract Explained: Deferrals, Luxury Tax & CBA Stakes",
          quotedText:
            'It eclipses Yoshinobu Yamamoto’s previous total-value record ($325 million) by $125 million and shatters the single-season AAV mark ($43.3 million).',
          sources: ['Associated Press', 'MLB Trade Rumors'],
          arcScore: 540,
          arcTier: 'Editor',
          canEditSection: true,
        },
      },
    ],
  },
];

export default function MessagesPage() {
  const [threads, setThreads] = useState<ThreadPreview[]>(DEMO_THREADS);
  const [activeId, setActiveId] = useState<string>(DEMO_THREADS[0].id);
  const [search, setSearch] = useState('');
  const [draft, setDraft] = useState('');

  const filtered = threads.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.handle.toLowerCase().includes(search.toLowerCase()),
  );
  const activeThread = threads.find((t) => t.id === activeId) ?? threads[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim() || !activeThread) return;

    const newMsg: MessageItem = {
      id: String(Date.now()),
      sender: 'You',
      handle: 'you',
      time: 'Just now',
      isMe: true,
      body: draft.trim(),
    };

    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeThread.id
          ? { ...t, lastMessage: draft.trim(), time: 'now', unread: false, messages: [...t.messages, newMsg] }
          : t,
      ),
    );
    setDraft('');
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-black tracking-tight text-gray-900">Messaging</h1>
          <p className="text-xs text-gray-500">
            Forward articles, specific quotes, and sourced updates directly to other ObjectiveWire members.
          </p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
          UI Preview · Phase D
        </span>
      </div>

      {/* LinkedIn-style Two-Pane Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden min-h-[540px]">
        {/* Left Pane: Conversations */}
        <aside className="md:col-span-4 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-200">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search messages…"
              className="w-full rounded-lg bg-gray-100 px-3 py-1.5 text-xs text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/40"
            />
          </div>
          <div className="divide-y divide-gray-100 overflow-y-auto flex-1">
            {filtered.map((t) => {
              const isActive = t.id === activeThread?.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setActiveId(t.id);
                    setThreads((prev) => prev.map((x) => (x.id === t.id ? { ...x, unread: false } : x)));
                  }}
                  className={`w-full text-left p-3.5 flex items-start gap-3 transition-colors ${
                    isActive ? 'bg-[#0A66C2]/5 border-l-4 border-l-[#0A66C2]' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-900 truncate">{t.name}</span>
                      <span className="text-[11px] text-gray-400 shrink-0">{t.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-semibold text-[#5865F2]">{t.arcScore} ARC</span>
                      <span className="text-[10px] text-gray-400">· {t.arcTier}</span>
                    </div>
                    <p className={`text-xs mt-1 truncate ${t.unread ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                      {t.lastMessage}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Pane: Active Thread */}
        <section className="md:col-span-8 flex flex-col justify-between">
          {activeThread && (
            <>
              {/* Thread Header */}
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xs">
                    {activeThread.name.charAt(0)}
                  </div>
                  <div>
                    <Link href={`/u/${activeThread.handle}`} className="text-sm font-bold text-gray-900 hover:underline">
                      {activeThread.name}
                    </Link>
                    <p className="text-[11px] text-gray-500">
                      @{activeThread.handle} · {activeThread.arcScore} ARC ({activeThread.arcTier})
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50/40">
                {activeThread.messages.map((m) => (
                  <div key={m.id} className={`flex flex-col ${m.isMe ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-semibold text-gray-700">{m.sender}</span>
                      <span className="text-[10px] text-gray-400">{m.time}</span>
                    </div>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        m.isMe ? 'bg-[#0A66C2] text-white' : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      <p>{m.body}</p>

                      {m.forwarded && (
                        <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-900">
                          <div className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                            <span>{m.forwarded.siteDomain}</span>
                            <span
                              className={`px-1.5 py-0.5 rounded ${
                                m.forwarded.canEditSection
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {m.forwarded.canEditSection ? '✓ ARC Edit Eligible' : 'Read Only'}
                            </span>
                          </div>
                          <Link
                            href={`/${m.forwarded.slug}`}
                            className="text-xs font-bold text-[#0A66C2] hover:underline block"
                          >
                            {m.forwarded.title}
                          </Link>
                          {m.forwarded.quotedText && (
                            <blockquote className="mt-2 pl-2.5 border-l-2 border-[#0A66C2] text-xs italic text-gray-700">
                              &ldquo;{m.forwarded.quotedText}&rdquo;
                            </blockquote>
                          )}
                          {m.forwarded.sources && m.forwarded.sources.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {m.forwarded.sources.map((src) => (
                                <span
                                  key={src}
                                  className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-600"
                                >
                                  Source: {src}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Composer */}
              <form onSubmit={handleSend} className="p-3 border-t border-gray-200 bg-white flex items-center gap-2">
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a message or paste an article link…"
                  className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/40 focus:border-[#0A66C2]"
                />
                <button
                  type="submit"
                  disabled={!draft.trim()}
                  className="rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold px-4 py-2 transition-colors disabled:opacity-40"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
