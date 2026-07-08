// Vita Nova — i18n + small interactive bits

// ---------- i18n dictionary ----------
const I18N = {
  en: {
    "brand": "Vita Nova",
    "nav.services": "Services",
    "nav.events": "Events",
    "nav.process": "Process",
    "nav.why": "Why us",
    "nav.story": "Story",
    "nav.faq": "FAQ",
    "nav.timeline": "Timeline",
    "nav.calc": "Estimate",
    "nav.quote": "Get a quote",
    "lang.label": "English",

    "hero.eyebrow": "UAE · Event Management for Schools",
    "hero.title1": "Events that make",
    "hero.title2": "school life unforgettable.",
    "hero.lede": "From the first syllabus night to the final graduation ceremony, Vita Nova plans and runs every detail so your team can focus on the students. Budgets, logistics, suppliers, design, run-of-show — we handle it end to end.",
    "hero.cta1": "Plan your event",
    "hero.cta2": "Explore services",
    "hero.trust1": "events delivered",
    "hero.trust2": "partner schools",
    "hero.trust3": "Emirates served",

    "stack.l1": "Annual Day",
    "stack.t1": '"Horizons of Tomorrow"',
    "stack.m1": "600 guests · 14 acts · Dubai",
    "stack.l2": "Sports Day",
    "stack.t2": "Inter-House Athletics",
	"trust.eyebrow": "Institutional Assurances",
    "trust.title": "Built for School Compliance, Safety & Trust",
    "trust.subtitle": "We understand the massive regulatory, operational, and financial pressures facing UAE school leaders. Our operations are engineered from the ground up to protect your campus, your brand, and your budget.",
    
    "trust.card1.badge": "KHDA / ADEK / SPEA Aligned",
    "trust.card1.title": "Campus Security & Child Safeguarding Compliance",
    "trust.card1.intro": "When external vendors enter a school campus during school hours, school compliance officers face massive regulatory pressure regarding child safety.",
    "trust.card1.point1.title": "Verified Personnel: ",
    "trust.card1.point1.text": "Every single technician, stagehand, and coordinator deployed on your campus carries an active corporate ID badge and holds a clear local police good-conduct/background clearance.",
    "trust.card1.point2.title": "Strict No-Contact Protocols: ",
    "trust.card1.point2.text": "Our crews operate under rigid \"no-contact\" guidelines regarding students, using separate designated facilities and working strictly under the supervision of a Vita Nova site supervisor.",
    "trust.card1.point3.title": "Off-Peak Logistics: ",
    "trust.card1.point3.text": "Heavy lifting, truss mounting, and major electrical cabling are strictly scheduled during night hours or weekends when students are completely off-campus.",
    
    "trust.card2.badge": "Multi-Agency Integration",
    "trust.card2.title": "Integrated Emergency & Risk Management",
    "trust.card2.intro": "For massive campus events—like winter bazaars, national day festivals, or inter-school sports tournaments exceeding 500+ attendees—having a first aid kit in a backpack isn't enough to pass a school risk assessment.",
    "trust.card2.point1.title": "Official Liaison: ",
    "trust.card2.point1.text": "We directly coordinate with the Dubai Corporation for Ambulance Services (DCAS) or local Civil Defence units to secure on-site emergency medical technicians (EMTs) or dedicated standby emergency vehicles for large crowds.",
    "trust.card2.point2.title": "Certified Safety Marshals: ",
    "trust.card2.point2.text": "Our core on-site coordinators hold certified training in Fire Safety and first-response First Aid, equipped with dedicated multi-channel radios to manage crowd control and rapid evacuation pathways seamlessly if required.",
    
    "trust.card3.title": "The Bespoke Creative IP Guarantee",
    "trust.card3.intro": "Schools take a massive amount of pride in their institutional identity and branding. A major worry for marketing directors is that an event management agency will simply recycle the exact same stage design, theme logos, and backdrops that they used for a rival neighboring school the weekend before.",
    "trust.card3.point1.title": "100% Original Structural Assets: ",
    "trust.card3.point1.text": "Every stage layout, custom-built photo booth, and digital graphic suite is designed from scratch natively for your specific campus architecture and school ethos.",
    "trust.card3.point2.title": "Exclusivity Window: ",
    "trust.card3.point2.text": "We guarantee that no major design concepts, custom themes, or specialized structural assets developed for your event will be pitched or repurposed for another school within the same academic year. Your flagship day stays uniquely yours.",
    
    "trust.card4.title": "The Vita Nova Fixed-Budget Guarantee",
    "trust.card4.intro": "A major pain point for school financial controllers is signing off on a proposal, only to receive a bill loaded with surprise \"on-site operational variations\" or \"extra labor fees\" after the event wraps.",
    "trust.card4.point1.title": "The \"No Hidden Variations\" Fixed-Price Promise: ",
    "trust.card4.point1.text": "Our formal statement guarantees that the final price on your signed proposal is the absolute final price on the invoice. If an extra run of cable or an additional stage hand is required at the last minute on event day, Vita Nova absorbs the cost. You only pay for what you approved, with zero surprise line items.",
    "stack.m2": "4 houses · 22 stations · Sharjah",
    "stack.l3": "Graduation",
    "stack.t3": "Class of 2026",
    "stack.m3": "320 graduates · Abu Dhabi",

    "services.eyebrow": "What we do",
    "services.title": "Full-service event management for schools",
    "services.lede": "One team, one timeline, one point of contact. Vita Nova runs the entire event so your staff don't have to.",

    "s1.t": "Academic guides & orientation",
    "s1.d": "Curriculum nights, new-student orientations, parent welcome evenings, and university-prep roadshows — informative, on-brand, and welcoming.",
    "s2.t": "Annual programs & functions",
    "s2.d": "Year-opening assemblies, founders' days, cultural weeks, appreciation evenings, and end-of-year celebrations.",
    "s3.t": "Annual days & graduations",
    "s3.d": "Stage shows, awards nights, and full graduation ceremonies with choreography, AV, and confetti — all choreographed to the minute.",
    "s4.t": "Sports days & tournaments",
    "s4.d": "Inter-house athletics, swimming galas, football tournaments, and inclusive games days — equipment, marshals, scoring, and medals.",
    "s5.t": "Creative & design",
    "s5.d": "Themes, stage sets, backdrops, branding, invitations, signage, photo zones, and on-site decor that tie the whole event together.",
    "s6.t": "Marketing & comms",
    "s6.d": "Event identity, social media campaigns, sponsor decks, ticket flows, parent apps, and post-event highlight reels.",
    "s7.t": "Budget & finance",
    "s7.d": "Transparent budgeting, multi-vendor quotations, payment scheduling, sponsor management, and final reconciliation with a line-by-line report.",
    "s8.t": "Logistics & suppliers",
    "s8.d": "Caterers, photographers, videographers, AV, transport, security, first aid, marquees, giveaways — vetted, contracted, and managed.",
    "s9.t": "Safety, permits & compliance",
    "s9.d": "UAE authority permits, risk assessments, child-safeguarding protocols, first aid, fire safety, and insurance coordination.",
    "s10.t": "Giveaways & merchandise",
    "s10.d": "Branded kits, trophies, medals, certificates, yearbooks, and custom merchandise — sourced, packed, and delivered to your campus.",
    "s11.t": "Workshops & trips",
    "s11.d": "Leadership camps, team-building days, educational excursions, and overnight retreats with full supervision plans.",
    "s12.t": "Year-round calendar planning",
    "s12.d": "We build the school's full event calendar at the start of the academic year so nothing clashes and every deadline is met.",

    "events.eyebrow": "Events we love to run",
    "events.title": "Made for the rhythm of a school year",

    "story.eyebrow": "Our story",
    "story.title": "We started Vita Nova after a thousand school runs went sideways.",
    "story.p1": "Between us, we've spent over fifteen years inside UAE schools — running events, coordinating calendars, chasing suppliers, and standing next to nervous principals at 6am on event day. We loved the work and hated the chaos. The same last-minute rushes, the same vendor phone calls, the same frantic WhatsApp threads the night before.",
    "story.p2": "So in 2024 we built the team we wished we'd had: one point of contact, transparent budgets, calm on the day, and a real plan B. Vita Nova is what event management looks like when it's run by people who've actually been on the other side of the clipboard.",
    "story.p3": "Today we work with schools across all seven Emirates — and we still get to every load-in at sunrise.",
    "story.caption": "Founded 2024, Dubai · A team built by people who've been on the other side of the clipboard",

    "faq.eyebrow": "Common questions",
    "faq.title": "Things schools ask before they book",
    "faq.q1.t": "How far in advance should we book?",
    "faq.q1.d": "<p>Ideally 6–8 weeks for most events, 12+ weeks for annual days and graduations. We've also pulled off miracles in two weeks when a school suddenly finds out the Minister is visiting — but more time always means a calmer day.</p>",
    "faq.q2.t": "Do you handle permits and approvals?",
    "faq.q2.d": "<p>Yes. We coordinate with the relevant UAE authorities for venue, fire, safety, and child-event permits, and we share a risk assessment with your leadership team before the day.</p>",
    "faq.q3.t": "Can you work with our budget?",
    "faq.q3.d": "<p>Always. We present a transparent budget with three tiers before you commit, and every dirham is tracked in a shared sheet so you always know where the money went.</p>",
    "faq.q4.t": "Do you provide the equipment and decor?",
    "faq.q4.d": "<p>Yes — sound, lighting, staging, decor, signage, photo walls, marquees, and anything else you need. Everything is rented or sourced, never permanent, and we leave your campus exactly as we found it.</p>",
    "faq.q5.t": "Are your staff child-safeguarding trained?",
    "faq.q5.d": "<p>Every Vita Nova team member is safeguarding-trained and background-checked. We follow your school's safeguarding policy on the day, and we never photograph or film students without explicit consent.</p>",
    "faq.q6.t": "Which Emirates do you cover?",
    "faq.q6.d": "<p>All seven. We have vetted suppliers in Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.</p>",
    "faq.q7.t": "What happens after the event?",
    "faq.q7.d": "<p>You receive a full debrief within a week: photos, video highlights, attendance and spend reports, plus a short debrief call so next year is even better.</p>",
    "faq.q8.t": "Can we see a sample timeline first?",
    "faq.q8.d": "<p>Of course. After our first call we'll send a sample run-of-show and budget for the kind of event you have in mind — no obligation, yours to keep.</p>",

    "timeline.eyebrow": "From kick-off to curtain up",
    "timeline.title": "What an event timeline actually looks like.",
    "timeline.lede": "A typical Vita Nova flagship event runs over twelve weeks. Here's exactly what we're doing at every stage so you're never wondering \"what's happening now?\".",
    "tl1.t": "12 weeks out — brief & budget",
    "tl1.d": "Discovery call, venue walk-through, theme brainstorm. You sign off on a transparent budget and the high-level creative direction.",
    "tl2.t": "8 weeks out — suppliers & contracts",
    "tl2.d": "Caterer, AV, photographer, marquee, transport, security — all contracted. Permits filed with the relevant UAE authorities.",
    "tl3.t": "4 weeks out — comms & RSVPs",
    "tl3.d": "Invitations go out, parent comms land in inboxes, ticketing opens, sponsors confirmed, run-of-show drafted.",
    "tl4.t": "1 week out — dress rehearsal",
    "tl4.d": "Full walk-through with the school team. Final headcount. Spare-plan briefed. Coffee for everyone.",
    "tl5.t": "Event day — showtime",
    "tl5.d": "Our team arrives at sunrise, runs the rehearsal, the show, and the wrap. You enjoy the day. We handle the rest.",

    "map.eyebrow": "Where we work",
    "map.title": "All seven Emirates. One trusted team.",
    "map.lede": "Vetted suppliers, in-region crews, and full permit handling — wherever your school is in the UAE.",

    "culture.eyebrow": "UAE calendar aware",
    "culture.title": "We plan around the moments that matter.",
    "culture.lede": "A school event that lands on Ramadan or clashes with Eid is a school event done wrong. Our calendars are tuned to the UAE rhythm — and we'll always flag a conflict before you commit.",
    "c1.t": "Ramadan-ready events",
    "c1.d": "Earlier start times, Iftar catering, modest staging, no music during prayer hours. We adjust run-of-show so the day still feels celebratory without disrupting the holy month.",
    "c2.t": "Eid timing",
    "c2.d": "We never schedule on the first day of either Eid. Around Eid we shift events to give families breathing room and lean into Eid-themed decor where appropriate.",
    "c3.t": "UAE National Day",
    "c3.d": "Flag ceremonies, heritage activities, and Emirati-themed annual days. Our National Day kits come with the right symbols done with respect — never as costume.",
    "c4.t": "Flag Day",
    "c4.d": "Quick morning assemblies and campus-wide flag moments. We handle the coordination so the tribute feels genuine, not performative.",
    "c5.t": "Hijri observances",
    "c5.d": "We adjust the school calendar so events don't compete with these reflective days. Optional school assemblies can be added if your leadership wants them.",
    "c6.t": "Commemoration Day",
    "c6.d": "A day of quiet respect across the UAE. We pause all event comms and shift any activities scheduled for that day to a more appropriate moment.",

    "res.eyebrow": "Free resources",
    "res.title": "Steal our templates.",
    "res.lede": "Three guides we give to every new school we work with. Free, no email gate.",
    "r1.t": "Parent Communication Templates",
    "r1.d": "Email and WhatsApp scripts for invitations, RSVPs, reminders, and post-event thank-yous. Bilingual EN/AR.",
    "r1.btn": "Download PDF",
    "r2.t": "Annual Day Theme Ideas",
    "r2.d": "40+ tested themes from UAE schools with stage-deck references, color palettes, and decoration guides.",
    "r2.btn": "Download PDF",
    "r3.t": "School Event Budget Worksheet",
    "r3.d": "A simple spreadsheet with line items most UAE schools forget — permits, safeguarding, contingency. Editable.",
    "r3.btn": "Download PDF",

    "calc.eyebrow": "Quick estimate",
    "calc.title": "What's an event likely to cost?",
    "calc.lede": "Drag the sliders. This is a rough guide, not a quote — every school is different. We'll give you a real number within a working day.",
    "calc.estimate": "Estimated range",
    "calc.note": "Indicative only. Subject to venue, permits, and final scope.",
    "calc.cta": "Get an exact quote",
    "calc.audience": "Audience size",
    "calc.duration": "Event duration",
    "calc.services": "Services needed",
    "calc.svcAv": "Sound, lighting & staging",
    "calc.svcCat": "Catering",
    "calc.svcPho": "Photography & video",
    "calc.svcDec": "Decor & theming",
    "calc.svcPerf": "Performers / entertainers",
    "calc.svcTrn": "Transport",
    "float.cta": "Plan your event",

    "mvv.eyebrow": "What we stand for",
    "mvv.title": "Mission, vision, and the values we won't compromise.",
    "mvv.m.t": "Mission",
    "mvv.m.d": "To make every school event in the UAE feel like the team had months to prepare — even when they had weeks.",
    "mvv.v.t": "Vision",
    "mvv.v.d": "A future where school events in the Emirates are benchmarks for the region — safe, sustainable, joyful, and unmistakably student-led.",
    "mvv.va.t": "Values",
    "mvv.va1.t": "Calm.",
    "mvv.va1.d": "We bring the spare plan, the spare patience, and the spare mic.",
    "mvv.va2.t": "Honesty.",
    "mvv.va2.d": "Budgets you can read. Schedules you can trust. Mistakes owned fast.",
    "mvv.va3.t": "Safety.",
    "mvv.va3.d": "Every child on campus is treated like our own. Every permit, signed.",
    "mvv.va4.t": "Craft.",
    "mvv.va4.d": "Good enough isn't. We sweat the details so the day feels effortless.",
    "mvv.va5.t": "Joy.",
    "mvv.va5.d": "If the kids aren't delighted, we haven't done our job.",

    "sus.eyebrow": "Sustainability",
    "sus.title": "Better events, lighter footprint.",
    "sus.p1": "UAE schools are leading the region on climate action, and events shouldn't be the exception. We design every Vita Nova event with the planet in mind — without ever cutting corners on the experience.",
    "sus.p2": "Our default is reusable. Our backup is recyclable. Single-use is the last resort, not the first.",
    "sus.c1.t": "Reusable over disposable",
    "sus.c1.d": "Backdrops, signage, props and stage sets designed to be stored and reused year after year.",
    "sus.c2.t": "Local suppliers first",
    "sus.c2.d": "Shorter trips, fresher food, smaller carbon bills — and better support for the UAE economy.",
    "sus.c3.t": "Plant-forward menus",
    "sus.c3.d": "At least one fully plant-based menu option at every event, no questions asked.",
    "sus.c4.t": "Zero printed waste",
    "sus.c4.d": "Digital tickets, QR check-ins, and shared event apps replace paper programs and flyers.",
    "sus.c5.t": "Honest reporting",
    "sus.c5.d": "Every event ships with a short sustainability report — what we reused, what we recycled, what we'll do better.",

    "e1.t": "Curriculum & academic guides",
    "e1.d": "Subject showcases, IGCSE/A-Level evenings, university fairs.",
    "e2.t": "Orientation & welcome days",
    "e2.d": "New-student intake, KG1 settling-in mornings, parent tours.",
    "e3.t": "Annual day & cultural festivals",
    "e3.d": "Flagship stage productions with themes, dances, and awards.",
    "e4.t": "Graduation ceremonies",
    "e4.d": "Processionals, gowns, speeches, photo walls, and after-parties.",
    "e5.t": "Sports days & inter-house events",
    "e5.d": "Athletics, swimming galas, football leagues, fun runs.",
    "e6.t": "National & heritage days",
    "e6.d": "UAE National Day, Flag Day, Islamic and cultural celebrations.",
    "e7.t": "Teacher appreciation & PTA events",
    "e7.d": "Staff awards, wellness retreats, parent–school evenings.",
    "e8.t": "Competitions & olympiads",
    "e8.d": "Spelling bees, science fairs, robotics, art exhibitions.",
    "e9.t": "Community & fundraising galas",
    "e9.d": "Charity dinners, auction nights, alumni reunions.",

    "process.eyebrow": "How we work",
    "process.title": "A clear, calm process from kick-off to cleanup",
    "p1.t": "Discover",
    "p1.d": "We meet with your leadership team to understand goals, audience, tone, and constraints. We visit the venue and review the calendar.",
    "p2.t": "Design",
    "p2.d": "A creative brief, theme, run-of-show, and budget — presented for sign-off in plain language, no jargon.",
    "p3.t": "Plan",
    "p3.d": "Suppliers, contracts, permits, risk assessments, comms, and a shared project timeline with weekly check-ins.",
    "p4.t": "Deliver",
    "p4.d": "On-site team from load-in to load-out. We run the rehearsal, the show, and the wrap — leaving the school spotless.",
    "p5.t": "Review",
    "p5.d": "Photos, video, attendance and spend reports, plus a debrief so next year is even better.",

    "why.eyebrow": "Why schools choose Vita Nova",
    "why.title": "Calm, capable, and built for schools.",
    "why.lede": "We speak the language of safeguarding, timetables, and parents. We're vendor-agnostic, budget-disciplined, and we treat every student like a guest of honor.",
    "w1.t": "One point of contact",
    "w1.d": "A dedicated event lead from the first call to the final report.",
    "w2.t": "Transparent budgets",
    "w2.d": "Every dirham tracked, every quote in a shared sheet.",
    "w3.t": "UAE-wide network",
    "w3.d": "Vetted suppliers across all seven Emirates.",
    "w4.t": "Child-safe by design",
    "w4.d": "Safeguarding-trained crew, DBS-checked staff, and clear protocols.",
    "w5.t": "Calm on the day",
    "w5.d": "We bring the spare plan, the spare mic, and the spare patience.",

    "contact.eyebrow": "Let's plan your next event",
    "contact.title": "Tell us what you're imagining.",
    "contact.lede": "Share a few details and we'll come back within one working day with a free, no-obligation proposal.",
    "form.school": "School name",
    "form.name": "Your name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.type": "Event type",
    "form.notes": "Tell us a bit more",
    "form.notesPh": "Date, audience size, theme, anything important...",
    "form.submit": "Send enquiry",
    "form.t1": "Annual day / cultural festival",
    "form.t2": "Graduation ceremony",
    "form.t3": "Sports day / tournament",
    "form.t4": "Academic guide / orientation",
    "form.t5": "Teacher / PTA event",
    "form.t6": "Other",
    "form.success": "Thanks {name} — we've received your enquiry for {school} and will reply within one working day.",
    "form.error": "Please fill in your school name, your name, and email.",
    "form.emailError": "Please enter a valid email address (e.g. you@school.ae).",
    "form.sending": "Sending…",
    "form.fail": "Sorry — something went wrong. Please email us directly at hello@vitanova.ae.",

    "footer.tag": "Event management for schools across the United Arab Emirates.",
    "footer.visit": "Visit",
    "footer.address": "Vita Nova Events L.L.C.<br />Dubai, United Arab Emirates",
    "footer.llc": "Vita Nova Events L.L.C. — Dubai, UAE",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.whatsapp": "WhatsApp Chat",
    "footer.rights": "All rights reserved.",
    "footer.designed": "Designed in the UAE.",

    "wa.title": "Chat with Vita Nova",
    "wa.sub": "We typically reply within minutes",
    "wa.bubble": "👋 Hi there! Have a question about an event? Send us a WhatsApp message and we'll get back fast.",
    "wa.cta": "Open WhatsApp",
    "wa.open": "Open WhatsApp chat",
    "wa.close": "Close chat",
  },

  ar: {
    "brand": "فيتا نوفا",
    "nav.services": "خدماتنا",
    "nav.events": "الفعاليات",
    "nav.process": "منهجيتنا",
    "nav.why": "لماذا نحن",
    "nav.story": "قصتنا",
    "nav.faq": "الأسئلة",
    "nav.timeline": "الجدول",
    "nav.calc": "تقدير",
    "nav.quote": "اطلب عرض سعر",
    "lang.label": "English",

    "hero.eyebrow": "الإمارات · إدارة فعاليات للمدارس",
    "hero.title1": "فعاليات تصنع",
    "hero.title2": "ذكريات لا تُنسى في حياة المدرسة.",
    "hero.lede": "من أول أمسية تعريفية بالمنهج إلى حفل التخرّج الأخير، تتولّى فيتا نوفا تخطيط وتنفيذ كل التفاصيل ليتفرّغ فريقكم للطلاب. الميزانية، واللوجستيات، والمورّدون، والتصميم، وبرنامج الحفل — نتكفّل بكل شيء من البداية حتى النهاية.",
    "hero.cta1": "خطّط لفعاليتك",
    "hero.cta2": "استكشف خدماتنا",
    "hero.trust1": "فعالية منجزة",
    "hero.trust2": "مدرسة شريكة",
    "hero.trust3": "إمارات نخدمها",

    "stack.l1": "اليوم السنوي",
    "stack.t1": "«آفاق الغد»",
    "stack.m1": "600 مدعو · 14 فقرة · دبي",
    "stack.l2": "اليوم الرياضي",
    "stack.t2": "ألعاب بيوت المدرسة",
    "stack.m2": "4 بيوت · 22 محطة · الشارقة",
    "stack.l3": "التخرّج",
    "stack.t3": "دفعة 2026",
    "stack.m3": "320 خريجًا · أبوظبي",

    "services.eyebrow": "ماذا نقدّم",
    "services.title": "إدارة فعاليات متكاملة للمدارس",
    "services.lede": "فريق واحد، وخط زمني واحد، وجهة اتصال واحدة. تتولّى فيتا نوفا إدارة كامل الفعالية حتى لا ينشغل طاقمكم.",

    "s1.t": "أدلة أكاديمية واستقبال الطلاب",
    "s1.d": "أمسيات تعريفية بالمنهج، واستقبال الطلاب الجدد، وأمسيات ترحيب بأولياء الأمور، ومعارض جامعية — واضحة ومنسجمة مع هوية المدرسة.",
    "s2.t": "برامج ومناسبات سنوية",
    "s2.d": "طوابير افتتاح العام، وأيام المؤسسين، والأسابيع الثقافية، وأمسيات التقدير، واحتفالات نهاية العام.",
    "s3.t": "الأيام السنوية وحفلات التخرّج",
    "s3.d": "عروض مسرحية، وأمسيات جوائز، وحفلات تخرّج كاملة بإخراج فني وصوت وإضاءة وحفل ختامي مثير.",
    "s4.t": "الأيام الرياضية والبطولات",
    "s4.d": "ألعاب بيوت، ومهرجانات سباحة، وبطولات كرة قدم، وأيام ألعاب شاملة — تجهيزات وحكام وتسجيل وميداليات.",
    "s5.t": "الإبداع والتصميم",
    "s5.d": "ثيمات وخلفيات مسرحية وهوية بصرية ودعوات ولوحات إرشادية وأركان تصوير وديكور داخلي يوحّد الفعالية.",
    "s6.t": "التسويق والتواصل",
    "s6.d": "هوية الفعالية، وحملات التواصل الاجتماعي، وعروض الرعاة، وأنظمة التذاكر، وتطبيقات لأولياء الأمور، وفيديوهات ختامية.",
    "s7.t": "الميزانية والمالية",
    "s7.d": "ميزانية شفافة، وعروض أسعار متعددة، وجدول دفعات، وإدارة الرعاة، وتسوية نهائية بتقرير مفصّل.",
    "s8.t": "اللوجستيات والمورّدون",
    "s8.d": "مطاعم، ومصورون، وفيديوغرافيون، وصوت وإضاءة، ونقل، وأمن، وإسعافات أولية، وخيام، وهدايا — مختارون ومتعاقد معهم.",
    "s9.t": "السلامة والتصاريح والامتثال",
    "s9.d": "تصاريح السلطات الإماراتية، وتقييمات المخاطر، وبروتوكولات حماية الطفل، والإسعافات الأولية، والسلامة من الحرائق، والتنسيق التأميني.",
    "s10.t": "الهدايا والمنتجات",
    "s10.d": "حقائب تحمل هوية المدرسة، وكؤوس، وميداليات، وشهادات، وكتب تذكارية، ومنتجات مخصّصة — تجهيز وتوصيل إلى حرمكم.",
    "s11.t": "ورش عمل ورحلات",
    "s11.d": "معسكرات قيادية، وأيام لبناء الفريق، ورحلات تعليمية، ومعسكرات ليلية بخطط إشراف كاملة.",
    "s12.t": "تخطيط تقويم العام الدراسي",
    "s12.d": "نبني تقويم الفعاليات الكامل لبداية العام الدراسي حتى لا تتضارب المناسبات وتُحترم كل المواعيد.",

    "events.eyebrow": "فعاليات نحب أن ننفّذها",
    "events.title": "مصمَّمة على إيقاع العام الدراسي",

    "story.eyebrow": "قصتنا",
    "story.title": "بدأنا فيتا نوفا بعد ألف مهمة مدرسية خرجت عن السيطرة.",
    "story.p1": "بيننا نحن الفريق، أمضينا أكثر من خمس عشرة سنة داخل مدارس الإمارات — نُدير فعاليات، وننسّق جداول، ونتابع مورّدين، ونقف بجانب مديرين قلقين عند السادسة صباحًا في يوم الحدث. أحببنا العمل وكَرِهنا الفوضى. نفس التسرّع في اللحظة الأخيرة، ونفس اتصالات المورّدين، ونفس خيوط واتساب المحمومة في الليلة السابقة.",
    "story.p2": "فقررنا في 2024 أن نُكوِّن الفريق الذي كنّا نتمنّى وجوده معنا: جهة اتصال واحدة، وميزانيات شفافة، وهدوء في يوم الحدث، وخطة بديلة حقيقية. فيتا نوفا هي إدارة الفعاليات حين يتولاها أشخاص كانوا فعلًا على الجانب الآخر من قائمة المهام.",
    "story.p3": "اليوم نعمل مع مدارس في الإمارات السبع — ولا نزال نصل إلى موقع التحميل عند شروق الشمس.",
    "story.caption": "تأسست في 2024، دبي · فريق بناه أشخاص كانوا على الجانب الآخر من قائمة المهام",

    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة تطرحها المدارس قبل الحجز",
    "faq.q1.t": "كم يجب أن نحجز مُسبقًا؟",
    "faq.q1.d": "<p>مثاليًا قبل 6 إلى 8 أسابيع لمعظم الفعاليات، و12 أسبوعًا أو أكثر لليوم السنوي وحفلات التخرّج. تمكّنا أيضًا من تنفيذ «معجزات» في أسبوعين حين تكتشف المدرسة فجأة زيارة وزير — لكن المزيد من الوقت يعني دائمًا يومًا أكثر هدوءًا.</p>",
    "faq.q2.t": "هل تتولّون التصاريح والموافقات؟",
    "faq.q2.d": "<p>نعم. ننسّق مع الجهات الإماراتية المعنية لتصاريح المكان والسلامة من الحرائق وفعاليات الأطفال، ونشارك فريق قيادتكم تقييم المخاطر قبل اليوم.</p>",
    "faq.q3.t": "هل يمكنكم العمل بميزانيتنا؟",
    "faq.q3.d": "<p>دائمًا. نعرض ميزانية شفافة بثلاثة مستويات قبل أن تلتزموا، وكل درهم موثّق في جدول مشترك لتعرفوا أين ذهب المال.</p>",
    "faq.q4.t": "هل تؤمّنون المعدات والديكور؟",
    "faq.q4.d": "<p>نعم — الصوت والإضاءة والمسرح والديكور واللوحات وجدران التصوير والخيام وكل ما تحتاجونه. كل شيء مُستأجر أو مُورَّد، لا شيء دائم، ونترك حرمكم كما وجدناه تمامًا.</p>",
    "faq.q5.t": "هل طاقمكم مدرَّب على حماية الطفل؟",
    "faq.q5.d": "<p>كل عضو في فريق فيتا نوفا مدرَّب على حماية الطفل ومُختبَر خلفيًا. نلتزم بسياسة حماية الطفل في مدرستكم في يوم الحدث، ولا نلتقط صورًا أو مقاطع فيديو للطلاب دون موافقة صريحة.</p>",
    "faq.q6.t": "أي الإمارات تغطّون؟",
    "faq.q6.d": "<p>الإمارات السبع كلها. لدينا مورّدون معتمدون في أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة.</p>",
    "faq.q7.t": "ماذا يحدث بعد الفعالية؟",
    "faq.q7.d": "<p>تتسلّمون تقريرًا كاملًا خلال أسبوع: صور وفيديو وأعداد الحضور وتقارير الإنفاق، إضافة إلى جلسة تقييم قصيرة لجعل العام القادم أفضل.</p>",
    "faq.q8.t": "هل يمكنكم إرسال جدول زمني نموذجي أولًا؟",
    "faq.q8.d": "<p>بالطبع. بعد لقائنا الأول نُرسل لكم نموذجًا لجدول الحفل وميزانية بحسب نوع الفعالية التي تتخيلونها — بلا التزام، وتبقى لكم.</p>",

    "timeline.eyebrow": "من الانطلاقة إلى رفع الستار",
    "timeline.title": "كيف يبدو الجدول الزمني للفعالية فعلًا.",
    "timeline.lede": "تستغرق الفعالية الرئيسية النموذجية لدى فيتا نوفا أكثر من اثني عشر أسبوعًا. إليك بالضبط ما نفعله في كل مرحلة حتى لا تتساءلوا: «ماذا يحدث الآن؟».",
    "tl1.t": "قبل 12 أسبوعًا — الملخص والميزانية",
    "tl1.d": "لقاء استكشافي، زيارة للموقع، عصف ذهني للثيم. توقّعون على ميزانية شفافة واتجاه إبداعي عام.",
    "tl2.t": "قبل 8 أسابيع — المورّدون والعقود",
    "tl2.d": "مطعم، صوت وإضاءة، مصور، خيمة، نقل، أمن — جميعها متعاقد معها. تُقدَّم التصاريح للجهات الإماراتية المعنية.",
    "tl3.t": "قبل 4 أسابيع — التواصل والتأكيدات",
    "tl3.d": "تصدر الدعوات، وتصل رسائل لأولياء الأمور، وتُفتح التذاكر، ويتأكد الرعاة، ويُسوَّد برنامج الحفل.",
    "tl4.t": "قبل أسبوع — البروفة الكاملة",
    "tl4.d": "تجربة كاملة مع فريق المدرسة. العدد النهائي. الخطة البديلة مُوزَّعة. قهوة للجميع.",
    "tl5.t": "يوم الحدث — عرض",
    "tl5.d": "يصل فريقنا عند شروق الشمس، ويُدير البروفة والحفل والتنظيف. تستمتعون بيومكم. ونتولّى نحن الباقي.",

    "map.eyebrow": "أين نعمل",
    "map.title": "الإمارات السبع كلها. فريق واحد موثوق.",
    "map.lede": "مورّدون معتمدون، وأطقم داخل المنطقة، ومعالجة كاملة للتصاريح — أينما كانت مدرستكم في الإمارات.",

    "culture.eyebrow": "واعون للتقويم الإماراتي",
    "culture.title": "نخطّط حول اللحظات المهمة.",
    "culture.lede": "فعالية مدرسية تصادف رمضان أو تتضارب مع العيد هي فعالية مدرسية خاطئة. تقاويمنا مضبوطة على الإيقاع الإماراتي — وسنُنبّهكم بأي تعارض قبل أن تلتزموا.",
    "c1.t": "فعاليات ملائمة لرمضان",
    "c1.d": "أوقات بدء أبكر، وخدمة إفطار، ومسرح محتشم، ولا موسيقى في ساعات الصلاة. نعدّل برنامج الحفل ليظل اليوم احتفاليًا دون الإخلال بقدسية الشهر.",
    "c2.t": "توقيت العيد",
    "c2.d": "لا نُجدوِل أي فعالية في أول أيام العيدين. حول العيد نؤخّر الفعاليات لتُعطى الأسر متنفسًا ونُكثّف ديكور العيد حيث يكون مناسبًا.",
    "c3.t": "اليوم الوطني الإماراتي",
    "c3.d": "احتفالات العلم، وأنشطة تراثية، وأيام سنوية بطابع إماراتي. تأتي أطقم اليوم الوطني لدينا بالرموز الصحيحة المُقدَّمة باحترام — لا كزيّ تنكّري.",
    "c4.t": "يوم العلم",
    "c4.d": "طوابير صباحية سريعة ولحظة علم على مستوى الحرم. ننسّق بحيث تبدو التحية صادقة، لا استعراضية.",
    "c5.t": "مناسبات هجرية",
    "c5.d": "نعدّل تقويم المدرسة كي لا تتنافس الفعاليات مع هذه الأيام التأملية. يمكن إضافة طوابير اختيارية إن أرادت القيادة المدرسية ذلك.",
    "c6.t": "يوم الشهيد",
    "c6.d": "يوم من الاحترام الهادئ في الإمارات. نوقف جميع رسائل الفعاليات ونؤجّل أي نشاط في ذلك اليوم إلى وقت أكثر ملاءمة.",

    "res.eyebrow": "موارد مجانية",
    "res.title": "استخدموا قوالبنا.",
    "res.lede": "ثلاثة أدلة نمنحها لكل مدرسة نعمل معها. مجانية، بلا بوابة بريد.",
    "r1.t": "قوالب التواصل مع أولياء الأمور",
    "r1.d": "نصوص بريد وواتساب للدعوات والتأكيدات والتذكيرات والشكر بعد الفعالية. ثنائية اللغة.",
    "r1.btn": "تحميل PDF",
    "r2.t": "أفكار ثيم اليوم السنوي",
    "r2.d": "أكثر من 40 ثيمًا مُجرَّبًا من مدارس إماراتية مع مراجع لخشبة المسرح ولوحات ألوان وأدلة ديكور.",
    "r2.btn": "تحميل PDF",
    "r3.t": "ورقة ميزانية الفعاليات المدرسية",
    "r3.d": "جدول بسيط يحتوي بنودًا تنساها كثير من المدارس الإماراتية — تصاريح، حماية طفل، طوارئ. قابل للتعديل.",
    "r3.btn": "تحميل PDF",

    "calc.eyebrow": "تقدير سريع",
    "calc.title": "كم قد تكلّف الفعالية؟",
    "calc.lede": "حرّكوا المؤشرات. هذا دليل تقريبي لا عرض سعر — كل مدرسة مختلفة. سنمنحكم رقمًا حقيقيًا خلال يوم عمل.",
    "calc.estimate": "النطاق المُقدَّر",
    "calc.note": "استرشادي فقط. يخضع للموقع والتصاريح والنطاق النهائي.",
    "calc.cta": "احصل على عرض دقيق",
    "calc.audience": "حجم الجمهور",
    "calc.duration": "مدة الفعالية",
    "calc.services": "الخدمات المطلوبة",
    "calc.svcAv": "الصوت والإضاءة والمسرح",
    "calc.svcCat": "التموين",
    "calc.svcPho": "التصوير والفيديو",
    "calc.svcDec": "الديكور والثيم",
    "calc.svcPerf": "فنانون ومسلّون",
    "calc.svcTrn": "النقل",
    "float.cta": "خطّط لفعاليتك",

    "mvv.eyebrow": "ما نؤمن به",
    "mvv.title": "الرسالة والرؤية والقيم التي لا نتهاون فيها.",
    "mvv.m.t": "الرسالة",
    "mvv.m.d": "أن نشعر في كل فعالية مدرسية في الإمارات وكأن الفريق أعدّ لشهور — حتى لو أُعطي أسابيع.",
    "mvv.v.t": "الرؤية",
    "mvv.v.d": "مستقبل تُعدّ فيه فعاليات المدارس في الإمارات معيارًا للمنطقة — آمنة ومستدامة ومُفرحة ويقودها الطلاب بوضوح.",
    "mvv.va.t": "القيم",
    "mvv.va1.t": "الهدوء.",
    "mvv.va1.d": "نحضر الخطة البديلة والصبر الاحتياطي ومايكروفونًا احتياطيًا.",
    "mvv.va2.t": "الصدق.",
    "mvv.va2.d": "ميزانيات يمكن قراءتها. جداول يمكن الوثوق بها. الأخطاء تُعترَف بها سريعًا.",
    "mvv.va3.t": "السلامة.",
    "mvv.va3.d": "كل طفل في الحرم يُعامَل كأنه طفلنا. كل تصريح، موقَّع.",
    "mvv.va4.t": "الإتقان.",
    "mvv.va4.d": "«يكفي» ليس كافيًا. نهتمّ بالتفاصيل حتى يبدو اليوم بلا جهد.",
    "mvv.va5.t": "البهجة.",
    "mvv.va5.d": "إن لم يفرح الأطفال، لم ننجز مهمّتنا.",

    "sus.eyebrow": "الاستدامة",
    "sus.title": "فعاليات أفضل، أثر بيئي أخفّ.",
    "sus.p1": "تتقدم مدارس الإمارات في المنطقة بالعمل المناخي، ولا يجب أن تكون الفعاليات استثناءً. نصمّم كل فعالية من فعاليات فيتا نوفا مع مراعاة الكوكب — دون أي تنازل عن جودة التجربة.",
    "sus.p2": "خيارنا الأول هو القابل لإعادة الاستخدام. والاحتياطي هو القابل لإعادة التدوير. أما الاستخدام مرة واحدة فهو الملاذ الأخير، لا الخيار الأول.",
    "sus.c1.t": "قابل لإعادة الاستخدام لا للاستهلاك",
    "sus.c1.d": "خلفيات ولوحات ودعائم ومسرح مصمَّمة للتخزين وإعادة الاستخدام عامًا بعد عام.",
    "sus.c2.t": "المورّدون المحليون أولًا",
    "sus.c2.d": "رحلات أقصر، وطعام أطزج، وفواتير كربون أقل — ودعم أفضل لاقتصاد الإمارات.",
    "sus.c3.t": "قوائم نباتية أوّلًا",
    "sus.c3.d": "على الأقل قائمة نباتية كاملة في كل فعالية، دون أسئلة.",
    "sus.c4.t": "بدون هدر مطبوعات",
    "sus.c4.d": "تذاكر رقمية ودخول بالرمز السري وتطبيقات مشتركة للفعاليات بدلاً من البرامج والمنشورات الورقية.",
    "sus.c5.t": "تقارير صادقة",
    "sus.c5.d": "كل فعالية تأتي مع تقرير استدامة موجز — ما أعدنا استخدامه، وما أعدنا تدويره، وما سنفعله أفضل.",

    "e1.t": "أدلة أكاديمية ومناهج",
    "e1.d": "معارض المواد، وأمسيات IGCSE/A-Level، ومعارض جامعية.",
    "e2.t": "أيام استقبال وترحيب",
    "e2.d": "استقبال الطلاب الجدد، وصباحيات تأقلم الروضة، وجولات لأولياء الأمور.",
    "e3.t": "اليوم السنوي والمهرجانات الثقافية",
    "e3.d": "إنتاجات مسرحية رائدة بثيمات ورقصات وجوائز.",
    "e4.t": "حفلات التخرّج",
    "e4.d": "مواكب، وأردية، وخطابات، وجدران تصوير، وحفلات بعد التخرّج.",
    "e5.t": "أيام رياضية وفعاليات بيوت",
    "e5.d": "ألعاب قوى، ومهرجانات سباحة، ودوريات كرة قدم، وسباقات ممتعة.",
    "e6.t": "الأيام الوطنية والتراثية",
    "e6.d": "اليوم الوطني الإماراتي، ويوم العلم، واحتفالات إسلامية وثقافية.",
    "e7.t": "تقدير المعلمين وفعاليات أولياء الأمور",
    "e7.d": "جوائز الموظفين، ومعسكرات رفاهية، وأمسيات أسرية.",
    "e8.t": "مسابقات وأولمبيادات",
    "e8.d": "مسابقات إملاء، ومعارض علوم، وروبوتات، ومعارض فنون.",
    "e9.t": "حفلات مجتمعية وجمع تبرعات",
    "e9.d": "عشاءات خيرية، وأمسيات مزادات، ولقاءات خريجين.",

    "process.eyebrow": "كيف نعمل",
    "process.title": "عملية واضحة وهادئة من الانطلاقة حتى الانتهاء",
    "p1.t": "الاكتشاف",
    "p1.d": "نلتقي بفريق قيادتكم لفهم الأهداف والجمهور والأسلوب والقيود. نزور المكان ونراجع التقويم.",
    "p2.t": "التصميم",
    "p2.d": "ملف إبداعي، وثيم، وبرنامج حفل، وميزانية — تُعرض للموافقة بلغة واضحة بلا مصطلحات.",
    "p3.t": "التخطيط",
    "p3.d": "مورّدون، وعقود، وتصاريح، وتقييمات مخاطر، وتواصل، وخط زمني مشترك بمراجعات أسبوعية.",
    "p4.t": "التنفيذ",
    "p4.d": "فريق في الموقع من التحميل حتى الانتهاء. ندير البروفة والحفل والتنظيف — ونترك المدرسة نظيفة.",
    "p5.t": "المراجعة",
    "p5.d": "صور وفيديو وتقارير حضور وإنفاق، إضافة إلى جلسة تقييم لجعل العام القادم أفضل.",

    "why.eyebrow": "لماذا تختار المدارس فيتا نوفا",
    "why.title": "هدوء وكفاءة وصُنع للمدارس.",
    "why.lede": "نتحدث لغة الحماية والجداول الدراسية وأولياء الأمور. لا نرتبط بمورّد بعينه، ونلتزم بالميزانية، ونعامل كل طالب كضيف شرف.",
    "w1.t": "جهة اتصال واحدة",
    "w1.d": "مدير فعالية مخصّص من أول مكالمة حتى التقرير الأخير.",
    "w2.t": "ميزانيات شفافة",
    "w2.d": "كل درهم موثّق، وكل عرض سعر في جدول مشترك.",
    "w3.t": "شبكة في كل الإمارات",
    "w3.d": "مورّدون معتمدون في الإمارات السبع.",
    "w4.t": "أمان الطفل أساس التصميم",
    "w4.d": "طاقم مدرَّب على حماية الطفل، وموظفون حاصلون على فحص DBS، وبروتوكولات واضحة.",
    "w5.t": "هدوء في يوم الحدث",
    "w5.d": "نحضر الخطة البديلة، والمايكروفون الاحتياطي، والصبر الاحتياطي.",

    "contact.eyebrow": "لنخطّط لفعاليتك القادمة",
    "contact.title": "أخبرنا بما تتخيّله.",
    "contact.lede": "شارِكنا بعض التفاصيل وسنعود إليك خلال يوم عمل بعرض مجاني بلا التزامات.",
    "form.school": "اسم المدرسة",
    "form.name": "اسمك",
    "form.email": "البريد الإلكتروني",
    "form.phone": "الهاتف",
    "form.type": "نوع الفعالية",
    "form.notes": "أخبرنا بالمزيد",
    "form.notesPh": "التاريخ، حجم الجمهور، الثيم، أي تفاصيل مهمة...",
    "form.submit": "إرسال الطلب",
    "form.t1": "اليوم السنوي / مهرجان ثقافي",
    "form.t2": "حفل تخرّج",
    "form.t3": "يوم رياضي / بطولة",
    "form.t4": "دليل أكاديمي / استقبال",
    "form.t5": "فعالية للمعلمين / أولياء الأمور",
    "form.t6": "أخرى",
    "form.success": "شكرًا {name} — استلمنا طلبك لـ {school} وسنردّ خلال يوم عمل.",
    "form.error": "يرجى إدخال اسم المدرسة واسمك والبريد الإلكتروني.",
    "form.sending": "جارٍ الإرسال…",
    "form.fail": "عذرًا — حدث خطأ ما. يرجى مراسلتنا مباشرة على hello@vitanova.ae.",

    "footer.tag": "إدارة فعاليات للمدارس في جميع أنحاء الإمارات العربية المتحدة.",
    "footer.visit": "زورونا",
    "footer.address": "فيتا نوفا للفعاليات ش.ذ.م.م<br />دبي، الإمارات العربية المتحدة",
    "footer.llc": "فيتا نوفا للفعاليات ش.ذ.م.م — دبي، الإمارات",
    "footer.contact": "تواصل",
    "footer.follow": "تابعنا",
    "footer.whatsapp": "دردشة واتساب",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.designed": "صُمِّم في الإمارات.",

    "wa.title": "تواصل عبر واتساب",
    "wa.sub": "نرد عادةً خلال دقائق",
    "wa.bubble": "👋 مرحبًا! هل لديك سؤال عن فعالية؟ أرسل لنا رسالة على واتساب وسنرد عليك بسرعة.",
    "wa.cta": "افتح واتساب",
    "wa.open": "فتح محادثة واتساب",
    "wa.close": "إغلاق المحادثة",
  },

  hi: {
    "brand": "वीटा नोवा",
    "nav.services": "सेवाएँ",
    "nav.events": "इवेंट्स",
    "nav.process": "हमारी प्रक्रिया",
    "nav.why": "हम क्यों",
    "nav.story": "हमारी कहानी",
    "nav.faq": "सामान्य प्रश्न",
    "nav.timeline": "समय-सीमा",
    "nav.calc": "अनुमान",
    "nav.quote": "कोटेशन पाएँ",
    "lang.label": "English",

    "hero.eyebrow": "यूएई · स्कूलों के लिए इवेंट मैनेजमेंट",
    "hero.title1": "इवेंट्स जो बनाते हैं",
    "hero.title2": "स्कूल जीवन को अविस्मरणीय।",
    "hero.lede": "पहली सिलेबस रात से लेकर अंतिम दीक्षांत समारोह तक, वीटा नोवा हर विवरण की योजना बनाता है और उसे चलाता है ताकि आपकी टीम छात्रों पर ध्यान दे सके। बजट, लॉजिस्टिक्स, सप्लायर, डिज़ाइन, रन-ऑफ-शो — हम शुरू से अंत तक संभालते हैं।",
    "hero.cta1": "अपना इवेंट प्लान करें",
    "hero.cta2": "सेवाएँ देखें",
    "hero.trust1": "इवेंट्स पूरे किए",
    "hero.trust2": "पार्टनर स्कूल",
    "hero.trust3": "अमीरात सेवित",

    "stack.l1": "वार्षिक दिवस",
    "stack.t1": "«कल के क्षितिज»",
    "stack.m1": "600 मेहमान · 14 अधिनियम · दुबई",
    "stack.l2": "खेल दिवस",
    "stack.t2": "अंतर-हाउस एथलेटिक्स",
    "stack.m2": "4 हाउस · 22 स्टेशन · शारजाह",
    "stack.l3": "दीक्षांत",
    "stack.t3": "कक्षा 2026",
    "stack.m3": "320 स्नातक · अबू धाबी",

    "services.eyebrow": "हम क्या करते हैं",
    "services.title": "स्कूलों के लिए पूर्ण-सेवा इवेंट मैनेजमेंट",
    "services.lede": "एक टीम, एक समय-सीमा, एक संपर्क बिंदु। वीटा नोवा पूरा इवेंट चलाता है ताकि आपके स्टाफ को परेशान न होना पड़े।",

    "s1.t": "शैक्षिक मार्गदर्शिकाएँ और ओरिएंटेशन",
    "s1.d": "पाठ्यक्रम रातें, नए छात्र ओरिएंटेशन, अभिभावक स्वागत संध्याएँ और विश्वविद्यालय-तैयारी रोडशो — जानकारीपूर्ण, ब्रांड-अनुरूप और स्वागतयोग्य।",
    "s2.t": "वार्षिक कार्यक्रम और समारोह",
    "s2.d": "वर्ष-उद्घाटन सभाएँ, संस्थापक दिवस, सांस्कृतिक सप्ताह, प्रशंसा संध्याएँ और सत्र के अंत के उत्सव।",
    "s3.t": "वार्षिक दिवस और दीक्षांत समारोह",
    "s3.d": "मंच प्रस्तुतियाँ, पुरस्कार रातें और पूर्ण दीक्षांत समारोह — कोरियोग्राफी, ऑडियो-विज़ुअल और कॉन्फेटी के साथ, सब कुछ मिनट-दर-मिनट तैयार।",
    "s4.t": "खेल दिवस और टूर्नामेंट",
    "s4.d": "अंतर-हाउस एथलेटिक्स, तैराकी गाला, फुटबॉल टूर्नामेंट और समावेशी खेल दिवस — उपकरण, मार्शल, स्कोरिंग और पदक।",
    "s5.t": "रचनात्मक और डिज़ाइन",
    "s5.d": "थीम, मंच सेट, बैकड्रॉप, ब्रांडिंग, निमंत्रण, साइनेज, फोटो ज़ोन और ऑन-साइट सजावट जो पूरे इवेंट को जोड़ती है।",
    "s6.t": "मार्केटिंग और संचार",
    "s6.d": "इवेंट पहचान, सोशल मीडिया अभियान, प्रायोजक डेक, टिकट फ्लो, अभिभावक ऐप और इवेंट के बाद की हाइलाइट रील।",
    "s7.t": "बजट और वित्त",
    "s7.d": "पारदर्शी बजट, बहु-विक्रेता कोटेशन, भुगतान अनुसूची, प्रायोजक प्रबंधन और लाइन-दर-लाइन रिपोर्ट के साथ अंतिम समाधान।",
    "s8.t": "लॉजिस्टिक्स और सप्लायर",
    "s8.d": "कैटरर्स, फ़ोटोग्राफ़र, वीडियोग्राफ़र, ऑडियो-विज़ुअल, परिवहन, सुरक्षा, प्राथमिक चिकित्सा, मार्की, उपहार — सब सत्यापित, अनुबंधित और प्रबंधित।",
    "s9.t": "सुरक्षा, अनुमति और अनुपालन",
    "s9.d": "यूएई प्राधिकरण अनुमतियाँ, जोखिम मूल्यांकन, बाल-संरक्षण प्रोटोकॉल, प्राथमिक चिकित्सा, अग्नि सुरक्षा और बीमा समन्वय।",
    "s10.t": "उपहार और मर्चेंडाइज़",
    "s10.d": "ब्रांडेड किट, ट्रॉफी, पदक, प्रमाणपत्र, वर्षगाँठ पुस्तकें और कस्टम मर्चेंडाइज़ — आपके कैंपस तक सोर्स, पैक और डिलीवर।",
    "s11.t": "कार्यशालाएँ और यात्राएँ",
    "s11.d": "नेतृत्व शिविर, टीम-बिल्डिंग दिवस, शैक्षिक भ्रमण और पूर्ण पर्यवेक्षण योजनाओं के साथ रात्रि रिट्रीट।",
    "s12.t": "पूरे वर्ष कैलेंडर योजना",
    "s12.d": "हम शैक्षणिक वर्ष की शुरुआत में स्कूल का पूरा इवेंट कैलेंडर बनाते हैं ताकि कुछ भी टकराए नहीं और हर समय-सीमा पूरी हो।",

    "events.eyebrow": "जो इवेंट हमें चलाना पसंद है",
    "events.title": "स्कूल वर्ष की लय के लिए बनाया गया",

    "story.eyebrow": "हमारी कहानी",
    "story.title": "हमने वीटा नोवा तब शुरू किया जब हज़ारों स्कूल रन गलत हो चुके थे।",
    "story.p1": "हम सबने मिलकर यूएई स्कूलों के अंदर पंद्रह से अधिक वर्ष बिताए हैं — इवेंट्स चलाए हैं, कैलेंडर समन्वयित किए हैं, सप्लायर्स का पीछा किया है और इवेंट के दिन सुबह छह बजे घबराए हुए प्रिंसिपल के बगल में खड़े हुए हैं। हमें यह काम पसंद था और अराजकता से नफ़रत। वही आखिरी-क्षण की भागदौड़, वही वेंडर फ़ोन कॉल, वही रात भर के वॉट्सऐप थ्रेड।",
    "story.p2": "तो 2024 में हमने वह टीम बनाई जो हम चाहते थे कि हमारे साथ हो: एक संपर्क बिंदु, पारदर्शी बजट, इवेंट के दिन शांति, और एक असली प्लान बी। वीटा नोवा तब दिखता है जब इवेंट मैनेजमेंट ऐसे लोगों द्वारा चलाई जाती है जो वास्तव में क्लिपबोर्ड के दूसरी तरफ रह चुके हैं।",
    "story.p3": "आज हम सातों अमीरातों के स्कूलों के साथ काम करते हैं — और हम अभी भी हर लोड-इन पर सूर्योदय पर पहुँचते हैं।",
    "story.caption": "स्थापित 2024, दुबई · एक टीम जिसे उन लोगों ने बनाया है जो क्लिपबोर्ड के दूसरी तरफ रह चुके हैं",

    "faq.eyebrow": "सामान्य प्रश्न",
    "faq.title": "वे बातें जो स्कूल बुक करने से पहले पूछते हैं",
    "faq.q1.t": "हमें कितने समय पहले बुक करना चाहिए?",
    "faq.q1.d": "<p>अधिकांश इवेंट्स के लिए आदर्श रूप से 6–8 सप्ताह पहले, वार्षिक दिवस और दीक्षांत के लिए 12+ सप्ताह। हमने दो सप्ताह में भी चमत्कार कर दिखाए हैं जब स्कूल को अचानक पता चलता है कि मंत्री आ रहे हैं — लेकिन अधिक समय हमेशा एक शांत दिन का मतलब होता है।</p>",
    "faq.q2.t": "क्या आप अनुमतियाँ और मंज़ूरियाँ संभालते हैं?",
    "faq.q2.d": "<p>हाँ। हम प्रासंगिक यूएई प्राधिकरणों के साथ स्थल, अग्नि, सुरक्षा और बाल-इवेंट अनुमतियों के लिए समन्वय करते हैं, और दिन से पहले आपकी लीडरशिप टीम के साथ जोखिम मूल्यांकन साझा करते हैं।</p>",
    "faq.q3.t": "क्या आप हमारे बजट के साथ काम कर सकते हैं?",
    "faq.q3.d": "<p>हमेशा। हम प्रतिबद्धता से पहले तीन स्तरों के साथ पारदर्शी बजट प्रस्तुत करते हैं, और हर दिरहम एक साझा शीट में ट्रैक किया जाता है ताकि आप हमेशा जान सकें कि पैसा कहाँ गया।</p>",
    "faq.q4.t": "क्या आप उपकरण और सजावट उपलब्ध कराते हैं?",
    "faq.q4.d": "<p>हाँ — साउंड, लाइटिंग, स्टेजिंग, सजावट, साइनेज, फोटो वॉल, मार्की और जो भी आपको चाहिए। सब कुछ किराये पर या सोर्स किया हुआ है, कभी स्थायी नहीं, और हम आपके कैंपस को वैसे ही छोड़ते हैं जैसा हमें मिला था।</p>",
    "faq.q5.t": "क्या आपके स्टाफ को बाल-संरक्षण प्रशिक्षण मिला है?",
    "faq.q5.d": "<p>वीटा नोवा टीम का हर सदस्य बाल-संरक्षण प्रशिक्षित और बैकग्राउंड-वेरिफ़ाइड है। हम इवेंट के दिन आपकी स्कूल की बाल-संरक्षण नीति का पालन करते हैं, और छात्रों की स्पष्ट सहमति के बिना कभी फोटो या वीडियो नहीं लेते।</p>",
    "faq.q6.t": "आप कौन-सी अमीरातों को कवर करते हैं?",
    "faq.q6.d": "<p>सातों। हमारे पास अबू धाबी, दुबई, शारजाह, अजमान, उम्म अल-क़ुवैन, रास अल-ख़ैमाह और फ़ुजैराह में सत्यापित सप्लायर हैं।</p>",
    "faq.q7.t": "इवेंट के बाद क्या होता है?",
    "faq.q7.d": "<p>आपको एक सप्ताह के भीतर पूरी डीब्रीफ़ मिलती है: फोटो, वीडियो हाइलाइट्स, उपस्थिति और व्यय रिपोर्ट, साथ ही एक छोटी डीब्रीफ़ कॉल ताकि अगला साल और भी बेहतर हो।</p>",
    "faq.q8.t": "क्या हम पहले एक नमूना समय-सीमा देख सकते हैं?",
    "faq.q8.d": "<p>बिल्कुल। हमारी पहली कॉल के बाद हम आपके सोचे हुए इवेंट के प्रकार के लिए एक नमूना रन-ऑफ-शो और बजट भेजेंगे — कोई दायित्व नहीं, आपके पास रहेगा।</p>",

    "timeline.eyebrow": "किक-ऑफ से पर्दा उठने तक",
    "timeline.title": "एक इवेंट समय-सीमा वास्तव में कैसी दिखती है।",
    "timeline.lede": "एक सामान्य वीटा नोवा फ्लैगशिप इवेंट बारह सप्ताह से अधिक चलता है। यहाँ हर चरण पर हम बिल्कुल क्या कर रहे हैं ताकि आप कभी न सोचें \"अभी क्या हो रहा है?\"।",
    "tl1.t": "12 सप्ताह पहले — ब्रीफ़ और बजट",
    "tl1.d": "डिस्कवरी कॉल, स्थल वॉक-थ्रू, थीम ब्रेनस्टॉर्म। आप पारदर्शी बजट और उच्च-स्तरीय रचनात्मक दिशा पर हस्ताक्षर करते हैं।",
    "tl2.t": "8 सप्ताह पहले — सप्लायर और अनुबंध",
    "tl2.d": "कैटरर, ऑडियो-विज़ुअल, फोटोग्राफ़र, मार्की, परिवहन, सुरक्षा — सब अनुबंधित। प्रासंगिक यूएई प्राधिकरणों को अनुमतियाँ दी जाती हैं।",
    "tl3.t": "4 सप्ताह पहले — संचार और आरएसवीपी",
    "tl3.d": "निमंत्रण जारी, अभिभावक संचार इनबॉक्स में, टिकटिंग खुलती है, प्रायोजक पुष्ट, रन-ऑफ-शो का मसौदा।",
    "tl4.t": "1 सप्ताह पहले — ड्रेस रिहर्सल",
    "tl4.d": "स्कूल टीम के साथ पूरा वॉक-थ्रू। अंतिम हेडकाउंट। स्पेयर-प्लान ब्रीफ़। सबके लिए कॉफ़ी।",
    "tl5.t": "इवेंट का दिन — शोटाइम",
    "tl5.d": "हमारी टीम सूर्योदय पर पहुँचती है, रिहर्सल, शो और रैप चलाती है। आप दिन का आनंद लें। बाक़ी हम संभालते हैं।",

    "map.eyebrow": "हम कहाँ काम करते हैं",
    "map.title": "सातों अमीरातें। एक भरोसेमंद टीम।",
    "map.lede": "सत्यापित सप्लायर, क्षेत्रीय क्रू, और पूर्ण अनुमति प्रबंधन — जहाँ भी आपका स्कूल यूएई में हो।",

    "culture.eyebrow": "यूएई कैलेंडर से अवगत",
    "culture.title": "हम उन पलों के आसपास योजना बनाते हैं जो मायने रखते हैं।",
    "culture.lede": "रमज़ान पर या ईद के साथ टकराने वाला स्कूल इवेंट गलत तरीके से किया गया इवेंट है। हमारे कैलेंडर यूएई की लय पर ट्यून किए गए हैं — और प्रतिबद्धता से पहले हम हमेशा टकराव की चेतावनी देंगे।",
    "c1.t": "रमज़ान-अनुकूल इवेंट्स",
    "c1.d": "पहले शुरू होने के समय, इफ़्तार कैटरिंग, शालीन मंचन, प्रार्थना के समय में कोई संगीत नहीं। हम रन-ऑफ-शो को समायोजित करते हैं ताकि दिन पवित्र महीने में बाधा डाले बिना उत्सवपूर्ण रहे।",
    "c2.t": "ईद का समय",
    "c2.d": "हम किसी भी ईद के पहले दिन इवेंट शेड्यूल नहीं करते। ईद के आसपास हम परिवारों को साँस लेने की जगह देने के लिए इवेंट्स स्थानांतरित करते हैं और जहाँ उचित हो वहाँ ईद-थीम वाली सजावट अपनाते हैं।",
    "c3.t": "यूएई राष्ट्रीय दिवस",
    "c3.d": "झंडा समारोह, विरासत गतिविधियाँ और अमीराती-थीम वाले वार्षिक दिवस। हमारे राष्ट्रीय दिवस किट सही प्रतीकों के साथ सम्मान के साथ आते हैं — कभी पोशाक के रूप में नहीं।",
    "c4.t": "झंडा दिवस",
    "c4.d": "त्वरित सुबह सभाएँ और पूरे कैंपस में झंडा क्षण। हम समन्वय इस तरह करते हैं कि श्रद्धांजलि असली लगे, प्रदर्शनकारी नहीं।",
    "c5.t": "हिजरी अवलोकन",
    "c5.d": "हम स्कूल कैलेंडर को समायोजित करते हैं ताकि इवेंट्स इन चिंतनशील दिनों से प्रतिस्पर्धा न करें। यदि आपकी लीडरशिप चाहे तो वैकल्पिक स्कूल सभाएँ जोड़ी जा सकती हैं।",
    "c6.t": "शहीद दिवस",
    "c6.d": "यूएई भर में शांत सम्मान का दिन। हम सभी इवेंट संचार रोकते हैं और उस दिन के लिए निर्धारित किसी भी गतिविधि को अधिक उचित क्षण पर स्थानांतरित करते हैं।",

    "res.eyebrow": "मुफ़्त संसाधन",
    "res.title": "हमारे टेम्पलेट्स ले जाएँ।",
    "res.lede": "तीन गाइड जो हम हर नए स्कूल को देते हैं। मुफ़्त, कोई ईमेल गेट नहीं।",
    "r1.t": "अभिभावक संचार टेम्पलेट्स",
    "r1.d": "निमंत्रण, आरएसवीपी, अनुस्मारक और इवेंट के बाद के धन्यवाद के लिए ईमेल और वॉट्सऐप स्क्रिप्ट। द्विभाषी एन/एआर।",
    "r1.btn": "PDF डाउनलोड",
    "r2.t": "वार्षिक दिवस थीम विचार",
    "r2.d": "यूएई स्कूलों से 40+ परखी हुई थीमें, मंच संदर्भ, रंग पैलेट और सजावट गाइड के साथ।",
    "r2.btn": "PDF डाउनलोड",
    "r3.t": "स्कूल इवेंट बजट वर्कशीट",
    "r3.d": "उन लाइन आइटम के साथ एक सरल स्प्रेडशीट जिन्हें अधिकांश यूएई स्कूल भूल जाते हैं — अनुमतियाँ, बाल-संरक्षण, आकस्मिक। संपादन योग्य।",
    "r3.btn": "PDF डाउनलोड",

    "calc.eyebrow": "त्वरित अनुमान",
    "calc.title": "एक इवेंट की संभावित लागत कितनी होगी?",
    "calc.lede": "स्लाइडर्स खींचें। यह एक मोटा मार्गदर्शक है, कोटेशन नहीं — हर स्कूल अलग है। हम आपको एक कार्य दिवस के भीतर असली संख्या देंगे।",
    "calc.estimate": "अनुमानित सीमा",
    "calc.note": "केवल सांकेतिक। स्थल, अनुमतियों और अंतिम दायरे के अधीन।",
    "calc.cta": "सटीक कोटेशन पाएँ",
    "calc.audience": "दर्शकों का आकार",
    "calc.duration": "इवेंट की अवधि",
    "calc.services": "आवश्यक सेवाएँ",
    "calc.svcAv": "साउंड, लाइटिंग और स्टेजिंग",
    "calc.svcCat": "कैटरिंग",
    "calc.svcPho": "फोटोग्राफी और वीडियो",
    "calc.svcDec": "सजावट और थीमिंग",
    "calc.svcPerf": "कलाकार / मनोरंजनकर्ता",
    "calc.svcTrn": "परिवहन",
    "float.cta": "अपना इवेंट प्लान करें",

    "mvv.eyebrow": "हम किसके लिए खड़े हैं",
    "mvv.title": "मिशन, विज़न और वे मूल्य जिन पर हम समझौता नहीं करते।",
    "mvv.m.t": "मिशन",
    "mvv.m.d": "यूएई में हर स्कूल इवेंट को ऐसा महसूस कराना कि टीम के पास महीनों तैयारी का समय था — भले ही उन्हें सप्ताह मिले हों।",
    "mvv.v.t": "विज़न",
    "mvv.v.d": "एक भविष्य जहाँ अमीरात में स्कूल इवेंट्स क्षेत्र के लिए मानक हों — सुरक्षित, टिकाऊ, आनंददायक और स्पष्ट रूप से छात्र-नेतृत्व वाले।",
    "mvv.va.t": "मूल्य",
    "mvv.va1.t": "शांति।",
    "mvv.va1.d": "हम स्पेयर प्लान, स्पेयर धैर्य और स्पेयर माइक लाते हैं।",
    "mvv.va2.t": "ईमानदारी।",
    "mvv.va2.d": "बजट जिन्हें पढ़ा जा सके। शेड्यूल जिन पर भरोसा किया जा सके। गलतियाँ जल्दी स्वीकार की जाएँ।",
    "mvv.va3.t": "सुरक्षा।",
    "mvv.va3.d": "कैंपस पर हर बच्चे के साथ ऐसा व्यवहार किया जाता है जैसे वह हमारा अपना हो। हर अनुमति पर हस्ताक्षर।",
    "mvv.va4.t": "शिल्प।",
    "mvv.va4.d": "\"काफ़ी अच्छा\" काफ़ी नहीं है। हम विवरण पर पसीना बहाते हैं ताकि दिन सहज लगे।",
    "mvv.va5.t": "आनंद।",
    "mvv.va5.d": "यदि बच्चे प्रसन्न नहीं हैं, तो हमने अपना काम नहीं किया है।",

    "sus.eyebrow": "सततता",
    "sus.title": "बेहतर इवेंट्स, हल्का पदचिह्न।",
    "sus.p1": "यूएई स्कूल जलवायु कार्रवाई में क्षेत्र का नेतृत्व कर रहे हैं, और इवेंट्स कोई अपवाद नहीं होने चाहिए। हम ग्रह को ध्यान में रखते हुए हर वीटा नोवा इवेंट डिज़ाइन करते हैं — अनुभव पर कोने काटे बिना।",
    "sus.p2": "हमारा डिफ़ॉल्ट पुनः उपयोग योग्य है। हमारा बैकअप पुनर्चक्रणीय है। एकल-उपयोग अंतिम उपाय है, पहला विकल्प नहीं।",
    "sus.c1.t": "निपटाने योग्य से अधिक पुनः उपयोग योग्य",
    "sus.c1.d": "बैकड्रॉप, साइनेज, प्रॉप्स और मंच सेट जिन्हें वर्ष-दर-वर्ष संग्रहीत और पुनः उपयोग किया जा सके।",
    "sus.c2.t": "पहले स्थानीय सप्लायर",
    "sus.c2.d": "छोटी यात्राएँ, ताज़ा भोजन, छोटे कार्बन बिल — और यूएई अर्थव्यवस्था के लिए बेहतर समर्थन।",
    "sus.c3.t": "पादप-प्रधान मेन्यू",
    "sus.c3.d": "हर इवेंट में कम से कम एक पूर्णतः पादप-आधारित मेन्यू विकल्प, बिना किसी प्रश्न के।",
    "sus.c4.t": "शून्य मुद्रित अपशिष्ट",
    "sus.c4.d": "डिजिटल टिकट, क्यूआर चेक-इन और साझा इवेंट ऐप्स पेपर प्रोग्राम और फ़्लायर्स की जगह लेते हैं।",
    "sus.c5.t": "ईमानदार रिपोर्टिंग",
    "sus.c5.d": "हर इवेंट एक छोटी सततता रिपोर्ट के साथ आता है — हमने क्या पुनः उपयोग किया, क्या पुनर्चक्रित किया, हम बेहतर क्या करेंगे।",

    "e1.t": "पाठ्यक्रम और शैक्षिक मार्गदर्शिकाएँ",
    "e1.d": "विषय प्रदर्शनियाँ, आईजीसीएसई/ए-लेवल संध्याएँ, विश्वविद्यालय मेले।",
    "e2.t": "ओरिएंटेशन और स्वागत दिवस",
    "e2.d": "नए छात्र दाखिला, केजी1 व्यवस्थापन सुबह, अभिभावक भ्रमण।",
    "e3.t": "वार्षिक दिवस और सांस्कृतिक महोत्सव",
    "e3.d": "थीम, नृत्य और पुरस्कारों के साथ फ्लैगशिप मंच प्रस्तुतियाँ।",
    "e4.t": "दीक्षांत समारोह",
    "e4.d": "जुलूस, गाउन, भाषण, फोटो वॉल और पार्टियों के बाद।",
    "e5.t": "खेल दिवस और अंतर-हाउस इवेंट्स",
    "e5.d": "एथलेटिक्स, तैराकी गाला, फुटबॉल लीग, मज़ेदार रन।",
    "e6.t": "राष्ट्रीय और विरासत दिवस",
    "e6.d": "यूएई राष्ट्रीय दिवस, झंडा दिवस, इस्लामी और सांस्कृतिक उत्सव।",
    "e7.t": "शिक्षक प्रशंसा और पीटीए इवेंट्स",
    "e7.d": "स्टाफ पुरस्कार, वेलनेस रिट्रीट, अभिभावक-स्कूल संध्याएँ।",
    "e8.t": "प्रतियोगिताएँ और ओलंपियाड",
    "e8.d": "स्पेलिंग बी, विज्ञान मेले, रोबोटिक्स, कला प्रदर्शनियाँ।",
    "e9.t": "सामुदायिक और धन उगाहने वाली गाला",
    "e9.d": "चैरिटी डिनर, नीलामी रातें, पूर्व छात्र पुनर्मिलन।",

    "process.eyebrow": "हम कैसे काम करते हैं",
    "process.title": "किक-ऑफ से सफ़ाई तक एक स्पष्ट, शांत प्रक्रिया",
    "p1.t": "खोजें",
    "p1.d": "हम लक्ष्यों, दर्शकों, स्वर और बाधाओं को समझने के लिए आपकी लीडरशिप टीम से मिलते हैं। हम स्थल पर जाते हैं और कैलेंडर की समीक्षा करते हैं।",
    "p2.t": "डिज़ाइन",
    "p2.d": "एक रचनात्मक ब्रीफ़, थीम, रन-ऑफ-शो और बजट — सरल भाषा में हस्ताक्षर के लिए प्रस्तुत, कोई शब्दजाल नहीं।",
    "p3.t": "योजना",
    "p3.d": "सप्लायर, अनुबंध, अनुमतियाँ, जोखिम मूल्यांकन, संचार और साप्ताहिक चेक-इन के साथ एक साझा परियोजना समय-सीमा।",
    "p4.t": "वितरण",
    "p4.d": "लोड-इन से लोड-आउट तक ऑन-साइट टीम। हम रिहर्सल, शो और रैप चलाते हैं — स्कूल को निर्मल छोड़ते हुए।",
    "p5.t": "समीक्षा",
    "p5.d": "फोटो, वीडियो, उपस्थिति और व्यय रिपोर्ट, साथ ही एक डीब्रीफ़ ताकि अगला साल और भी बेहतर हो।",

    "why.eyebrow": "स्कूल वीटा नोवा क्यों चुनते हैं",
    "why.title": "शांत, सक्षम और स्कूलों के लिए बना।",
    "why.lede": "हम बाल-संरक्षण, समय-सारिणियों और अभिभावकों की भाषा बोलते हैं। हम विक्रेता-निष्पक्ष, बजट-अनुशासित हैं और हर छात्र के साथ ऐसे पेश आते हैं जैसे वह सम्मानित अतिथि हो।",
    "w1.t": "एक संपर्क बिंदु",
    "w1.d": "पहली कॉल से अंतिम रिपोर्ट तक एक समर्पित इवेंट लीड।",
    "w2.t": "पारदर्शी बजट",
    "w2.d": "हर दिरहम ट्रैक, हर कोटेशन एक साझा शीट में।",
    "w3.t": "यूएई-व्यापी नेटवर्क",
    "w3.d": "सातों अमीरातों में सत्यापित सप्लायर।",
    "w4.t": "डिज़ाइन के अनुसार बाल-सुरक्षित",
    "w4.d": "बाल-संरक्षण प्रशिक्षित क्रू, डीबीएस-जाँचा स्टाफ और स्पष्ट प्रोटोकॉल।",
    "w5.t": "दिन पर शांति",
    "w5.d": "हम स्पेयर प्लान, स्पेयर माइक और स्पेयर धैर्य लाते हैं।",

    "contact.eyebrow": "आइए अगला इवेंट प्लान करें",
    "contact.title": "हमें बताएँ कि आप क्या सोच रहे हैं।",
    "contact.lede": "कुछ विवरण साझा करें और हम एक कार्य दिवस के भीतर मुफ़्त, बिना-दायित्व के प्रस्ताव के साथ वापस आएँगे।",
    "form.school": "स्कूल का नाम",
    "form.name": "आपका नाम",
    "form.email": "ईमेल",
    "form.phone": "फ़ोन",
    "form.type": "इवेंट का प्रकार",
    "form.notes": "हमें थोड़ा और बताएँ",
    "form.notesPh": "तारीख, दर्शकों का आकार, थीम, कुछ भी महत्वपूर्ण...",
    "form.submit": "पूछताछ भेजें",
    "form.t1": "वार्षिक दिवस / सांस्कृतिक महोत्सव",
    "form.t2": "दीक्षांत समारोह",
    "form.t3": "खेल दिवस / टूर्नामेंट",
    "form.t4": "शैक्षिक मार्गदर्शिका / ओरिएंटेशन",
    "form.t5": "शिक्षक / पीटीए इवेंट",
    "form.t6": "अन्य",
    "form.success": "धन्यवाद {name} — हमने {school} के लिए आपकी पूछताछ प्राप्त कर ली है और एक कार्य दिवस के भीतर उत्तर देंगे।",
    "form.error": "कृपया स्कूल का नाम, अपना नाम और ईमेल भरें।",
    "form.sending": "भेजा जा रहा है…",
    "form.fail": "क्षमा करें — कुछ गलत हो गया। कृपया हमें सीधे hello@vitanova.ae पर ईमेल करें।",

    "footer.tag": "संयुक्त अरब अमीरात भर के स्कूलों के लिए इवेंट मैनेजमेंट।",
    "footer.visit": "हमसे मिलें",
    "footer.address": "वीटा नोवा इवेंट्स एल.एल.सी.<br />दुबई, संयुक्त अरब अमीरात",
    "footer.llc": "वीटा नोवा इवेंट्स एल.एल.सी. — दुबई, यूएई",
    "footer.contact": "संपर्क",
    "footer.follow": "फ़ॉलो करें",
    "footer.whatsapp": "व्हाट्सऐप चैट",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "footer.designed": "यूएई में डिज़ाइन किया गया।",

    "wa.title": "वीटा नोवा से चैट करें",
    "wa.sub": "हम आमतौर पर कुछ ही मिनटों में जवाब देते हैं",
    "wa.bubble": "👋 नमस्ते! क्या आपके मन में कोई इवेंट से जुड़ा सवाल है? हमें व्हाट्सऐप मैसेज भेजें, हम जल्दी जवाब देंगे।",
    "wa.cta": "व्हाट्सऐप खोलें",
    "wa.open": "व्हाट्सऐप चैट खोलें",
    "wa.close": "चैट बंद करें",
  },

  ml: {
    "brand": "വിറ്റ നോവ",
    "nav.services": "സേവനങ്ങൾ",
    "nav.events": "ഇവന്റുകൾ",
    "nav.process": "ഞങ്ങളുടെ പ്രക്രിയ",
    "nav.why": "എന്തുകൊണ്ട് ഞങ്ങൾ",
    "nav.story": "ഞങ്ങളുടെ കഥ",
    "nav.faq": "സാധാരണ ചോദ്യങ്ങൾ",
    "nav.timeline": "സമയരേഖ",
    "nav.calc": "ഏകദേശ വില",
    "nav.quote": "ഒരു ക്വോട്ട് നേടൂ",
    "lang.label": "English",

    "hero.eyebrow": "യുഎഇ · സ്കൂളുകൾക്കുള്ള ഇവന്റ് മാനേജ്മെന്റ്",
    "hero.title1": "ഇവന്റുകൾ സൃഷ്ടിക്കുന്നു",
    "hero.title2": "സ്കൂൾ ജീവിതം മറക്കാനാവാത്തത്.",
    "hero.lede": "ആദ്യ സിലബസ് രാത്രി മുതൽ അവസാന ബിരുദദാന ചടങ്ങ് വരെ, ഓരോ വിശദാംശങ്ങളും വിറ്റ നോവ ആസൂത്രണം ചെയ്യുകയും നടത്തുകയും ചെയ്യുന്നു — അങ്ങനെ നിങ്ങളുടെ ടീമിന് കുട്ടികളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാം. ബജറ്റ്, ലോജിസ്റ്റിക്സ്, സപ്ലയേഴ്സ്, ഡിസൈൻ, റൺ-ഓഫ്-ഷോ — എല്ലാം അറ്റം മുതൽ അറ്റം വരെ ഞങ്ങൾ കൈകാര്യം ചെയ്യുന്നു.",
    "hero.cta1": "നിങ്ങളുടെ ഇവന്റ് ആസൂത്രണം ചെയ്യൂ",
    "hero.cta2": "സേവനങ്ങൾ കാണുക",
    "hero.trust1": "ഇവന്റുകൾ നടത്തി",
    "hero.trust2": "പങ്കാളി സ്കൂളുകൾ",
    "hero.trust3": "എമിറേറ്റുകൾ സേവിച്ചു",

    "stack.l1": "വാർഷിക ദിനം",
    "stack.t1": "«നാളെയുടെ വിശാലങ്ങൾ»",
    "stack.m1": "600 അതിഥികൾ · 14 അംഗങ്ങൾ · ദുബൈ",
    "stack.l2": "കായിക ദിനം",
    "stack.t2": "ഇന്റർ-ഹൗസ് അത്‌ലറ്റിക്സ്",
    "stack.m2": "4 ഹൗസുകൾ · 22 സ്റ്റേഷനുകൾ · ഷാർജ",
    "stack.l3": "ബിരുദദാനം",
    "stack.t3": "ക്ലാസ് ഓഫ് 2026",
    "stack.m3": "320 ബിരുദധാരികൾ · അബുദാബി",

    "services.eyebrow": "ഞങ്ങൾ എന്ത് ചെയ്യുന്നു",
    "services.title": "സ്കൂളുകൾക്കുള്ള പൂർണ്ണ സേവന ഇവന്റ് മാനേജ്മെന്റ്",
    "services.lede": "ഒരു ടീം, ഒരു സമയരേഖ, ഒരു സമ്പർക്ക ബിന്ദു. നിങ്ങളുടെ ജീവനക്കാർക്ക് അത് ചെയ്യേണ്ടതില്ലാതെ മുഴുവൻ ഇവന്റും വിറ്റ നോവ നടത്തുന്നു.",

    "s1.t": "അക്കാദമിക് ഗൈഡുകളും ഓറിയന്റേഷനും",
    "s1.d": "കറിക്കുലം രാത്രികൾ, പുതിയ വിദ്യാർത്ഥി ഓറിയന്റേഷൻ, രക്ഷിതാക്കളുടെ സ്വാഗത സന്ധ്യകൾ, യൂണിവേഴ്സിറ്റി തയ്യാറെടുപ്പ് റോഡ്ഷോകൾ — വിവരമുള്ളതും ബ്രാൻഡിന് അനുയോജ്യവും സ്വാഗതാന്വിതവും.",
    "s2.t": "വാർഷിക പരിപാടികളും ചടങ്ങുകളും",
    "s2.d": "വർഷാരംഭ സഭകൾ, സ്ഥാപക ദിനങ്ങൾ, സാംസ്കാരിക ആഴ്ചകൾ, ആദരവ് സന്ധ്യകൾ, വർഷാവസാന ആഘോഷങ്ങൾ.",
    "s3.t": "വാർഷിക ദിനങ്ങളും ബിരുദദാനങ്ങളും",
    "s3.d": "സ്റ്റേജ് ഷോകൾ, അവാർഡ് രാത്രികൾ, കോറിയോഗ്രഫി, എവി, കോൺഫെറ്റി എന്നിവയോടൊപ്പം പൂർണ്ണ ബിരുദദാന ചടങ്ങുകൾ — എല്ലാം മിനിറ്റിലേക്ക് കോർഡിനേറ്റ് ചെയ്തിരിക്കുന്നു.",
    "s4.t": "കായിക ദിനങ്ങളും ടൂർണ്ണമെന്റുകളും",
    "s4.d": "ഇന്റർ-ഹൗസ് അത്‌ലറ്റിക്സ്, സ്വിമ്മിംഗ് ഗാലകൾ, ഫുട്ബോൾ ടൂർണ്ണമെന്റുകൾ, ഉൾപ്പെടുത്തൽ ഗെയിംസ് ദിനങ്ങൾ — ഉപകരണങ്ങൾ, മാർഷലുകൾ, സ്കോറിംഗ്, മെഡലുകൾ.",
    "s5.t": "ക്രിയേറ്റീവ് & ഡിസൈൻ",
    "s5.d": "തീമുകൾ, സ്റ്റേജ് സെറ്റുകൾ, ബാക്ക്ഡ്രോപ്പുകൾ, ബ്രാൻഡിംഗ്, ക്ഷണങ്ങൾ, സൈനേജ്, ഫോട്ടോ സോണുകൾ, സ്ഥലത്തിന്റെ അലങ്കാരം — മുഴുവൻ ഇവന്റും ഒരുമിച്ച് ബന്ധിപ്പിക്കുന്നു.",
    "s6.t": "മാർക്കറ്റിംഗ് & കമ്മ്യൂണിക്കേഷൻസ്",
    "s6.d": "ഇവന്റ് ഐഡന്റിറ്റി, സോഷ്യൽ മീഡിയ ക്യാമ്പെയ്നുകൾ, സ്പോൺസർ ഡെക്കുകൾ, ടിക്കറ്റ് ഫ്ലോകൾ, രക്ഷിതാക്കളുടെ ആപ്പുകൾ, ഇവന്റിന് ശേഷമുള്ള ഹൈലൈറ്റ് റീലുകൾ.",
    "s7.t": "ബജറ്റ് & ഫിനാൻസ്",
    "s7.d": "സുതാര്യമായ ബജറ്റിംഗ്, ഒന്നിലധികം വെൻഡർ ക്വോട്ടേഷനുകൾ, പേയ്മെന്റ് ഷെഡ്യൂളിംഗ്, സ്പോൺസർ മാനേജ്മെന്റ്, ലൈൻ-ബൈ-ലൈൻ റിപ്പോർട്ടോടെയുള്ള അന്തിമ റീകൺസിലിയേഷൻ.",
    "s8.t": "ലോജിസ്റ്റിക്സ് & സപ്ലയേഴ്സ്",
    "s8.d": "കാറ്ററേഴ്സ്, ഫോട്ടോഗ്രാഫേഴ്സ്, വീഡിയോഗ്രാഫേഴ്സ്, എവി, ഗതാഗതം, സുരക്ഷ, ഫസ്റ്റ് എയ്ഡ്, മാർക്വീകൾ, ഗിവേവേകൾ — പരിശോധിച്ച്, കരാർ ചെയ്ത്, നിയന്ത്രിച്ചത്.",
    "s9.t": "സുരക്ഷ, പെർമിറ്റുകൾ & കംപ്ലയൻസ്",
    "s9.d": "യുഎഇ അധികൃത പെർമിറ്റുകൾ, റിസ്ക് അസസ്മെന്റുകൾ, കുട്ടികളുടെ സംരക്ഷണ പ്രോട്ടോക്കോളുകൾ, ഫസ്റ്റ് എയ്ഡ്, ഫയർ സേഫ്റ്റി, ഇൻഷുറൻസ് കോർഡിനേഷൻ.",
    "s10.t": "ഗിവേവേകൾ & മെർച്ചൻഡൈസ്",
    "s10.d": "ബ്രാൻഡ് ചെയ്ത കിറ്റുകൾ, ട്രോഫികൾ, മെഡലുകൾ, സർട്ടിഫിക്കറ്റുകൾ, വർഷികകൾ, കസ്റ്റം മെർച്ചൻഡൈസ് — സ്രോതസ്സ് ചെയ്ത്, പായ്ക്ക് ചെയ്ത്, നിങ്ങളുടെ ക്യാമ്പസിലേക്ക് എത്തിച്ചത്.",
    "s11.t": "വർക്ക്ഷോപ്പുകളും യാത്രകളും",
    "s11.d": "ലീഡർഷിപ്പ് ക്യാമ്പുകൾ, ടീം-ബിൽഡിംഗ് ദിനങ്ങൾ, വിദ്യാഭ്യാസ യാത്രകൾ, പൂർണ്ണ മേൽനോട്ട പദ്ധതികളോടെയുള്ള രാത്രി റിട്രീറ്റുകൾ.",
    "s12.t": "വർഷം മുഴുവൻ കലണ്ടർ ആസൂത്രണം",
    "s12.d": "അക്കാദമിക് വർഷാരംഭത്തിൽ സ്കൂളിന്റെ പൂർണ്ണ ഇവന്റ് കലണ്ടർ ഞങ്ങൾ നിർമ്മിക്കുന്നു, അങ്ങനെ ഒന്നും കൂട്ടിമുട്ടുകയില്ല, എല്ലാ സമയപരിധിയും പാലിക്കപ്പെടും.",

    "events.eyebrow": "ഞങ്ങൾ നടത്താൻ ഇഷ്ടപ്പെടുന്ന ഇവന്റുകൾ",
    "events.title": "ഒരു സ്കൂൾ വർഷത്തിന്റെ താളത്തിന് അനുയോജ്യമായത്",

    "story.eyebrow": "ഞങ്ങളുടെ കഥ",
    "story.title": "ആയിരക്കണക്കിന് സ്കൂൾ റൺസ് തെറ്റായി പോയ ശേഷമാണ് ഞങ്ങൾ വിറ്റ നോവ ആരംഭിച്ചത്.",
    "story.p1": "ഞങ്ങൾ രണ്ടുപേരും ചേർന്ന് യുഎഇ സ്കൂളുകളിൽ പതിനഞ്ച് വർഷത്തിലധികം ചെലവഴിച്ചു — ഇവന്റുകൾ നടത്തുക, കലണ്ടറുകൾ ഏകോപിപ്പിക്കുക, സപ്ലയേഴ്സിനെ പിന്തുടരുക, ഇവന്റ് ദിവസം രാവിലെ 6 മണിക്ക് വിഷമിക്കുന്ന പ്രിൻസിപ്പൽമാർക്ക് ഒപ്പം നിൽക്കുക. ജോലി ഞങ്ങൾക്ക് ഇഷ്ടമായിരുന്നു, ആശയക്കുഴപ്പം വെറുത്തു. അവസാന നിമിഷ തിരക്കുകൾ, വെൻഡർ ഫോൺ കോളുകൾ, മുമ്പത്തെ രാത്രിയിലെ പരിഭ്രാന്തി പിടിച്ച വാട്ട്സ്ആപ്പ് ത്രെഡുകൾ.",
    "story.p2": "അങ്ങനെ 2024-ൽ ഞങ്ങൾ ആഗ്രഹിച്ച ടീമിനെ നിർമ്മിച്ചു: ഒരു സമ്പർക്ക ബിന്ദു, സുതാര്യമായ ബജറ്റുകൾ, ദിവസം ശാന്തം, ഒരു യഥാർത്ഥ പ്ലാൻ ബി. ക്ലിപ്പ്ബോർഡിന്റെ മറുവശത്ത് യഥാർത്ഥത്തിൽ ഉണ്ടായിരുന്ന ആളുകൾ നടത്തുന്ന ഇവന്റ് മാനേജ്മെന്റ് എങ്ങനെയാണെന്ന് വിറ്റ നോവ കാണിക്കുന്നു.",
    "story.p3": "ഇന്ന് ഞങ്ങൾ ഏഴ് എമിറേറ്റുകളിലെയും സ്കൂളുകളുമായി പ്രവർത്തിക്കുന്നു — ഓരോ ലോഡ്-ഇനിലും സൂര്യോദയത്തിൽ എത്താറുണ്ട്.",
    "story.caption": "2024-ൽ സ്ഥാപിതം, ദുബൈ · ക്ലിപ്പ്ബോർഡിന്റെ മറുവശത്ത് ഉണ്ടായിരുന്ന ആളുകൾ നിർമ്മിച്ച ഒരു ടീം",

    "faq.eyebrow": "സാധാരണ ചോദ്യങ്ങൾ",
    "faq.title": "സ്കൂളുകൾ ബുക്ക് ചെയ്യുന്നതിന് മുമ്പ് ചോദിക്കുന്ന കാര്യങ്ങൾ",
    "faq.q1.t": "എത്ര മുമ്പായി ബുക്ക് ചെയ്യണം?",
    "faq.q1.d": "<p>മിക്ക ഇവന്റുകൾക്കും ആദ്യം 6–8 ആഴ്ച, വാർഷിക ദിനങ്ങൾക്കും ബിരുദദാനങ്ങൾക്കും 12+ ആഴ്ച. ഒരു സ്കൂളിന് മന്ത്രി സന്ദർശനം നടത്തുന്നതായി അറിയുമ്പോൾ രണ്ട് ആഴ്ചക്കുള്ളിൽ അത്ഭുതങ്ങൾ ഞങ്ങൾ ചെയ്തിട്ടുണ്ട് — പക്ഷേ കൂടുതൽ സമയം എന്നാലും ശാന്തമായ ദിനം.</p>",
    "faq.q2.t": "പെർമിറ്റുകളും അനുമതികളും നിങ്ങൾ കൈകാര്യം ചെയ്യുന്നുണ്ടോ?",
    "faq.q2.d": "<p>ഉവ്വ്. വേദി, അഗ്നിശാസ്ത്രം, സുരക്ഷ, കുട്ടികളുടെ ഇവന്റ് പെർമിറ്റുകൾ എന്നിവയ്ക്കായി ഞങ്ങൾ പ്രസക്തമായ യുഎഇ അധികാരികളുമായി ഏകോപിപ്പിക്കുകയും, ദിവസത്തിന് മുമ്പ് നിങ്ങളുടെ നേതൃത്വ ടീമുമായി ഒരു റിസ്ക് അസസ്മെന്റ് പങ്കിടുകയും ചെയ്യുന്നു.</p>",
    "faq.q3.t": "ഞങ്ങളുടെ ബജറ്റിന് അനുസൃതമായി നിങ്ങൾക്ക് പ്രവർത്തിക്കാൻ കഴിയുമോ?",
    "faq.q3.d": "<p>എല്ലായ്പ്പോഴും. നിങ്ങൾ കമ്മിറ്റ് ചെയ്യുന്നതിന് മുമ്പ് മൂന്ന് ടയറുകളുള്ള ഒരു സുതാര്യമായ ബജറ്റ് ഞങ്ങൾ അവതരിപ്പിക്കുന്നു, ഓരോ ദിർഹവും ഒരു പങ്കിട്ട ഷീറ്റിൽ ട്രാക്ക് ചെയ്യപ്പെടുന്നു.</p>",
    "faq.q4.t": "ഉപകരണങ്ങളും അലങ്കാരങ്ങളും നിങ്ങൾ നൽകുന്നുണ്ടോ?",
    "faq.q4.d": "<p>ഉവ്വ് — ശബ്ദം, ലൈറ്റിംഗ്, സ്റ്റേജിംഗ്, അലങ്കാരം, സൈനേജ്, ഫോട്ടോ വോളുകൾ, മാർക്വീകൾ, മറ്റെന്തെങ്കിലും ആവശ്യമുള്ളത്. എല്ലാം വാടകയ്ക്ക് എടുക്കുകയോ സ്രോതസ്സ് ചെയ്യുകയോ ചെയ്യുന്നു, ശാശ്വതമല്ല, ഞങ്ങൾ നിങ്ങളുടെ ക്യാമ്പസ് കണ്ടത് പോലെ വിടുന്നു.</p>",
    "faq.q5.t": "നിങ്ങളുടെ ജീവനക്കാർ കുട്ടികളുടെ സംരക്ഷണ പരിശീലനം നേടിയവരാണോ?",
    "faq.q5.d": "<p>ഓരോ വിറ്റ നോവ ടീം അംഗവും സംരക്ഷണ-പരിശീലനം ലഭിച്ചവരും ബാക്ക്ഗ്രൗണ്ട് പരിശോധന നടത്തിയവരുമാണ്. ഞങ്ങൾ ദിവസം നിങ്ങളുടെ സ്കൂളിന്റെ സംരക്ഷണ നയം പിന്തുടരുന്നു, വ്യക്തമായ സമ്മതം ഇല്ലാതെ വിദ്യാർത്ഥികളുടെ ഫോട്ടോയോ വീഡിയോയോ എടുക്കില്ല.</p>",
    "faq.q6.t": "ഏത് എമിറേറ്റുകളിലാണ് നിങ്ങൾ പ്രവർത്തിക്കുന്നത്?",
    "faq.q6.d": "<p>ഏഴെല്ലാം. ഞങ്ങൾക്ക് അബുദാബി, ദുബൈ, ഷാർജ, അജ്മാൻ, ഉമ് അൽ ഖുവൈൻ, റാസ് അൽ ഖൈമ, ഫുജൈറ എന്നിവിടങ്ങളിൽ പരിശോധിച്ച സപ്ലയേഴ്സ് ഉണ്ട്.</p>",
    "faq.q7.t": "ഇവന്റിന് ശേഷം എന്ത് സംഭവിക്കും?",
    "faq.q7.d": "<p>ഒരാഴ്ചയ്ക്കുള്ളിൽ നിങ്ങൾക്ക് ഒരു പൂർണ്ണ ഡിബ്രീഫ് ലഭിക്കും: ഫോട്ടോകൾ, വീഡിയോ ഹൈലൈറ്റുകൾ, ഹാജർ, ചെലവ് റിപ്പോർട്ടുകൾ, കൂടാതെ അടുത്ത വർഷം ഇനിയും മികച്ചതാക്കാനുള്ള ഒരു ചെറിയ ഡിബ്രീഫ് കോൾ.</p>",
    "faq.q8.t": "ആദ്യം ഒരു സാമ്പിൾ ടൈംലൈൻ കാണാൻ കഴിയുമോ?",
    "faq.q8.d": "<p>തീർച്ചയായും. ഞങ്ങളുടെ ആദ്യ കോളിന് ശേഷം നിങ്ങൾ സങ്കൽപ്പിക്കുന്ന ഇവന്റിന്റെ ഒരു സാമ്പിൾ റൺ-ഓഫ്-ഷോയും ബജറ്റും ഞങ്ങൾ അയയ്ക്കും — യാതൊരു ബാധ്യതയും ഇല്ല, നിങ്ങളുടേത് സൂക്ഷിക്കാം.</p>",

    "timeline.eyebrow": "കിക്ക്-ഓഫിൽ നിന്ന് കർട്ടൻ ഉയരുന്നത് വരെ",
    "timeline.title": "ഒരു ഇവന്റ് ടൈംലൈൻ യഥാർത്ഥത്തിൽ എങ്ങനെ കാണപ്പെടുന്നു.",
    "timeline.lede": "ഒരു സാധാരണ വിറ്റ നോവ ഫ്ലാഗ്ഷിപ്പ് ഇവന്റ് പന്ത്രണ്ട് ആഴ്ച നീണ്ടുനിൽക്കുന്നു. ഓരോ ഘട്ടത്തിലും ഞങ്ങൾ എന്ത് ചെയ്യുന്നുവെന്ന് ഇതാ — അങ്ങനെ നിങ്ങൾ ഒരിക്കലും \"ഇപ്പോൾ എന്ത് സംഭവിക്കുന്നു?\" എന്ന് ചിന്തിക്കേണ്ടി വരില്ല.",
    "tl1.t": "12 ആഴ്ച മുമ്പ് — ബ്രീഫ് & ബജറ്റ്",
    "tl1.d": "ഡിസ്കവറി കോൾ, വേദി സന്ദർശനം, തീം ബ്രെയിൻസ്റ്റോം. നിങ്ങൾ ഒരു സുതാര്യമായ ബജറ്റിലും ഉയർന്ന തലത്തിലുള്ള ക്രിയേറ്റീവ് ദിശയിലും ഒപ്പിടുന്നു.",
    "tl2.t": "8 ആഴ്ച മുമ്പ് — സപ്ലയേഴ്സ് & കരാറുകൾ",
    "tl2.d": "കാറ്ററേഴ്സ്, എവി, ഫോട്ടോഗ്രാഫേഴ്സ്, മാർക്വീ, ഗതാഗതം, സുരക്ഷ — എല്ലാം കരാർ ചെയ്തു. പ്രസക്തമായ യുഎഇ അധികാരികളിൽ പെർമിറ്റുകൾ ഫയൽ ചെയ്തു.",
    "tl3.t": "4 ആഴ്ച മുമ്പ് — കമ്മ്യൂണിക്കേഷൻസ് & RSVPs",
    "tl3.d": "ക്ഷണങ്ങൾ പുറത്തിറങ്ങുന്നു, രക്ഷിതാക്കളുടെ കമ്മ്യൂണിക്കേഷൻസ് ഇൻബോക്സുകളിൽ എത്തുന്നു, ടിക്കറ്റിംഗ് ആരംഭിക്കുന്നു, സ്പോൺസർമാർ സ്ഥിരീകരിക്കപ്പെടുന്നു, റൺ-ഓഫ്-ഷോ ഡ്രാഫ്റ്റ് ചെയ്യപ്പെടുന്നു.",
    "tl4.t": "1 ആഴ്ച മുമ്പ് — ഡ്രസ്സ് റിഹേഴ്സൽ",
    "tl4.d": "സ്കൂൾ ടീമുമായി പൂർണ്ണ വാക്ക്-ത്രൂ. അന്തിമ ഹെഡ്കൗണ്ട്. സ്പെയർ-പ്ലാൻ ബ്രീഫ് ചെയ്യപ്പെട്ടു. എല്ലാവർക്കും കാപ്പി.",
    "tl5.t": "ഇവന്റ് ദിനം — ഷോടൈം",
    "tl5.d": "ഞങ്ങളുടെ ടീം സൂര്യോദയത്തിൽ എത്തുന്നു, റിഹേഴ്സൽ, ഷോ, റാപ്പ് എന്നിവ നടത്തുന്നു. നിങ്ങൾ ദിവസം ആസ്വദിക്കുക. ബാക്കി ഞങ്ങൾ കൈകാര്യം ചെയ്യുന്നു.",

    "map.eyebrow": "ഞങ്ങൾ എവിടെ പ്രവർത്തിക്കുന്നു",
    "map.title": "ഏഴ് എമിറേറ്റുകളും. ഒരു വിശ്വസ്ത ടീം.",
    "map.lede": "യുഎഇയിലെ നിങ്ങളുടെ സ്കൂൾ എവിടെയാണെങ്കിലും — പരിശോധിച്ച സപ്ലയേഴ്സ്, പ്രദേശത്തെ ക്രൂകൾ, പൂർണ്ണ പെർമിറ്റ് കൈകാര്യം.",

    "culture.eyebrow": "യുഎഇ കലണ്ടർ അവബോധം",
    "culture.title": "പ്രധാനപ്പെട്ട നിമിഷങ്ങൾക്ക് ചുറ്റും ഞങ്ങൾ ആസൂത്രണം ചെയ്യുന്നു.",
    "culture.lede": "റമദാനിലോ ഈദിനോട് കൂട്ടിമുട്ടുന്ന ഒരു സ്കൂൾ ഇവന്റ് തെറ്റായി ചെയ്ത ഒന്നാണ്. ഞങ്ങളുടെ കലണ്ടറുകൾ യുഎഇ താളത്തിലേക്ക് ട്യൂൺ ചെയ്തിരിക്കുന്നു — നിങ്ങൾ commit ചെയ്യുന്നതിന് മുമ്പ് ഒരു കോൺഫ്ലിക്ട് ഞങ്ങൾ എല്ലായ്പ്പോഴും ഫ്ലാഗ് ചെയ്യും.",
    "c1.t": "റമദാൻ-റെഡി ഇവന്റുകൾ",
    "c1.d": "നേരത്തെയുള്ള ആരംഭ സമയങ്ങൾ, ഇഫ്ത്താർ കാറ്ററിംഗ്, മിതമായ സ്റ്റേജിംഗ്, പ്രാർത്ഥനാ സമയങ്ങളിൽ സംഗീതം ഇല്ല. പവിത്രമാസം തടസ്സപ്പെടുത്താതെ ദിവസം ഇപ്പോഴും ആഘോഷമാക്കുന്ന തരത്തിൽ ഞങ്ങൾ റൺ-ഓഫ്-ഷോ ക്രമീകരിക്കുന്നു.",
    "c2.t": "ഈദ് സമയം",
    "c2.d": "ഞങ്ങൾ ഒരിക്കലും രണ്ട് ഈദുകളിലെയും ആദ്യ ദിവസം ഷെഡ്യൂൾ ചെയ്യില്ല. ഈദിന് ചുറ്റും കുടുംബങ്ങൾക്ക് ശ്വസിക്കാനുള്ള ഇടം നൽകാൻ ഞങ്ങൾ ഇവന്റുകൾ മാറ്റുകയും, ഉചിതമായിടത്ത് ഈദ്-തീം ചെയ്ത അലങ്കാരങ്ങളിലേക്ക് ചരിക്കുകയും ചെയ്യുന്നു.",
    "c3.t": "യുഎഇ ദേശീയ ദിനം",
    "c3.d": "പതാക ചടങ്ങുകൾ, പൈതൃക പ്രവർത്തനങ്ങൾ, എമിറാത്തി-തീം വാർഷിക ദിനങ്ങൾ. ഞങ്ങളുടെ ദേശീയ ദിന കിറ്റുകൾ വസ്ത്രമായി അല്ലാതെ, ബഹുമാനത്തോടെ ചെയ്ത ശരിയായ ചിഹ്നങ്ങളോടെ വരുന്നു.",
    "c4.t": "പതാക ദിനം",
    "c4.d": "ദ്രുത രാവിലെ സഭകൾ, ക്യാമ്പസ് മുഴുവൻ പതാക നിമിഷങ്ങൾ. ആദരവ് ആഭാസമാകാതെ, ആത്മാർത്ഥമായി തോന്നിക്കുന്ന തരത്തിൽ ഞങ്ങൾ ഏകോപനം കൈകാര്യം ചെയ്യുന്നു.",
    "c5.t": "ഹിജ്റ ആചരണങ്ങൾ",
    "c5.d": "ഈ പ്രതിഫലന ദിനങ്ങളുമായി ഇവന്റുകൾ മത്സരിക്കാതിരിക്കാൻ ഞങ്ങൾ സ്കൂൾ കലണ്ടർ ക്രമീകരിക്കുന്നു. നിങ്ങളുടെ നേതൃത്വം ആവശ്യപ്പെട്ടാൽ ഐച്ഛിക സ്കൂൾ സഭകൾ ചേർക്കാം.",
    "c6.t": "അനുസ്മരണ ദിനം",
    "c6.d": "യുഎഇ മുഴുവൻ നിശ്ശബ്ദ ബഹുമാനത്തിന്റെ ദിനം. ഞങ്ങൾ എല്ലാ ഇവന്റ് കമ്മ്യൂണിക്കേഷൻസും നിർത്തുകയും ആ ദിവസം ഷെഡ്യൂൾ ചെയ്ത ഏതെങ്കിലും പ്രവർത്തനങ്ങൾ കൂടുതൽ അനുയോജ്യമായ ഒരു നിമിഷത്തിലേക്ക് മാറ്റുകയും ചെയ്യുന്നു.",

    "res.eyebrow": "സൗജന്യ വിഭവങ്ങൾ",
    "res.title": "ഞങ്ങളുടെ ടെംപ്ലേറ്റുകൾ എടുക്കൂ.",
    "res.lede": "ഞങ്ങൾ ഓരോ പുതിയ സ്കൂളുമായി പ്രവർത്തിക്കുമ്പോൾ നൽകുന്ന മൂന്ന് ഗൈഡുകൾ. സൗജന്യം, ഇമെയിൽ ഗേറ്റ് ഇല്ല.",
    "r1.t": "രക്ഷിതാക്കളുടെ കമ്മ്യൂണിക്കേഷൻ ടെംപ്ലേറ്റുകൾ",
    "r1.d": "ക്ഷണങ്ങൾ, RSVPs, റിമൈൻഡറുകൾ, ഇവന്റിന് ശേഷമുള്ള നന്ദി എന്നിവയ്ക്കുള്ള ഇമെയിൽ, വാട്ട്സ്ആപ്പ് സ്ക്രിപ്റ്റുകൾ. ദ്വിഭാഷാ EN/AR.",
    "r1.btn": "PDF ഡൗൺലോഡ് ചെയ്യൂ",
    "r2.t": "വാർഷിക ദിന തീം ഐഡിയകൾ",
    "r2.d": "സ്റ്റേജ്-ഡെക്ക് റഫറൻസുകൾ, കളർ പാലറ്റുകൾ, അലങ്കാര ഗൈഡുകൾ എന്നിവയോടൊപ്പം യുഎഇ സ്കൂളുകളിൽ നിന്നുള്ള 40+ പരീക്ഷിച്ച തീമുകൾ.",
    "r2.btn": "PDF ഡൗൺലോഡ് ചെയ്യൂ",
    "r3.t": "സ്കൂൾ ഇവന്റ് ബജറ്റ് വർക്ക്ഷീറ്റ്",
    "r3.d": "മിക്ക യുഎഇ സ്കൂളുകളും മറന്നുപോകുന്ന ലൈൻ ഇന്റങ്ങളോടൊപ്പം ഒരു ലളിത സ്പ്രെഡ്ഷീറ്റ് — പെർമിറ്റുകൾ, സംരക്ഷണം, കോൺടിഞ്ചൻസി. എഡിറ്റ് ചെയ്യാവുന്നത്.",
    "r3.btn": "PDF ഡൗൺലോഡ് ചെയ്യൂ",

    "calc.eyebrow": "ദ്രുത ഏകദേശ വില",
    "calc.title": "ഒരു ഇവന്റ് എത്ര ചെലവ് വരും?",
    "calc.lede": "സ്ലൈഡറുകൾ വലിക്കൂ. ഇത് ഒരു ഏകദേശ ഗൈഡ് ആണ്, ക്വോട്ട് അല്ല — ഓരോ സ്കൂളും വ്യത്യസ്തമാണ്. ഒരു പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ ഞങ്ങൾ നിങ്ങൾക്ക് ഒരു യഥാർത്ഥ നമ്പർ നൽകും.",
    "calc.estimate": "ഏകദേശ ശ്രേണി",
    "calc.note": "സൂചകം മാത്രം. വേദി, പെർമിറ്റുകൾ, അന്തിമ സ്കോപ്പ് എന്നിവയ്ക്ക് വിധേയം.",
    "calc.cta": "കൃത്യമായ ക്വോട്ട് നേടൂ",
    "calc.audience": "പ്രേക്ഷക വലിപ്പം",
    "calc.duration": "ഇവന്റ് ദൈർഘ്യം",
    "calc.services": "ആവശ്യമുള്ള സേവനങ്ങൾ",
    "calc.svcAv": "ശബ്ദം, ലൈറ്റിംഗ് & സ്റ്റേജിംഗ്",
    "calc.svcCat": "കാറ്ററിംഗ്",
    "calc.svcPho": "ഫോട്ടോഗ്രഫി & വീഡിയോ",
    "calc.svcDec": "അലങ്കാരം & തീമിംഗ്",
    "calc.svcPerf": "പെർഫോമേഴ്സ് / വിനോദക്കാർ",
    "calc.svcTrn": "ഗതാഗതം",
    "float.cta": "നിങ്ങളുടെ ഇവന്റ് ആസൂത്രണം ചെയ്യൂ",

    "mvv.eyebrow": "ഞങ്ങൾ എന്തിന് നിൽക്കുന്നു",
    "mvv.title": "ദൗത്യം, ദർശനം, ഞങ്ങൾ വിട്ടുവീഴ്ച ചെയ്യാത്ത മൂല്യങ്ങൾ.",
    "mvv.m.t": "ദൗത്യം",
    "mvv.m.d": "യുഎഇയിലെ ഓരോ സ്കൂൾ ഇവന്റും ടീമിന് മാസങ്ങളോളം തയ്യാറെടുപ്പ് ഉണ്ടായിരുന്നത് പോലെ തോന്നിക്കുക — അവർക്ക് ആഴ്ചകൾ മാത്രമേ ഉണ്ടായിരുന്നുള്ളൂ എങ്കിലും.",
    "mvv.v.t": "ദർശനം",
    "mvv.v.d": "എമിറേറ്റുകളിലെ സ്കൂൾ ഇവന്റുകൾ മേഖലയ്ക്ക് മാനദണ്ഡങ്ങളായിരിക്കുന്ന ഒരു ഭാവി — സുരക്ഷിതവും, സുസ്ഥിരവും, സന്തോഷകരവും, വ്യക്തമായും വിദ്യാർത്ഥി-നേതൃത്വം.",
    "mvv.va.t": "മൂല്യങ്ങൾ",
    "mvv.va1.t": "ശാന്തത.",
    "mvv.va1.d": "ഞങ്ങൾ സ്പെയർ പ്ലാൻ, സ്പെയർ ക്ഷമ, സ്പെയർ മൈക്ക് കൊണ്ടുവരുന്നു.",
    "mvv.va2.t": "സത്യസന്ധത.",
    "mvv.va2.d": "നിങ്ങൾക്ക് വായിക്കാൻ കഴിയുന്ന ബജറ്റുകൾ. വിശ്വസിക്കാൻ കഴിയുന്ന ഷെഡ്യൂളുകൾ. തെറ്റുകൾ ഉടനെ ഉടമസ്ഥത ഏറ്റെടുക്കുന്നു.",
    "mvv.va3.t": "സുരക്ഷ.",
    "mvv.va3.d": "ക്യാമ്പസിലെ ഓരോ കുട്ടിയും ഞങ്ങളുടേത് പോലെ പരിഗണിക്കപ്പെടുന്നു. ഓരോ പെർമിറ്റും ഒപ്പിട്ടു.",
    "mvv.va4.t": "കരവിദ്യ.",
    "mvv.va4.d": "\"മതിയായത്\" മതിയല്ല. ദിവസം അക്ഷീണമായി തോന്നുന്നതിന് ഞങ്ങൾ വിശദാംശങ്ങളിൽ സമർപ്പിക്കുന്നു.",
    "mvv.va5.t": "സന്തോഷം.",
    "mvv.va5.d": "കുട്ടികൾ സന്തുഷ്ടരല്ലെങ്കിൽ, ഞങ്ങൾ ജോലി ചെയ്തിട്ടില്ല.",

    "sus.eyebrow": "സുസ്ഥിരത",
    "sus.title": "മികച്ച ഇവന്റുകൾ, ലഘുവായ കാൽപ്പാട്.",
    "sus.p1": "യുഎഇ സ്കൂളുകൾ കാലാവസ്ഥാ പ്രവർത്തനത്തിൽ മേഖലയെ നയിക്കുന്നു, ഇവന്റുകൾ അപവാദമാകരുത്. അനുഭവത്തിൽ മൂലയിൽ മുറിക്കാതെ തന്നെ ഓരോ വിറ്റ നോവ ഇവന്റും ഗ്രഹത്തെ മനസ്സിൽ വെച്ച് ഞങ്ങൾ രൂപകൽപ്പന ചെയ്യുന്നു.",
    "sus.p2": "ഞങ്ങളുടെ ഡിഫോൾട്ട് പുനരുപയോഗിക്കാവുന്നതാണ്. ഞങ്ങളുടെ ബാക്കപ്പ് റീസൈക്കിൾ ചെയ്യാവുന്നതാണ്. സിംഗിൾ-യൂസ് അവസാന ആശ്രയം ആണ്, ആദ്യത്തേതല്ല.",
    "sus.c1.t": "പുനരുപയോഗിക്കാവുന്നത്, ഡിസ്പോസബിൾ അല്ല",
    "sus.c1.d": "ബാക്ക്ഡ്രോപ്പുകൾ, സൈനേജ്, പ്രോപ്പുകൾ, സ്റ്റേജ് സെറ്റുകൾ എന്നിവ വർഷം തോറും സംഭരിക്കാനും പുനരുപയോഗിക്കാനും രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു.",
    "sus.c2.t": "പ്രാദേശിക സപ്ലയേഴ്സ് ആദ്യം",
    "sus.c2.d": "ചെറിയ യാത്രകൾ, പുതിയ ഭക്ഷണം, ചെറിയ കാർബൺ ബില്ലുകൾ — കൂടാതെ യുഎഇ സമ്പദ്‌വ്യവസ്ഥയ്ക്ക് മികച്ച പിന്തുണ.",
    "sus.c3.t": "പ്ലാന്റ്-ഫോർവേഡ് മെനുകൾ",
    "sus.c3.d": "ഓരോ ഇവന്റിലും കുറഞ്ഞത് ഒരു പൂർണ്ണ പ്ലാന്റ്-അധിഷ്ഠിത മെനു ഓപ്ഷൻ, ചോദ്യങ്ങൾ ഇല്ലാതെ.",
    "sus.c4.t": "പ്രിന്റഡ് മാലിന്യം ഇല്ല",
    "sus.c4.d": "ഡിജിറ്റൽ ടിക്കറ്റുകൾ, QR ചെക്ക്-ഇൻസ്, പങ്കിട്ട ഇവന്റ് ആപ്പുകൾ പേപ്പർ പ്രോഗ്രാമുകളെയും ഫ്ലൈയറുകളെയും മാറ്റിസ്ഥാപിക്കുന്നു.",
    "sus.c5.t": "സത്യസന്ധമായ റിപ്പോർട്ടിംഗ്",
    "sus.c5.d": "ഓരോ ഇവന്റും ഒരു ചെറിയ സുസ്ഥിരത റിപ്പോർട്ടോടെ പോകുന്നു — ഞങ്ങൾ എന്ത് പുനരുപയോഗിച്ചു, എന്ത് റീസൈക്കിൾ ചെയ്തു, എന്ത് മെച്ചപ്പെടുത്താം.",

    "e1.t": "കറിക്കുലം & അക്കാദമിക് ഗൈഡുകൾ",
    "e1.d": "വിഷയ ഷോകേസുകൾ, IGCSE/A-ലെവൽ സന്ധ്യകൾ, യൂണിവേഴ്സിറ്റി ഫെയറുകൾ.",
    "e2.t": "ഓറിയന്റേഷൻ & സ്വാഗത ദിനങ്ങൾ",
    "e2.d": "പുതിയ വിദ്യാർത്ഥി ഇൻടേക്ക്, KG1 സെറ്റിൽ-ഇൻ രാവിലെകൾ, രക്ഷിതാക്കളുടെ ടൂറുകൾ.",
    "e3.t": "വാർഷിക ദിനം & സാംസ്കാരിക ഉത്സവങ്ങൾ",
    "e3.d": "തീമുകൾ, നൃത്തങ്ങൾ, അവാർഡുകൾ എന്നിവയോടൊപ്പം ഫ്ലാഗ്ഷിപ്പ് സ്റ്റേജ് നിർമ്മാണങ്ങൾ.",
    "e4.t": "ബിരുദദാന ചടങ്ങുകൾ",
    "e4.d": "പ്രോസഷണൽസ്, ഗൗൺസ്, പ്രസംഗങ്ങൾ, ഫോട്ടോ വോളുകൾ, ആഫ്റ്റർ-പാർട്ടികൾ.",
    "e5.t": "കായിക ദിനങ്ങളും ഇന്റർ-ഹൗസ് ഇവന്റുകളും",
    "e5.d": "അത്‌ലറ്റിക്സ്, സ്വിമ്മിംഗ് ഗാലകൾ, ഫുട്ബോൾ ലീഗുകൾ, ഫൺ റൺസ്.",
    "e6.t": "ദേശീയ & പൈതൃക ദിനങ്ങൾ",
    "e6.d": "യുഎഇ ദേശീയ ദിനം, പതാക ദിനം, ഇസ്‌ലാമിക, സാംസ്കാരിക ആഘോഷങ്ങൾ.",
    "e7.t": "അധ്യാപക ആദരവ് & PTA ഇവന്റുകൾ",
    "e7.d": "സ്റ്റാഫ് അവാർഡുകൾ, വെൽനസ് റിട്രീറ്റുകൾ, രക്ഷിതാക്കൾ-സ്കൂൾ സന്ധ്യകൾ.",
    "e8.t": "മത്സരങ്ങളും ഒളിമ്പിയാഡുകളും",
    "e8.d": "സ്പെല്ലിംഗ് ബീകൾ, സയൻസ് ഫെയറുകൾ, റോബോട്ടിക്സ്, ആർട്ട് എക്സിബിഷനുകൾ.",
    "e9.t": "കമ്മ്യൂണിറ്റി & ഫണ്ട്റെയിസിംഗ് ഗാലകൾ",
    "e9.d": "ചാരിറ്റി ഡിന്നറുകൾ, ലേല രാത്രികൾ, അൽമ്മനൈ റിയൂണിയൻസ്.",

    "process.eyebrow": "ഞങ്ങൾ എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    "process.title": "കിക്ക്-ഓഫിൽ നിന്ന് ക്ലീനപ്പ് വരെ വ്യക്തവും ശാന്തവുമായ ഒരു പ്രക്രിയ",
    "p1.t": "കണ്ടെത്തുക",
    "p1.d": "ലക്ഷ്യങ്ങൾ, പ്രേക്ഷകർ, ടോൺ, നിയന്ത്രണങ്ങൾ മനസ്സിലാക്കാൻ ഞങ്ങൾ നിങ്ങളുടെ നേതൃത്വ ടീമുമായി കണ്ടുമുട്ടുന്നു. ഞങ്ങൾ വേദി സന്ദർശിക്കുകയും കലണ്ടർ അവലോകനം ചെയ്യുകയും ചെയ്യുന്നു.",
    "p2.t": "രൂപകൽപ്പന",
    "p2.d": "ഒരു ക്രിയേറ്റീവ് ബ്രീഫ്, തീം, റൺ-ഓഫ്-ഷോ, ബജറ്റ് — സാധാരണ ഭാഷയിൽ ഒപ്പിടാൻ അവതരിപ്പിക്കുന്നു, ജാർഗൺ ഇല്ല.",
    "p3.t": "ആസൂത്രണം",
    "p3.d": "സപ്ലയേഴ്സ്, കരാറുകൾ, പെർമിറ്റുകൾ, റിസ്ക് അസസ്മെന്റുകൾ, കമ്മ്യൂണിക്കേഷൻസ്, ആഴ്ചതോറുമുള്ള ചെക്ക്-ഇൻസോടൊപ്പം ഒരു പങ്കിട്ട പ്രോജക്ട് ടൈംലൈൻ.",
    "p4.t": "നൽകുക",
    "p4.d": "ലോഡ്-ഇൻ മുതൽ ലോഡ്-ഔട്ട് വരെ സ്ഥലത്തെ ടീം. ഞങ്ങൾ റിഹേഴ്സൽ, ഷോ, റാപ്പ് എന്നിവ നടത്തുന്നു — സ്കൂൾ കാണാപ്പാഠമായി വിടുന്നു.",
    "p5.t": "അവലോകനം",
    "p5.d": "ഫോട്ടോകൾ, വീഡിയോ, ഹാജർ, ചെലവ് റിപ്പോർട്ടുകൾ, കൂടാതെ അടുത്ത വർഷം ഇനിയും മികച്ചതാക്കാനുള്ള ഒരു ഡിബ്രീഫ്.",

    "why.eyebrow": "എന്തുകൊണ്ട് സ്കൂളുകൾ വിറ്റ നോവ തിരഞ്ഞെടുക്കുന്നു",
    "why.title": "ശാന്തം, കഴിവുള്ളത്, സ്കൂളുകൾക്കായി നിർമ്മിച്ചത്.",
    "why.lede": "ഞങ്ങൾ സംരക്ഷണം, ടൈംടേബിളുകൾ, രക്ഷിതാക്കൾ എന്നിവയുടെ ഭാഷ സംസാരിക്കുന്നു. ഞങ്ങൾ വെൻഡർ-നിഷ്പക്ഷരും, ബജറ്റ്-അച്ചടക്കമുള്ളവരും, ഓരോ വിദ്യാർത്ഥിയെയും ബഹുമാന്യനായ അതിഥി പോലെ പരിഗണിക്കുന്നു.",
    "w1.t": "ഒരു സമ്പർക്ക ബിന്ദു",
    "w1.d": "ആദ്യ കോളിൽ നിന്ന് അന്തിമ റിപ്പോർട്ട് വരെ ഒരു സമർപ്പിത ഇവന്റ് ലീഡ്.",
    "w2.t": "സുതാര്യമായ ബജറ്റുകൾ",
    "w2.d": "ഓരോ ദിർഹവും ട്രാക്ക് ചെയ്യപ്പെടുന്നു, ഓരോ ക്വോട്ടും ഒരു പങ്കിട്ട ഷീറ്റിൽ.",
    "w3.t": "യുഎഇ-വൈഡ് നെറ്റ്‌വർക്ക്",
    "w3.d": "ഏഴ് എമിറേറ്റുകളിലും പരിശോധിച്ച സപ്ലയേഴ്സ്.",
    "w4.t": "കുട്ടി-സുരക്ഷിതമായി രൂപകൽപ്പന ചെയ്തത്",
    "w4.d": "സംരക്ഷണ-പരിശീലനം ലഭിച്ച ക്രൂ, DBS-പരിശോധിച്ച ജീവനക്കാർ, വ്യക്തമായ പ്രോട്ടോക്കോളുകൾ.",
    "w5.t": "ദിവസം ശാന്തം",
    "w5.d": "ഞങ്ങൾ സ്പെയർ പ്ലാൻ, സ്പെയർ മൈക്ക്, സ്പെയർ ക്ഷമ കൊണ്ടുവരുന്നു.",

    "contact.eyebrow": "നമുക്ക് നിങ്ങളുടെ അടുത്ത ഇവന്റ് ആസൂത്രണം ചെയ്യാം",
    "contact.title": "നിങ്ങൾ എന്താണ് imagine ചെയ്യുന്നത് എന്ന് ഞങ്ങളോട് പറയൂ.",
    "contact.lede": "കുറച്ച് വിശദാംശങ്ങൾ പങ്കിടൂ, ഒരു പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ സൗജന്യമായി, യാതൊരു ബാധ്യതയും ഇല്ലാതെ ഒരു നിർദ്ദേശത്തോടെ ഞങ്ങൾ തിരികെ വരും.",
    "form.school": "സ്കൂളിന്റെ പേര്",
    "form.name": "നിങ്ങളുടെ പേര്",
    "form.email": "ഇമെയിൽ",
    "form.phone": "ഫോൺ",
    "form.type": "ഇവന്റ് തരം",
    "form.notes": "കൂടുതൽ കാര്യങ്ങൾ ഞങ്ങളോട് പറയൂ",
    "form.notesPh": "തീയ്യതി, പ്രേക്ഷക വലിപ്പം, തീം, പ്രധാനപ്പെട്ട എന്തെങ്കിലും...",
    "form.submit": "അന്വേഷണം അയയ്ക്കൂ",
    "form.t1": "വാർഷിക ദിനം / സാംസ്കാരിക ഉത്സവം",
    "form.t2": "ബിരുദദാന ചടങ്ങ്",
    "form.t3": "കായിക ദിനം / ടൂർണ്ണമെന്റ്",
    "form.t4": "അക്കാദമിക് ഗൈഡ് / ഓറിയന്റേഷൻ",
    "form.t5": "അധ്യാപക / PTA ഇവന്റ്",
    "form.t6": "മറ്റുള്ളവ",
    "form.success": "നന്ദി {name} — {school} എന്നതിനുള്ള നിങ്ങളുടെ അന്വേഷണം ഞങ്ങൾ സ്വീകരിച്ചു, ഒരു പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ മറുപടി നൽകും.",
    "form.error": "ദയവായി സ്കൂളിന്റെ പേര്, നിങ്ങളുടെ പേര്, ഇമെയിൽ എന്നിവ പൂരിപ്പിക്കൂ.",
    "form.sending": "അയക്കുന്നു…",
    "form.fail": "ക്ഷമിക്കണം — എന്തോ തെറ്റ് സംഭവിച്ചു. ദയവായി ഞങ്ങൾക്ക് നേരിട്ട് hello@vitanova.ae എന്ന വിലാസത്തിൽ ഇമെയിൽ ചെയ്യൂ.",

    "footer.tag": "യുണൈറ്റഡ് അറബ് എമിറേറ്റുകളിലെ സ്കൂളുകൾക്കുള്ള ഇവന്റ് മാനേജ്മെന്റ്.",
    "footer.visit": "സന്ദർശിക്കൂ",
    "footer.address": "വിറ്റ നോവ ഇവന്റ്സ് എൽ.എൽ.സി.<br />ദുബൈ, യുണൈറ്റഡ് അറബ് എമിറേറ്റുകൾ",
    "footer.llc": "വിറ്റ നോവ ഇവന്റ്സ് എൽ.എൽ.സി. — ദുബൈ, യുഎഇ",
    "footer.contact": "ബന്ധപ്പെടുക",
    "footer.follow": "പിന്തുടരൂ",
    "footer.whatsapp": "വാട്ട്സ്ആപ്പ് ചാറ്റ്",
    "footer.rights": "എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",
    "footer.designed": "യുഎഇയിൽ രൂപകൽപ്പന ചെയ്തത്.",

    "wa.title": "വിറ്റ നോവയുമായി ചാറ്റ് ചെയ്യൂ",
    "wa.sub": "ഞങ്ങൾ സാധാരണ മിനിറ്റുകൾക്കുള്ളിൽ മറുപടി നൽകും",
    "wa.bubble": "👋 നമസ്കാരം! ഒരു ഇവന്റിനെക്കുറിച്ച് ചോദ്യമുണ്ടോ? ഞങ്ങൾക്ക് ഒരു വാട്ട്സ്ആപ്പ് സന്ദേശം അയച്ചാൽ ഞങ്ങൾ ഉടൻ മറുപടി നൽകാം.",
    "wa.cta": "വാട്ട്സ്ആപ്പ് തുറക്കൂ",
    "wa.open": "വാട്ട്സ്ആപ്പ് ചാറ്റ് തുറക്കൂ",
    "wa.close": "ചാറ്റ് അടയ്ക്കൂ",
  },
  fr: {
    "brand": "Vita Nova",
    "nav.services": "Services",
    "nav.events": "Événements",
    "nav.process": "Processus",
    "nav.why": "Pourquoi nous",
    "nav.story": "Notre histoire",
    "nav.faq": "FAQ",
    "nav.timeline": "Calendrier",
    "nav.calc": "Estimation",
    "nav.quote": "Demander un devis",
    "lang.label": "English",

    "hero.eyebrow": "Émirats · Gestion d'événements pour les écoles",
    "hero.title1": "Des événements qui rendent",
    "hero.title2": "la vie scolaire inoubliable.",
    "hero.lede": "De la première soirée de présentation des programmes à la cérémonie de remise des diplômes, Vita Nova planifie et gère chaque détail pour que votre équipe puisse se concentrer sur les élèves. Budgets, logistique, fournisseurs, conception, déroulé — nous gérons tout, du début à la fin.",
    "hero.cta1": "Planifier votre événement",
    "hero.cta2": "Découvrir nos services",
    "hero.trust1": "événements livrés",
    "hero.trust2": "écoles partenaires",
    "hero.trust3": "Émirats desservis",

    "stack.l1": "Journée annuelle",
    "stack.t1": "« Horizons de demain »",
    "stack.m1": "600 invités · 14 actes · Dubaï",
    "stack.l2": "Journée sportive",
    "stack.t2": "Athlétisme inter-maisons",
    "stack.m2": "4 maisons · 22 stations · Charjah",
    "stack.l3": "Remise des diplômes",
    "stack.t3": "Promotion 2026",
    "stack.m3": "320 diplômés · Abou Dabi",

    "services.eyebrow": "Ce que nous faisons",
    "services.title": "Gestion d'événements complète pour les écoles",
    "services.lede": "Une équipe, un calendrier, un interlocuteur unique. Vita Nova gère l'intégralité de l'événement pour que votre personnel n'ait pas à s'en soucier.",

    "s1.t": "Guides académiques et orientations",
    "s1.d": "Soirées de programmes, orientations des nouveaux élèves, soirées d'accueil des parents et roadshows de préparation à l'université — informatifs, fidèles à votre marque et accueillants.",
    "s2.t": "Programmes annuels et fonctions",
    "s2.d": "Rassemblements de rentrée, journées des fondateurs, semaines culturelles, soirées de reconnaissance et célébrations de fin d'année.",
    "s3.t": "Journées annuelles et remises de diplômes",
    "s3.d": "Spectacles scéniques, soirées de remise de prix et cérémonies de diplômes complètes avec chorégraphie, sonorisation et confettis — tout calé à la minute.",
    "s4.t": "Journées sportives et tournois",
    "s4.d": "Athlétisme inter-maisons, galas de natation, tournois de football et journées de jeux inclusives — équipement, commissaires, scoring et médailles.",
    "s5.t": "Créatif et design",
    "s5.d": "Thèmes, décors de scène, arrière-plans, identité de marque, invitations, signalétique, zones photo et décor sur place qui unifient tout l'événement.",
    "s6.t": "Marketing et communication",
    "s6.d": "Identité événementielle, campagnes sur les réseaux sociaux, dossiers sponsors, billetterie, applications parents et résumés vidéo après l'événement.",
    "s7.t": "Budget et finances",
    "s7.d": "Budgétisation transparente, devis multi-fournisseurs, échéancier de paiement, gestion des sponsors et réconciliation finale avec rapport ligne par ligne.",
    "s8.t": "Logistique et fournisseurs",
    "s8.d": "Traiteurs, photographes, vidéastes, sonorisation, transport, sécurité, premiers secours, marquises, cadeaux — vérifiés, contractés et gérés.",
    "s9.t": "Sécurité, autorisations et conformité",
    "s9.d": "Autorisations des autorités émiriennes, évaluations des risques, protocoles de protection de l'enfance, premiers secours, sécurité incendie et coordination des assurances.",
    "s10.t": "Cadeaux et merchandise",
    "s10.d": "Kits personnalisés, trophées, médailles, certificats, albums de fin d'année et produits sur mesure — sourcés, emballés et livrés sur votre campus.",
    "s11.t": "Ateliers et sorties",
    "s11.d": "Camps de leadership, journées de team-building, excursions éducatives et retraites nocturnes avec plans de supervision complets.",
    "s12.t": "Planification du calendrier annuel",
    "s12.d": "Nous construisons le calendrier complet des événements de l'école au début de l'année scolaire pour qu'aucun événement ne se chevauche et que chaque échéance soit respectée.",

    "events.eyebrow": "Les événements que nous adorons organiser",
    "events.title": "Pensés pour le rythme d'une année scolaire",

    "story.eyebrow": "Notre histoire",
    "story.title": "Nous avons fondé Vita Nova après mille tournées scolaires parties de travers.",
    "story.p1": "Ensemble, nous avons passé plus de quinze ans au sein des écoles émiriennes — organisant des événements, coordonnant des calendriers, courant après les fournisseurs et nous tenant aux côtés de directeurs nerveux à 6h du matin le jour J. Nous aimions ce travail et détestions le chaos. Les mêmes rushs de dernière minute, les mêmes appels aux fournisseurs, les mêmes fils WhatsApp frénétiques la veille au soir.",
    "story.p2": "Alors en 2024, nous avons monté l'équipe que nous aurions aimé avoir : un interlocuteur unique, des budgets transparents, du calme le jour J et un vrai plan B. Vita Nova, c'est la gestion d'événements telle qu'elle devrait être — gérée par des gens qui ont réellement été de l'autre côté du tableau.",
    "story.p3": "Aujourd'hui, nous travaillons avec des écoles dans les sept Émirats — et nous arrivons toujours sur le site au lever du soleil.",
    "story.caption": "Fondée en 2024, Dubaï · Une équipe construite par des gens qui ont été de l'autre côté du tableau",

    "faq.eyebrow": "Questions fréquentes",
    "faq.title": "Ce que les écoles demandent avant de réserver",
    "faq.q1.t": "Combien de temps à l'avance faut-il réserver ?",
    "faq.q1.d": "<p>Idéalement 6 à 8 semaines pour la plupart des événements, 12 semaines ou plus pour les journées annuelles et les remises de diplômes. Nous avons aussi accompli des miracles en deux semaines lorsqu'une école apprend soudainement la visite d'un ministre — mais plus de temps signifie toujours une journée plus sereine.</p>",
    "faq.q2.t": "Gérez-vous les autorisations et approbations ?",
    "faq.q2.d": "<p>Oui. Nous coordonnons avec les autorités émiriennes concernées les autorisations de lieu, d'incendie, de sécurité et d'événements pour enfants, et nous partageons une évaluation des risques avec votre équipe de direction avant le jour J.</p>",
    "faq.q3.t": "Pouvez-vous travailler avec notre budget ?",
    "faq.q3.d": "<p>Toujours. Nous présentons un budget transparent à trois niveaux avant que vous ne vous engagiez, et chaque dirham est suivi dans une feuille partagée pour que vous sachiez toujours où va l'argent.</p>",
    "faq.q4.t": "Fournissez-vous l'équipement et la décoration ?",
    "faq.q4.d": "<p>Oui — sono, lumières, scène, décoration, signalétique, murs photo, marquises et tout ce dont vous avez besoin. Tout est loué ou sourcé, jamais permanent, et nous laissons votre campus exactement comme nous l'avons trouvé.</p>",
    "faq.q5.t": "Votre personnel est-il formé à la protection de l'enfance ?",
    "faq.q5.d": "<p>Chaque membre de l'équipe Vita Nova est formé à la protection de l'enfance et a fait l'objet d'une vérification de ses antécédents. Nous suivons la politique de protection de l'enfance de votre école le jour J, et nous ne photographions ni filmons jamais les élèves sans consentement explicite.</p>",
    "faq.q6.t": "Quels Émirats couvrez-vous ?",
    "faq.q6.d": "<p>Les sept. Nous avons des fournisseurs vérifiés à Abou Dabi, Dubaï, Charjah, Ajman, Oumm al-Qaïwaïn, Ras el-Khaïmah et Fujairah.</p>",
    "faq.q7.t": "Que se passe-t-il après l'événement ?",
    "faq.q7.d": "<p>Vous recevez un débriefing complet sous une semaine : photos, moments forts en vidéo, rapports de fréquentation et de dépenses, ainsi qu'un court appel de débriefing pour que l'année prochaine soit encore meilleure.</p>",
    "faq.q8.t": "Pouvons-nous voir un exemple de calendrier d'abord ?",
    "faq.q8.d": "<p>Bien sûr. Après notre premier appel, nous enverrons un exemple de déroulé et de budget pour le type d'événement que vous avez en tête — sans engagement, à garder pour vous.</p>",

    "timeline.eyebrow": "Du coup d'envoi au lever de rideau",
    "timeline.title": "À quoi ressemble vraiment un calendrier d'événement.",
    "timeline.lede": "Un événement phare typique de Vita Nova s'étend sur douze semaines. Voici exactement ce que nous faisons à chaque étape pour que vous ne vous demandiez jamais « que se passe-t-il maintenant ? ».",
    "tl1.t": "12 semaines avant — brief et budget",
    "tl1.d": "Appel de découverte, visite du lieu, brainstorm sur le thème. Vous validez un budget transparent et la direction créative générale.",
    "tl2.t": "8 semaines avant — fournisseurs et contrats",
    "tl2.d": "Traiteur, sonorisation, photographe, marquise, transport, sécurité — tous contractés. Autorisations déposées auprès des autorités émiriennes concernées.",
    "tl3.t": "4 semaines avant — communication et RSVP",
    "tl3.d": "Les invitations partent, les communications parents arrivent, la billetterie ouvre, les sponsors sont confirmés, le déroulé est rédigé.",
    "tl4.t": "1 semaine avant — répétition générale",
    "tl4.d": "Parcours complet avec l'équipe de l'école. Effectif final. Plan B briefé. Du café pour tout le monde.",
    "tl5.t": "Jour J — showtime",
    "tl5.d": "Notre équipe arrive au lever du soleil, gère la répétition, le spectacle et le démontage. Vous profitez de la journée. Nous nous occupons du reste.",

    "map.eyebrow": "Où nous travaillons",
    "map.title": "Les sept Émirats. Une seule équipe de confiance.",
    "map.lede": "Fournisseurs vérifiés, équipes locales et gestion complète des autorisations — partout où se trouve votre école aux Émirats.",

    "culture.eyebrow": "Le calendrier émirien en tête",
    "culture.title": "Nous planifions autour des moments qui comptent.",
    "culture.lede": "Un événement scolaire qui tombe pendant le Ramadan ou qui entre en conflit avec l'Aïd est un événement mal fait. Nos calendriers sont calés sur le rythme émirien — et nous signalerons toujours un conflit avant que vous ne vous engagiez.",
    "c1.t": "Événements compatibles avec le Ramadan",
    "c1.d": "Horaires de début plus tôt, restauration pour l'Iftar, mise en scène modeste, pas de musique pendant les heures de prière. Nous ajustons le déroulé pour que la journée reste festive sans perturber le mois saint.",
    "c2.t": "Calendrier autour de l'Aïd",
    "c2.d": "Nous ne programmons jamais le premier jour des deux Aïd. Autour de l'Aïd, nous décalons les événements pour laisser du souffle aux familles et mettons en avant une déco à thème lorsque c'est approprié.",
    "c3.t": "Fête nationale des Émirats",
    "c3.d": "Cérémonies des drapeaux, activités patrimoniales et journées annuelles à thème émirien. Nos kits de fête nationale présentent les bons symboles avec respect — jamais en déguisement.",
    "c4.t": "Journée du drapeau",
    "c4.d": "Brèves assemblées matinales et moments drapeau à l'échelle du campus. Nous coordonnons pour que l'hommage soit sincère, pas spectaculaire.",
    "c5.t": "Observances hégiriennes",
    "c5.d": "Nous ajustons le calendrier scolaire pour que les événements n'entrent pas en concurrence avec ces jours de recueillement. Des assemblées optionnelles peuvent être ajoutées si votre direction le souhaite.",
    "c6.t": "Journée du martyr",
    "c6.d": "Un jour de respect silencieux à travers les Émirats. Nous suspendons toutes les communications d'événement et déplaçons toute activité prévue ce jour-là vers un moment plus approprié.",

    "res.eyebrow": "Ressources gratuites",
    "res.title": "Piquez-nous nos modèles.",
    "res.lede": "Trois guides que nous offrons à chaque nouvelle école avec laquelle nous travaillons. Gratuits, sans collecte d'e-mail.",
    "r1.t": "Modèles de communication parents",
    "r1.d": "Scripts d'e-mails et WhatsApp pour invitations, RSVP, rappels et remerciements post-événement. Bilingue FR/AR.",
    "r1.btn": "Télécharger le PDF",
    "r2.t": "Idées de thèmes pour la journée annuelle",
    "r2.d": "Plus de 40 thèmes éprouvés dans les écoles émiriennes avec références de scène, palettes de couleurs et guides de décoration.",
    "r2.btn": "Télécharger le PDF",
    "r3.t": "Feuille de budget événementiel scolaire",
    "r3.d": "Un tableur simple avec les postes que la plupart des écoles émiriennes oublient — autorisations, protection de l'enfance, contingence. Modifiable.",
    "r3.btn": "Télécharger le PDF",

    "calc.eyebrow": "Estimation rapide",
    "calc.title": "Combien un événement pourrait-il coûter ?",
    "calc.lede": "Déplacez les curseurs. Ce guide est approximatif, ce n'est pas un devis — chaque école est différente. Nous vous donnerons un chiffre réel sous un jour ouvré.",
    "calc.estimate": "Fourchette estimée",
    "calc.note": "Indicatif uniquement. Selon le lieu, les autorisations et le périmètre final.",
    "calc.cta": "Obtenir un devis exact",
    "calc.audience": "Taille du public",
    "calc.duration": "Durée de l'événement",
    "calc.services": "Services requis",
    "calc.svcAv": "Son, lumière et scène",
    "calc.svcCat": "Restauration",
    "calc.svcPho": "Photographie et vidéo",
    "calc.svcDec": "Décoration et thématisation",
    "calc.svcPerf": "Artistes / animateurs",
    "calc.svcTrn": "Transport",
    "float.cta": "Planifier votre événement",

    "mvv.eyebrow": "Ce en quoi nous croyons",
    "mvv.title": "Mission, vision et les valeurs sur lesquelles nous ne transigerons pas.",
    "mvv.m.t": "Mission",
    "mvv.m.d": "Faire en sorte que chaque événement scolaire aux Émirats donne l'impression que l'équipe a eu des mois pour se préparer — même lorsqu'elle n'a eu que des semaines.",
    "mvv.v.t": "Vision",
    "mvv.v.d": "Un avenir où les événements scolaires des Émirats deviennent la référence régionale — sûrs, durables, joyeux et clairement portés par les élèves.",
    "mvv.va.t": "Valeurs",
    "mvv.va1.t": "Calme.",
    "mvv.va1.d": "Nous apportons le plan B, la patience de secours et le micro de secours.",
    "mvv.va2.t": "Honnêteté.",
    "mvv.va2.d": "Des budgets lisibles. Des plannings fiables. Les erreurs reconnues vite.",
    "mvv.va3.t": "Sécurité.",
    "mvv.va3.d": "Chaque enfant sur le campus est traité comme le nôtre. Chaque autorisation, signée.",
    "mvv.va4.t": "Exigence.",
    "mvv.va4.d": "\"Suffisant\" ne l'est pas. Nous soignons les détails pour que la journée semble sans effort.",
    "mvv.va5.t": "Joie.",
    "mvv.va5.d": "Si les enfants ne sont pas ravis, nous n'avons pas fait notre travail.",

    "sus.eyebrow": "Durabilité",
    "sus.title": "De meilleurs événements, une empreinte plus légère.",
    "sus.p1": "Les écoles émiriennes ouvrent la voie régionale en matière d'action climatique, et les événements ne devraient pas faire exception. Nous concevons chaque événement Vita Nova en pensant à la planète — sans jamais rogner sur l'expérience.",
    "sus.p2": "Notre priorité est le réutilisable. Notre repli est le recyclable. Le jetable est le dernier recours, pas le premier choix.",
    "sus.c1.t": "Réutilisable plutôt que jetable",
    "sus.c1.d": "Arrière-plans, signalétique, accessoires et décors de scène conçus pour être stockés et réutilisés année après année.",
    "sus.c2.t": "Fournisseurs locaux d'abord",
    "sus.c2.d": "Trajets plus courts, nourriture plus fraîche, factures carbone réduites — et un meilleur soutien à l'économie émirienne.",
    "sus.c3.t": "Menus à dominante végétale",
    "sus.c3.d": "Au moins une option 100 % végétale à chaque événement, sans questions.",
    "sus.c4.t": "Zéro gaspillage papier",
    "sus.c4.d": "Billets numériques, check-in QR et applications d'événements partagées remplacent les programmes et flyers papier.",
    "sus.c5.t": "Rapports honnêtes",
    "sus.c5.d": "Chaque événement est livré avec un court rapport de durabilité — ce que nous avons réutilisé, recyclé, et ce que nous ferons mieux.",

    "e1.t": "Guides de programmes et académiques",
    "e1.d": "Présentations de matières, soirées IGCSE/A-Level, salons universitaires.",
    "e2.t": "Journées d'orientation et d'accueil",
    "e2.d": "Accueil des nouveaux élèves, matinées d'adaptation KG1, visites parents.",
    "e3.t": "Journée annuelle et festivals culturels",
    "e3.d": "Productions scéniques phares avec thèmes, danses et remises de prix.",
    "e4.t": "Cérémonies de remise des diplômes",
    "e4.d": "Cortèges, toges, discours, murs photo et fêtes d'après.",
    "e5.t": "Journées sportives et événements inter-maisons",
    "e5.d": "Athlétisme, galas de natation, ligues de football, courses ludiques.",
    "e6.t": "Journées nationales et patrimoniales",
    "e6.d": "Fête nationale des Émirats, journée du drapeau, célébrations islamiques et culturelles.",
    "e7.t": "Reconnaissance des enseignants et événements parents",
    "e7.d": "Récompenses du personnel, retraites bien-être, soirées parents-école.",
    "e8.t": "Compétitions et olympiades",
    "e8.d": "Concours d'orthographe, salons des sciences, robotique, expositions d'art.",
    "e9.t": "Galas communautaires et caritatifs",
    "e9.d": "Dîners caritatifs, soirées de vente aux enchères, retrouvailles d'anciens élèves.",

    "process.eyebrow": "Comment nous travaillons",
    "process.title": "Un processus clair et calme, du coup d'envoi au nettoyage",
    "p1.t": "Découverte",
    "p1.d": "Nous rencontrons votre équipe de direction pour comprendre les objectifs, le public, le ton et les contraintes. Nous visitons le lieu et passons en revue le calendrier.",
    "p2.t": "Conception",
    "p2.d": "Un brief créatif, un thème, un déroulé et un budget — présentés pour validation en langage clair, sans jargon.",
    "p3.t": "Planification",
    "p3.d": "Fournisseurs, contrats, autorisations, évaluations des risques, communication et un calendrier de projet partagé avec des points hebdomadaires.",
    "p4.t": "Livraison",
    "p4.d": "Équipe sur place du montage au démontage. Nous gérons la répétition, le spectacle et le rangement — en laissant l'école impeccable.",
    "p5.t": "Bilan",
    "p5.d": "Photos, vidéo, rapports de fréquentation et de dépenses, plus un débriefing pour que l'année prochaine soit encore meilleure.",

    "why.eyebrow": "Pourquoi les écoles choisissent Vita Nova",
    "why.title": "Calme, compétent, et conçu pour les écoles.",
    "why.lede": "Nous parlons le langage de la protection de l'enfance, des emplois du temps et des parents. Nous sommes indépendants des fournisseurs, disciplinés sur le budget, et nous traitons chaque élève comme un invité d'honneur.",
    "w1.t": "Un interlocuteur unique",
    "w1.d": "Un responsable événementiel dédié du premier appel au rapport final.",
    "w2.t": "Des budgets transparents",
    "w2.d": "Chaque dirham suivi, chaque devis dans une feuille partagée.",
    "w3.t": "Un réseau à travers les Émirats",
    "w3.d": "Fournisseurs vérifiés dans les sept Émirats.",
    "w4.t": "Sûr pour les enfants par conception",
    "w4.d": "Équipe formée à la protection de l'enfance, personnel vérifié, protocoles clairs.",
    "w5.t": "Calme le jour J",
    "w5.d": "Nous apportons le plan B, le micro de secours et la patience de secours.",

    "contact.eyebrow": "Planifions votre prochain événement",
    "contact.title": "Dites-nous ce que vous imaginez.",
    "contact.lede": "Partagez quelques détails et nous reviendrons sous un jour ouvré avec une proposition gratuite et sans engagement.",
    "form.school": "Nom de l'école",
    "form.name": "Votre nom",
    "form.email": "E-mail",
    "form.phone": "Téléphone",
    "form.type": "Type d'événement",
    "form.notes": "Dites-nous en un peu plus",
    "form.notesPh": "Date, taille du public, thème, tout ce qui est important...",
    "form.submit": "Envoyer la demande",
    "form.t1": "Journée annuelle / festival culturel",
    "form.t2": "Cérémonie de remise des diplômes",
    "form.t3": "Journée sportive / tournoi",
    "form.t4": "Guide académique / orientation",
    "form.t5": "Événement enseignants / parents",
    "form.t6": "Autre",
    "form.success": "Merci {name} — nous avons bien reçu votre demande pour {school} et répondrons sous un jour ouvré.",
    "form.error": "Veuillez renseigner le nom de l'école, votre nom et votre e-mail.",
    "form.sending": "Envoi…",
    "form.fail": "Désolé — une erreur s'est produite. Veuillez nous écrire directement à hello@vitanova.ae.",

    "footer.tag": "Gestion d'événements pour les écoles à travers les Émirats arabes unis.",
    "footer.visit": "Nous rendre visite",
    "footer.address": "Vita Nova Events L.L.C.<br />Dubaï, Émirats arabes unis",
    "footer.llc": "Vita Nova Events L.L.C. — Dubaï, EAU",
    "footer.contact": "Contact",
    "footer.follow": "Suivez-nous",
    "footer.whatsapp": "Discussion WhatsApp",
    "footer.rights": "Tous droits réservés.",
    "footer.designed": "Conçu aux Émirats.",

    "wa.title": "Discutez avec Vita Nova",
    "wa.sub": "Nous répondons généralement en quelques minutes",
    "wa.bubble": "👋 Bonjour ! Une question sur un événement ? Envoyez-nous un message WhatsApp et nous reviendrons vers vous rapidement.",
    "wa.cta": "Ouvrir WhatsApp",
    "wa.open": "Ouvrir la discussion WhatsApp",
    "wa.close": "Fermer la discussion",
  },
};

