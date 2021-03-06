"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.mileniumFalcon = void 0;
var base_ships_1 = require("./base-ships");
var mileniumFalcon = /** @class */ (function (_super) {
    __extends(mileniumFalcon, _super);
    function mileniumFalcon() {
        var _this = _super.call(this, 'hyperdrive123', 'name') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    return mileniumFalcon;
}(base_ships_1.SpaceCraft));
exports.mileniumFalcon = mileniumFalcon;
