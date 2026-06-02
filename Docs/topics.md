# Objective Wire | Texas Editorial Topics
**Updated: June 1, 2026**
**Mission:** Public-interest investigative reporting from Texas. Primary sources only. Court filings, public records, FOIA, and original field work.

---

## How to Use This Doc

1. Pick a story from the tables below
2. Gather sources (FOIA docs, court filings, agency records, named official statements)
3. Duplicate `app/blog/[slug]/page.tsx` template to `app/blog/your-story-slug/`
4. Write body starting with the direct answer to the headline (no hooks)
5. Run `npx tsx scripts/sync-registry.ts --write` or `npm run build`
6. Article auto-populates the `/blog` feed

**Author routing:**
| Beat | Author | `authorSlug` |
|---|---|---|
| Courts, general Texas | Jack Brennan | `jack-brennan` |
| PI, missing persons, fraud | Conan D. Boyle | `conan-boyle` |

---

## Beat 1 | Austin | Travis County, City Hall, APD

Hub: `/local/austin`

### Stories to Research and Write

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Austin City Council budget 2026** | Where is the $6B+ budget allocated, what was cut, how council voted | City of Austin budget docs, council vote records | HIGH |
| **APD use-of-force reports 2025-2026** | Pattern analysis of incidents, disciplinary outcomes, officer names in public records | APD Office of Police Oversight reports (public) | HIGH |
| **Travis County court backlogs** | Post-COVID backlog, how long cases are sitting, which judges have the most pending | Travis County District Clerk public docket | MEDIUM |
| **Austin development permits | Who is getting fast-tracked, which projects bypassed normal review** | City of Austin Development Services Department permits | MEDIUM |
| **Austin homeless camp sweeps 2026** | Number of sweeps, cost to taxpayers, where displaced persons go, city data | City audit reports, APD records, budget documents | MEDIUM |
| **Austin ISD board votes 2026** | Key curriculum and budget votes, school closures, board member positions | AISD board meeting minutes (public) | MEDIUM |
| **Travis County DA charging decisions** | Cases declined to prosecute, why, patterns by crime type | Travis County DA public records, court filings | HIGH |
| **Austin water utility rate hikes** | Austin Water rate increases, who approved them, low-income impact | Austin Water rate case filings, city council votes | LOW |
| **CapMetro expansion audit** | Project Connects Phase 1 spending vs budget, contractor payments | CapMetro public financial reports, FTA filings | MEDIUM |
| **APD academy attrition and staffing** | Recruit classes, dropout rates, current sworn officer count vs budgeted | APD annual report, city budget docs | LOW |

### Source Directory | Austin

| Source | URL / Access |
|---|---|
| Austin City Council meeting records | austintexas.gov/cityclerk |
| APD Office of Police Oversight | austintexas.gov/department/office-police-oversight |
| Travis County District Clerk | traviscountytx.gov/district-clerk |
| Austin City Budget | austintexas.gov/budget |
| Austin Development Services | austintexas.gov/department/development-services |
| Texas Public Information Act requests | Request via agency directly, 10-day response deadline |

---

## Beat 2 | Houston | Harris County, HPD, Energy Sector, Port

Hub: `/local/houston`

### Stories to Research and Write

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **HPD backlog of untested rape kits** | How many kits remain untested, timeline, accountability | HPD crime lab reports, Harris County DA records | HIGH |
| **Harris County flood control spending** | Post-Harvey bond funds, how much spent, which projects delayed or over budget | Harris County Flood Control District public financials | HIGH |
| **Port of Houston contract awards 2025-2026** | Who received major contracts, were bids competitive, any commissioner connections | Port of Houston Authority meeting minutes, contracts | MEDIUM |
| **Houston energy sector layoffs 2025-2026** | Which companies cut, how many jobs, state response | Texas Workforce Commission records, SEC filings (public companies) | MEDIUM |
| **Harris County jail conditions 2026** | Inmate deaths, lawsuits filed, inspection results | Harris County Sheriff public records, federal court filings | HIGH |
| **HPD overtime spending** | How much overtime paid, to which units, patterns | HPD budget documents, city controller reports | MEDIUM |
| **Harris County bail reform outcomes** | Impact of PR bond changes on re-arrest rates | Harris County criminal court data, DA reports | HIGH |
| **Houston ISD state takeover status** | TEA intervention, which schools affected, superintendent actions | TEA public documents, HISD board records | MEDIUM |
| **Houston water infrastructure failures** | Boil water events 2024-2026, cause, city response timeline | City of Houston PWE reports, EPA compliance records | MEDIUM |
| **Energy corridor zoning and TxDOT** | Highway expansion through energy corridor, who benefits, public comment record | TxDOT project records, Harris County appraisal records | LOW |

### Source Directory | Houston

