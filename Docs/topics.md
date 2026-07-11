# Objective Wire | Editorial Topics & Content Pipeline
**Updated: July 11, 2026**
**Mission:** Verified sports, creators, cars, and culture coverage. Accuracy over speed, primary sources only, named authors.

---

## How to Use This Doc

1. Pick a story from the pipeline tables below
2. Check the hub page for existing articles in the cluster
3. Create `app/[hub]/[slug]/page.tsx` using the appropriate component:
   - `NewsArticle` — standard news format (World Cup match reports, breaking news, trend stories)
   - `JackArticle` — premium deep-dive with stats, sources, indicators
   - `CreatorArticle` — creator profile with infobox, gallery, social links
4. Run `npx tsx scripts/sync-registry.ts --write` or `npm run build`
5. Article auto-populates the homepage, news page, and relevant hub

**Author routing:**
| Beat | Author | `authorSlug` |
|---|---|---|
| World Cup 2026 / Sports | Jack Brennan | `jack-brennan` |
| Cars / Supercars | Conan D. Boyle | `conan-boyle` |
| Creators / YouTube / Influencer | Jack Sterling | `jack-sterling` |
| Culture / Entertainment | Jack Brennan | `jack-brennan` |

---

## Pillar 1 | World Cup 2026 — Summer's Biggest Story

Hub: `/world-cup` | Current: Round of 16 complete, Quarterfinals incoming

This is the highest-traffic pillar. Every match report drives search + AI citation. Production batch: 8-9 articles per round.

### Pipeline

| Round | Articles | Status | Deadline |
|---|---|---|---|
| Group Stage roundup | 4-6 hub intro / recap articles | ✅ Done | — |
| Round of 32 | 9 match reports | ✅ Done | — |
| Round of 16 | 8 match reports | ✅ Done | — |
| **Quarterfinals** | **4 match reports** | **⬅️ NEXT** | **July 11-12** |
| Semifinals | 2 match reports | ⏳ Pending | July 14 |
| Third-place match | 1 report | ⏳ Pending | July 15 |
| Final | 1 report + trophy feature | ⏳ Pending | July 16 |
| Featured: VAR controversy deep-dive | 1 long-read | ⏳ Pending | July 17 |
| Featured: Tournament legacy | 1 long-read | ⏳ Pending | July 18 |

### Quarterfinal Matchups (approaching)

| Match | Date | Stakes |
|---|---|---|
| Norway vs Morocco | July 11 | Underdog vs underdog, one guaranteed semifinalist |
| Argentina vs Switzerland | July 11 | Messi's path continues, Swiss defensive test |
| Spain vs England | July 12 | Heavyweight tactical battle |
| France vs Belgium | July 12 | European classic, stacked talent |

### World Cup Article Pattern

- Component: `NewsArticle`
- `topicTag: "sports"`
- Author: Jack Brennan, avatar `/influncer/author/jack_brennen.JPG`
- `revalidate: 86400`
- Slug: `world-cup-2026-[team1]-[score]-[team2]-[score]-[round]`
- `keyTakeaways`: 4 items (definition, key stat, turning point, aftermath)
- `faqItems`: 3-5 items (score, MVP, next match, key moment)
- Internal links: hub backlink + 2 sibling match reports + author page
- Thumbnail: Satori minted via 2-curl workflow

---

## Pillar 2 | Sports — MLB, MLS, Premier League, Golf, Soccer

Hubs: `/mlb` `/mls` `/premier-league` `/golf` `/soccer`

### MLB

| Story | Angle | Priority |
|---|---|---|
| 2026 season standings + playoff race | Mid-season analysis, division races, wild card | HIGH |
| Trade deadline preview | Key players on the block, contenders' needs | HIGH (late July) |
| Draft recap 2026 | Top picks, analysis, team grades | MEDIUM |
| Team-specific features | Surprise teams, slumping stars | MEDIUM |
| Stadium / attendance stories | New ballparks, attendance trends | LOW |

