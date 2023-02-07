import Friction from '../behaviours/friction.js'
import Gravity from '../behaviours/gravity.js'
import ScreenCollision from '../behaviours/screenCollision.js'
import Sprite from '../components/sprite.js'

export default class Ball extends Sprite {


    constructor(size) {
        super(size)
        this.behaviourList = [
            new ScreenCollision(0.9),
            new Gravity(0.2),
            // new Friction(0.2)
        ]
        
        this.style({
            backgroundColor: 'black',
            borderRadius: '50%',
            border: 'solid 1px white'
        })
    }


}