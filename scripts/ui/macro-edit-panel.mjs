import {CM_MODULE_FLAG} from "../constants.js";

export default class MacroEditPanel extends FormApplication {
  constructor(document, macro) {
    super(...arguments);
    this.document = document;
    this.macro = macro;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Edit Macro",
      template: "modules/character-macro/templates/edit-macro.hbs",
      id: `${CM_MODULE_FLAG}-edit-macro`,
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
      console.log("Edit On Saving Throw");
    })
  }
}