### MLS

| Story | Angle | Priority |
|---|---|---|
| Leagues Cup 2026 | MLS vs Liga MX, format, key matches | HIGH (Aug) |
| Playoff race | Supporters Shield, playoff positioning | MEDIUM |
| USMNT players in MLS | World Cup 2026 prep, player watch | MEDIUM |
| Expansion news | New franchises, stadiums | LOW |

### Premier League

| Story | Angle | Priority |
|---|---|---|
| Transfer window roundup | Summer 2026 signings, fees, analysis | HIGH (Aug-Sep) |
| Season preview 2026-27 | Title race, relegation battle, key storylines | HIGH (Aug) |
| U.S. tours | PL clubs in America, preseason friendlies | MEDIUM (Jul) |
| Manager changes | Hires, firings, tactical shifts | MEDIUM |

### Golf

| Story | Angle | Priority |
|---|---|---|
| Major recaps | Masters, PGA, U.S. Open, Open Championship | HIGH |
| LIV Golf vs PGA Tour | Merger status, player movements | MEDIUM |
| Top player profiles | Scheffler, Rahm, McIlroy, emerging stars | MEDIUM |

### Sports Article Pattern

- Component: `NewsArticle`
- `topicTag: "sports"`
- Author: Jack Brennan
- Slug: `[sport]/[slug]`
- `keyTakeaways`: 3-4 items
- `faqItems`: 3-4 items
- Internal links: hub backlink + 2 sibling articles + author page

---

## Pillar 3 | Creators & YouTube — Influencer Economy

Hubs: `/creator` `/youtube` `/influencer`

### Creator Profiles (ongoing series)

Each profile follows the **CreatorArticle** gold standard. Target: 2-3 per week.

| Creator | Platform | Niche | Priority |
|---|---|---|---|
| MrBeast | YouTube | Creator economy, Beast Games, Feastables | HIGH |
| Logan Paul | YouTube / WWE | Prime, podcast, wrestling | HIGH |
| Jake Paul | YouTube / Boxing | Boxing career, MVP promotion | HIGH |
| KSI | YouTube / Boxing | Prime, music, boxing | HIGH |
| Kai Cenat | Twitch / YouTube | Streaming, Mafiathon, culture | HIGH |
| Addison Rae | TikTok | Music, acting, brand deals | MEDIUM |
| Bella Poarch | TikTok / Music | Music career, following | MEDIUM |
| Emma Chamberlain | YouTube / Coffee | Coffee brand, fashion | MEDIUM |
| Markiplier | YouTube | Gaming, streaming longevity | MEDIUM |
| Airrack | YouTube | Challenge videos, Creator League | LOW |
| Dream | YouTube / Minecraft | Face reveal, music, Minecraft | LOW |
| Valkyrae | YouTube / Gaming | 100 Thieves, streaming | LOW |

### Creator News (ongoing)

| Story | Angle | Priority |
|---|---|---|
| Creator League 2026 | Format, teams, viewership, impact | HIGH |
| YouTube Brandcast / Upfronts | Ad revenue, platform priorities | MEDIUM |
| TikTok ban / regulation | Legislative updates, impact on creators | HIGH (if active) |
| OnlyFans economics | Top earners, platform changes | MEDIUM |
| Influencer marketing trends | Brand spend, ROI, fraud | MEDIUM |
| Platform policy changes | Demonetization, algorithm changes, strikes | MEDIUM |

### Creator Article Pattern

- Component: `CreatorArticle` for profiles, `NewsArticle` for news
- Author: Jack Sterling (profiles), Jack Brennan (news)
- 15-18 keywords in metadata
- Wikipedia-style infobox in sidebar for profiles
- Internal links: 3 minimum

---

## Pillar 4 | Cars — Supercars, EVs, Auto News

Hub: `/cars`

### Car Coverage

