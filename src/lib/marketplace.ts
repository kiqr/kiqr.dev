// The KIQR marketplace index, read once at build time. A new ability shows up
// on the next deploy (see README: the marketplace repository triggers one).
export const INDEX_URL = process.env.MARKETPLACE_URL ?? "https://raw.githubusercontent.com/kiqr/marketplace/main/index.json";

export interface App {
  id: string; name: string; author: string; summary: string; version?: string;
  categories: string[]; cost?: string; homepage?: string; avatar?: string;
  oneClick: boolean; builtIn: boolean; channels: string[];
}

// Built into KIQR rather than listed in the index, and signed in to with one click.
const BUILT_IN: App[] = [{
  id: "unblockingapi", name: "Read blocked pages with UnblockingAPI", author: "KIQR",
  summary: "A real browser and residential proxies for the pages KIQR could not read: crawls and Seemo's web reading. Sign in with your UnblockingAPI account, no API key to copy.",
  categories: ["web"], cost: "about $0.001 per page read", homepage: "https://unblockingapi.com",
  oneClick: true, builtIn: true, channels: [],
}];

// One click: the ability signs in with a button (its `connect`), not with a key.
const oneClick = (i: any) => {
  const flow = String(i?.connect?.flow ?? "");
  return flow !== "" && flow !== "service_account";
};

export async function apps(): Promise<App[]> {
  const res = await fetch(INDEX_URL);
  if (!res.ok) throw new Error(`marketplace index: HTTP ${res.status} from ${INDEX_URL}`);
  const items: any[] = (await res.json()).abilities ?? [];
  return [...BUILT_IN, ...items.filter((i) => i.id && i.name).map((i): App => ({
    id: i.id, name: i.name, author: i.author || "KIQR", summary: String(i.summary ?? ""), version: i.version,
    categories: (i.categories ?? []).map(String), cost: i.cost, homepage: i.homepage, avatar: i.avatar,
    oneClick: oneClick(i), builtIn: false,
    channels: (i.channels ?? []).map((c: any) => c?.name ?? c?.kind).filter(Boolean),
  }))];
}
