import { Node } from "./Node.mjs";

export class LinkedList {
    #count
    #head
    #equalsFn
    #tail

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }
    /*constructor(equalsFn = defaultEquals){
        this.#count = 0
        this.#head = undefined
        this.#equalsFn = equalsFn
    }*/

    getHead(){
        return this.#head
    }
    getTail(){
        return this.#tail
    }

    addSong(item){
        const node = new Node(item, this.#head, null)
        if(this.#head){
            node.next = this.#head
            this.#head.prev = node 
            this.#head = node
        }else{
            this.#head = node
            this.#tail = node
        }
        this.#count++
    }
    push(item) {
        const node = new Node(item)
        const tail = node
        let current
       
        if (this.#head == null) {
            this.#head = node
        } else{
            current = this.#head
            //Node.next = current
           
            while (current.next != null)
                current = current.next
            current.next = node
            
        }
        console.log(this.#head)
        this.#head = tail
        this.#count++
        /*if (next == Node){
            current.next = this.#tail
        }else{

        }*/
    }
    size(){
        return this.#count
    }
    getElementAt(index) {
        if (index>=0 && index<this.#count) {
            let node = this.#head
            for (let i=0;i<index && node != null; i++)
                node = node.next
            return node
        }
        return undefined
    }
    /*isEmpty(){
        return this.size() === 0
    }
    removeAt(index){  
        if (index >= 0 && index < this.#count){
            let current = this.#head
            if(index === 0 ){
                this.#head = current.next
            }
            else{
                let previus 
                for (let i = 0; i < index; i++) {
                    previus = current
                    current = current.next
                }
                previus.next = current.next
            }
        this.#count--
        return current
        }
    return undefined

    }
    remove(){
        if (index === 0){

        } else {
            const previus = this.getElementAt(index - 1)
            current = previus.next
            previus.next = current.next
        }
        this.#count--
    }
    insert(element, index){
        if ( index >= 0 && index <= this.#count){
            const node = new Node(element)
            if ( index === 0 ){
                const current = this.#head
                node.next = current
                this.#head = node
            }else{
                const previus = this.getElementAt(index - 1)
                const current = previus.next
                node.next = current
                previus.next = node
            }
            this.#count++
            return true
        }
        return false
    }
    indexOf(element){
        let current = this.#head
        for (let i = 0; i < this.#count && current != null; i++) {
            if ( this.#equalsFn(element, current.element) ){
                return i
            }
            current = current.next
        }
        return -1
    }
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    isEmpty(){
        return this.size() === 0
    }
    toString(){
        if( this.#head == null ){
            return ''
        }
        let objString = '${this.head.element}'
        let current = this.#head.next
        
    }*/

}
