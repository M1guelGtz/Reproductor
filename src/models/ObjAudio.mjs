export class ObjAudio {
    #nombre
    #ubicacion

    getName(){
        return this.#nombre
    }
    setName(name){
        this.#nombre = name
    }
    getUbicacion(){
        return this.#ubicacion
    }
    setUbicacion(ubicacion){
        this.#ubicacion = ubicacion
    }
}