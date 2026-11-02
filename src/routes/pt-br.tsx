import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { homeHead } from "@/lib/i18n";

export const Route = createFileRoute("/pt-br")({
  head: () => homeHead("pt-br"),
  component: () => <HomePage lang="pt-br" />,
});
