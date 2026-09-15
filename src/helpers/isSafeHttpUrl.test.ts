import { describe, expect, it } from 'vitest'
import { isSafeHttpUrl } from './isSafeHttpUrl'

describe('isSafeHttpUrl', () => {
  it('should return true for an https URL', () => {
    expect(isSafeHttpUrl('https://example.com/doc.pdf')).toBe(true)
  })

  it('should return true for an http URL', () => {
    expect(isSafeHttpUrl('http://example.com/doc.pdf')).toBe(true)
  })

  it('should return true for a blob URL', () => {
    expect(isSafeHttpUrl('blob:https://example.com/1234')).toBe(true)
  })

  it('should return true for a relative path', () => {
    expect(isSafeHttpUrl('/docs/x.pdf')).toBe(true)
  })

  it('should return false for a javascript: URL', () => {
    expect(isSafeHttpUrl('javascript:alert(1)')).toBe(false)
  })

  it('should return false for a data: URL', () => {
    expect(isSafeHttpUrl('data:text/html,<script>alert(1)</script>')).toBe(false)
  })

  it('should return false for a vbscript: URL', () => {
    expect(isSafeHttpUrl('vbscript:msgbox(1)')).toBe(false)
  })

  it('should return false for a mixed-case javascript: URL with a leading space', () => {
    expect(isSafeHttpUrl(' JavaScript:alert(1)')).toBe(false)
  })

  it('should return false for null', () => {
    expect(isSafeHttpUrl(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isSafeHttpUrl(undefined)).toBe(false)
  })

  it('should return false for an empty string', () => {
    expect(isSafeHttpUrl('')).toBe(false)
  })
})
