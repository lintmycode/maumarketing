import 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
const POST = async ({ request, redirect }) => {
  const accept = request.headers.get("accept") ?? "";
  const wantsHtml = accept.includes("text/html");
  const referrer = request.headers.get("referer") ?? "/";
  const redirectBase = referrer.split("?")[0] || "/";
  {
    if (wantsHtml) return redirect(`${redirectBase}?sent=error`, 303);
    return json(500, { ok: false, error: "Email service not configured." });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
