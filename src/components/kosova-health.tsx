import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity, AlertTriangle, ArrowLeft, ArrowRight, BadgeCheck, Bell, CalendarDays,
  Check, CheckCircle2, ChevronRight, CircleUserRound, ClipboardList, CloudUpload,
  Download, Droplets, Eye, EyeOff, FileSpreadsheet, FlaskConical, HeartPulse,
  Hospital, LockKeyhole, MapPin, Menu, Microscope, MoonStar, Navigation, Phone,
  Pill, Search, ShieldCheck, ShoppingBasket, Sparkles, Stethoscope, Sun, Upload,
  UserRound, X, Zap,
} from "lucide-react";

export const logoUrl = "https://lh3.googleusercontent.com/aida/AEtjO1X7-e7FjiyftjRd8wTg3eaLApRy-sNFqxHRRQGzWhVg7HDyY-q7-EE4a1O9WxWoSWQmZ0t_EEA7PAQlF3uEQ1IUJPNRr0NxiEhOhNQOSbUbbOltdv5LsJUNocT2_qB77PvZc2_qRfdBZeRiMvIPH9AzOoM0cdYZOeJxSciT_-M-OjR0gNh1De-06D9uoeDlXJyij40w3eyxrtOnNjv6Zrspet2sEy1wChF2fgrfwelC7toMq_7cnVXc3xM";
export const labImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBytvNeYy0tcYy0SCKOk4VZJkLO-_VrGfIMBnOuovRWm-8OdRyEqaWkDpv03-bsSj6kvZdzcgtS1wSAnIYE4Ae_w1vFr0Zu31agbTxWBnNf2VvoBhTEGuP8_lbUM7nHmPVhMemx2pv8viq4nrpv_1lhZQdrKEzCSlY0kTMUpmKPikp3Cf-vFfH-dUu0WwlgbaNniYYjy4Qom599fXKJFBJ2UfJBr4JSVYyd9uzSc7ATGGoM7qZ_BpzE";

const productImages = [
  "https://imageproxy.wolt.com/assets/6a05792b5311d3f37cb3cad4?w=1920",
  "https://imageproxy.wolt.com/assets/6a0579634106dd6503d4ad59?w=1920",
  "https://imageproxy.wolt.com/assets/6a057963513e329be7411445?w=1920",
  "https://imageproxy.wolt.com/assets/6a05793c513e329be7411415?w=1920",
  "https://imageproxy.wolt.com/assets/6a057979cf8c9f142af46aab?w=1920",
  "https://imageproxy.wolt.com/assets/6a05793a513e329be7411411?w=1920",
];

const navItems = [
  ["/dashboard", "Dashboard & Vitals"], ["/labs", "Feed Biomarkers"],
  ["/diagnostics", "Health Diagrams"], ["/pharmacies", "Pharmacies & Stores"],
  ["/prescriptions", "Prescriptions"],
] as const;

