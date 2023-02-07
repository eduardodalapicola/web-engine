import Rect from './rect.js';
import Screen from './screen.js'

export default class Sprite {
    constructor (size = {width: 0, height: 0}, pos = {top: 0, left: 0}, speed = {x: 0, y: 0}) {
        if (this.constructor == Sprite) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.el = document.createElement('div')
        this.speed = speed
        this.rect = new Rect(size.width, size.height, pos.top, pos.left)
        this.behaviourList = []

        this.style({
            width: size.width + 'px',
            height: size.height +'px',
            top: pos.top + 'px',
            left: pos.left + 'px',
            position: 'absolute',
            zIndex: 2,
        })

        Screen().el.appendChild(this.el)
    }

    image(url) {
        this.style({
            backgroundImage: `url("${url}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        })
    }

    rotateZ(deg) {
        this.style({
            transform: `rotate(${deg}deg)`
        })
    }

    style (obj) {
        Object.assign(this.el.style, obj)
    }

    collide (sprite) {
        return this.rect.intersect(sprite.rect)
    }

    update () {
        this.rect.left += this.speed.x 
        this.rect.top += this.speed.y

        this.behaviourList.forEach(behaviour => {
            if (behaviour.onUpdate) behaviour.onUpdate(this)  
        });
    }

    render() {
        this.style({
            left: this.rect.left + 'px',
            top: this.rect.top + 'px',
            width: this.rect.width + 'px',
            height: this.rect.height + 'px'
        })
        this.behaviourList.forEach(behaviour => {
            if (behaviour.onRender) behaviour.onRender(this)  
        });
    }

    apply(behaviourList = []) {
        this.behaviourList = behaviourList
    }
}