// ---------- Apply translations ----------
function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  document.body.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  const label = document.querySelector("[data-lang-label]");
  if (label) label.textContent = dict["lang.label"];

  // also flip select option values that come from i18n (already rendered as text)
  document.querySelectorAll("select option[data-i18n]").forEach((opt) => {
    const key = opt.getAttribute("data-i18n");
    if (dict[key] != null) opt.textContent = dict[key];
  });

  // remember
  try { localStorage.setItem("vn-lang", lang); } catch (_) {}
}

// ---------- Language switcher (dropdown) ----------
const langSwitch = document.querySelector("[data-lang-switch]");
const toggleBtn = document.querySelector("[data-lang-toggle]");
const langMenu = document.querySelector("[data-lang-menu]");
const langOptions = langMenu ? langMenu.querySelectorAll("[data-lang-option]") : [];

const SUPPORTED_LANGS = ["en", "ar", "hi", "ml", "fr"];
const RTL_LANGS = ["ar"];

function setToggleLabel(lang) {
  const dict = I18N[lang] || I18N.en;
  const label = document.querySelector("[data-lang-label]");
  if (label) label.textContent = dict["lang.label"] || lang;
}

function syncMenuSelection(lang) {
  langOptions.forEach((opt) => {
    const isSel = opt.getAttribute("data-lang-option") === lang;
    opt.setAttribute("aria-selected", isSel ? "true" : "false");
  });
}

