import Screen from '../components/screen.js'
import Ball from '../elements/ball.js'
import App from '../app/app.js'
import Planet from '../elements/planet.js'
import Balls from '../elements/balls.js';
import Pause from '../elements/pause.js';


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const js = (event) => {
    const screen = Screen({width: 500, height: 500})
    screen.centralize()
    screen.style({
        backgroundColor: 'red'
    })
    // const ball = new Ball({width: 20, height: 20})
    const balls = new Balls(Array.from({length: 5}, () => new Ball({width: 20, height: 20})))
    // const planet = new Planet({width: 50, height: 50})
    const textPause = new Pause('Pause')
    textPause.rect.center = screen.rect.center

    const app = new App(() => {
        // ball.pos = {top: 0, left: 0}
        // ball.speed = {x: 3, y: 0}

        // planet.pos = {top: 50, left: 50}
        // planet.speed = {x: 3, y: 4}

        balls.start()
    })

    app.update(() => {
        balls.update()
        // ball.update()
    })

    app.render(() => {
        balls.render()
        // ball.render()
    })

    app.play(30)

    document.addEventListener('keypress', (ev) => {

        if (ev.key === 'Enter') {
            if (app.isPaused()) {
                app.play()
                textPause.remove()
            } else {
                app.pause()
                textPause.render()
            }
        }
        if (ev.key.toLowerCase() === 'r') {
            app.restart()
            textPause.remove()
        }

    })
}

document.addEventListener("DOMContentLoaded", js)
