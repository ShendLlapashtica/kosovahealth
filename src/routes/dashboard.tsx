import { createFileRoute } from "@tanstack/react-router";
import { DashboardScreen } from "../components/kosova-health";
export const Route = createFileRoute("/dashboard")({
 head:()=>({meta:[{title:"Health Dashboard — KosovaHealth"},{name:"description",content:"Your latest health status, vitals, and clinical actions."},{property:"og:title",content:"KosovaHealth Dashboard"},{property:"og:description",content:"Your latest health status, vitals, and clinical actions."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:DashboardScreen
});