| Story | Angle | Priority |
|---|---|---|
| Ferrari F80 | 1,184hp hybrid hypercar, $3.7M, 799 units | HIGH |
| Bugatti Tourbillon | 1,800hp V16 hybrid, $4.1M | HIGH |
| McLaren W1 | 1,275hp hybrid, 399 units | HIGH |
| Porsche 911 hybrid | 992-generation hybrid, specs, pricing | MEDIUM |
| Lamborghini Revuelto | V12 hybrid flagship | MEDIUM |
| Koenigsegg Jesko Absolut | Production, speed records | MEDIUM |
| EV market 2026 | Tesla, Rivian, Lucid, legacy OEMs | MEDIUM |
| Car launches / auto shows | Geneva, Pebble Beach, Monterey | MEDIUM |

### Car Article Pattern

- Component: `NewsArticle` with `topicTag: "cars"`
- `keyTakeawaysColor: "red"`
- Author: Conan D. Boyle
- Slug: `/cars/[make]-[model]-[year]`

---

## Pillar 5 | Culture & Entertainment

Hubs: `/creator/news` `/youtube/news`

| Story | Angle | Priority |
|---|---|---|
| K-pop industry | Billboard trends, U.S. market | MEDIUM |
| Celebrity brand launches | Beauty, fashion, alcohol | MEDIUM |
| Film / TV | Box office, streaming wars | LOW |
| Music | Album releases, chart performance | LOW |

---

## Pillar 6 | Texas Developments — Public Records, Courts, Infrastructure & Policy

Hub: `/local` `/blog`

This pillar covers **Texas-specific reporting** that fits within ZWire's editorial scope: court filings, public records, infrastructure, and policy changes that affect Texas residents. No partisan politics — focus on verifiable documents, financial data, and named officials.

**Author routing:**
| Beat | Author | `authorSlug` |
|---|---|---|
| Texas courts / public records | Jack Brennan | `jack-brennan` |
| Texas infrastructure / business | Conan D. Boyle | `conan-boyle` |

---

### Public Records & FOIA

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **TPIA response time audit 2026** | How long Texas agencies take to respond, which agencies stonewall, OAG rulings | OAG Open Records Division decisions | HIGH |
| **State agency travel & expense abuse** | High-cost trips, first-class travel by Texas state employees | Texas Comptroller expenditure database | MEDIUM |
| **Texas public records requests by county** | Which counties comply fastest, which deny most, comparison | Texas OAG enforcement records | MEDIUM |
| **Body cam footage release policies** | Which Texas PDs release body cam automatically vs. fight requests | Individual department policies, TPIA requests | HIGH |

### Texas Courts

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Federal court filings — Texas districts** | Civil rights suits, state vs. federal disputes, immigration challenges | PACER (W.D. Texas, S.D. Texas, N.D. Texas, E.D. Texas) | HIGH |
| **Texas Supreme Court 2026 term** | Major property rights, election law, and agency authority cases | txcourts.gov | MEDIUM |
| **Texas Court of Criminal Appeals** | Wrongful conviction claims, death penalty cases, new evidentiary standards | txcourts.gov | MEDIUM |
| **District court backlogs** | Post-COVID case clearance rates by county, judge-level data | Individual district clerk offices | MEDIUM |

### Infrastructure & Environment

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Texas power grid 2026** | ERCOT summer performance, rolling blackouts, reserve margins | ERCOT public reports, PUCT filings | HIGH |
| **Texas water infrastructure** | Boil water events 2025-2026, small water district failures, EPA violations | TCEQ enforcement orders, EPA ECHO database | HIGH |
| **TxDOT highway expansion projects** | I-35 expansion cost overruns, toll road revenue, contractor payments | TxDOT project records, Texas Comptroller | MEDIUM |
| **Texas flood control spending** | County-level bond fund utilization, projects delayed over budget | Harris County Flood Control, state grant records | MEDIUM |
| **High-speed rail Texas 2026** | Dallas-Houston line status, funding, regulatory approvals | Texas Rail Commission, FRA records | LOW |

