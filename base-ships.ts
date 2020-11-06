class SpaceCraft {

    constructor (public propulsor: string, private nome:string){}
    
    jumpIntoHyperspace(){
      console.log(`entering jumpIntoHyperspace ${this.propulsor}`)
    }
    nome2(){
      console.log(`o nome escrito foi ${this.nome}`)
    }
  }

interface ContainerShip {
    cargoContainers: number
  }

export {SpaceCraft, ContainerShip}