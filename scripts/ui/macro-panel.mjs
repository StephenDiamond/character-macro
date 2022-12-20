import {CM_MODULE_FLAG} from "../constants.js";

export class MacroPanel extends FormApplication {
  constructor(document, actor) {
    super(...arguments);
    this.document = document;
    this.actor = actor;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Character Macro",
      template: "modules/character-macros/templates/actor-macro.hbs",
      id: `${CM_MODULE_FLAG}-actor-macros`,
      width: 480,
      height: "300",
      closeOnSubmit: true,
    });
  }

  async _updateObject(event, formData) {
    throw new Error("Method not implemented.");
  }
}