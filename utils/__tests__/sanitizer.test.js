import sanitize from '../sanitizer';

describe('sanitize', () => {
  it('should return an empty string if input is null or undefined', () => {
    expect(sanitize(null)).toBe('');
    expect(sanitize(undefined)).toBe('');
  });

  it('should not change a string with no special characters', () => {
    const input = 'Hello world';
    expect(sanitize(input)).toBe(input);
  });

  it('should escape the < character', () => {
    const input = '<script>alert("xss")</script>';
    const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should escape the > character', () => {
    const input = '<h1>Title</h1>';
    const expected = '&lt;h1&gt;Title&lt;/h1&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should escape the & character', () => {
    const input = 'a && b';
    const expected = 'a &amp;&amp; b';
    expect(sanitize(input)).toBe(expected);
  });

  it('should escape the " character', () => {
    const input = '<a href="javascript:alert(\'xss\')">link</a>';
    const expected = '&lt;a href=&quot;javascript:alert(&#039;xss&#039;)&quot;&gt;link&lt;/a&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should escape the \' character', () => {
    const input = "<a href='javascript:alert(\\'xss\\')'>link</a>";
    const expected = '&lt;a href=&#039;javascript:alert(\\&#039;xss\\&#039;)&#039;&gt;link&lt;/a&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle a mix of special characters', () => {
    const input = '<script>if (a < b && c > d) { console.log("hello"); }</script>';
    const expected = '&lt;script&gt;if (a &lt; b &amp;&amp; c &gt; d) { console.log(&quot;hello&quot;); }&lt;/script&gt;';
    expect(sanitize(input)).toBe(expected);
  });
});
