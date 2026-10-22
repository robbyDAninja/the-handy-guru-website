import { siteConfig } from "./site-config.js";
import { formIsConfigured, submitEstimate } from "./form.js";

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
function closeMenu(returnFocus = false) {
  nav?.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
  if (returnFocus) menu?.focus();
}
menu?.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(expanded));
  nav?.classList.toggle("open", expanded);
});
nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.getAttribute("aria-expanded") === "true")
    closeMenu(true);
});
if (!siteConfig.preview)
  document.querySelector("[data-preview-banner]")?.setAttribute("hidden", "");

const form = document.querySelector("#estimate-form");
if (form && formIsConfigured(siteConfig.web3formsAccessKey)) {
  const fieldset = document.querySelector("#estimate-fields");
  const status = document.querySelector("#form-status");
  const button = document.querySelector("#submit-request");
  document.querySelector("#form-setup-note").hidden = true;
  document.querySelector("#form-delivery-disclosure").hidden = false;
  fieldset.disabled = false;
  // Loaded only after Bodhi configures the public key; preview sends no form data.
  const captchaScript = document.createElement("script");
  captchaScript.src = "https://web3forms.com/client/script.js";
  captchaScript.async = true;
  captchaScript.defer = true;
  captchaScript.addEventListener("error", () => {
    status.className = "form-status error";
    status.textContent =
      "The verification could not load. Please call, text or email Bodhi.";
  });
  document.head.append(captchaScript);
  let sending = false;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const formData = new FormData(form);
    const fields = Object.fromEntries(formData.entries());
    const captcha = String(formData.get("h-captcha-response") || "");
    status.textContent = "";
    status.className = "form-status";
    sending = true;
    button.disabled = true;
    button.textContent = "Sending…";
    try {
      await submitEstimate(fields, siteConfig.web3formsAccessKey, captcha);
      status.className = "form-status success";
      status.textContent =
        "Your request was submitted. Thank you — Bodhi can follow up using the details you provided.";
      form.reset();
      window.hcaptcha?.reset();
    } catch (error) {
      status.className = "form-status error";
      status.textContent = error.message;
      window.hcaptcha?.reset();
    } finally {
      sending = false;
      button.disabled = false;
      button.textContent = "Send my request";
      status.focus();
    }
  });
}
