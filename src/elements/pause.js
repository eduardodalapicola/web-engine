import Text from "../components/text.js";


export default class Pause extends Text { 

    constructor (text) {
        super(text)
    }

    fading(time) {
        this.style({
            opacity: 1,
            animation: `fading ${time}s infinite`
        })
    }

    fadeIn(time) {
        this.style({
            opacity: 1,
            animation: `fadeIn ${time}s`
        })
    }

    fadeOut(time) {
        this.style({
            opacity: 0,
            animation: `fadeOut ${time}s`
        })
    }
    

    render() {
        super.render()
        this.fading(1)
    }
}