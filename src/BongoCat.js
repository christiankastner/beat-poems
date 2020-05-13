const get = (id) => document.getElementById(id) 

export const drumRight = () => {
    const rightUp = get("rightUp")
    const rightDown = get("rightDown")

    console.log(rightUp)
    rightUp.classList.toggle("seen")
    rightDown.classList.toggle("seen")

    setTimeout(() => {
        rightUp.classList.toggle("seen")
        rightDown.classList.toggle("seen")
    }, 100)

}

export const drumLeft = () => {
    const leftUp = get("leftUp")
    const leftDown = get("leftDown")

    console.log(leftUp)
    leftUp.classList.toggle("seen")
    leftDown.classList.toggle("seen")

    setTimeout(() => {
        leftUp.classList.toggle("seen")
        leftDown.classList.toggle("seen")
    }, 100)
}

export const drum = (direction) => {
    const up = get(`${direction}Up`)
    const down = get(`${direction}Down`)

    up.classList.toggle("seen")
    down.classList.toggle("seen")

    return setInterval(() => {
        up.classList.toggle("seen")
        down.classList.toggle("seen")
    }, 100)
}

export const bongoFor = (seconds) => {
    if (seconds < 1) {
        throw new Error("Seconds must be larger than 1")
    }
    let right, left;
    right = drum("right")
    setTimeout(() => {
        left = drum("left")
    }, 100)
    setTimeout(() => {
        clearInterval(right)
        clearInterval(left)
    }, seconds * 1000)
}