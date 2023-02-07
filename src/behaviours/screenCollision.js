import Screen from '../components/screen.js'

export default class ScreenCollision {
    constructor(coef) {
        this.coef = coef
    }

    onUpdate(component) {
        if(! component.rect.inside(Screen().rect)) {
            if (Screen().rect.left > component.rect.left) {
                component.speed.x = - component.speed.x * this.coef
                component.rect.left = Screen().rect.left
            }
            if (Screen().rect.right < component.rect.right) {
                component.speed.x = - component.speed.x * this.coef
                component.rect.right = Screen().rect.right
            }
            if (Screen().rect.bottom < component.rect.bottom) {
                component.speed.y = - component.speed.y * this.coef
                component.rect.bottom = Screen().rect.bottom
            } 
            if (Screen().rect.top > component.rect.top) {
                component.speed.y = - component.speed.y * this.coef
                component.rect.top = Screen().rect.top
            }
        }
    }

}