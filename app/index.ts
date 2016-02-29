import "angular";
import services from "./services";
import components from "./components";

class MyController {
    message: String;

    constructor(myService) {
        this.message = "hello world" + myService.add(1, 2);
    }
}

angular
    .module("myApp", [
        services,
        components
    ])
    .controller("MyController", MyController);

