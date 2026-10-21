// One shared list connects the homepage guide to the existing service options.
const helpChoices = {
  repair: { service: "Interior repairs", context: "an interior repair" },
  list: {
    service: "General maintenance / honey-do list",
    context: "your home’s to-do list",
  },
  parent: {
    service: "Senior home safety & home management",
    context: "help for a parent’s home",
  },
};

export function setupHelpGuide(root = document) {
  const guide = root.querySelector("[data-help-guide]");
  if (!guide) return;
  const controls = guide.querySelector("[data-help-controls]");
  const buttons = [...guide.querySelectorAll("[data-help-choice]")];
  const panels = [...guide.querySelectorAll("[data-help-panel]")];
  const announcement = guide.querySelector("[data-help-announcement]");
  function select(choice, announce = false) {
    if (!Object.hasOwn(helpChoices, choice)) return;
    for (const button of buttons)
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.helpChoice === choice),
      );
    for (const panel of panels)
      panel.hidden = panel.dataset.helpPanel !== choice;
    if (announce)
      announcement.textContent = `Showing options for ${helpChoices[choice].context}.`;
  }
  for (const button of buttons)
    button.addEventListener("click", () =>
      select(button.dataset.helpChoice, true),
    );
  select("repair");
  controls.hidden = false;
}

export function applyHelpSelection(root = document, search = location.search) {
  const choice = new URLSearchParams(search).get("service");
  if (!Object.hasOwn(helpChoices, choice)) return;
  const select = root.querySelector("#service");
  const context = root.querySelector("#request-context");
  if (!select || !context) return;
  const selected = helpChoices[choice];
  // Ignore unknown keys and never copy arbitrary URL text into the page/form.
  if (![...select.options].some((option) => option.value === selected.service))
    return;
  select.value = selected.service;
  context.textContent = `Let’s talk about ${selected.context}.`;
  context.hidden = false;
}
