export default class SpriteList {
    constructor (list) {
        this.list = list
    }

    update () {
        this.list.forEach((sprite) => sprite.update())
    }

    render() {
        this.list.forEach((sprite) => sprite.render())
    }

    collide() {
        const collided = []
        if (this.list.length >= 2) {
            for(let i=0; i < this.list.length; i++) {
                for(let j=i+1; j < this.list.length; j++) {
                    const s1 = this.list[i]
                    const s2 = this.list[j]

                    if (s1.collide(s2)) {
                        collided.push([s1,s2])
                    }
                }
            }
        }
        return collided
    }

    apply(behaviourList = []) {
        this.list.forEach((sprite) => sprite.apply(behaviourList))
    }
}