| Source | URL / Access |
|---|---|
| Harris County District Clerk | hcdistrictclerk.com |
| HPD Open Data | houstontx.gov/police |
| Port of Houston Authority | porthouston.com/about/public-records |
| Harris County Flood Control | hcfcd.org |
| Texas Commission on Environmental Quality | tceq.texas.gov/records |
| Harris County Sheriff | harriscountyso.org |

---

## Beat 3 | Greater Texas | Statewide, Workers Comp, Public Corruption

Hub: `/local/greater-texas`

### Workers Comp Fraud

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Texas workers comp claim denial rates by employer** | Which large employers deny claims most, how appeals end | Texas Department of Insurance Division of Workers Comp public data | HIGH |
| **Employer misclassification fraud** | Workers classified as independent contractors to avoid comp coverage, enforcement actions | TDI-DWC enforcement orders (public) | HIGH |
| **Medical provider billing fraud in comp system** | Overbilling patterns, providers sanctioned | TDI-DWC fraud unit public enforcement records | MEDIUM |
| **Injured worker attorney outcomes** | What happens to claims when workers get attorneys vs. don't | TDI-DWC public case outcome data | MEDIUM |
| **Construction industry comp coverage gaps** | Uninsured employers in construction, TDI enforcement | TDI-DWC uninsured employer database | HIGH |

### Public Corruption

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Texas AG Ken Paxton post-impeachment actions** | What oversight remains, pending cases, OAG public records | Texas AG public records, Travis County court filings | HIGH |
| **Bid rigging in Texas construction contracts** | State agency contract awards, losing bids, price anomalies | Texas Comptroller ESBD (Electronic State Business Daily) | MEDIUM |
| **Texas school district vendor fraud** | Districts with irregularities, TEA audit findings | TEA audit reports (public), district financial records | MEDIUM |
| **Water district governance failures** | Small water districts, board conflicts of interest, EPA violations | TCEQ enforcement orders, EPA ECHO database | MEDIUM |
| **Texas border security spending accountability** | Operation Lone Star expenditure, what was actually achieved | Texas Division of Emergency Management public records, LBB reports | HIGH |

### Missing Persons

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Texas DPS unresolved missing persons by county** | Which counties have the highest counts, resource gaps | Texas DPS Missing Persons Clearinghouse annual report | HIGH |
| **Nueces County missing persons patterns** | Coastal area, specific patterns in cases | Nueces County Sheriff, DPS records | MEDIUM |
| **Colonia missing persons cases, Rio Grande Valley** | Unincorporated communities, limited law enforcement access | Hidalgo/Starr/Cameron county sheriff records | HIGH |
| **Missing Indigenous women in Texas** | NamUs database Texas entries, tribal vs. state jurisdiction gaps | NamUs public database, Texas DPS | HIGH |

### Statewide Public Records

| Story | Angle | Primary Source | Priority |
|---|---|---|---|
| **Texas Public Information Act response time audit** | How long agencies are taking, which agencies stonewalling | OAG Open Records Division decisions (public) | MEDIUM |
| **Texas prison system deaths 2024-2026** | TDCJ in-custody deaths, cause, accountability | TDCJ offender death reports (public), OIG records | HIGH |
| **State agency travel and expense abuse** | High-cost trips, first-class travel by state employees | Texas Comptroller expenditure database | LOW |
| **Texas foster care system outcomes** | DFPS case data, federal monitor reports | DFPS public data, federal court monitor reports (M.D. ex rel. Stukenberg v. Abbott) | HIGH |

---

## Beat 4 | Courts | Travis County, Harris County, Federal Districts

### Active Court Clusters to Monitor

| Court | What to Watch | Access |
|---|---|---|
| **Travis County District Courts** | High-profile criminal trials, civil suits against city/county, TPIA litigation | traviscountytx.gov/district-clerk |
| **Harris County District Courts** | Capital cases, civil rights suits against HPD, energy sector litigation | hcdistrictclerk.com |
| **U.S. District Court, W.D. Texas (Austin)** | Federal civil rights suits, state vs. federal disputes, immigration enforcement challenges | pacer.gov |
| **U.S. District Court, S.D. Texas (Houston)** | Offshore energy litigation, human trafficking prosecutions, border cases | pacer.gov |
| **Texas Supreme Court** | State law precedents affecting public agencies, property rights, elections | txcourts.gov |
| **Texas Court of Criminal Appeals** | Death penalty cases, wrongful conviction claims | txcourts.gov |

---

## Research Toolkit | Texas Public Records

### Fastest Sources (No FOIA Needed)

