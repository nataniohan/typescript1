"use strict";
exports.__esModule = true;
exports.SpaceCraft = void 0;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor, nome) {
        this.propulsor = propulsor;
        this.nome = nome;
    }
    SpaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("entering jumpIntoHyperspace " + this.propulsor);
    };
    SpaceCraft.prototype.nome2 = function () {
        console.log("o nome escrito foi " + this.nome);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
