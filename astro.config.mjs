import { defineConfig } from "astro/config";

function normalizeBase(rawBase) {
  if (!rawBase || rawBase === "/") {
    return "/";
  }

  const withLeadingSlash = rawBase.startsWith("/") ? rawBase : `/${rawBase}`;
  const trimmed = withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;

  return trimmed || "/";
}

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const base = normalizeBase(
  process.env.BASE_PATH ?? (isGitHubActions ? "/calhargis-web" : "/"),
);

export default defineConfig({
  site: process.env.SITE_URL ?? "https://calhargis.github.io",
  base,
  output: "static",
});
