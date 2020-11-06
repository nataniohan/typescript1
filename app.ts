import {SpaceCraft, ContainerShip} from './base-ships'
import{mileniumFalcon} from './starfighter'
import * as _ from 'lodash'



let ship = new SpaceCraft('hyperdrive', 'natan')
ship.jumpIntoHyperspace()
ship.nome2()

let falcon = new mileniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship:ContainerShip) => ship.cargoContainers > 2

console.log(`is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)
console.log(_.pad('apenas teste 123', 30, '='))