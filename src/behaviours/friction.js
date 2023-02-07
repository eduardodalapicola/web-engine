

export default class Friction {

    constructor (coef, axe) {
        this.coef = coef
        this.axe = axe
    }

    onUpdate(component) {
        if (component.speed.x > 0 && (this.axe === 'x' || this.axe === 'both')) {
            component.speed.x -= component.speed.x * this.coef
        }

        if (component.speed.y > 0 && (this.axe === 'y' || this.axe === 'both')) {
            component.speed.y -= component.speed.y * this.coef
        }
    }
}