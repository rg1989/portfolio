import { escape } from '../sanitizer.js';

describe('Sanitizer', () => {
  it('should escape HTML special characters', () => {
    const input = '<script>alert("xss")</script>';
    const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;';
    expect(escape(input)).toBe(expected);
  });

  it('should handle empty strings', () => {
    expect(escape('')).toBe('');
  });

  it('should handle strings with no special characters', () => {
    const input = 'Hello, world!';
    expect(escape(input)).toBe(input);
  });

  it('should handle mixed content', () => {
    const input = '<h1>Hello & "world"</h1>';
    const expected = '&lt;h1&gt;Hello &amp; &quot;world&quot;&lt;&#x2F;h1&gt;';
    expect(escape(input)).toBe(expected);
  });

  it('should handle single quotes', () => {
    const input = "It's a test";
    const expected = "It&#x27;s a test";
    expect(escape(input)).toBe(expected);
  });

  it('should handle null and undefined', () => {
    expect(escape(null)).toBe('');
    expect(escape(undefined)).toBe('');
  });
});