| Source | What You Get | URL |
|---|---|---|
| Texas Comptroller Expenditure Data | Every dollar state agencies spend, vendor names | comptroller.texas.gov/transparency |
| Texas Comptroller ESBD | State contract awards, bid amounts, vendor history | comptroller.texas.gov/purchasing/esbd |
| PACER | Federal court filings across all U.S. districts | pacer.gov (8c/page after $30 free/quarter) |
| Texas OAG Open Records Decisions | Which agencies were ordered to release records | oag.texas.gov/open-government/or-decisions |
| EPA ECHO Database | Environmental violations, penalties, inspection history | echo.epa.gov |
| NamUs | National missing persons database with Texas cases | namus.nij.ojp.gov |
| TDI-DWC Enforcement | Workers comp sanctions, fines, employer violations | tdi.texas.gov/wc/employer/enforcement |
| TDCJ Offender Records | Inmate search, deaths, unit information | tdcj.texas.gov |
| Texas Ethics Commission | Campaign finance, lobbyist disclosures, conflict filings | ethics.state.tx.us |
| Texas Secretary of State | Corporate registrations, assumed names, UCC filings | sos.texas.gov |

### FOIA / Texas PIA Request Targets

File requests under the **Texas Public Information Act** (Tex. Gov't Code Ch. 552). Agencies must respond within **10 business days**.

| Agency | What to Request | Notes |
|---|---|---|
| APD | Use-of-force reports, disciplinary records, body cam metadata | City of Austin portal: austintexas.gov/records |
| Austin City Manager | Internal emails on specific projects or votes | Requestable via city clerk |
| Harris County Sheriff | Jail death reports, internal affairs summaries | harriscountyso.org |
| Texas DPS | Missing persons case files (non-active), UCR crime data | dps.texas.gov/publicinformation |
| TDCJ | In-custody death reports, unit inspection records | tdcj.texas.gov/pio |
| TEA | School district audit findings, TEA investigative reports | tea.texas.gov/about-tea/contact-us/open-records |
| TDI-DWC | Employer compliance files, insurer audit results | tdi.texas.gov/pio |
| Texas AG OAG | OAG investigation records where not exempt | oag.texas.gov |

---

## Article Naming Conventions | Texas Beat

These slug patterns ensure consistency and search clarity.

| Beat | Slug Pattern | Example |
|---|---|---|
| Austin city hall | `austin-[topic]-[year]` | `austin-city-council-budget-2026` |
| APD accountability | `apd-[topic]-[year]` | `apd-use-of-force-report-2026` |
| Travis County courts | `travis-county-[topic]-[year]` | `travis-county-da-declination-rate-2026` |
| Houston / Harris County | `houston-[topic]-[year]` | `houston-hpd-rape-kit-backlog-2026` |
| Workers comp | `texas-workers-comp-[topic]` | `texas-workers-comp-employer-denials-2026` |
| Missing persons | `texas-missing-persons-[location]` | `texas-missing-persons-rio-grande-valley` |
| Public corruption | `texas-[subject]-corruption-[year]` | `texas-bid-rigging-construction-2026` |
| Statewide | `texas-[topic]-[year]` | `texas-foster-care-deaths-2026` |

---

## OStandard Reminders | Texas Articles

- **No em dashes anywhere.** Use commas or rewrite the sentence.
- **First sentence of every article = direct factual answer.** Not a scene. Not a hook.
  - Bad: `"In the shadow of the Texas Capitol, a pattern has emerged..."`
  - Good: `"The Texas Department of Family and Protective Services failed to investigate 1,200 abuse reports in 2025, according to federal monitor records filed in Travis County."`
- **Named sources in every paragraph.** "Officials say" is not a source. Name the document, the agency, the filing number.
- **H2s must be specific.** Not `"Background"`. Not `"Overview"`. Example: `"APD Use-of-Force Reports | What the 2025 Data Shows"`.
- **Min 4 internal links** per article: `/blog` hub, 1-2 sibling stories, author page.
- **category field** for Texas investigations: `"News"` or `"World"` (no Texas-specific category in the valid list, use News).

---

## Publishing Checklist

Before every publish on a Texas article:

- [ ] First sentence is a direct factual answer, not a hook
- [ ] Every factual claim has a named source (document, agency, filing, official statement)
- [ ] `keyTakeaways` filled with 3-5 complete standalone sentences
- [ ] `faqItems` filled, first question is "What is X?" or "What happened at X?"
- [ ] Named author assigned (`jack-brennan` or `conan-boyle`)
- [ ] `breadcrumbs` includes `/blog` as second crumb
- [ ] Minimum 4 internal links present (hub + siblings + author page)
- [ ] All links: `className="text-blue-600 hover:text-blue-800 underline"`
- [ ] No em dashes (--) in title, headings, metadata, or body
- [ ] `metadata.title` max 60 chars, no brand suffix
- [ ] `metadata.description` 130-155 chars, primary keyword in first 60 chars
- [ ] `published_at` is ISO-8601 (e.g. `2026-06-01T00:00:00Z`)
- [ ] `revalidate = 86400` exported (or omit for fully static)
- [ ] Registry synced: `npx tsx scripts/sync-registry.ts --write`
