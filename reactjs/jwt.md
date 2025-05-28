✅ What is JWT in Next.js?
JWT (JSON Web Token) in Next.js is commonly used for authentication — to verify and authorize users. Once a user logs in, a JWT token is generated and used to identify the user on each subsequent request.

🔐 Where is JWT Stored?
| Storage Method        | Secure?               | Server Access? | Recommended?            |
| --------------------- | --------------------- | -------------- | ----------------------- |
| **LocalStorage**      | ❌ Vulnerable to XSS   | ❌              | ❌ No                    |
| **SessionStorage**    | ❌ Volatile & XSS risk | ❌              | ❌ No                    |
| **HTTP-only Cookies** | ✅ Safe from XSS       | ✅ Server-only  | ✅ YES (Best for auth) ✅ |

✅ Best practice: Use HTTP-only cookies to store JWT in Next.js. They are secure and can’t be accessed via JavaScript.

🔁 JWT Authentication Flow in Next.js
📌 Step-by-step Process:
User logs in (via form).
API verifies credentials and returns JWT.
JWT is stored in an HTTP-only cookie.
On each request, JWT is automatically sent via the cookie.
Server validates the JWT and identifies the user.

🧠 JWT Structure
<Header>.<Payload>.<Signature>

