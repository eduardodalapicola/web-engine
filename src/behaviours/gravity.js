

export default class Gravity {
    constructor(gravity) {
        this.gravity = gravity
    }

    onUpdate(component) {
        component.speed.y += this.gravity
    }

}