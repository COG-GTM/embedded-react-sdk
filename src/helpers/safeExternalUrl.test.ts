import { describe, expect, it } from 'vitest'
import { safeExternalUrl } from './safeExternalUrl'

describe('safeExternalUrl', () => {
  it('returns http and https URLs unchanged', () => {
    expect(safeExternalUrl('https://gusto.com/licenses')).toBe('https://gusto.com/licenses')
    expect(safeExternalUrl('http://example.com')).toBe('http://example.com')
  })

  it('rejects non-http schemes', () => {
    expect(safeExternalUrl('javascript:alert(1)')).toBeUndefined()
    expect(safeExternalUrl('data:text/html,<script>alert(1)</script>')).toBeUndefined()
    expect(safeExternalUrl('vbscript:msgbox(1)')).toBeUndefined()
    expect(safeExternalUrl('  JavaScript:alert(1)')).toBeUndefined()
  })

  it('rejects relative, empty, and unparseable values', () => {
    expect(safeExternalUrl('/relative/path')).toBeUndefined()
    expect(safeExternalUrl('')).toBeUndefined()
    expect(safeExternalUrl(null)).toBeUndefined()
    expect(safeExternalUrl(undefined)).toBeUndefined()
    expect(safeExternalUrl('not a url')).toBeUndefined()
  })
})
