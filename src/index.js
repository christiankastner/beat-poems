import "./styles/main.scss"
import NounSwapper from "./NounSwapper"
import PoemReader from "./PoemReader"
import { bongoFor, drumRight, drumLeft } from "./BongoCat"

const get = (id) => document.getElementById(id) 

const swapper = new NounSwapper();

document.addEventListener("submit",(e) => {
    e.preventDefault()
    
    const poem = get("poem")
    console.log(e.target["text-input"].value)

    poem.children[0].textContent = swapper.replace(e.target["text-input"].value, ["nn"])

    get("form").classList.toggle("seen")
    poem.classList.toggle("seen")

})

document.addEventListener("DOMContentLoaded", () => {

    // SVG resizing
    window.addEventListener("resize", () => {
        const circle = get("svg-circle")
        circle.setAttribute("height", window.innerWidth)
        console.log(circle.attributes)
    }, false)

    get("start-bongos").addEventListener("play", () => {
        bongoFor(2.3)
    })
    
    get("end-bongos-1").addEventListener("play", () => {
        drumRight()
    })
    
    get("end-bongos-2").addEventListener("play", () => {
        drumLeft()
    })

    get("read-btn").addEventListener("click", () => {
        console.log(get("poem").children[0].textContent)
        PoemReader.readPoem(get("poem").children[0].textContent)
    })
    
})

