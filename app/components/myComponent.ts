const template = require("./myComponent.html");

class MyComponentController {
    message: String;
    constructor() {
        this.message = "in component";
    }
}

const component = {
    template: template,
    controller: MyComponentController
};

export default component;
