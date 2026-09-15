const ALLOWED_PROTOCOLS = new Set(['http:', 'https:'])

/**
 * Returns the URL only when it parses as an absolute `http:`/`https:` URL.
 *
 * @remarks Use for API-sourced hrefs so `javascript:`/`data:` values are never
 * rendered into an anchor.
 *
 * @param value - Candidate URL string.
 * @returns The original string when its scheme is allowed, otherwise `undefined`.
 * @internal
 */
export function safeExternalUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined
  try {
    return ALLOWED_PROTOCOLS.has(new URL(value).protocol) ? value : undefined
  } catch {
    return undefined
  }
}
