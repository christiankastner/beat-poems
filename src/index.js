import "./styles/main.scss"
import NounSwapper from "./NounSwapper"
import PoemReader from "./PoemReader"
import { bongoFor, drumRight, drumLeft } from "./BongoCat"
require("./assets/favicon.png")
require("./assets/thumbnail.png")

const get = (id) => document.getElementById(id) 

const swapper = new NounSwapper();

document.addEventListener("DOMContentLoaded", () => {

    const readBtn = get("read-btn")
    const stopBtn = get("stop-btn")
    const resetBtn = get("reset-btn")
    const poem = get("poem")
    const form = get("form-container")

    get("start-bongos").addEventListener("play", () => {
        bongoFor(2.3)
    })
    
    get("end-bongos-1").addEventListener("play", () => {
        drumRight()
    })
    
    get("end-bongos-2").addEventListener("play", () => {
        drumLeft()
    })

    readBtn.addEventListener("click", () => {
        PoemReader.readPoem(get("poem").children[0].textContent)
    })

    stopBtn.addEventListener("click", () => {
        PoemReader.killSound()
    })

    resetBtn.addEventListener("click", () => {
        poem.children[0].textContent = ""

        form.classList.toggle("seen")
        poem.classList.toggle("seen")
    })
    
    document.addEventListener("submit",(e) => {
        e.preventDefault()
    
        poem.children[0].textContent = swapper.replace(e.target["text-input"].value, ["nn"])
    
        form.classList.toggle("seen")
        poem.classList.toggle("seen")
    })
})

