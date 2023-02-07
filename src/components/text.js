import Screen from '../components/screen.js'
import Rect from './rect.js'

export default class Text {
    constructor (text, pos = {top: 0, left: 0}) {
        this.el = document.createElement('div')
        this.el.textContent = text

        this.style({
            display: 'inline-block'
        })

        Screen().el.appendChild(this.el)

        const {width, height} = this.el.getBoundingClientRect()

        Screen().el.removeChild(this.el)

        this.rect = new Rect(width, height, pos.top, pos.left)
    }

    style (obj) {
        Object.assign(this.el.style, obj)
    }


    get text () {
        return this.el.textContent
    }

    set text (value) {
        this.el.textContent = value
        Screen().el.appendChild(this.el)
        const {width, height} = this.el.getBoundingClientRect()
        this.rect.size = {width, height}
        Screen().el.removeChild(this.el)
    }

    render() {
        this.style({
            top: this.rect.top + 'px',
            left: this.rect.left + 'px',
            position: 'absolute',
            zIndex: 2,
        })
        Screen().el.appendChild(this.el)
    }

    remove() {
        if (this.el.parentNode === Screen().el) {
            Screen().el.removeChild(this.el)
        }
    }

}