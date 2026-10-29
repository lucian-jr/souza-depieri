/**
 * Search engines stay blocked until the production domain is ready.
 * Set ALLOW_INDEXING=true at build time to allow indexing.
 */
export function allowIndexing(): boolean {
  return process.env.ALLOW_INDEXING === "true";
}
