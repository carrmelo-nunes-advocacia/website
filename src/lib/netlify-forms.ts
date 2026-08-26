// Envio de formulários via Netlify Forms a partir de uma SPA.
// A Netlify detecta os formulários no HTML estático (public/__forms.html) no deploy;
// em runtime, fazemos POST url-encoded para "/" com o campo form-name.
export async function submitNetlifyForm(
  formName: string,
  data: Record<string, string | boolean | undefined>,
): Promise<void> {
  const body = new URLSearchParams({ "form-name": formName });
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === "" || v === false) continue;
    body.set(k, v === true ? "sim" : v);
  }
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Netlify Forms respondeu ${res.status}`);
}