export function Button({ children, variant = "primary", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger" }) {
  return <button className={`btn btn-${variant} ${className}`} {...props}>{children}</button>;
}

export function Badge({ children, tone = "good" }: { children: ReactNode; tone?: "good" | "warn" | "bad" | "info" | "neutral" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="brand" aria-label="KosovaHealth home"><img src={logoUrl} alt="" /><span className={compact ? "sr-only" : "brand-copy"}>Platforma Kombëtare Shëndetësore</span></Link>;
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="app-canvas">
    <header className="app-header">
      <div className="app-header-inner"><Brand />
        <nav className={open ? "app-nav app-nav-open" : "app-nav"} aria-label="Primary navigation">
          {navItems.map(([to, label]) => <Link key={to} to={to} activeProps={{ className: "active" }} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="header-profile"><Bell size={18} /><div><strong>Dr. Arta Gashi</strong><small>Patient View</small></div><span className="avatar">AG</span></div>
        <Button variant="ghost" className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}><Menu size={22} /></Button>
      </div>
    </header>
    <main className="page-wrap">{children}</main>
  </div>;
}

export function PageTitle({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return <div className="page-title"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{description && <p>{description}</p>}</div>{actions && <div className="page-actions">{actions}</div>}</div>;
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`panel ${className}`}>{children}</section>;
}

export function SectionHeading({ icon, eyebrow, title, aside }: { icon?: ReactNode; eyebrow?: string; title: string; aside?: ReactNode }) {
 return <div className="section-heading"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{icon}{title}</h2></div>{aside}</div>;
}

export function SignInScreen() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"patient" | "clinic">("patient");
  const [id, setId] = useState("");
  const signIn = (e: React.FormEvent) => { e.preventDefault(); void navigate({ to: "/dashboard" }); };
  return <div className="auth-page"><div className="auth-shell">
    <div className="auth-form-side"><div className="auth-brand"><Brand /><Badge tone="good"><ShieldCheck size={12} /> Sistemi i Sigurt</Badge></div>
      <div className="segmented"><button className={mode === "patient" ? "selected" : ""} onClick={() => setMode("patient")}><UserRound size={16}/> Patient Sign In</button><button className={mode === "clinic" ? "selected" : ""} onClick={() => setMode("clinic")}><Hospital size={16}/> Clinic & Lab Portal</button></div>
      <h1>{mode === "patient" ? "Mirësevini përsëri" : "Clinic & Lab Access"}</h1><p>Sign in with your Kosova Personal ID or registered laboratory email.</p>
      <form onSubmit={signIn} className="auth-form"><label>NUMRI PERSONAL OSE EMAIL<div className="field"><CircleUserRound size={17}/><input aria-label="Personal ID or email" value={id} onChange={e=>setId(e.target.value)} placeholder="p.sh. 1012345678" /></div></label>
        <label><span className="label-row">FJALËKALIMI <a href="#forgot">Keni harruar fjalëkalimin?</a></span><div className="field"><LockKeyhole size={17}/><input aria-label="Password" type={show ? "text" : "password"} defaultValue="kosovahealth"/><button type="button" aria-label={show ? "Hide password" : "Show password"} onClick={()=>setShow(!show)}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div></label>
        <div className="remember"><label><input type="checkbox"/> Më mbaj mend në këtë pajisje</label><Badge tone="info">PATIENT PORTAL</Badge></div>
        <Button type="submit">Sign In to Health Portal <ArrowRight size={16}/></Button>
        <button type="button" className="demo-link" onClick={()=>{setId("1012345678"); void navigate({to:"/dashboard"})}}>Demo Patient Login — Auto-fill</button>
      </form><p className="signup">I ri në KosovaHealth? <a href="#register">Krijo llogari pa pagesë</a></p>
      <div className="auth-legal"><ShieldCheck size={18}/><span>Ligji Nr. 06/L-082 për Mbrojtjen e të Dhënave Personale<br/><small>256-bit AES · QKUK & Agjencia e Barnave</small></span></div>
    </div>
    <aside className="auth-showcase"><Badge tone="info">RRJETI KOMBËTAR I DIAGNOSTIKËS</Badge><h2>Empowering health tracking in Kosova.</h2><p>Real-time biomarker analysis, encrypted lab panels, and instantaneous local pharmacy stock availability in Prishtinë, Prizren, and Pejë.</p>
      <div className="showcase-card"><span><HeartPulse size={20}/> Ekzaminimi i Fundit</span><Badge tone="good">OPTIMAL</Badge><div><strong>Hemoglobina A1c <b>5.4%</b></strong><strong>Vitamina D3 <b>42.8</b></strong></div><p><MapPin size={16}/> Farmacia Dardania · Barnat gati</p></div>
      <footer>Ministria e Shëndetësisë e Kosovës <span>Versioni 3.4.2-rel</span></footer>
    </aside>
  </div></div>;
}

const vitalCards = [
  ["Blood Pressure", "134/86", "mmHg", "Mild elevation (Stage 1)", HeartPulse, "bad"],
  ["Resting Pulse", "74", "BPM", "Optimal resting", HeartPulse, "good"],
  ["Blood Oxygen (SpO₂)", "98", "%", "Normal saturation", Activity, "info"],
  ["Fasting Glucose", "92", "mg/dL", "Euglycemic baseline", Droplets, "good"],
] as const;

export function DashboardScreen() {
 return <AppShell><PageTitle eyebrow="CLINICAL OVERVIEW · SHEND LLAPASHTICA" title="Good afternoon, Shend" description="Your latest panel shows four markers needing attention. Start with magnesium and Vitamin D3 today." actions={<Link className="btn btn-primary" to="/labs"><Upload size={16}/> Feed biomarkers</Link>}/>
  <div className="vitals-grid">{vitalCards.map(([name,value,unit,status,Icon,tone])=><Panel key={name} className="vital-card"><div><small>{name}</small><strong>{value}<em>{unit}</em></strong><Badge tone={tone}>{status}</Badge></div><span className={`icon-well tone-${tone}`}><Icon size={20}/></span></Panel>)}</div>
  <div className="dashboard-grid"><Panel><SectionHeading eyebrow="LATEST CLINICAL PANEL" title="Health snapshot" aside={<Badge tone="warn">74 / 100</Badge>}/><div className="health-score"><div className="score-ring"><strong>74</strong><span>Moderate attention</span></div><div><h3>3 biomarkers below baseline</h3><p>Your cardiovascular signals remain stable. Magnesium, Vitamin D3 and B12 need focused intervention.</p><Link to="/diagnostics" className="text-link">Review clinical diagrams <ChevronRight size={15}/></Link></div></div></Panel>
  <Panel><SectionHeading eyebrow="NEXT BEST ACTIONS" title="Today’s protocol"/><div className="task-list"><div><Sun/><span><strong>25 min direct sunlight</strong><small>Best window 11:45–13:30</small></span><CheckCircle2/></div><div><Activity/><span><strong>40 min Zone 2 walk</strong><small>Germia Park trail</small></span><CheckCircle2/></div><div><Pill/><span><strong>Magnesium at bedtime</strong><small>400 mg prescribed</small></span><ChevronRight/></div></div></Panel></div>
  <Panel className="dashboard-pharmacy"><div><SectionHeading eyebrow="LIVE INVENTORY NETWORK" title="Prescription bundle ready in Dardania"/><p>All 5 prescribed items are available 0.8 km away at Barnatore Dardania.</p></div><Link className="btn btn-primary" to="/pharmacies"><MapPin size={16}/> Find medicines</Link></Panel>
 </AppShell>
}

const parameters = [
 ["Hemoglobin (Hb)","CBC","14.8","g/dL","13.5 – 17.5","Optimal","good"],
 ["Serum Ferritin","Iron Stores","42.0","ng/mL","30 – 400","Normal","good"],
 ["Magnesium (Mg²⁺)","Electrolytes","1.4","mg/dL","1.7 – 2.2","Low","bad"],
 ["25-OH Vitamin D","Vitamins","18.0","ng/mL","30 – 100","Insufficient","warn"],
 ["Calcium (Total)","Metabolic","9.4","mg/dL","8.5 – 10.5","Optimal","good"],
 ["Leukocytes (WBC)","CBC","6.8","×10³/µL","4.5 – 11.0","Optimal","good"],
] as const;

function DropZone({ uploaded, setUploaded }: { uploaded: boolean; setUploaded: (v:boolean)=>void }) {
 return <><div className="drop-zone"><span className="drop-icon"><CloudUpload size={29}/></span><h3>Drag & Drop Blood Panel Document</h3><p>Scanned PDF, high-res smartphone photo, or exported TIFF from laboratory patient portals.</p><div><Button onClick={()=>setUploaded(true)}><Upload size={15}/> Capture / Select Image</Button><Button variant="secondary" onClick={()=>setUploaded(true)}><ClipboardList size={15}/> Browse PDF</Button></div><small>Max 25 MB　•　Albanian / English OCR　•　AES-256 Encrypted</small></div>
 {uploaded && <><div className="file-row"><FileSpreadsheet/><span><strong>Avicena_Routine_Panel_28Oct2025.pdf</strong><small>2.4 MB · Complete Biochemistry & Hematology</small></span><Badge>Extracted</Badge><button aria-label="Remove file" onClick={()=>setUploaded(false)}><X size={16}/></button></div><div className="lab-preview"><img src={labImage} alt="Uploaded Avicena laboratory report"/><span><Microscope size={15}/> Optical Character Recognition: Complete <b>6 Biomarkers Isolated</b></span></div></>}
 </>;
}

const manualGroups = [
 {title:"Electrolytes & Minerals", icon:FlaskConical, aside:"SERUM ANALYSIS", fields:[["Magnesium (Mg²⁺)","1.4","mg/dL","Deficient - Low","bad"],["Total Calcium (Ca²⁺)","9.4","mg/dL","Optimal","good"],["Potassium (K⁺)","4.2","mmol/L","Optimal","good"]]},
 {title:"Vitamins & Hormones", icon:Sun, aside:"ENDOCRINE BASELINE", fields:[["25-OH Vitamin D3","18","ng/mL","Insufficient","warn"],["Vitamin B12 (Cobalamin)","480","pg/mL","Optimal","good"]]},
 {title:"Vitals & Blood Pressure", icon:HeartPulse, aside:"PHYSIOLOGICAL", fields:[["Systolic Blood Pressure","134","mmHg","Elevated","warn"],["Diastolic Blood Pressure","86","mmHg","Elevated","warn"],["Pulse Rate (Resting)","68","bpm","Normal","good"]]},
 {title:"Hemogram & Inflammation", icon:Droplets, aside:"ACUTE MARKERS", fields:[["hs-CRP","0.8","mg/L","Low Risk","good"],["Hemoglobin (Hb)","14.8","g/dL","Optimal","good"]]},
] as const;

const inputMethods = [
  { icon: Microscope, label: "1. Photo & Scan Upload" },
  { icon: FileSpreadsheet, label: "2. CSV / Digital Lab Export" },
  { icon: ClipboardList, label: "3. Manual Quick Entry Grid" },
] as const;

export function LabsScreen() {
 const [method,setMethod]=useState(0), [uploaded,setUploaded]=useState(true), [saved,setSaved]=useState(false); const navigate=useNavigate();
 return <AppShell><div className="breadcrumb"><ArrowLeft size={14}/> Feed Biomarkers / <strong>Laboratory Ingestion Suite</strong><Badge tone="good">OCR Engine 4.2 Online · Prishtinë Node</Badge></div>
 <PageTitle eyebrow="UNIFIED BIOCHEMICAL PORTAL" title="Ingest Lab Results & Biomarkers" description="Upload your recent lab report from Avicena, Olive, or QKUK, or enter your panel manually. Our certified clinical extraction model formats your values according to Kosovo standard diagnostic reference charts." actions={<div className="partners"><small>INTEGRATED PARTNER FORMATS</small><span>● Avicena KS　● Olive Medical　● QKUK Central</span></div>}/>
 <div className="method-tabs">{inputMethods.map(({ icon: Icon, label },i)=><button key={label} className={method===i?"active":""} onClick={()=>setMethod(i)}><Icon size={16}/> {label} {i===0&&<Badge>AI OCR</Badge>}</button>)}</div>
 {method===0 && <div className="ingest-grid"><Panel><DropZone uploaded={uploaded} setUploaded={setUploaded}/></Panel><Panel><SectionHeading icon={<Microscope/>} title="Detected Parameters" aside={<Badge>98.4% Confidence</Badge>}/><p className="section-copy">Review parsed data before syncing with your diagnostic timeline.</p><div className="parameter-list">{parameters.map(([name,cat,val,unit,range,status,tone])=><div key={name}><span><strong>{name}</strong><small>{cat} · Ref: {range}</small></span><b>{val} <em>{unit}</em></b><Badge tone={tone}>{status}</Badge></div>)}</div><div className="info-note"><CheckCircle2 size={16}/> All 6 values were cross-referenced with Avicena Diagnostic System standard templates.</div></Panel></div>}
 {method===1 && <Panel className="csv-panel"><SectionHeading icon={<FileSpreadsheet/>} title="Import Structured Clinical Data" aside={<a href="#template"><Download size={15}/> Lab_Prishtina_Standard.csv</a>}/><div className="drop-zone"><FileSpreadsheet size={38}/><h3>Drop your .CSV, .TSV or .HL7/FHIR file here</h3><p>Automatically maps biomarker columns, specimen dates, and laboratory measurement units.</p><Button>Select Spreadsheet File</Button></div><div className="file-row"><CheckCircle2/><span><strong>Lab_Prishtina_Standard_Q4_Export.csv</strong><small>24 parameters detected · UTF-8 · 0 syntax errors</small></span><Badge>100% Parsed</Badge></div></Panel>}
 {method===2 && <Panel><p className="empty-method">Use the manual grid below to enter values directly from a paper report.</p></Panel>}
 <Panel className="manual-panel"><SectionHeading icon={<FlaskConical/>} title="Biomarker Manual Entry Panel" aside={<Badge tone="info"><CalendarDays size={13}/> Sample Date: Today, 28 Oct 2025</Badge>}/><p className="section-copy">Input values directly from your paper report. Reference ranges dynamically update health classification badges.</p><div className="manual-grid">{manualGroups.map(g=><div className="manual-group" key={g.title}><h3><span><g.icon size={17}/>{g.title}</span><small>{g.aside}</small></h3>{g.fields.map(([name,val,unit,status,tone])=><label key={name}><span>{name}<Badge tone={tone as "good"|"warn"|"bad"}>{status}</Badge></span><div><input defaultValue={val}/><em>{unit}</em></div><small>Standard reference verified by Prishtina Central Lab</small></label>)}</div>)}</div>
 <div className="sticky-action"><span><ShieldCheck/> <b>{saved?"Biomarkers Synchronized!":"Data Verification Ready"}</b><small>{saved?"6 parameters committed to your longitudinal analysis charts.":"Validated against Kosovo Ministry of Health Diagnostic Protocols."}</small></span><div><Button variant="ghost" onClick={()=>setSaved(false)}>Clear Form</Button><Button onClick={()=>{setSaved(true);setTimeout(()=>void navigate({to:"/diagnostics"}),700)}}><Activity size={16}/> Save & Analyze Biomarkers</Button></div></div></Panel>
 </AppShell>;
}

function RadarChart() { return <div className="radar"><div className="radar-shape"></div>{[["Vit D3","top"],["B12","top-right"],["Ferritin","right"],["Zinc","bottom-right"],["Potassium","bottom"],["Omega-3","bottom-left"],["Mg","left"],["Ca","top-left"]].map(([t,p])=><span key={t} className={`radar-${p}`}>{t}</span>)}<strong>74</strong></div> }

const interventions = [
 ["Vitamin D3 (25-OH)","16.0","ng/mL","Severe Deficit","Optimal: 30.0 – 80.0 ng/mL","Chronic afternoon fatigue, compromised seasonal mucosal immunity.","bad"],
 ["Serum Magnesium","1.40","mg/dL","Deficient","Optimal: 1.80 – 2.50 mg/dL","Neuromuscular hyper-excitability, calf cramps during sleep.","bad"],
 ["Cobalamin (Vitamin B12)","190","pg/mL","Suboptimal / Low","Optimal: 400 – 900 pg/mL","Nerve conduction velocity drop, memory fog, red blood cell turnover delay.","info"],
] as const;
const medicines = [
 ["Magnesium Glycinate / Carbonate","Oral 400 mg","1 capsule nightly before sleep","Available in 18 Prishtina locations"],
 ["Calcium Citrate + Vitamin D3","600 mg / 400 IU","1 tablet mid-day with meal","In Stock: Barnatore Qendër"],
 ["Cholecalciferol D3 Drops","5,000 IU / Daily","5 drops each morning for 8 weeks","24/7 Urgent Pickup in Dardania"],
 ["Methylcobalamin (Sublingual B12)","1,000 mcg","Dissolve under tongue daily","14 Pharmacies Ready"],
 ["Hydrocyclin 1% Ointment","Rx Only","Oxytetracycline + Hydrocortisone","Prescription synced"],
] as const;

export function DiagnosticsScreen() {
 const [filter,setFilter]=useState(0); const [reserved,setReserved]=useState<string[]>([]);
 return <AppShell><PageTitle eyebrow="CLINICAL PANEL #KV–94021 · VERIFIED · PRISHTINA CENTRAL LAB" title="Metabolic & Biomarker Diagnostics" description="Comprehensive Nutrient Profiling" actions={<><Button variant="secondary"><Download size={15}/> Export PDF</Button><Link to="/pharmacies" className="btn btn-primary"><Hospital size={16}/> Dispatch to Prishtina Network</Link></>}/>
 <div className="vitals-grid">{vitalCards.map(([name,value,unit,status,Icon,tone])=><Panel key={name} className="vital-card"><div><small>{name}</small><strong>{value}<em>{unit}</em></strong><Badge tone={tone}>{status}</Badge></div><span className={`icon-well tone-${tone}`}><Icon size={20}/></span></Panel>)}</div>
 <div className="diagnostic-grid"><Panel><SectionHeading eyebrow="MULTI-AXIS SPECTRAL ANALYSIS" title="Biomarker & Nutrient Radar" aside={<div className="legend">● Optimal　● Suboptimal　<span>● Deficient</span></div>}/><RadarChart/><Badge tone="bad">4 Critical / Low out of 16 tested</Badge><div className="filter-row">{["All 16 Biomarkers","Deficiencies Only (4)","Minerals & Electrolytes","Vitamins & Antioxidants"].map((x,i)=><button className={i===filter?"active":""} onClick={()=>setFilter(i)} key={x}>{x}</button>)}</div></Panel>
 <div><SectionHeading title="Priority Clinical Interventions" aside={<small>PRISHTINA REFERENCE RANGE</small>}/><div className="intervention-list">{interventions.map(([name,val,unit,status,optimal,text,tone])=><Panel key={name}><h3><span className="status-dot"></span>{name}<Badge tone={tone}>{status}</Badge></h3><div className="metric-line"><strong>{val}<em>{unit}</em></strong><small>{optimal}</small></div><div className={`progress progress-${tone}`}><i/></div><p><b>Clinical Symptom link:</b> {text}</p></Panel>)}</div><div className="mini-metrics"><Panel>Serum Calcium<strong>8.2 <em>mg/dL</em></strong><Badge tone="warn">Mildly low</Badge></Panel><Panel>Ferritin (Iron Stores)<strong>22 <em>ng/mL</em></strong><Badge tone="info">Borderline low</Badge></Panel></div></div></div>
 <Panel className="protocols"><SectionHeading icon={<Sparkles/>} eyebrow="PHYSICIAN DIRECTED · PRISHTINA MICRO-CLIMATE CALIBRATION" title="Active Clinical Lifestyle Protocols" aside={<Badge tone="info"><Sun size={14}/> UV 4.2 Moderate · Peak 11:45–14:15</Badge>}/><div className="protocol-grid"><div><h3><Sun/> Sunlight & Endogenous D3 Synthesis</h3><p>Prishtina’s 42.6° N latitude in autumn yields lower zenith angles. Boost vitamin D3 and support circadian cortisol decline.</p><ul><li>25 to 30 minutes direct solar exposure between 12:00 and 13:30.</li><li>Use oral cholecalciferol if cloud cover exceeds 70%.</li></ul></div><div><h3><Activity/> Cardio & Vascular Pressure Lowering</h3><p>Target blood pressure normalization from 134/86 mmHg down to &lt;120/80 mmHg.</p><ul><li>40 minutes daily Zone 2 walking in Germia Park.</li><li>Minimum 2.8 liters/day; reduce sodium.</li></ul></div></div></Panel>
 <div className="prescription-grid"><section><SectionHeading eyebrow="E-PRESCRIPTION ORDER #RX-KV-718" title="Urgent Compensatory Formulations" aside={<small>Validated by Dr. A. Krasniqi</small>}/><div className="medicine-list">{medicines.map(([name,dose,desc,stock],i)=>{const isReserved=reserved.includes(name);return <Panel key={name}><span className={`med-icon ${i===2?"urgent":""}`}>{i===2?<Droplets/>:<Pill/>}</span><div><h3>{name} <Badge tone={i===2?"bad":"info"}>{dose}</Badge></h3><p>{desc}</p><small><CheckCircle2/> {stock}</small></div><Button variant={i===2?"primary":"secondary"} onClick={()=>setReserved(r=>isReserved?r.filter(x=>x!==name):[...r,name])}>{isReserved?"Reserved ✓":i===2?"Urgent Reserve":"Reserve Item"}</Button></Panel>})}</div></section>
 <Panel className="pharmacy-summary"><SectionHeading eyebrow="LIVE INVENTORY NETWORK" title="Prishtina Pharmacies"/><MapGraphic/>{["Barnatore Dardania (Non-Stop 24/7)","Barnatore Rexall Qendër","Farmacia Ulpiana"].map((p,i)=><div className="pharmacy-select" key={p}><span><strong>{p}</strong><small>{i===0?"Bulevardi Bill Clinton 14 · All 5 items in stock":"Prishtina · 4/5 items available"}</small></span><Button variant={i===0?"primary":"secondary"}>Select</Button></div>)}<Link to="/pharmacies" className="btn btn-primary full"><Navigation size={16}/> Open Live Medicine Tracker</Link></Panel></div>
 </AppShell>;
}

function MapGraphic(){return <div className="map-graphic"><div className="map-road road-a"/><div className="map-road road-b"/><div className="map-road road-c"/><span className="map-label">Prishtina</span>{["1","2","3","4"].map((n,i)=><b key={n} className={`pin pin-${i+1}`}>{n}</b>)}<Badge tone="good"><Navigation size={13}/> Live GPS · closest 0.8 km</Badge></div>}

const pharmacies = [
 ["01","Barnatorja Rexall Prishtinë","24h Qendër","Sheshi Nënë Tereza · 0.4 km","19/20","Missing: Hydrocyclin ointment"],
 ["02","Barnatorja Deda Pharmacy","Open until 22:00","Ulpiana · 1.1 km","18/20","Two alternatives available"],
 ["03","Barnatore Gentiana","24h Kujdestare","Dardania · 0.8 km","20/20","Full prescription bundle ready"],
 ["04","Farmacia Prishtina Central","Open until 23:00","Qendër · 0.5 km","17/20","Calcium alternative available"],
 ["05","Barnatore BioFarm","Open until 21:00","Bregu i Diellit · 2.3 km","16/20","Low stock: Hydrocyclin"],
 ["06","GreenPharm Lakrishtë","Drive-through","Lakrishtë · 1.4 km","18/20","Pickup window: 18 min"],
 ["07","Arbëria Care","Open until 22:00","Near US Embassy · 1.9 km","15/20","Five items need order"],
 ["08","Farmacia Mati","Open until 23:00","Mati 1 · 2.8 km","19/20","One substitute available"],
] as const;
const products = [["Dias Collagen","Target: joints","30.90"],["Ocean Extramag","Target: magnesium","8.60"],["Ocean D3K2 Sol","Target: Vitamin D3","14.90"],["Ferroglobin Caps","Target: iron stores","10.90"],["Tensiometer Digjital","Target: blood pressure","32.00"],["Neurozan Tbl","Target: B12 / focus","19.90"]] as const;

export function PharmaciesScreen(){
 const [zone,setZone]=useState("All Prishtinë (8)"),[only24,setOnly24]=useState(false),[selected,setSelected]=useState<number|null>(null),[basket,setBasket]=useState<string[]>([]),[matrix,setMatrix]=useState(false);
 const shown=pharmacies.filter(p=>!only24||p[2].toLowerCase().includes("24h"));
 return <AppShell><PageTitle eyebrow="CLINICAL BIOMARKER MATCH · SYNCED FROM DR. KRASNIQI'S PANEL" title="Prishtina Local Pharmacy Stock & Custody Finder" description="Filtered by your detected metabolic and mineral deficiencies: 20 prescribed items across the Prishtina municipal network." actions={<><Button variant="secondary" onClick={()=>setMatrix(true)}><ClipboardList size={16}/> View all 20 prescriptions</Button><Button><Navigation size={16}/> Dispatch E-Prescription</Button></>}/>
 <Panel className="zone-panel"><div className="zone-title"><MapPin/> <b>Prishtina Zones:</b></div><div className="zone-chips">{["All Prishtinë (8)","Qendër / Sheshi","Dardania","Ulpiana","Bregu i Diellit","Lakrishtë","Arbëria","Mati 1"].map(z=><button key={z} className={zone===z?"active":""} onClick={()=>setZone(z)}>{z}</button>)}</div><label className="toggle"><input type="checkbox" checked={only24} onChange={e=>setOnly24(e.target.checked)}/><i/> 24/7 Custody Only</label></Panel>
 <div className="match-banner"><BadgeCheck/><div><strong>Immediate 100% Match Found!</strong><p>Barnatore Gentiana in Dardania has all 20 recommended items verified in real time.</p></div><Button variant="secondary">Locate on Map</Button></div>
 <div className="pharmacy-layout"><div><Panel className="featured-pharmacy"><div className="featured-top"><span className="store-icon"><Hospital/></span><div><Badge>100% In Stock (20/20)</Badge><h2>Barnatore Gentiana</h2><p>Rruga B, Dardania · 0.8 km · Open 24/7</p></div><strong>★ 4.9</strong></div><div className="featured-actions"><a href="tel:+38338720800"><Phone size={15}/> +383 38 720 800</a><Button onClick={()=>setMatrix(true)}>Review complete basket</Button></div></Panel>
 <Panel className="products-panel"><SectionHeading icon={<ShoppingBasket/>} eyebrow="LIVE VERIFIED PRODUCTS" title="Artikujt Reale në Stok" aside={<Badge>80+ products</Badge>}/><div className="product-grid">{products.map(([name,target,price],i)=>{const inBasket=basket.includes(name);return <article className="product-card" key={name}><div className="product-image"><img src={productImages[i] ?? logoUrl} alt={name}/><Badge>Në stok</Badge></div><small>{target}</small><h3>{name}</h3><p>Verified Prishtina stock</p><footer><strong>€{price}</strong><Button variant={inBasket?"primary":"secondary"} onClick={()=>setBasket(b=>inBasket?b.filter(x=>x!==name):[...b,name])}>{inBasket?<Check size={15}/>:<ShoppingBasket size={15}/>} {inBasket?"Shtuar":"Rezervo"}</Button></footer></article>})}</div></Panel>
 <div className="pharmacy-list">{shown.map((p,i)=><Panel className={selected===i?"selected pharmacy-row":"pharmacy-row"} key={p[0]}><span className="rank">{p[0]}</span><div><h3>{p[1]} <Badge tone={p[4]==="20/20"?"good":"info"}>{p[2]}</Badge></h3><p><MapPin size={14}/>{p[3]}</p><small>{p[5]}</small></div><div className="stock-count"><strong>{p[4]}</strong><small>in stock</small></div><Button variant={selected===i?"primary":"secondary"} onClick={()=>setSelected(i)}>{selected===i?"Selected":"Check items"}</Button></Panel>)}</div></div>
 <aside><Panel className="sticky-map"><SectionHeading title="Prishtina Urban Grid & Pins" aside={<Badge>LIVE GPS</Badge>}/><MapGraphic/><div className="best-pick"><Badge>FASTEST FULFILLMENT PICK</Badge><h3>Barnatore Gentiana</h3><p>Dardania · 0.8 km · 4 min drive</p><strong>20/20 <small>All in stock</small></strong><Button><Navigation size={15}/> Start Navigation</Button></div><div className="registry"><ShieldCheck/> Prishtina Kujdestare Registry<small>Regulated by Kosovo Chamber of Pharmacists</small></div></Panel></aside></div>
 {matrix&&<div className="modal-backdrop" onMouseDown={()=>setMatrix(false)}><div className="modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setMatrix(false)} aria-label="Close"><X/></button><SectionHeading eyebrow="20 ITEMS ANALYZED · 20/20 LOADED" title="Prescription Fulfillment Matrix"/><p>Cross-referenced with Barnatore Gentiana and your biomarker deficiency profile.</p><div className="matrix-list">{[...medicines,...medicines,...medicines,...medicines].map((m,i)=><div key={i}><Pill/><span><strong>{m[0]}</strong><small>{m[1]} · Biomarker matched</small></span><b>€{(3.5+i*1.07).toFixed(2)}</b><Badge>In Stock</Badge></div>)}</div><div className="matrix-total"><span>Total Estimated Prescription Cost<small>Kosova Health Insurance Reimbursable: 70%</small></span><strong>€189.90</strong></div><div className="modal-actions"><Button variant="ghost" onClick={()=>setMatrix(false)}>Close</Button><Button><ShoppingBasket/> Reserve Complete Basket (20 Items)</Button></div></div></div>}
 </AppShell>;
}

export function PrescriptionsScreen(){return <AppShell><PageTitle eyebrow="ACTIVE E-PRESCRIPTIONS" title="Prescriptions" description="Physician-validated formulations connected to your latest clinical panel."/><Panel><div className="medicine-list">{medicines.map(([name,dose,desc,stock])=><div className="prescription-row" key={name}><Pill/><span><strong>{name}</strong><small>{dose} · {desc}</small></span><Badge>{stock}</Badge><Link className="btn btn-secondary" to="/pharmacies">Find stock</Link></div>)}</div></Panel></AppShell>}
