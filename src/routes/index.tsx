import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { homeHead } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => homeHead("en"),
  component: () => <HomePage lang="en" />,
});