function closeMenu() {
  if (!langSwitch) return;
  langSwitch.classList.remove("open");
  if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  if (!langSwitch) return;
  langSwitch.classList.add("open");
  if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (langSwitch && langSwitch.classList.contains("open")) closeMenu();
    else openMenu();
  });
}

langOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    const lang = opt.getAttribute("data-lang-option");
    if (!lang || !SUPPORTED_LANGS.includes(lang)) return;
    applyLang(lang);
    setToggleLabel(lang);
    syncMenuSelection(lang);
    closeMenu();
  });
});

// Close on outside click / Escape
document.addEventListener("click", (e) => {
  if (!langSwitch) return;
  if (!langSwitch.contains(e.target)) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// ---------- Mobile nav ----------
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---------- Contact form ----------
const form = document.querySelector(".contact-form");
if (form) {
  const note = form.querySelector(".form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lang = document.body.getAttribute("data-lang") || "en";
    const dict = I18N[lang] || I18N.en;
    const school = (data.get("school") || "").toString().trim();
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    if (!school || !name || !email) {
      note.textContent = dict["form.error"];
      note.style.color = "#ffb38a";
      return;
    }
    // Email check: catches common typos and obviously-malformed addresses.
    //   - one @, with a dot in the domain and a TLD of 2+ letters
    //   - total length ≤ 254, local-part length ≤ 64 (per RFC 5321)
    //   - no consecutive dots anywhere
    //   - local part doesn't start or end with a dot
    //   - domain labels don't start or end with a hyphen; only letters, digits, hyphens
    if (email.length > 254) {
      note.textContent = dict["form.emailError"] || "Please enter a valid email address.";
      note.style.color = "#ffb38a";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email)) {
      note.textContent = dict["form.emailError"] || "Please enter a valid email address.";
      note.style.color = "#ffb38a";
      return;
    }
    const atIdx = email.indexOf("@");
    const local = email.slice(0, atIdx);
    const domain = email.slice(atIdx + 1);
    if (local.length < 1 || local.length > 64) {
      note.textContent = dict["form.emailError"] || "Please enter a valid email address.";
      note.style.color = "#ffb38a";
      return;
    }
    if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
      note.textContent = dict["form.emailError"] || "Please enter a valid email address.";
      note.style.color = "#ffb38a";
      return;
    }
    if (!/^([A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.test(domain)) {
      note.textContent = dict["form.emailError"] || "Please enter a valid email address.";
      note.style.color = "#ffb38a";
      return;
    }
    note.style.color = "";
    note.textContent = (dict["form.sending"] || "Sending…");
    // Send the form to Formspree via fetch (AJAX) so the user stays on the page.
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("formspree-" + res.status);
        note.textContent = (dict["form.success"] || "")
          .replace("{name}", name)
          .replace("{school}", school);
        form.reset();
      })
      .catch(() => {
        note.textContent = dict["form.fail"] || "Sorry — something went wrong. Please email us directly.";
        note.style.color = "#ffb38a";
      });
  });
}

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Boot ----------
const saved = (() => { try { return localStorage.getItem("vn-lang"); } catch (_) { return null; } })();
const bootLang = SUPPORTED_LANGS.includes(saved) ? saved : "en";
applyLang(bootLang);
setToggleLabel(bootLang);
syncMenuSelection(bootLang);

