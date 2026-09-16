const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'blob:'])
const RELATIVE_URL_BASE = 'https://localhost'

/**
 * Returns true only for http(s)/blob URLs; rejects javascript:, data:, and unparsable values.
 *
 * @internal
 */
export function isSafeHttpUrl(url: string | null | undefined): url is string {
  if (!url) return false
  try {
    return SAFE_PROTOCOLS.has(new URL(url, RELATIVE_URL_BASE).protocol)
  } catch {
    return false
  }
}
