import { createFileRoute } from "@tanstack/react-router";
import { SignInScreen } from "../components/kosova-health";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sign In — KosovaHealth" },
    { name: "description", content: "Secure access to Kosovo clinical biomarkers and pharmacy services." },
    { property: "og:title", content: "KosovaHealth Patient Portal" },
    { property: "og:description", content: "Secure access to Kosovo clinical biomarkers and pharmacy services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: SignInScreen,
});