// ---------- Dark mode ----------
const themeBtn = document.querySelector("[data-theme-toggle]");
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  if (themeBtn) {
    const icon = themeBtn.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    themeBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
  try { localStorage.setItem("vn-theme", theme); } catch (_) {}
}
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}
const savedTheme = (() => { try { return localStorage.getItem("vn-theme"); } catch (_) { return null; } })();
applyTheme(savedTheme === "dark" ? "dark" : "light");

// ---------- Scroll progress bar ----------
const progressFill = document.getElementById("scrollProgressFill");
function updateProgress() {
  const doc = document.documentElement;
  const scrolled = doc.scrollTop || document.body.scrollTop;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
  if (progressFill) progressFill.style.width = pct + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-q");
  const ans = item.querySelector(".faq-a");
  if (!btn || !ans) return;
  btn.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      ans.style.maxHeight = ans.scrollHeight + "px";
    } else {
      ans.style.maxHeight = "0px";
    }
  });
});
// Re-measure open FAQs after language change so maxHeight stays correct
window._recalcFaq = function () {
  document.querySelectorAll(".faq-item.open .faq-a").forEach((a) => {
    a.style.maxHeight = a.scrollHeight + "px";
  });
};
if (langMenu) {
  langMenu.querySelectorAll("[data-lang-option]").forEach((opt) =>
    opt.addEventListener("click", () => setTimeout(window._recalcFaq, 50))
  );
}
document.querySelectorAll("[data-theme-toggle]").forEach((b) =>
  b.addEventListener("click", () => setTimeout(window._recalcFaq, 50))
);