### Texas Economy & Business

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Texas job growth 2026 by sector** | Which industries grow wages, which decline, energy vs. tech vs. healthcare | Texas Workforce Commission data | HIGH |
| **Texas corporate relocations 2026** | Companies moving HQ to Texas, incentives offered, job commitments | Texas Governor's office deal announcements, local EDC records | MEDIUM |
| **Texas energy sector** | Oil & gas production, renewable growth, LNG export capacity | Texas RRC data, EIA reports | MEDIUM |
| **Texas housing market 2026** | Affordability crisis, property tax trends, urban vs. rural divide | Texas A&M Real Estate Center, local appraisal districts | HIGH |
| **Texas film & media production** | Studio builds, tax incentives, production volume | Texas Film Commission, state incentive reports | LOW |

### Texas Public Safety

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **DPS border security spending 2026** | Operation Lone Star expenditure, vehicle seizures, what was achieved | Texas DPS public records, LBB reports | HIGH |
| **Texas prison system deaths 2025-2026** | TDCJ in-custody deaths, cause breakdown, unit-level data | TDCJ offender death reports, OIG records | HIGH |
| **APD use-of-force 2025-2026** | Pattern analysis by incident type, disciplinary outcomes, officer names in public records | APD Office of Police Oversight reports | HIGH |
| **HPD rape kit backlog** | Number of untested kits, timeline to clearance, accountability | HPD crime lab reports, Harris County DA records | HIGH |
| **Texas foster care system** | DFPS case data, federal monitor report status, placement outcomes | DFPS public data, Stukenberg v. Abbott court monitor | HIGH |

### Texas Politics & Policy (Non-Partisan)

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **2026 Texas legislative session preview** | Bills filed, committee assignments, leadership priorities | Texas Legislature Online (capitol.texas.gov) | MEDIUM |
| **Texas school finance 2026** | Per-student funding levels, recapture payments, teacher pay | TEA budget data, Texas Comptroller | MEDIUM |
| **Texas property tax reform** | Rate compression, appraisal caps, legislative outcomes | Texas Comptroller property tax division | MEDIUM |
| **Texas election administration 2026** | Voter registration changes, polling place changes, county-level admin | Texas Secretary of State, county election offices | MEDIUM |

---

### Source Directory | Texas Public Records

| Source | What You Get | URL |
|---|---|---|
| Texas Comptroller Expenditure Data | Every dollar state agencies spend, vendor names | comptroller.texas.gov/transparency |
| Texas Comptroller ESBD | State contract awards, bid amounts, vendor history | comptroller.texas.gov/purchasing/esbd |
| PACER | Federal court filings — all TX districts | pacer.gov |
| Texas OAG Open Records Decisions | Which agencies ordered to release records | oag.texas.gov/open-government/or-decisions |
| EPA ECHO | Environmental violations, penalties, inspection history | echo.epa.gov |
| ERCOT | Grid status, reserve margins, load forecasts | ercot.com |
| Texas Workforce Commission | Employment data, unemployment claims | twc.texas.gov |
| Texas DPS Public Information | Border security data, missing persons | dps.texas.gov/publicinformation |
| TDCJ | In-custody death reports, offender records | tdcj.texas.gov |
| Texas Ethics Commission | Campaign finance, lobbyist disclosures | ethics.state.tx.us |
| Texas Secretary of State | Corporate registrations, election data | sos.texas.gov |
| Texas RRC | Oil & gas production, well data | rrc.texas.gov |

### Article Pattern — Texas Developments

- Component: `NewsArticle` (or `JackArticle` for premium deep-dives with sources/timeline)
- `topicTag`: `"news"` or `"sports"` (for sports-related tx stories)
- Category: `"News"` or `"Sports"` 
- Slug: `texas-[topic]-[year]`
- Author: per beat table above
- Internal links: hub backlink to `/local` or `/blog`, 2+ additional internal links
- Sources: minimum 2 verifiable primary sources per article (public records, court filings, named officials)
