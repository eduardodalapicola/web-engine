import SpriteList from "../components/spriteList.js";


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


export default class Balls extends SpriteList
{
    constructor(list) {
        super(list)
        this.coef = 0.9
        this.start()

    }

    start () {
        this.random()
    }

    update() {
        super.update()
        const collided = super.collide()
        collided.forEach(sprites => {
            const s1 = sprites[0]
            const s2 = sprites[1]
            this.manageCollision(s1, s2)
        });
    }

    yCollision(s1, s2) {
        if (s1.speed.y * s2.speed.y < 0) {
            s1.speed.y = - s1.speed.y * this.coef
            s2.speed.y = - s2.speed.y * this.coef
        }
        else {
            if (Math.abs(s1.speed.y) > Math.abs(s2.speed.y)) {
                s1.speed.y = s1.speed.y * this.coef * 0.8
                s2.speed.y = s2.speed.y * this.coef * 1.2
            } else {
                s1.speed.y = s1.speed.y * this.coef * 1.2
                s2.speed.y = s2.speed.y * this.coef * 0.8
            }
        }
    }

    xCollision(s1, s2) {
        if (s1.speed.x * s2.speed.x < 0) {
            s1.speed.x = - s1.speed.x * this.coef
            s2.speed.x = - s2.speed.x * this.coef
        }
        else {
            if (Math.abs(s1.speed.x) > Math.abs(s2.speed.x)) {
                s1.speed.x = s1.speed.x * this.coef * 0.8
                s2.speed.x = s2.speed.x * this.coef * 1.2
            } else {
                s1.speed.x = s1.speed.x * this.coef * 1.2
                s2.speed.x = s2.speed.x * this.coef * 0.8
            }
        }

    }

    manageCollision(s1, s2) {
        if (s1.rect.top)

        if (s1.rect.centerx < s2.rect.centerx) {
            this.xCollision(s1, s2)
            s1.rect.right = s2.rect.left
        }

        else if (s1.rect.centerx > s2.rect.centerx) {
            this.xCollision(s1, s2)
            s1.rect.left = s2.rect.right
        }

        if (s1.rect.centery < s2.rect.centery) {
            this.yCollision(s1, s2)
            s1.rect.bottom = s2.rect.top
        }

        else if (s1.rect.centery > s2.rect.centery) {
            this.yCollision(s1, s2)
            s1.rect.top = s2.rect.bottom
        }     

    }

    random () {
        this.list.forEach((ball) => {
            ball.rect.topleft = {y: randomInteger(0, 150), x: randomInteger(0, 150)}
            ball.speed = {x: randomInteger(1, 10), y: randomInteger(1, 5)}
        })
    }

    // diff speed x with positive direction
    case1 () {
        this.list[0].speed.x = 5
        this.list[1].speed.x = -5

        this.list[0].rect.topleft = {y:50, x: 50}
        this.list[1].rect.topright = {y: 50, x: 450}

        this.list[0].speed.y = 0
        this.list[1].speed.y = 0

    }

    // diff speed x with positive direction
    case2 () {
        this.list[0].speed.x = 5
        this.list[1].speed.x = 2

        this.list[0].rect.topleft = {y: 50, x: 0}
        this.list[1].rect.topleft = {y: 50, x: 200}

        this.list[0].speed.y = 0
        this.list[1].speed.y = 0
    
    }

    // diff speed x with positive direction
    case2inv () {
        this.list[0].speed.x = -2
        this.list[1].speed.x = -5

        this.list[0].rect.topleft = {y: 50, x: 250}
        this.list[1].rect.topleft = {y: 50, x: 400}

        this.list[0].speed.y = 0
        this.list[1].speed.y = 0
    
    }

    case3 () {
        this.list[0].speed.y = 5
        this.list[1].speed.y = 2

        this.list[0].rect.topleft = {y:0, x: 50}
        this.list[1].rect.topleft = {y: 200, x: 50}

        this.list[0].speed.x = 0
        this.list[1].speed.x = 0
    }

    case3inv () {
        this.list[0].speed.y = -5
        this.list[1].speed.y = -2

        this.list[0].rect.topleft = {y: 150, x: 50}
        this.list[1].rect.topleft = {y: 100, x: 50}

        this.list[0].speed.x = 0
        this.list[1].speed.x = 0
    }

}