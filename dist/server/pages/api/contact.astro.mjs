import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
function getValue(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
function asLine(label, value) {
  return `${label}: ${value || "-"}`;
}
const POST = async ({ request, redirect }) => {
  const accept = request.headers.get("accept") ?? "";
  const wantsHtml = accept.includes("text/html");
  const referrer = request.headers.get("referer") ?? "/";
  const redirectBase = referrer.split("?")[0] || "/";
  const to = "nuno@nitida.pt";
  const from = "MAU Marketing <norepy@maumarketing.pt>";
  const apiKey = "re_ULcpTXBr_Fvkesii9rXHtxsA98cMA3EHy";
  let formData;
  try {
    formData = await request.formData();
  } catch {
    if (wantsHtml) return redirect(`${redirectBase}?sent=error`, 303);
    return json(400, { ok: false, error: "Invalid form payload." });
  }
  const botField = getValue(formData, "bot-field");
  if (botField) {
    if (wantsHtml) return redirect(`${redirectBase}?sent=true`, 303);
    return json(200, { ok: true });
  }
  const name = getValue(formData, "name");
  const business = getValue(formData, "business");
  const website = getValue(formData, "website");
  const service = getValue(formData, "service");
  const message = getValue(formData, "message");
  const budget = getValue(formData, "budget");
  if (!name || !service || !message) {
    if (wantsHtml) return redirect(`${redirectBase}?sent=error`, 303);
    return json(400, { ok: false, error: "Missing required fields." });
  }
  const resend = new Resend(apiKey);
  const textBody = [
    "New contact form submission",
    "",
    asLine("Name", name),
    asLine("Business", business),
    asLine("Website", website),
    asLine("Service", service),
    asLine("Budget", budget),
    "",
    "Message:",
    message
  ].join("\n");
  const htmlBody = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Business:</strong> ${escapeHtml(business || "-")}</p>
    <p><strong>Website:</strong> ${escapeHtml(website || "-")}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget || "-")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;
  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: `New lead from website: ${name}`,
    text: textBody,
    html: htmlBody
  });
  if (error) {
    const status = typeof error.statusCode === "number" ? error.statusCode : 502;
    const message2 = typeof error.message === "string" && error.message.length > 0 ? error.message : "Failed to send email.";
    const code = typeof error.name === "string" ? error.name : "send_error";
    console.error("Resend send error:", error);
    if (wantsHtml) return redirect(`${redirectBase}?sent=error`, 303);
    return json(status, { ok: false, error: message2, code });
  }
  if (wantsHtml) return redirect(`${redirectBase}?sent=true`, 303);
  return json(200, { ok: true });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
