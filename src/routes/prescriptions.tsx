import { createFileRoute } from "@tanstack/react-router";
import { PrescriptionsScreen } from "../components/kosova-health";
export const Route = createFileRoute("/prescriptions")({
 head:()=>({meta:[{title:"Prescriptions — KosovaHealth"},{name:"description",content:"Review clinical prescriptions and find verified pharmacy stock."},{property:"og:title",content:"KosovaHealth Prescriptions"},{property:"og:description",content:"Review clinical prescriptions and find verified pharmacy stock."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:PrescriptionsScreen
});
