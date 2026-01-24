## 2024-08-05 - Context-Aware Sanitization for XSS Prevention

**Vulnerability:** Found a Stored XSS vulnerability in the contact form API (`app/api/contact/route.js`). User-provided `name`, `email`, and `message` fields were directly embedded into an HTML email template and a Telegram message without any escaping or sanitization.

**Learning:** The critical learning was the necessity of context-aware sanitization. A blanket sanitization approach would have broken functionality. The `email` field was used in two contexts: for display in the email body and for the `replyTo` mail header. Sanitizing the `replyTo` value would have made it an invalid email address, breaking the ability to reply directly. The correct approach was to use the sanitized version for display and the original, raw version for the protocol-specific `replyTo` header.

**Prevention:** To prevent this vulnerability from recurring, I established a centralized and reusable sanitization utility at `utils/sanitizer.js` with its own dedicated unit tests. This promotes a consistent, reliable, and easy-to-apply security control for any developer handling user input in the future. The principle is: always sanitize data at the point of use, tailored to the specific output context.