// ---------- Hero particles (cursor follow) ----------
(function initHeroParticles() {
  const canvas = document.getElementById("heroParticles");
  if (!canvas) return;
  // Skip on touch / reduced motion
  const isTouch = matchMedia("(hover: none)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isTouch || reduce) return;

  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;
  let particles = [];
  const mouse = { x: -9999, y: -9999, active: false };
  let scrollY = window.scrollY;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  const COUNT = 60;
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    });
  }

  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.active = false;
  });
  window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

  function draw() {
    const heroBottom = canvas.parentElement.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      requestAnimationFrame(draw);
      return;
    }
    ctx.clearRect(0, 0, w, h);
    // Connections
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      if (mouse.active) {
        const dx = a.x - mouse.x, dy = a.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 110) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - d / 110) * 0.45})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < 90) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - d / 90) * 0.25})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    // Particles
    for (const p of particles) {
      // Drift toward mouse
      if (mouse.active) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 130 && d > 0) {
          p.vx += (dx / d) * 0.02;
          p.vy += (dy / d) * 0.02;
        }
      }
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.vx += (Math.random() - 0.5) * 0.05;
      p.vy += (Math.random() - 0.5) * 0.05;
      if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;
      ctx.fillStyle = "rgba(212, 175, 55, 0.85)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ---------- Floating CTA visibility ----------
