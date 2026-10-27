// The apps' brand marks, drawn inline in the brand's colour on a dark tile.
// Read from src/icons/<key>.svg at build time; nothing loads from anyone else.
const files = import.meta.glob("../icons/*.svg", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

const COLORS: Record<string, string> = {
  wordpress: "#3d9be0", unblockingapi: "#ef2f72", googleanalytics: "#e37400",
  googlesearchconsole: "#458cf5", gmail: "#ea4335", x: "#e6ecf7",
  facebook: "#0866ff", plausibleanalytics: "#7c74f5", linkedin: "#0a66c2", email: "#e6ecf7",
  openai: "#e6ecf7", claude: "#d97757",
};

// A marketplace ability's id => its mark. Abilities without one get a letter.
const FOR_ABILITY: Record<string, string> = {
  wordpress: "wordpress", unblockingapi: "unblockingapi", "google-analytics": "googleanalytics",
  "search-console": "googlesearchconsole", plausible: "plausibleanalytics", "kiqr-smtp": "email", "openai-image": "openai",
};

export interface Mark { paths: { d: string; rule?: string }[]; color: string; letter: string }

export function mark(key: string): Mark {
  const text = files[`../icons/${key}.svg`] ?? "";
  const paths = [...text.matchAll(/<path([^>]*)\/?>/g)]
    .map(([, attrs]) => ({ d: attrs.match(/\sd="([^"]+)"/)?.[1] ?? "", rule: attrs.match(/fill-rule="([^"]+)"/)?.[1] }))
    .filter((p) => p.d);
  return { paths, color: COLORS[key] ?? "#e6ecf7", letter: key.charAt(0).toUpperCase() };
}

export const abilityMark = (id: string): Mark =>
  FOR_ABILITY[id] ? mark(FOR_ABILITY[id]) : { paths: [], color: "#e6ecf7", letter: id.charAt(0).toUpperCase() };
