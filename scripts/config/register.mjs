import MacroSetupPanel from '../ui/macro-setup-panel.mjs';

export function registerMacroConfig() {

}

export function registerMacroUI() {
  Hooks.on( "renderActorSheet",async function (app, html, data) {
      const openButton = $(
        `<a class="open-actor-macros" title="Character Macros"><i class="fas fa-wrench"></i>Macros</a>`
      );
      openButton.on("click", () => {
        new MacroSetupPanel(app.document, data.actor).render(true);
      });
      html.closest(".app").find(".open-actor-macros").remove();
      const titleElement = html.closest(".app").find(".window-title");
      if (!app._minimized) openButton.insertAfter(titleElement);
    }
  );
}