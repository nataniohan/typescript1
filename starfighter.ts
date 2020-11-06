export {mileniumFalcon}
import {SpaceCraft, ContainerShip} from './base-ships'

class mileniumFalcon extends SpaceCraft implements ContainerShip {
    cargoContainers: number
    constructor(){
      super('hyperdrive123','name')
      this.cargoContainers = 4
    }
}