(function initFloatingCta() {
  const cta = document.getElementById("floatingCta");
  if (!cta) return;
  const contact = document.getElementById("contact");
  function update() {
    const past = window.scrollY > 600;
    const inContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.7;
    if (past && !inContact) cta.classList.add("visible"), cta.setAttribute("aria-hidden", "false");
    else cta.classList.remove("visible"), cta.setAttribute("aria-hidden", "true");
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// ---------- Cost calculator ----------
(function initCalculator() {
  const form = document.getElementById("calcForm");
  if (!form) return;
  const audience = document.getElementById("calcAudience");
  const duration = document.getElementById("calcDuration");
  const audOut = document.getElementById("calcAudienceOut");
  const durOut = document.getElementById("calcDurationOut");
  const price = document.getElementById("calcPrice");
  const services = {
    av: document.getElementById("svc-av"),
    cater: document.getElementById("svc-cater"),
    photo: document.getElementById("svc-photo"),
    decor: document.getElementById("svc-decor"),
    perform: document.getElementById("svc-perform"),
    transport: document.getElementById("svc-transport"),
  };

  // Per-unit indicative rates in AED
  const BASE = 8000;             // fixed setup / lead
  const PER_GUEST = 35;          // per-guest base
  const PER_HOUR = 1500;         // per-hour ops
  const SVC = {
    av: 4500,
    cater: 120,                  // per guest
    photo: 4000,
    decor: 8000,
    perform: 6000,
    transport: 2500,
  };

  function fmt(n) {
    return "AED " + Math.round(n).toLocaleString("en-US");
  }
  function update() {
    const a = parseInt(audience.value, 10);
    const d = parseInt(duration.value, 10);
    audOut.textContent = a.toLocaleString("en-US") + " guests";
    durOut.textContent = d + " hours";
    let low = BASE;
    let high = BASE * 1.6;
    low += a * PER_GUEST;
    high += a * (PER_GUEST * 1.4);
    low += d * PER_HOUR;
    high += d * PER_HOUR * 1.4;
    if (services.av.checked) { low += SVC.av * 0.8; high += SVC.av * 1.2; }
    if (services.cater.checked) { low += a * SVC.cater * 0.7; high += a * SVC.cater * 1.1; }
    if (services.photo.checked) { low += SVC.photo * 0.8; high += SVC.photo * 1.2; }
    if (services.decor.checked) { low += SVC.decor * 0.7; high += SVC.decor * 1.3; }
    if (services.perform.checked) { low += SVC.perform * 0.7; high += SVC.perform * 1.3; }
    if (services.transport.checked) { low += SVC.transport * 0.8; high += SVC.transport * 1.2; }
    price.textContent = fmt(low) + " – " + fmt(high);
  }
  [audience, duration].forEach((el) => el.addEventListener("input", update));
  Object.values(services).forEach((el) => el && el.addEventListener("change", update));
  update();
})();

// ---------- Resource download buttons ----------
document.querySelectorAll(".res-download").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-res-name") || "the guide";
    const lang = document.body.getAttribute("data-lang") || "en";
    const msg = lang === "ar"
      ? "شكرًا لاهتمامك! في النسخة الكاملة، سيرسل «" + name + "» تلقائيًا. هذا نموذج أولي — أرسل لنا رسالة في قسم \"تواصل\" وسنرسل لك الدليل."
      : "Thanks for your interest! In the live build, \"" + name + "\" would email to you automatically. This is a prototype — message us in the contact section and we'll send the guide over.";
    alert(msg);
  });
});

