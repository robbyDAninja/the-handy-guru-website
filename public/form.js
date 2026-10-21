export const formIsConfigured = (key) =>
  typeof key === "string" &&
  /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(
    key.trim(),
  );

export async function submitEstimate(fields, key, captcha, fetcher = fetch) {
  if (!formIsConfigured(key))
    throw new Error(
      "Online requests are not available yet. Please call or email Bodhi.",
    );
  if (!captcha)
    throw new Error(
      "Please complete the verification, then send your request.",
    );
  const payload = {
    access_key: key.trim(),
    subject: "The Handy Guru — estimate request",
    from_name: "The Handy Guru website",
    "h-captcha-response": captcha,
  };
  for (const name of ["name", "phone", "email", "service", "message"]) {
    const value = String(fields[name] || "").trim();
    if (!value) throw new Error("Please complete every field before sending.");
    payload[name] = value;
  }
  let response;
  try {
    response = await fetcher("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "Your request could not be confirmed. Please try again later, or call, text or email Bodhi. Your details are still here.",
    );
  }
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(
      "Your request could not be confirmed. Please call or email Bodhi. Your details are still here.",
    );
  }
  if (!response.ok || data.success !== true)
    throw new Error(
      "Your request was not accepted. Please try again later, or contact Bodhi directly. Your details are still here.",
    );
  return data;
}
