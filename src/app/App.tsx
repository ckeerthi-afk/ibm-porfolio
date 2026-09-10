import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import maximoScoreImg from "../imports/image__5_.png";
import maintainxScoreImg from "../imports/Competitive_Analysis_2026-09-02_10-44-11.png";
import mobileAudit1 from "../imports/maudit1-1.png";
import mobileAudit2 from "../imports/maudit2-1.png";
import promoCard1 from "../imports/Screenshot_2026-09-02_at_14.33.05.png";
import promoCard2 from "../imports/Screenshot_2026-09-02_at_14.33.25.png";
import promoCard3 from "../imports/Screenshot_2026-09-02_at_14.33.38.png";
import promoCard4 from "../imports/Screenshot_2026-09-02_at_14.40.39.png";

// ─── Helpers ───────────────────────────────────────────────────────────────

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 md:px-16 lg:px-24 ${className}`}>{children}</section>
);

const Label = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="font-mono text-xs tracking-widest text-[#0f62fe]" style={{ fontFamily: "'DM Mono', monospace" }}>
      {number}
    </span>
    <span className="w-8 h-px bg-[#0f62fe]" />
    <span className="font-mono text-xs tracking-widest uppercase text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>
      {text}
    </span>
  </div>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2
    className={`text-4xl md:text-5xl font-light leading-tight text-foreground mb-10 ${className}`}
    style={{ fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" }}
  >
    {children}
  </h2>
);

// ─── Hero Mock UI ────────────────────────────────────────────────────────────

function HeroMockup() {
  return (
    <div className="relative w-full aspect-[4/3] bg-white border border-[rgba(0,0,0,0.1)] shadow-2xl overflow-hidden rounded-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(0,0,0,0.08)] bg-[#f4f4f4]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#da1e28] opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f1c21b] opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#24a148] opacity-70" />
        </div>
        <div className="flex-1 mx-4 h-5 bg-white border border-[rgba(0,0,0,0.1)] rounded-sm flex items-center px-2">
          <span className="text-[9px] text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>maximo.ibm.com/small-saas</span>
        </div>
        <div className="w-4" />
      </div>
      <div className="flex h-[calc(100%-36px)]">
        {/* Sidebar */}
        <div className="w-12 bg-[#161616] flex flex-col items-center py-3 gap-3 shrink-0">
          <div className="w-5 h-5 bg-[#0f62fe] rounded-sm" />
          {["grid", "list", "chart", "settings"].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-[#393939] rounded-sm opacity-60" />
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 overflow-hidden bg-[#fafafa] p-3">
          {/* Welcome banner */}
          <div className="bg-[#0f62fe] rounded-sm p-3 mb-3 flex items-center justify-between">
            <div>
              <div className="text-white text-[10px] font-normal mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Welcome to Maximo Small SaaS</div>
              <div className="text-white/75 text-[8px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Complete your setup to get started</div>
            </div>
            <div className="bg-white text-[#0f62fe] text-[8px] font-normal px-2 py-1 rounded-sm cursor-pointer" style={{ fontFamily: "'DM Sans', sans-serif" }}>Start →</div>
          </div>
          {/* Checklist */}
          <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-sm p-3 mb-3">
            <div className="text-[9px] font-normal text-[#161616] mb-2 uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>Onboarding</div>
            {[
              { label: "Add your first asset", done: true },
              { label: "Invite a team member", done: true },
              { label: "Set up work orders", done: false },
              { label: "Connect mobile app", done: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                <div className={`w-3 h-3 rounded-full flex items-center justify-center border ${item.done ? "bg-[#24a148] border-[#24a148]" : "border-[#8d8d8d]"}`}>
                  {item.done && <span className="text-white text-[6px]">✓</span>}
                </div>
                <span className={`text-[8px] ${item.done ? "line-through text-[#525252]" : "text-[#161616]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</span>
              </div>
            ))}
          </div>
          {/* Cards row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Assets", value: "12", color: "#0f62fe" },
              { label: "Work Orders", value: "4", color: "#24a148" },
              { label: "Team", value: "3", color: "#8a3ffc" },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-[rgba(0,0,0,0.08)] rounded-sm p-2">
                <div className="text-[7px] text-[#6f6f6f] uppercase tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>{card.label}</div>
                <div className="text-lg font-light" style={{ color: card.color, fontFamily: "'Fraunces', serif" }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Help panel */}
        <div className="w-24 border-l border-[rgba(0,0,0,0.08)] bg-white p-2 shrink-0">
          <div className="text-[7px] font-normal uppercase tracking-widest text-[#6f6f6f] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Field Help</div>
          <div className="bg-[#edf5ff] border border-[#a6c8ff] rounded-sm p-1.5 mb-2">
            <div className="text-[7px] text-[#0043ce] leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>An Asset is any equipment your team maintains.</div>
          </div>
          <div className="space-y-1">
            {["What is an asset?", "How to assign?", "Mobile setup"].map((q, i) => (
              <div key={i} className="text-[7px] text-[#0f62fe] underline underline-offset-1 cursor-pointer" style={{ fontFamily: "'DM Sans', sans-serif" }}>{q}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Competitive Map ─────────────────────────────────────────────────────────

type Rating = "ahead" | "par" | "behind";
interface PhaseScore { ttv: string; ttvRating: Rating; csat: string; csatRating: Rating; strengths: string[]; friction: string[]; }
interface Phase { num: string; title: string; icon: string; desc: string; maximo: PhaseScore | null; sap: PhaseScore | null; recs: string[]; }

const ratingPalette: Record<Rating, { bg: string; border: string; text: string; label: string }> = {
  ahead: { bg: "#defbe6", border: "#24a148", text: "#0e6027", label: "Ahead of industry" },
  par:   { bg: "#fdf6dd", border: "#f1c21b", text: "#8a5f00", label: "At par with industry" },
  behind:{ bg: "#fff1f1", border: "#da1e28", text: "#a2191f", label: "Behind industry" },
};

const PHASES: Phase[] = [
  {
    num: "01", title: "Discover & Learn", icon: "",
    desc: "Can a new user find Maximo online and understand what it does?",
    maximo: {
      ttv: "38:24", ttvRating: "par", csat: "7.5", csatRating: "ahead",
      strengths: ["Search: Easy to find across multiple search methods", "Learning materials clarity and quality is high", "Product comparisons highlighted value effectively"],
      friction: ["Content sometimes overly generic or marketing-heavy", "Some technical descriptions feel overwhelming early in the journey"],
    },
    sap: {
      ttv: "21:01", ttvRating: "ahead", csat: "5.5", csatRating: "par",
      strengths: ["Easy to find via search engines and AI tools"],
      friction: ["Nav & search lacked relevant information due to poor functionality", "SAP EAM products not available on AWS Marketplace despite multiple attempts"],
    },
    recs: ["Strengthen SEO keywords tied to asset management and ALM", "Improve IBM.com navigation so Maximo is easier to find", "Make AWS Marketplace listings easier to locate with accurate, detailed descriptions"],
  },
  {
    num: "02", title: "Try", icon: "",
    desc: "Sign up for a trial and evaluate how easy it is to get started.",
    maximo: {
      ttv: "24:39", ttvRating: "par", csat: "7.0", csatRating: "ahead",
      strengths: ["Tutorials are high-quality, intuitive, and tailored to different expertise levels", "Trial sign-up was easy, high CSAT ratings"],
      friction: ["Tutorials are hard to find from the product website. Users resort to search engines.", "Mixed video playback quality on IBM developer site", "WalkMe failed for some users. First-login guidance is missing."],
    },
    sap: {
      ttv: "18:43", ttvRating: "ahead", csat: "4.5", csatRating: "behind",
      strengths: ["Offers structured, easy-to-follow learning content"],
      friction: ["Does not have a trial experience"],
    },
    recs: ["Offer free tutorials earlier without requiring sign-up", "Make tutorials accessible from multiple entry points like product pages", "Enhance guidance on first login to direct users to key trial areas", "Improve visibility and access to guided tours throughout the trial"],
  },
  {
    num: "03", title: "Buy", icon: "",
    desc: "Find pricing, understand the options, and complete an upgrade.",
    maximo: {
      ttv: "3:10", ttvRating: "ahead", csat: "8.25", csatRating: "ahead",
      strengths: ["Pricing experience is smooth, with clear pricing and feature breakdowns", "Easy payment options, especially within the trial"],
      friction: ["AWS Marketplace process confusing, with unclear upgrade paths", "Cluttered pricing pages made decision-making harder for users"],
    },
    sap: {
      ttv: "2:29", ttvRating: "ahead", csat: "1.25", csatRating: "behind",
      strengths: ["None identified"],
      friction: ["No trial experience means no upgrade path exists", "Pricing details are basic and don't convey product value"],
    },
    recs: ["Reduce reliance on AWS navigation. Add in-app upgrade steps.", "Streamline region-specific processes for international users", "Clarify and simplify pricing terminology so users quickly understand options"],
  },
  {
    num: "04", title: "Get Started", icon: "",
    desc: "Add users, set permissions, and confirm the system is ready to use.",
    maximo: {
      ttv: "6:19", ttvRating: "behind", csat: "5.0", csatRating: "par",
      strengths: ["Users generally found adding a new user manageable", "Rated positively for ease of navigation and UI clarity in some areas"],
      friction: ["Confusing terms and duplicate nav items made basic tasks hard to complete.", "Suite vs Manage confusion caused disorientation", "Confusion around roles and terminology throughout", "Access management process does not match users' mental model"],
    },
    sap: null,
    recs: ["Improve navigation clarity by removing duplicates and streamlining overall nav", "Introduce guided learning to provide context for significant changes", "Strengthen support by offering real-time assistance (e.g. Maximo Assistant)", "If possible, automatically authorize admins with user management privileges"],
  },
  {
    num: "05", title: "Use", icon: "",
    desc: "Complete core workflows as an Asset Manager, Maintenance Manager, or Technician.",
    maximo: null, sap: null,
    recs: ["Simplify core workflow navigation", "Reduce cognitive load in work order management", "Improve role-based interface clarity"],
  },
  {
    num: "06", title: "Get Help", icon: "",
    desc: "Find in-product support, documentation, and live assistance options.",
    maximo: null, sap: null,
    recs: ["Surface contextual help at the moment of need", "Improve in-app documentation discoverability", "Consider live chat or AI assistant integration"],
  },
  {
    num: "07", title: "Expand", icon: "",
    desc: "Activate new modules from the MAS catalog and confirm configuration.",
    maximo: null, sap: null,
    recs: ["Simplify module activation flows", "Provide clear confirmation of successful configuration", "Reduce steps needed to trial new in-suite capabilities"],
  },
  {
    num: "08", title: "End Use", icon: "",
    desc: "Export data, deactivate licenses, and remove user accounts.",
    maximo: null, sap: null,
    recs: ["Ensure data export is discoverable and straightforward", "Provide clear billing deactivation confirmations", "Guide admins through account removal process"],
  },
];

function CompetitiveMap() {
  const [active, setActive] = useState<number | null>(null);
  const [tab, setTab] = useState<"scores" | "recs">("scores");
  const scrollRef = useRef<HTMLDivElement>(null);

  const phase = active !== null ? PHASES[active] : null;

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-5 mb-5">
        {(Object.entries(ratingPalette) as [Rating, typeof ratingPalette[Rating]][]).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2" style={{ backgroundColor: val.bg, borderColor: val.border }} />
            <span className="text-sm text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>{val.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f4f4f4] border-2 border-[#c6c6c6]" />
          <span className="text-sm text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>Not evaluated</span>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={scrollRef} className="overflow-x-auto cursor-grab select-none" style={{ scrollbarWidth: "thin" }}>
        <div className="flex border border-[rgba(0,0,0,0.1)] min-w-max">
          {PHASES.map((p, i) => {
            const isActive = active === i;
            const hasData = p.maximo !== null;
            const m = p.maximo;
            return (
              <button
                key={i}
                onClick={() => { setActive(isActive ? null : i); setTab("scores"); }}
                className="relative flex-none w-48 text-left p-5 border-r border-[rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: isActive ? "#161616" : hasData ? "white" : "#fafafa" }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f4f4"; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = hasData ? "white" : "#fafafa"; }}
              >
                {/* Phase num */}
                <div className="text-[10px] uppercase tracking-widest mb-3"
                  style={{ fontFamily: "'DM Mono', monospace", color: isActive ? "rgba(255,255,255,0.4)" : "#6f6f6f" }}>
                  Phase {p.num}
                </div>
                {/* Title */}
                <div className="text-sm font-normal leading-tight mb-4"
                  style={{ color: isActive ? "white" : "#161616" }}>
                  {p.title}
                </div>
                {/* Score dots */}
                {hasData && m ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: ratingPalette[m.ttvRating].border }} />
                      <span className="text-[9px]" style={{ fontFamily: "'DM Mono', monospace", color: isActive ? "rgba(255,255,255,0.5)" : "#6f6f6f" }}>TTV · {m.ttv}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-none" style={{ backgroundColor: ratingPalette[m.csatRating].border }} />
                      <span className="text-[9px]" style={{ fontFamily: "'DM Mono', monospace", color: isActive ? "rgba(255,255,255,0.5)" : "#6f6f6f" }}>CSAT · {m.csat}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-[9px] uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: isActive ? "rgba(255,255,255,0.3)" : "#c6c6c6" }}>
                    Evaluated
                  </div>
                )}
                {/* Active indicator */}
                {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0f62fe]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: active !== null ? "900px" : "0" }}>
        {phase && (
          <div className="border border-t-0 border-[rgba(0,0,0,0.1)] bg-white">
            {/* Panel header */}
            <div className="flex items-start justify-between gap-6 p-8 pb-0">
              <div className="flex items-start gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>Phase {phase.num}</div>
                  <h3 className="text-2xl font-light text-[#161616] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{phase.title}</h3>
                  <p className="text-sm text-[#6f6f6f] max-w-2xl leading-relaxed">{phase.desc}</p>
                </div>
              </div>
              {/* Tab toggle */}
              <div className="flex gap-0 shrink-0 border border-[rgba(0,0,0,0.1)]">
                {(["scores", "recs"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="px-4 py-2 text-[10px] uppercase tracking-widest cursor-pointer transition-colors"
                    style={{ fontFamily: "'DM Mono', monospace", backgroundColor: tab === t ? "#161616" : "white", color: tab === t ? "white" : "#6f6f6f" }}>
                    {t === "scores" ? "Scores" : "Recommendations"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="p-8 pt-6">
              {tab === "scores" ? (
                phase.maximo ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Maximo column */}
                    {[{ name: "IBM Maximo", color: "#0f62fe", data: phase.maximo }, ...(phase.sap ? [{ name: "SAP EAM", color: "#6f6f6f", data: phase.sap }] : [])].map(col => (
                      <div key={col.name}>
                        <div className="text-[10px] uppercase tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace", color: col.color }}>{col.name}</div>
                        {/* Score pills */}
                        <div className="flex gap-3 mb-6">
                          {([["TTV", col.data.ttv, col.data.ttvRating], ["CSAT", col.data.csat, col.data.csatRating]] as [string, string, Rating][]).map(([label, val, rating]) => (
                            <div key={label} className="flex-1 border p-4"
                              style={{ backgroundColor: ratingPalette[rating].bg, borderColor: ratingPalette[rating].border }}>
                              <div className="text-[9px] uppercase tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace", color: ratingPalette[rating].text }}>{label}</div>
                              <div className="text-xl font-light mb-1" style={{ fontFamily: "'Fraunces', serif", color: ratingPalette[rating].text }}>{val}</div>
                              <div className="text-[9px]" style={{ color: ratingPalette[rating].text }}>{ratingPalette[rating].label}</div>
                            </div>
                          ))}
                        </div>
                        {/* Strengths */}
                        <div className="mb-4">
                          <div className="text-[9px] uppercase tracking-widest text-[#24a148] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>↑ Strengths</div>
                          <div className="space-y-1.5">
                            {col.data.strengths.map(s => (
                              <div key={s} className="flex gap-2.5 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#24a148] mt-1.5 shrink-0" />
                                <span className="text-sm text-[#6f6f6f] leading-relaxed">{s}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Friction */}
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-[#da1e28] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>↓ Friction</div>
                          <div className="space-y-1.5">
                            {col.data.friction.map(f => (
                              <div key={f} className="flex gap-2.5 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da1e28] mt-1.5 shrink-0" />
                                <span className="text-sm text-[#6f6f6f] leading-relaxed">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    {!phase.sap && (
                      <div className="bg-[#f4f4f4] flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="text-[10px] uppercase tracking-widest text-[#6f6f6f] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>SAP EAM</div>
                          <p className="text-sm text-[#6f6f6f]">No comparative data available for this phase</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-[#f4f4f4] p-8 text-center">
                    <div className="text-[10px] uppercase tracking-widest text-[#6f6f6f] mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Evaluation scope</div>
                    <p className="text-sm text-[#6f6f6f] max-w-lg mx-auto leading-relaxed">
                      Detailed TTV and CSAT measurements were focused on phases 1–4. This phase was evaluated qualitatively as part of the complete user journey study.
                    </p>
                  </div>
                )
              ) : (
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>Recommendations: {phase.title}</div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {phase.recs.map((rec, i) => (
                      <div key={i} className="border border-[rgba(0,0,0,0.08)] p-4 bg-[#f4f4f4]">
                        <div className="w-5 h-5 bg-[#0f62fe] text-white text-[9px] flex items-center justify-center mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>{i + 1}</div>
                        <p className="text-sm text-[#6f6f6f] leading-relaxed">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-[#6f6f6f] mt-3" style={{ fontFamily: "'DM Mono', monospace" }}>
        Click any phase → explore scores & recommendations
      </p>
    </div>
  );
}

// ─── Horizontal Journey ───────────────────────────────────────────────────────

function HorizontalJourney() {
  const [active, setActive] = useState<number | null>(null);

  const palette = {
    green:  { bg: "#defbe6", border: "#24a148", dot: "#24a148", text: "#0e6027", label: "Value moment",  insightBg: "#defbe6", insightBorder: "#24a148" },
    yellow: { bg: "#fdf6dd", border: "#f1c21b", dot: "#f1c21b", text: "#8a5f00", label: "Confusion",     insightBg: "#fdf6dd", insightBorder: "#f1c21b" },
    red:    { bg: "#fff1f1", border: "#da1e28", dot: "#da1e28", text: "#a2191f", label: "Friction",      insightBg: "#fff1f1", insightBorder: "#da1e28" },
  };

  const steps: { num: string; label: string; note: string; type: keyof typeof palette; insight: string }[] = [
    {
      num: "01", label: "Create Account", note: "Clear CTA", type: "green",
      insight: "MaintainX skips the setup wizard entirely. Users are in the product within minutes.",
    },
    {
      num: "02", label: "Select Role", note: "Some confusion", type: "yellow",
      insight: "Role selection personalises the experience, but the options aren't clear enough. Some users guess.",
    },
    {
      num: "03", label: "Create Asset", note: "First success", type: "green",
      insight: "The first action teaches the core workflow. No explanation, just doing.",
    },
    {
      num: "04", label: "Create Work Order", note: "Jargon friction", type: "red",
      insight: "'Work Order' is jargon. Mid-market users hesitate here. Plain language would cut drop-off significantly.",
    },
    {
      num: "05", label: "Invite Team", note: "Buried", type: "yellow",
      insight: "Team invite is buried. Users who reach value first are far more likely to bring colleagues along.",
    },
  ];

  const c = active !== null ? palette[steps[active].type] : null;

  return (
    <div>
      {/* Legend */}
      <div className="flex gap-5 mb-6 flex-wrap">
        {(Object.entries(palette) as [keyof typeof palette, typeof palette[keyof typeof palette]][]).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: val.dot }} />
            <span className="text-sm text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>{val.label}</span>
          </div>
        ))}
      </div>

      {/* Step row */}
      <div className="flex gap-0 overflow-x-auto pb-1">
        {steps.map((step, i) => {
          const p = palette[step.type];
          const isActive = active === i;
          return (
            <button
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="flex-1 min-w-[140px] text-left p-5 transition-all duration-200 border relative cursor-default"
              style={{
                backgroundColor: isActive ? p.border : p.bg,
                borderColor: p.border,
                marginRight: i < steps.length - 1 ? "-1px" : 0,
                zIndex: isActive ? 2 : 1,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-3"
                style={{ backgroundColor: isActive ? "white" : p.dot }}
              />
              <div
                className="text-sm font-normal leading-tight mb-1"
                style={{ color: isActive ? "white" : p.text, fontFamily: "'DM Sans', sans-serif" }}
              >
                {step.label}
              </div>
              <div
                className="text-[10px]"
                style={{ fontFamily: "'DM Mono', monospace", color: isActive ? "rgba(255,255,255,0.75)" : "#6f6f6f" }}
              >
                {step.note}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-1.5 w-3 h-px z-10" style={{ backgroundColor: p.border }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Insight panel */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: active !== null ? "160px" : "0" }}
      >
        {active !== null && c && (
          <div
            className="border border-t-0 p-6"
            style={{ backgroundColor: c.insightBg, borderColor: c.insightBorder }}
          >
            <div
              className="text-[10px] uppercase tracking-widest mb-2"
              style={{ fontFamily: "'DM Mono', monospace", color: c.text }}
            >
              {steps[active].label}
            </div>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: c.text }}>
              {steps[active].insight}
            </p>
          </div>
        )}
      </div>

      <p className="text-sm text-[#6f6f6f] mt-4" style={{ fontFamily: "'DM Mono', monospace" }}>
        Hover any step to reveal observations
      </p>
    </div>
  );
}

// ─── Concept Cards ───────────────────────────────────────────────────────────

function ConceptCards() {
  const [active, setActive] = useState<number | null>(null);

  const concepts = [
    {
      num: "01", title: "Role-Based Onboarding",
      desc: "Users pick their role and get guidance built around their job, not a generic flow.",
      roles: ["Technician", "Supervisor", "Manager", "Administrator"],
      rolesLabel: "Select a role:",
    },
    {
      num: "02", title: "Demo Workspace",
      desc: "Sample data lets users explore the product before doing any real setup.",
      roles: ["Empty Workspace", "Demo Workspace"],
      rolesLabel: "Toggle view:",
    },
    {
      num: "03", title: "Checklist Onboarding",
      desc: "Onboarding broken into small, completable steps with visible progress.",
      roles: ["Create your first asset", "Create a work order", "Invite your team", "Download mobile app"],
      rolesLabel: "Example tasks:",
    },
    {
      num: "04", title: "Guided Walkthroughs",
      desc: "Guidance appears during real tasks, not in a separate tutorial.",
      roles: ["Step 1: Open work orders", "Step 2: Create a record", "Step 3: Assign & save"],
      rolesLabel: "Example steps:",
    },
    {
      num: "05", title: "Progressive Disclosure",
      desc: "Start simple. Add complexity only as users show they're ready.",
      roles: ["Basic view", "Intermediate view", "Advanced workspace"],
      rolesLabel: "Complexity levels:",
    },
    {
      num: "06", title: "Feature Discovery",
      desc: "Features appear when users actually need them, not all at once.",
      roles: ["Contextual prompt", "Hover reveal", "Smart suggestion"],
      rolesLabel: "Discovery patterns:",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {concepts.map((c, i) => {
        const open = active === i;
        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`text-left border p-8 transition-all duration-300 cursor-default ${open ? "bg-white" : "bg-white"}`}
            style={{ borderColor: open ? "#0f62fe" : "rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className="text-3xl font-light leading-none"
                style={{ fontFamily: "'Fraunces', serif", color: open ? "#0f62fe" : "#e8e8e8" }}
              >
                {c.num}
              </div>
              <div
                className="text-base transition-transform duration-300"
                style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: open ? "#0f62fe" : "#525252" }}
              >
                +
              </div>
            </div>
            <h4 className="text-base font-normal text-[#161616] mb-2">{c.title}</h4>
            <p className="text-sm text-[#6f6f6f] leading-relaxed mb-4">{c.desc}</p>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0 }}
            >
              <div className="pt-4 border-t border-[rgba(0,0,0,0.06)]">
                <div className="text-[9px] uppercase tracking-widest text-[#0f62fe] mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {c.rolesLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.roles.map((r) => (
                    <span key={r} className="text-xs bg-[#edf5ff] text-[#0043ce] px-2 py-1">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Workflow Comparison ──────────────────────────────────────────────────────

function WorkflowComparison() {
  const [removed, setRemoved] = useState<Set<number>>(new Set());

  const fields = [
    { label: "Asset ID", priority: false },
    { label: "Asset Name", priority: true },
    { label: "Classification Schema", priority: false },
    { label: "Location Hierarchy", priority: false },
    { label: "Status", priority: true },
    { label: "Asset Type", priority: true },
    { label: "Cost Center Code", priority: false },
    { label: "Failure Class", priority: false },
    { label: "Description", priority: true },
    { label: "Rotating Flag", priority: false },
    { label: "Move / Modify Indicator", priority: false },
    { label: "Assigned Technician", priority: true },
  ];

  const toggle = (i: number) => {
    setRemoved((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  };

  const visible = fields.filter((_, i) => !removed.has(i)).length;

  return (
    <div className="grid md:grid-cols-2 gap-0 border border-[rgba(0,0,0,0.1)]">
      {/* Left — Traditional */}
      <div className="bg-white p-8 border-r border-[rgba(0,0,0,0.08)]">
        <div className="text-[10px] uppercase tracking-widest text-[#525252] mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>Traditional Maximo: All Fields</div>
        <div className="space-y-2 mb-6">
          {fields.map((f, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-center justify-between px-3 py-2 border text-left text-sm transition-all cursor-pointer ${removed.has(i) ? "" : "hover:bg-[#edf5ff] hover:border-[#0f62fe]/40"}`}
              style={{
                borderColor: removed.has(i) ? "rgba(0,0,0,0.04)" : undefined,
                backgroundColor: removed.has(i) ? "#f4f4f4" : undefined,
                color: removed.has(i) ? "#c6c6c6" : "#161616",
                textDecoration: removed.has(i) ? "line-through" : "none",
              }}
            >
              <span>{f.label}</span>
              {!f.priority && !removed.has(i) && (
                <span className="text-[9px] text-[#da1e28] ml-2" style={{ fontFamily: "'DM Mono', monospace" }}>remove →</span>
              )}
            </button>
          ))}
        </div>
        <p className="text-sm text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>Click non-essential fields to remove them</p>
      </div>

      {/* Right — Small SaaS */}
      <div className="bg-[#f4f4f4] p-8">
        <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>Small SaaS: {visible} of {fields.length} fields</div>
        <div className="space-y-2 mb-6">
          {fields.map((f, i) => {
            if (removed.has(i)) return null;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 border text-sm"
                style={{ borderColor: f.priority ? "#24a148" : "rgba(0,0,0,0.1)", backgroundColor: f.priority ? "#defbe6" : "white" }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: f.priority ? "#24a148" : "#8d8d8d" }} />
                <span style={{ color: f.priority ? "#0e6027" : "#161616" }}>{f.label}</span>
              </div>
            );
          })}
        </div>
        <div className="border border-[rgba(0,0,0,0.08)] bg-white p-4">
          <div className="text-sm text-[#6f6f6f] leading-relaxed">
            <span className="font-normal text-[#24a148]">{fields.filter((f) => f.priority).length} essential fields</span> keep the experience focused and reduce cognitive load for new users.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Visual Tiles ─────────────────────────────────────────────────────────────

function VisualTiles() {
  const [selected, setSelected] = useState<number | null>(null);

  const tiles = [
    {
      label: "Empty States",
      bg: "#edf5ff", color: "#0f62fe",
      icon: "⬡",
      rationale: "Designed empty state illustrations that guide users toward their first action rather than showing a blank screen.",
    },
    {
      label: "Illustrations",
      bg: "#defbe6", color: "#24a148",
      icon: "◈",
      rationale: "Created illustration concepts and supporting visual assets that contributed to the evolving design language.",
    },
    {
      label: "Icons",
      bg: "#f6f2ff", color: "#8a3ffc",
      icon: "✦",
      rationale: "Contributed icon exploration work that aligned with the Carbon Design System while reflecting a SaaS-native sensibility.",
    },
    {
      label: "Tooltips",
      bg: "#fff8e1", color: "#c08200",
      icon: "◉",
      rationale: "Designed contextual tooltip patterns to surface explanations at the moment users encounter unfamiliar features.",
    },
    {
      label: "Banners",
      bg: "#fff1f1", color: "#da1e28",
      icon: "▣",
      rationale: "Explored notification and banner patterns that communicate status without interrupting the primary workflow.",
    },
    {
      label: "Cards",
      bg: "#f4f4f4", color: "#393939",
      icon: "◫",
      rationale: "Contributed card designs with a lighter, more modern aesthetic than traditional Maximo interfaces.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {tiles.map((tile, i) => (
          <div
            key={i}
            onMouseEnter={() => setSelected(i)}
            onMouseLeave={() => setSelected(null)}
            className="aspect-square flex flex-col items-center justify-center border transition-all duration-200 cursor-default"
            style={{
              backgroundColor: selected === i ? tile.color : tile.bg,
              borderColor: selected === i ? tile.color : "rgba(0,0,0,0.08)",
              transform: selected === i ? "scale(1.04)" : "scale(1)",
            }}
          >
            <span className="text-2xl mb-2" style={{ color: selected === i ? "white" : tile.color }}>{tile.icon}</span>
            <span
              className="text-[9px] uppercase tracking-widest"
              style={{ fontFamily: "'DM Mono', monospace", color: selected === i ? "rgba(255,255,255,0.8)" : "#6f6f6f" }}
            >
              {tile.label}
            </span>
          </div>
        ))}
      </div>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: selected !== null ? "120px" : "0" }}
      >
        {selected !== null && (
          <div
            className="border p-6 flex items-start gap-4"
            style={{ borderColor: tiles[selected].color, backgroundColor: tiles[selected].bg }}
          >
            <span className="text-2xl shrink-0">{tiles[selected].icon}</span>
            <div>
              <div
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ fontFamily: "'DM Mono', monospace", color: tiles[selected].color }}
              >
                {tiles[selected].label}
              </div>
              <p className="text-sm text-[#6f6f6f] leading-relaxed">{tiles[selected].rationale}</p>
            </div>
          </div>
        )}
      </div>
      <p className="text-sm text-[#6f6f6f] mt-3" style={{ fontFamily: "'DM Mono', monospace" }}>Hover any tile to reveal contribution detail</p>
    </div>
  );
}

// ─── Mobile Audit ─────────────────────────────────────────────────────────────

const MOBILE_SLIDES = [
  { src: mobileAudit1, label: "Mobile UX Audit — Feature areas" },
  { src: mobileAudit2, label: "Mobile UX Audit — Field technician workflow" },
];

function MobileAudit() {
  const [current, setCurrent] = useState(0);
  const total = MOBILE_SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % total), 3000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  return (
    <div className="relative border border-[rgba(0,0,0,0.1)] overflow-hidden select-none">
      <div className="relative" style={{ minHeight: 200 }}>
        {MOBILE_SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.label}
            className="w-full h-auto block"
            style={{
              position: i === 0 ? "relative" : "absolute",
              top: 0, left: 0,
              opacity: current === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 border border-[rgba(0,0,0,0.12)] hover:bg-white transition-colors cursor-pointer"
        aria-label="Previous"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 border border-[rgba(0,0,0,0.12)] hover:bg-white transition-colors cursor-pointer"
        aria-label="Next"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {MOBILE_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="w-2 h-2 rounded-full transition-colors cursor-pointer" style={{ background: current === i ? "#0f62fe" : "rgba(0,0,0,0.2)" }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

// ─── Promo Slider ────────────────────────────────────────────────────────────

const PROMO_SLIDES = [
  { src: promoCard4, alt: "Promo card live in the Maximo Operational Dashboard" },
  { src: promoCard1, alt: "Promo card in the Operational Dashboard — wide viewport" },
  { src: promoCard2, alt: "Promo card in the dashboard card gallery" },
  { src: promoCard3, alt: "Promo card — Figma mid/hi-fidelity review" },
];

function PromoSlider() {
  const [current, setCurrent] = useState(0);
  const total = PROMO_SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % total), 3000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  return (
    <div className="relative border border-[rgba(0,0,0,0.1)] overflow-hidden select-none">
      {/* Images */}
      <div className="relative" style={{ minHeight: 200 }}>
        {PROMO_SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className="w-full h-auto block"
            style={{
              position: i === 0 ? "relative" : "absolute",
              top: 0, left: 0,
              opacity: current === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 border border-[rgba(0,0,0,0.12)] hover:bg-white transition-colors cursor-pointer"
        aria-label="Previous"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 border border-[rgba(0,0,0,0.12)] hover:bg-white transition-colors cursor-pointer"
        aria-label="Next"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {PROMO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-colors cursor-pointer"
            style={{ background: current === i ? "#0f62fe" : "rgba(255,255,255,0.6)" }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Score Slider ────────────────────────────────────────────────────────────

function ScoreSlider() {
  const [active, setActive] = useState(0);
  const images = [
    { src: maximoScoreImg, label: "Maximo Score Details — Full Breakdown" },
    { src: maintainxScoreImg, label: "MaintainX Experience Summary" },
  ];

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % images.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
        {images[active].label}
      </div>
      <div className="border border-[rgba(0,0,0,0.1)] overflow-hidden relative" style={{ minHeight: 200 }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.label}
            className="w-full h-auto block absolute inset-0"
            style={{
              opacity: active === i ? 1 : 0,
              transition: "opacity 0.6s ease",
              position: i === 0 ? "relative" : "absolute",
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ background: active === i ? "#0f62fe" : "#c6c6c6" }}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
        <p className="text-sm text-[#6f6f6f] ml-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Source: IBM Maximo Competitive Analysis · 2026 · TTV = Time to Value · CSAT = Customer Satisfaction Score
        </p>
      </div>
    </div>
  );
}

// ─── Interactive Grid ────────────────────────────────────────────────────────

function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const CELL = 60;
  const RADIUS = CELL * 3; // exactly 3 boxes

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Listen on window so mouse is captured regardless of z-index layering
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      ctx.clearRect(0, 0, W, H);

      // smoothstep: fast at center, fades gently at circumference
      const smooth = (d: number) => {
        const r = Math.max(0, 1 - d / RADIUS);
        return r * r * (3 - 2 * r); // smoothstep S-curve
      };

      for (let x = 0; x <= W; x += CELL) {
        const cy = Math.max(0, Math.min(H, my));
        const t = smooth(Math.hypot(x - mx, cy - my));
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.strokeStyle = t > 0 ? `rgba(15,98,254,${(t * 0.15).toFixed(3)})` : "rgba(0,0,0,0.07)";
        ctx.lineWidth = t > 0 ? 0.5 + t * 0.5 : 0.5;
        ctx.stroke();
      }

      for (let y = 0; y <= H; y += CELL) {
        const cx = Math.max(0, Math.min(W, mx));
        const t = smooth(Math.hypot(cx - mx, y - my));
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.strokeStyle = t > 0 ? `rgba(15,98,254,${(t * 0.15).toFixed(3)})` : "rgba(0,0,0,0.07)";
        ctx.lineWidth = t > 0 ? 0.5 + t * 0.5 : 0.5;
        ctx.stroke();
      }
    };

    const loop = () => { draw(); rafRef.current = requestAnimationFrame(loop); };
    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ display: "block" }} />;
}

// ─── Team Panorama ───────────────────────────────────────────────────────────

// Fixed pixel positions relative to center of the sticky viewport.
// These are used both for placing member divs and for drawing SVG lines.
const MEMBERS = [
  { name: "Jenny Qui",  role: "Senior Designer",   initials: "JQ", color: "#8a3ffc", px: -300, py: -100 },
  { name: "Liam",       role: "Designer",           initials: "LM", color: "#24a148", px: -180, py:  130 },
  { name: "Thanushri",  role: "Designer",           initials: "TH", color: "#f1c21b", px:  260, py: -130 },
  { name: "Ester",      role: "Content Designer",   initials: "ES", color: "#ee5396", px:  300, py:  120 },
];

const ME = {
  name: "Chandana", role: "UX Designer", initials: "CH", color: "#0f62fe", px: 0, py: 0,
  tasks: ["UX Clarity & Guidance", "Field Help System", "Onboarding Experience", "Visual Support", "Illustration Library", "Mobile Promo Card"],
};


function TeamPanorama() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // ── Scroll phases ──────────────────────────────────────────
  // 0.00–0.18  Heading centered, team invisible
  // 0.18–0.38  Heading shifts up, team circles + lines fade in
  // 0.38–0.60  Others fade/drift out, Chandana glows at center
  // 0.60–0.82  Chandana's task chips unfurl
  // 0.82–1.00  Everything fades → exit to case study

  // Phase 1: 0–0.28   — heading only, nothing else visible
  // Phase 2: 0.28–0.50 — heading flies off screen, team fades in
  // Phase 3: 0.50–0.68 — others fade out, Chandana glows at center
  // Phase 4: 0.68–0.86 — ONLY after fully on Chandana, tasks appear
  // Phase 5: 0.86–1.0  — exit to case study

  // Heading: hold still, then fly upward off screen
  const headingY       = useTransform(scrollYProgress, [0, 0.26, 0.38], [0, 0, -160]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.24, 0.36], [1, 1, 0]);

  // Team: only appears after heading is fully gone
  const teamOpacity    = useTransform(scrollYProgress, [0.36, 0.50], [0, 1]);
  const linesOpacity   = useTransform(scrollYProgress, [0.38, 0.50], [0, 1]);
  const othersOpacity  = useTransform(scrollYProgress, [0.50, 0.66], [1, 0]);
  const othersScale    = useTransform(scrollYProgress, [0.50, 0.66], [1, 0.72]);

  // Chandana: avatar appears with team, glow kicks in once others are gone
  const meAvatarOpacity  = useTransform(scrollYProgress, [0.36, 0.50], [0, 1]);
  const meGlow1Opacity   = useTransform(scrollYProgress, [0.62, 0.72], [0, 1]);
  const meGlow2Opacity   = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);
  const meTaglineOpacity = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);

  // Tasks: only after others are fully gone and Chandana is fully in focus
  const tasksContainerOpacity = useTransform(scrollYProgress, [0.70, 0.78], [0, 1]);

  const exitOpacity     = useTransform(scrollYProgress, [0.86, 1.0], [1, 0]);
  const hintOpacity     = useTransform(scrollYProgress, [0, 0.10], [1, 0]);
  const continueOpacity = useTransform(scrollYProgress, [0.80, 0.90, 1.0], [0, 1, 0]);
  const cornerOpacity   = useTransform(scrollYProgress, [0, 0.22, 0.38], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white flex items-center justify-center">

        {/* Interactive canvas grid */}
        <InteractiveGrid />

        {/* ── PHASE 1: Heading ── */}
        <motion.div
          className="absolute text-center pointer-events-none z-10"
          style={{ opacity: headingOpacity, y: headingY }}
        >
          <h2
            className="text-4xl md:text-6xl font-light text-[#161616] leading-[1.1]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Designing an Enterprise<br />Asset Management<br />Product for IBM
          </h2>
        </motion.div>

        {/* ── PHASE 2: Other team member circles ── */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: teamOpacity }}
        >
          {MEMBERS.map((m, mi) => (
            <motion.div
              key={m.name}
              className="absolute flex flex-col items-center"
              style={{
                left: "50%",
                top: "50%",
                x: `calc(-50% + ${m.px}px)`,
                y: `calc(-50% + ${m.py}px)`,
                opacity: othersOpacity,
                scale: othersScale,
              }}
            >
              {/* Pulse rings — inherit opacity from parent so they vanish with teamOpacity */}
              <div className="absolute rounded-full" style={{ width: 72, height: 72, top: "50%", left: "50%", transform: "translate(-50%, -50%) translateY(-22px)", border: `1px solid ${m.color}`, animation: `pulse-ring 2.4s ease-out ${mi * 0.35}s infinite` }} />
              <div className="absolute rounded-full" style={{ width: 72, height: 72, top: "50%", left: "50%", transform: "translate(-50%, -50%) translateY(-22px)", border: `1px solid ${m.color}`, animation: `pulse-ring 2.4s ease-out ${mi * 0.35 + 1.2}s infinite` }} />
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-2.5 border relative z-10"
                style={{ backgroundColor: `${m.color}18`, borderColor: `${m.color}50` }}
              >
                <span className="text-sm font-light" style={{ color: m.color, fontFamily: "'Fraunces', serif" }}>
                  {m.initials}
                </span>
              </div>
              <div className="text-[#161616] text-xs font-normal text-center relative z-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.name}</div>
              <div className="text-[#525252] text-[9px] uppercase tracking-wider text-center relative z-10" style={{ fontFamily: "'DM Mono', monospace" }}>{m.role}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PHASE 2–3: Chandana's circle (always at center) ── */}
        <motion.div
          className="absolute flex flex-col items-center z-20"
          style={{ opacity: exitOpacity }}
        >
          {/* Outer glow rings */}
          <motion.div
            className="absolute rounded-full border border-[#0f62fe]/25 pointer-events-none"
            style={{ width: 200, height: 200, x: "-50%", y: "-50%", top: "50%", left: "50%", opacity: meGlow1Opacity, scale: useTransform(scrollYProgress, [0.38, 0.62], [0.85, 1.0]) }}
          />
          <motion.div
            className="absolute rounded-full border border-[#0f62fe]/12 pointer-events-none"
            style={{ width: 290, height: 290, x: "-50%", y: "-50%", top: "50%", left: "50%", opacity: meGlow2Opacity, scale: useTransform(scrollYProgress, [0.42, 0.66], [0.85, 1.0]) }}
          />

          {/* Avatar */}
          <motion.div
            className="w-20 h-20 rounded-full bg-[#0f62fe] flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(15,98,254,0.25)]"
            style={{ opacity: meAvatarOpacity }}
          >
            <span className="text-white text-xl font-light" style={{ fontFamily: "'Fraunces', serif" }}>CH</span>
          </motion.div>

          {/* Name + role */}
          <motion.div className="text-center mb-1" style={{ opacity: meAvatarOpacity }}>
            <div className="text-[#161616] text-lg font-normal" style={{ fontFamily: "'DM Sans', sans-serif" }}>Chandana</div>
            <div className="text-[#0f62fe] text-[10px] uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>UX Designer</div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-[#6f6f6f] text-xs text-center mb-7 max-w-[200px] leading-relaxed"
            style={{ opacity: meTaglineOpacity, fontFamily: "'DM Sans', sans-serif" }}
          >
            UX and visual design at IBM
          </motion.p>

          {/* Task chips */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 max-w-[360px]"
            style={{ opacity: tasksContainerOpacity }}
          >
            {ME.tasks.map((task, ti) => (
              <motion.span
                key={task}
                className="px-3 py-1.5 bg-[#0f62fe]/08 border border-[#0f62fe]/25 text-[#0f62fe] text-[10px] tracking-wide"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  opacity: useTransform(scrollYProgress, [0.60 + ti * 0.025, 0.70 + ti * 0.025], [0, 1]),
                  y: useTransform(scrollYProgress, [0.60 + ti * 0.025, 0.72 + ti * 0.025], [10, 0]),
                }}
              >
                {task}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: hintOpacity }}
        >
          <div className="text-[10px] uppercase tracking-widest text-[#525252]" style={{ fontFamily: "'DM Mono', monospace" }}>Scroll to explore</div>
          <div className="w-px h-8 bg-gradient-to-b from-[#8d8d8d] to-transparent" />
        </motion.div>

        {/* Continue cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: continueOpacity }}
        >
          <div className="text-[10px] uppercase tracking-widest text-[#0f62fe]" style={{ fontFamily: "'DM Mono', monospace" }}>My case study begins below</div>
          <div className="w-px h-8 bg-gradient-to-b from-[#0f62fe] to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

function ScrollNav() {
  const { scrollY } = useScroll();
  // panorama is 320vh — nav appears after user scrolls past it
  const [visible, setVisible] = useState(false);
  scrollY.on("change", (v) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 3.1 : 9999;
    setVisible(v > threshold);
  });
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[rgba(0,0,0,0.08)] transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transform: visible ? "translateY(0)" : "translateY(-8px)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
        <span className="text-sm font-normal tracking-tight text-[#161616]">Chandana</span>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Challenge", id: "problem" },
            { label: "Research", id: "research" },
            { label: "Direction", id: "insights" },
            { label: "Design", id: "design" },
            { label: "Cards", id: "promo" },
            { label: "Impact", id: "impact" },
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-[#6f6f6f] hover:text-[#0f62fe] transition-colors tracking-wide uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://readymag.website/u489783858/5357852/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#0f62fe] hover:underline underline-offset-2 transition-colors"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ← All work
        </a>
      </div>
    </nav>
  );
}

function IBMProjectCard() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f4f4f4]"
      style={{ fontFamily: "'DM Sans', sans-serif", padding: "48px 24px" }}
    >
      <div
        style={{
          width: "480px",
          background: "#161616",
          borderRadius: "4px",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
        }}
      >
        {/* Top colour bar */}
        <div style={{ height: "4px", background: "linear-gradient(90deg, #0f62fe 0%, #4589ff 100%)" }} />

        {/* Card body */}
        <div style={{ padding: "36px 36px 32px" }}>
          {/* Label row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0f62fe",
                background: "rgba(15,98,254,0.12)",
                padding: "4px 10px",
                borderRadius: "2px",
              }}
            >
              UX Research
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6f6f6f",
              }}
            >
              2026
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            IBM Maximo
          </h2>
          <h3
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#8d8d8d",
              lineHeight: 1.3,
              marginBottom: "20px",
            }}
          >
            Small SaaS Onboarding
          </h3>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "20px" }} />

          {/* Description */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#a8a8a8",
              lineHeight: 1.65,
              marginBottom: "32px",
            }}
          >
            End-to-end work across discovery, user testing, UX strategy, and UI design. Simplified a
            26-step onboarding to 8, ran competitive research, audited the mobile app, and shipped
            conversion-focused promo cards for IBM Maximo Small SaaS.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
            {["Discovery", "User Testing", "UX Design", "UI Design", "Mobile Audit"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: "#6f6f6f",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={window.location.origin + window.location.pathname.replace("?card", "")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#0f62fe",
              color: "#ffffff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Read case study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const isCardPreview = typeof window !== "undefined" && window.location.search.includes("card");
  if (isCardPreview) return <IBMProjectCard />;

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: translate(-50%, -50%) translateY(-22px) scale(1);   opacity: 0.3; }
          70%  { transform: translate(-50%, -50%) translateY(-22px) scale(2.2); opacity: 0; }
          100% { transform: translate(-50%, -50%) translateY(-22px) scale(2.2); opacity: 0; }
        }
      `}</style>

      <TeamPanorama />
      <ScrollNav />

      {/* ── 01 · HERO ─────────────────────────────────────────── */}
      <section className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs tracking-widest text-[#0f62fe]" style={{ fontFamily: "'DM Mono', monospace" }}>01</span>
                <span className="w-8 h-px bg-[#0f62fe]" />
                <span className="font-mono text-xs tracking-widest uppercase text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>IBM Small SaaS · 2026</span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-[#161616] mb-8"
                style={{ fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" }}
              >
                Making Enterprise
                <br />
                <em className="not-italic text-[#0f62fe]">Software</em>
                <br />
                Feel Simple
              </h1>
              <p className="text-lg text-[#161616] leading-relaxed mb-10 max-w-md font-light">
                IBM Maximo was built for large enterprise IT teams. My job was to make it work for mid-sized businesses: faster to learn, simpler to navigate, and useful from day one.
              </p>
              <div className="flex gap-10 mb-10">
                {[
                  { label: "Role", value: "UI & UX Design" },
                  { label: "Company", value: "IBM" },
                  { label: "Platform", value: "Maximo Small SaaS" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>{label}</div>
                    <div className="text-sm text-[#6f6f6f]">{value}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>UX Work</div>
                  <div className="flex flex-col gap-2">
                    {["Competitive analysis", "Journey mapping", "Onboarding strategy", "Wireframing & prototyping"].map((tag) => (
                      <div key={tag} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#6f6f6f] rounded-full shrink-0" />
                        <span className="text-sm text-[#6f6f6f]">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Visual Work</div>
                  <div className="flex flex-col gap-2">
                    {["Dashboard & card design", "Illustration & empty states", "Mobile audit & concepts", "Carbon Design System"].map((tag) => (
                      <div key={tag} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#6f6f6f] rounded-full shrink-0" />
                        <span className="text-sm text-[#6f6f6f]">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#edf5ff] to-transparent rounded-sm -z-10" />
              <HeroMockup />
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-[rgba(0,0,0,0.08)] grid grid-cols-3 gap-8">
            {[
              { value: "8", label: "Phases evaluated" },
              { value: "6", label: "Onboarding concepts" },
              { value: "3+", label: "Competitors benchmarked" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl md:text-4xl font-light text-[#0f62fe] mb-1" style={{ fontFamily: "'Fraunces', serif" }}>{m.value}</div>
                <div className="text-sm text-[#6f6f6f] uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · THE CHALLENGE ────────────────────────────────── */}
      <section id="problem" className="py-24 px-6 md:px-16 lg:px-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <Label number="02" text="The Challenge" />
          <SectionTitle>Built for Experts,<br />Not for Everyone</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-16 max-w-2xl">
            Maximo was designed for enterprise IT teams with months of training. Small SaaS targets mid-market managers who need to be productive in days. That gap is the design problem.
          </p>
          <div className="grid md:grid-cols-2 gap-0 border border-[rgba(0,0,0,0.1)]">
            <div className="bg-white p-10 md:p-12 border-r border-[rgba(0,0,0,0.08)]">
              <div className="text-[10px] uppercase tracking-widest text-[#525252] mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>Traditional Maximo</div>
              <div className="space-y-5">
                {[
                  { label: "Built for experts", desc: "Dense interfaces designed for power users, not first-timers" },
                  { label: "Read before you do", desc: "Users had to study documentation before completing basic tasks" },
                  { label: "Assumes IT support", desc: "Assumed users had a dedicated IT team behind them" },
                  { label: "Slow to start", desc: "Most users needed weeks before they could work independently" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-[#da1e28] rounded-full mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-normal text-[#161616] mb-0.5">{item.label}</div>
                      <div className="text-sm text-[#6f6f6f] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0f62fe] p-10 md:p-12">
              <div className="text-[10px] uppercase tracking-widest text-white/75 mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>Small SaaS Vision</div>
              <div className="space-y-5">
                {[
                  { label: "Guided from the start", desc: "Setup that builds confidence from the first interaction" },
                  { label: "Learn by doing", desc: "Users learn through real tasks, not tutorials" },
                  { label: "Right-sized", desc: "Sized for teams without dedicated IT support" },
                  { label: "Minutes to first value", desc: "A meaningful first success on day one, not week three" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-[#78a9ff] rounded-full mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-normal text-white mb-0.5">{item.label}</div>
                      <div className="text-sm text-white/75 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · COMPETITIVE RESEARCH ─────────────────────────── */}
      <section id="research" className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Label number="03" text="Competitive Research" />
          <SectionTitle>Maximo vs. the Competition</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-16 max-w-2xl font-light">
            We acted as first-time users across 8 phases, comparing Maximo to SAP EAM using Time to Value and CSAT scores. Click any phase to explore the findings.
          </p>
          <div className="mb-6">
            <div className="text-[10px] uppercase tracking-widest text-[#0f62fe] mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Phase Evaluation Map — Maximo vs Competition
            </div>
            <CompetitiveMap />
          </div>
          <div className="mt-16">
            <ScoreSlider />
          </div>
        </div>
      </section>

      {/* ── 04 · JOURNEY DEEP DIVE ────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <Label number="04" text="Journey Analysis" />
          <SectionTitle>Learning From MaintainX</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-12 max-w-2xl font-light">
            MaintainX had the fastest time-to-value in the study. I mapped their onboarding step by step to understand why. Hover any step to see what I found.
          </p>
          <HorizontalJourney />
        </div>
      </section>

      {/* ── 05 · FROM RESEARCH TO DIRECTION ──────────────────── */}
      <section id="insights" className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Label number="05" text="Design Direction" />
          <SectionTitle>Three Findings,<br />Three Design Bets</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-16 max-w-2xl font-light">
            Research surfaced three recurring problems. I translated each into a design direction with a clear outcome.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                insight: "Users need a win before they commit.",
                color: "#24a148",
                opportunities: ["Checklist onboarding", "Demo workspace", "Guided first task"],
                outcome: "Faster activation, more confidence early on.",
              },
              {
                insight: "Learning through doing beats documentation.",
                color: "#0f62fe",
                opportunities: ["Guided walkthroughs", "Interactive learning", "Contextual coaching"],
                outcome: "Less reliance on docs and tutorials.",
              },
              {
                insight: "Enterprise jargon alienates new users.",
                color: "#8a3ffc",
                opportunities: ["Plain language labels", "Contextual explanations", "Progressive feature education"],
                outcome: "Less friction for first-time users.",
              },
            ].map((row, i) => (
              <div key={i} className="border border-[rgba(0,0,0,0.08)] bg-white overflow-hidden">
                <div className="p-1.5" style={{ backgroundColor: row.color }} />
                <div className="p-8">
                  <div className="text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: row.color }}>Insight</div>
                  <p className="text-base font-light text-[#161616] mb-6 leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>{row.insight}</p>
                  <div className="text-[10px] uppercase tracking-widest mb-3 text-[#525252]" style={{ fontFamily: "'DM Mono', monospace" }}>Directions</div>
                  <div className="space-y-2 mb-6">
                    {row.opportunities.map((opp) => (
                      <div key={opp} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                        <span className="text-sm text-[#6f6f6f]">{opp}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[rgba(0,0,0,0.06)]">
                    <div className="text-[10px] uppercase tracking-widest mb-1 text-[#525252]" style={{ fontFamily: "'DM Mono', monospace" }}>Expected outcome</div>
                    <p className="text-sm text-[#6f6f6f] leading-relaxed">{row.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERLUDE ─────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#f4f4f4]">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote
            className="text-3xl md:text-4xl lg:text-[3.25rem] font-light text-[#161616] leading-[1.2]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            "We didn't design one onboarding. We designed a{" "}
            <em className="not-italic text-[#0f62fe]">system of possible paths</em>{" "}
            for users wherever they were."
          </blockquote>
        </div>
      </section>

      {/* ── 06 · IDEATION ─────────────────────────────────────── */}
      <section id="design" className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Label number="06" text="Ideation" />
          <SectionTitle>Six Ways to Solve<br />the Same Problem</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-16 max-w-2xl font-light">
            I explored six onboarding directions. Each one approached the problem differently. Hover any card to see the thinking.
          </p>
          <ConceptCards />
        </div>
      </section>

      {/* ── 07 · WORKFLOW SIMPLIFICATION ─────────────────────── */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <Label number="07" text="Workflow Simplification" />
          <SectionTitle>Cutting the Fields<br />That Didn't Belong</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-16 max-w-2xl font-light">
            Maximo's forms were built for enterprise administrators. Most fields meant nothing to a new Small SaaS user. Click any field marked 'remove' to strip it out.
          </p>
          <WorkflowComparison />
        </div>
      </section>

      {/* ── 08 · PROMO CARD ───────────────────────────────────── */}
      <section id="promo" className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Label number="08" text="Conversion Design" />
          <SectionTitle>Designing for<br />the 1% Who Stay</SectionTitle>

          {/* Problem + stat */}
          <PromoSlider />
        </div>
      </section>

      {/* ── 09 · VISUAL & MOBILE WORK ─────────────────────────── */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <Label number="09" text="Design Work" />
          <SectionTitle>Visual Design<br />& Mobile Audit</SectionTitle>
          <p className="text-lg text-[#161616] leading-relaxed mb-16 max-w-2xl font-light">
            Visual design contributions across the product, followed by a UX audit of the Maximo Mobile app.
          </p>

          {/* Visual tiles */}
          <div className="mb-20">
            <div className="text-[10px] uppercase tracking-widest text-[#525252] mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>Visual contributions — hover to explore</div>
            <VisualTiles />
          </div>

          {/* Mobile audit */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#525252] mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>Maximo Mobile — UX audit</div>
            <MobileAudit />
          </div>
        </div>
      </section>

      {/* ── 10 · IMPACT & REFLECTION ──────────────────────────── */}
      <section id="impact" className="py-24 px-6 md:px-16 lg:px-24 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <Label number="10" text="Impact" />
          <SectionTitle className="text-white">What I Delivered</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {[
              {
                headline: "Research created alignment.",
                detail: "The competitive benchmarks gave the team specific, evidenced problems to act on rather than opinions.",
              },
              {
                headline: "The journey map reframed the problem.",
                detail: "Speed to first value is about sequencing, not feature count. The map made that concrete.",
              },
              {
                headline: "Phase 4 findings shaped the concepts.",
                detail: "Where users hesitated in 'Get Started' directly informed the Guided Walkthrough and Checklist concepts.",
              },
              {
                headline: "Workflow audit surfaced hidden disagreements.",
                detail: "The field prioritisation exercise exposed misalignment between design, product, and engineering. It gave the team something concrete to resolve around.",
              },
              {
                headline: "The mobile audit found a forgotten user.",
                detail: "Field workers had no onboarding story. Time-pressured, often offline, one hand free. The audit made that gap hard to ignore.",
              },
              {
                headline: "The concepts outlasted the project.",
                detail: "Several onboarding patterns became recurring reference points in product planning after the sprint ended.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-[rgba(255,255,255,0.07)] p-7 hover:border-[#0f62fe] transition-colors">
                <div className="w-1.5 h-1.5 bg-[#0f62fe] rounded-full mb-5" />
                <h4 className="text-sm font-normal text-white mb-3 leading-snug">{item.headline}</h4>
                <p className="text-sm text-[#6f6f6f] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-[rgba(255,255,255,0.08)] pt-16">
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-[1.3] max-w-4xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              "The best SaaS products are not the ones with the most features. They are the ones that make it{" "}
              <em className="not-italic text-[#0f62fe]">obvious what to do next.</em>"
            </blockquote>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(0,0,0,0.08)] px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="https://readymag.website/u489783858/5357852/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6f6f6f] hover:text-[#0f62fe] transition-colors"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Chandana · UX Portfolio ↗
          </a>
          <span className="text-sm text-[#6f6f6f]" style={{ fontFamily: "'DM Mono', monospace" }}>IBM Small SaaS · 2026</span>
        </div>
      </footer>
    </div>
  );
}
