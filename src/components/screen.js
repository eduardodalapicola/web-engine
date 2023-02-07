import Rect from "./rect.js"


class Screen {

    constructor (size = {width: 0, height: 0}, pos = {top: 0, left: 0}) {
        this.el = document.querySelector('.app')
        this.rect = new Rect(size.width, size.height, 0, 0)
        this.style({
            width: size.width + 'px',
            height: size.height +'px',
            top: pos.top + 'px',
            left: pos.left + 'px',
            position: 'absolute',
            zIndex: 1
        })
    }

    
    style (obj) {
        Object.assign(this.el.style, obj)
    }

    centralize () {
        const w = window.innerWidth
        const h = window.innerHeight
        this.style({
            top: (h - this.rect.height) / 2 + 'px',
            left: (w - this.rect.width) / 2 + 'px'
        })
    }


}

let instance = null

export default (...params) => {
    if (! instance) {
        instance = Object.freeze(new Screen(...params))
        delete(instance.constructor)
    }
    return instance 
}