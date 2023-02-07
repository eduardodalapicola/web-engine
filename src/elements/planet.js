import Friction from '../behaviours/friction.js'
import Gravity from '../behaviours/gravity.js'
import ScreenCollision from '../behaviours/screenCollision.js'
import Sprite from '../components/sprite.js'

export default class Planet extends Sprite {

    constructor(size) {
        super(size)

        this.behaviourList = [
            new ScreenCollision(0.9),
            new Gravity(0.2),
        ]

        this.image('public/images/earth.png')
        this.angle = 0;
    }

    update() {
        super.update()
        this.angle = (this.angle + 15) % 360
        this.rotateZ(this.angle)
    }


}