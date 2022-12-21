import {CM_MODULE_FLAG} from "../constants.js";
import MacroEditPanel from "./macro-edit-panel.mjs";

export default class MacroSetupPanel extends FormApplication {
  constructor(document, actor) {
    super(...arguments);
    this.document = document;
    this.actor = actor;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Character Macro",
      template: "modules/character-macro/templates/actor-macro.hbs",
      id: `${CM_MODULE_FLAG}-actor-macros`,
      width: 480,
      height: "300",
      closeOnSubmit: true,
    });
  }

  async _updateObject(event, formData) {
    throw new Error("Method not implemented.");
  }

  activateListeners(html){
    super.activateListeners(html);
    html.find("#edit-on-save-macro").click((event) => {
      new MacroEditPanel(document, { name: "Test Macro", command: `console.log("Sample Macro")`}).render(true);
    })
  }
}