import { createFileRoute } from "@tanstack/react-router";
import { DiagnosticsScreen } from "../components/kosova-health";
export const Route = createFileRoute("/diagnostics")({
 head:()=>({meta:[{title:"Biomarker Diagnostics — KosovaHealth"},{name:"description",content:"Clinical biomarker diagrams, interventions, and prescriptions."},{property:"og:title",content:"KosovaHealth Biomarker Diagnostics"},{property:"og:description",content:"Clinical biomarker diagrams, interventions, and prescriptions."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:DiagnosticsScreen
});
