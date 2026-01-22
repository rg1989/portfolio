import sanitize from './sanitizer';

describe('Sanitize Util', () => {
  it('should return an empty string if the input is null or undefined', () => {
    expect(sanitize(null)).toBe('');
    expect(sanitize(undefined)).toBe('');
  });

  it('should escape HTML characters to prevent XSS', () => {
    const maliciousInput = `<script>alert('XSS')</script>`;
    const sanitizedInput = sanitize(maliciousInput);
    const expectedOutput = '&lt;script&gt;alert(&#x27;XSS&#x27;)&lt;&#x2F;script&gt;';
    expect(sanitizedInput).toBe(expectedOutput);
  });

  it('should correctly escape all targeted characters', () => {
    const allChars = `<>&"'/`;
    const sanitizedChars = sanitize(allChars);
    const expectedChars = '&lt;&gt;&amp;&quot;&#x27;&#x2F;';
    expect(sanitizedChars).toBe(expectedChars);
  });

  it('should not alter a string with no special characters', () => {
    const safeString = 'This is a safe string.';
    const sanitizedString = sanitize(safeString);
    expect(sanitizedString).toBe(safeString);
  });
});
