export const TAB_IDS = [
  "projects",
  "roles",
  "notes",
  "certificates",
  "writing",
  "contact",
] as const;

export type TabId = (typeof TAB_IDS)[number];

export const DEFAULT_TAB: TabId = "projects";

export const TAB_EVENT = "portfolio:tab";

export interface TabNavigationDetail {
  tab: TabId;
  scroll?: boolean;
}

const HASH_ALIASES: Record<string, TabId> = {
  "about-me": "notes",
  about: "notes",
  overview: "notes",
  skills: "notes",
  achievements: "notes",
  projects: "projects",
  "current-roles": "roles",
  roles: "roles",
  "education-impact": "notes",
  impact: "notes",
  notes: "notes",
  library: "notes",
  certificates: "certificates",
  writing: "writing",
  contact: "contact",
};

export function tabFromHash(hash: string): TabId {
  const key = hash.replace(/^#/, "").trim().toLowerCase();
  if (key.startsWith("writing-")) return "writing";
  return HASH_ALIASES[key] ?? DEFAULT_TAB;
}

export function requestTab(
  tab: TabId,
  options: { scroll?: boolean; replace?: boolean } = {}
) {
  if (typeof window === "undefined") return;

  const targetHash = `#${tab}`;
  if (window.location.hash !== targetHash) {
    const url = `${window.location.pathname}${window.location.search}${targetHash}`;
    if (options.replace) {
      window.history.replaceState(null, "", url);
    } else {
      window.history.pushState(null, "", url);
    }
  }

  window.dispatchEvent(
    new CustomEvent<TabNavigationDetail>(TAB_EVENT, {
      detail: { tab, scroll: options.scroll ?? false },
    })
  );

  if (options.scroll) {
    window.requestAnimationFrame(() => {
      document
        .getElementById(`panel-${tab}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}
