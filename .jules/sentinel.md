## 2024-07-25 - XSS Vulnerability in Contact Form
**Vulnerability:** User input from the contact form was directly embedded into an HTML email without sanitization, creating an XSS vulnerability.
**Learning:** The application lacked a centralized sanitization utility, making it easy to forget to sanitize user input before rendering it in an HTML context.
**Prevention:** I have now added a custom HTML sanitization utility at `utils/sanitizer.js` to prevent XSS. This should be used on all user-provided data before it is rendered. Fields used in protocol-specific contexts, like the `replyTo` email address, should be passed in their original, unsanitized form to maintain functionality, while display versions of the same data should be sanitized.
