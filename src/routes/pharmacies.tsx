import { createFileRoute } from "@tanstack/react-router";
import { PharmaciesScreen } from "../components/kosova-health";
export const Route = createFileRoute("/pharmacies")({
 head:()=>({meta:[{title:"Prishtina Pharmacy Finder — KosovaHealth"},{name:"description",content:"Find verified local stock for your prescribed medicines."},{property:"og:title",content:"KosovaHealth Prishtina Pharmacy Finder"},{property:"og:description",content:"Find verified local stock for your prescribed medicines."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:PharmaciesScreen
});
