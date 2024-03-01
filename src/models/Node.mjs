export class Node {
    #data
    #next
    #prev
    constructor(data, next, prev){
        this.#data = data
        this.#next = next
        this.#prev = prev
    }
    getData () {
        return this.#data
    }
}