import { list } from "./dependecies.mjs";
import { ObjAudio } from "./models/ObjAudio.mjs";

let audio1 = new ObjAudio()
audio1.setName("01_Skrillex - Bangarang feat Sirah[official music]")
audio1.setUbicacion("/ED_Linkedlist/src/Audios/01.mp3")

let audio2 = new ObjAudio()
audio2.setName("10_Skrillex - Make It Bun Dem ft Damian Marley")
audio2.setUbicacion("/ED_Linkedlist/src/Audios/02.mp3")

let audio3 = new ObjAudio()
audio3.setName("09_Skrillex & Diplo - Mind ft Kai")
audio3.setUbicacion("/ED_Linkedlist/src/Audios/03.mp3")

let audio4 = new ObjAudio()
audio4.setName("08_Skrillex - Diplo - To U ft AlunaGeorge")
audio4.setUbicacion("/ED_Linkedlist/src/Audios/04.mp3")

let audio5 = new ObjAudio()
audio5.setName("07_Skrillex - Ease My Mind ft Niki The Dove")
audio5.setUbicacion("/ED_Linkedlist/src/Audios/05.mp3")

let audio6 = new ObjAudio()
audio6.setName("06_Skrillex - First Of The Year ( Equinox )")
audio6.setUbicacion("/ED_Linkedlist/src/Audios/06.mp3")

let audio7 = new ObjAudio()
audio7.setName("05_Skrillex - Kyoto ft Sirah")
audio7.setUbicacion("/ED_Linkedlist/src/Audios/07.mp3")

let audio8 = new ObjAudio()
audio8.setName("04_Skrillex Rock N Roll(Will Take You to the Mountain)")
audio8.setUbicacion("/ED_Linkedlist/src/Audios/08.mp3")

let audio9 = new ObjAudio()
audio9.setName("03_Skrillex - Ruffneck ( Full Flex )")
audio9.setUbicacion("/ED_Linkedlist/src/Audios/09.mp3")

let audio10 = new ObjAudio()
audio10.setName("02_Skrillex - Scary Monsters And Nice Sprites")
audio10.setUbicacion("/ED_Linkedlist/src/Audios/10.mp3")

list.addSong(audio1)
list.addSong(audio2)
list.addSong(audio3)

/*list.push(audio1)
list.push(audio2)
list.push(audio3)*/
list.addSong(audio4)
list.addSong(audio5)
list.addSong(audio6)
list.addSong(audio7)
list.addSong(audio8)
list.addSong(audio9)
list.addSong(audio10)
let j = 0, aux = 0

let audio
const Datos =document.getElementById("contenedor")
const  nombre = document.createElement("span")
let play = document.getElementById("play")
play.addEventListener("click", ()=>{
    if(aux == 0){
        audio = new Audio(audio1.getUbicacion())
        audio.play()
        for (let i = 0; i < list.size(); i++) {
            if (i != j){
                
                let vacio = document.createElement("span")
                Datos.innerText = ""
                Datos.appendChild(vacio)
        
                nombre.innerText = list.getElementAt(i).getData().getName()
                Datos.appendChild(nombre)
            }
            
        }
    }else{
        audio.pause()
        audio.play()
    }
    aux++

    j++
} )

let cancel = document.getElementById("cancel")
cancel.addEventListener("click", ()=>{
    audio.pause()
} )


const volumen = document.querySelector('.volumen')
volumen.addEventListener("click", function(){
    let vol = this.value
    audio.volume = vol
} )

let next = document.getElementById("next")
let k = 0
next.addEventListener("click", ()=>{
    audio.pause()
    let ruta
    for(let i = 0; i < list.size(); i++){
        if(i == k){
            ruta = list.getElementAt(i).getData().getUbicacion()
            let vacio = document.createElement("span")
            Datos.innerText = ""
            Datos.appendChild(vacio)

            nombre.innerText = list.getElementAt(i).getData().getName()
            Datos.appendChild(nombre)
            

        }
    }
    k++
    if(k == (list.size())){
        k = 0
        j = 0
    }
    audio = new Audio(ruta)
    audio.play()
})

let prev = document.getElementById("prev")

prev.addEventListener("click", ()=>{
    audio.pause()
    let ruta
    k--
    for(let i = 0; i < list.size(); i++){
        
        if(i == k){
            ruta = list.getElementAt(i).getData().getUbicacion()
            let vacio = document.createElement("span")
            Datos.innerText = ""
            Datos.appendChild(vacio)
            
            nombre.innerText = list.getElementAt(i).getData().getName()
            Datos.appendChild(nombre)
            

        }
    }
    
    if(k == 0){
        k = list.size()
    }
    audio = new Audio(ruta)
    audio.play()
})


