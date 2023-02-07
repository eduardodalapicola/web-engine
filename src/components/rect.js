

function dot(u, v) {
    return u.x * v.x + u.y * v.y
}

function vector(p1, p2) {
    return {
        x: (p2.x - p1.x),
        y: (p2.y - p1.y)
    }
}

export default class Rect {
    constructor(width, height, top = 0, left = 0) {
        this.width = width
        this.height = height
        this.top = top
        this.left = left
    }

    get centerx () {
        return this.left + this.width / 2
    }

    set centerx (value) {
        this.left = value - this.width / 2
    }

    get centery () {
        return this.top + this.height / 2
    }

    set centery (value) {
        this.top = value - this.height / 2
    }

    get bottom () {
        return this.top + this.height
    }

    set bottom (value) {
        this.top = value - this.height
    }

    get right () {
        return this.left + this.width
    }

    set right (value) {
        this.left = value - this.width
    }

    get center () {
        return {x: this.centerx, y: this.centery}
    }

    set center (value) {
        this.centerx = value.x
        this.centery = value.y
    }

    get topleft () {
        return {y: this.top, x: this.left}
    }
    
    set topleft (value) {
        this.top = value.y
        this.left = value.x
    }

    get topright () {
        return {y: this.top, x: this.right}
    }
    
    set topright (value) {
        this.top = value.y 
        this.right = value.x
    }

    get bottomleft () {
        return {y: this.bottom, x: this.left}
    }
    
    set bottomleft (value) {
        this.bottom = value.y
        this.left = value.x
    }

    get bottomright () {
        return {y: this.bottom, x: this.right}
    }
    
    set bottomright (value) {
        this.bottom = value.y
        this.right = value.x
    }

    get size () {
        return {width: this.width, height: this.height}
    }

    set size (value) {
        this.width = value.width
        this.height = value.height
    }

    intersect(rect) {
        return ((this.left >= rect.left && this.left <= rect.right) ||
               (rect.left >= this.left && rect.left <= this.right)) &&
               ((this.top >= rect.top && this.top <= rect.bottom) ||
               (rect.top >= this.top && rect.top <= this.bottom))
    }

    inside (rect) {
        if (rect instanceof Rect) {
            return (this.left >= rect.left) &&
            (this.right <= rect.right) && 
            (this.top >= rect.top) &&
            (this.bottom <= rect.bottom)
        } else {
            const AB = vector(this.topleft, this.bottomleft)
            const AM = vector(this.topleft, point)
            const BC = vector(this.bottomleft, this.bottomright)
            const BM = vector(this.bottomleft, point)
    
            return 0 <= dot(AB,AM) <= dot(AB,AB) && 0 <= dot(BC,BM) <= dot(BC,BC)
        }
    }
}