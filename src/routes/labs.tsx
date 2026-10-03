import { createFileRoute } from "@tanstack/react-router";
import { LabsScreen } from "../components/kosova-health";
export const Route = createFileRoute("/labs")({
 head:()=>({meta:[{title:"Feed Biomarkers — KosovaHealth"},{name:"description",content:"Upload, parse, and review laboratory biomarkers."},{property:"og:title",content:"KosovaHealth Laboratory Ingestion"},{property:"og:description",content:"Upload, parse, and review laboratory biomarkers."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:LabsScreen
});
