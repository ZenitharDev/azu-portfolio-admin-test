/**
 * Prefixes an internal path with the site's base path (import.meta.env.BASE_URL),
 * which changes depending on whether the repo deploys as a GitHub user/org page
 * or a project page. Always use this instead of a hardcoded leading "/" for any
 * link, image src, or href that points inside this site.
 *
 * @param path - path without a leading slash, e.g. "work/my-level/" or "#work"
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return path ? `${base}${path}` : base;
}
