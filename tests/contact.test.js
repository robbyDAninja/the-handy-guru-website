import test from "node:test";
import assert from "node:assert/strict";
import { submitEstimate } from "../public/form.js";
const key = "11111111-2222-4333-8444-555555555555";
const fields = {
  name: "Test Person",
  phone: "555-0100",
  email: "test@example.invalid",
  service: "Senior home safety",
  message: "Test only",
};
test("unconfigured form never transmits", async () => {
  let called = false;
  await assert.rejects(
    submitEstimate(fields, "", "token", async () => {
      called = true;
    }),
    /not available/,
  );
  assert.equal(called, false);
});
test("missing verification never transmits", async () => {
  let called = false;
  await assert.rejects(
    submitEstimate(fields, key, "", async () => {
      called = true;
    }),
    /verification/,
  );
  assert.equal(called, false);
});
test("provider success uses exact endpoint and only intended fields", async () => {
  let body;
  const result = await submitEstimate(
    {
      ...fields,
      redirect: "https://evil.invalid",
      secret: "must-not-transmit",
    },
    key,
    "token",
    async (url, opts) => {
      assert.equal(url, "https://api.web3forms.com/submit");
      body = JSON.parse(opts.body);
      return { ok: true, json: async () => ({ success: true }) };
    },
  );
  assert.equal(result.success, true);
  assert.equal(body["h-captcha-response"], "token");
  assert.equal(body.redirect, undefined);
  assert.equal(body.secret, undefined);
  assert.equal(body.email, fields.email);
});
test("HTTP error is not a successful request", async () => {
  await assert.rejects(
    submitEstimate(fields, key, "token", async () => ({
      ok: false,
      json: async () => ({ success: true }),
    })),
    /not accepted/,
  );
});
test("provider rejection is not a successful request", async () => {
  await assert.rejects(
    submitEstimate(fields, key, "token", async () => ({
      ok: true,
      json: async () => ({ success: false }),
    })),
    /not accepted/,
  );
});
test("network uncertainty preserves caller data and sends once", async () => {
  let attempts = 0;
  const before = structuredClone(fields);
  await assert.rejects(
    submitEstimate(fields, key, "token", async () => {
      attempts++;
      throw new Error("offline");
    }),
    /could not be confirmed/,
  );
  assert.equal(attempts, 1);
  assert.deepEqual(fields, before);
});
test("malformed provider response stays an error", async () => {
  await assert.rejects(
    submitEstimate(fields, key, "token", async () => ({
      ok: true,
      json: async () => {
        throw new Error("not JSON");
      },
    })),
    /could not be confirmed/,
  );
});