// ---------- UAE map hover interaction ----------
document.querySelectorAll(".uae-svg .emirate").forEach((poly) => {
  const key = poly.getAttribute("data-emirate");
  const li = document.querySelector('.emirate-list li[data-emirate="' + key + '"]');
  if (!li) return;
  poly.addEventListener("mouseenter", () => {
    document.querySelectorAll(".emirate-list li").forEach((x) => x.classList.remove("active"));
    li.classList.add("active");
  });
  poly.addEventListener("mouseleave", () => li.classList.remove("active"));
});
document.querySelectorAll(".emirate-list li").forEach((li) => {
  const key = li.getAttribute("data-emirate");
  const poly = document.querySelector('.uae-svg .emirate[data-emirate="' + key + '"]');
  if (!poly) return;
  li.addEventListener("mouseenter", () => li.classList.add("active"));
  li.addEventListener("mouseleave", () => li.classList.remove("active"));
});

// ---------- WhatsApp chat widget ----------
(function () {
  const widget = document.getElementById("waWidget");
  const button = document.getElementById("waButton");
  const panel = document.getElementById("waPanel");
  const close = document.getElementById("waClose");
  const link = document.getElementById("waLink");
  if (!widget || !button || !panel || !link) return;

  const rawPhone = (widget.getAttribute("data-wa-phone") || "").replace(/[^\d]/g, "");
  const message = widget.getAttribute("data-wa-message") || "";

  function buildUrl() {
    const base = rawPhone
      ? "https://wa.me/" + rawPhone
      : "https://wa.me/";
    return base + (message ? "?text=" + encodeURIComponent(message) : "");
  }
  link.setAttribute("href", buildUrl());

  function setOpen(open) {
    widget.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  }

  button.addEventListener("click", () => setOpen(!widget.classList.contains("open")));
  button.setAttribute("aria-expanded", "false");
  if (close) close.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && widget.classList.contains("open")) setOpen(false);
  });

  // Close the panel if user clicks outside the widget
  document.addEventListener("click", (e) => {
    if (!widget.classList.contains("open")) return;
    if (!widget.contains(e.target)) setOpen(false);
  });
})();
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.querySelector('.chatMessages');

function sendMessage() {
    const userMessage = messageInput.value.trim();
    if (userMessage === '') return;

    // Create a new chat message element
    const messageElement = document.createElement('li');
    messageElement.classList.add('chatMessage');
    messageElement.textContent = userMessage;
    chatMessages.appendChild(messageElement);

    // Clear the input field
    messageInput.value = '';

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show the chat box when clicking on a button or link
document.getElementById('showChatButton').addEventListener('click', () => {
    chatBox.classList.remove('hidden');
});

window.addEventListener('click', (event) => {
    if (!chatBox.contains(event.target)) {
        chatBox.classList.add('hidden');
    }
});
