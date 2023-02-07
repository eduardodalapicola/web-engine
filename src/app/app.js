import Utils from '../helpers/utils.js'


export default class App {

    constructor (start = null) {
        this._update = null
        this._render = null
        this._status = null
        this._gameLoop = null
        this.start(start)
        if (this._start) this._start()
    }

    start (fn) {
        this._start = fn
        this._status = 'started'
    }

    update (fn) {
        this._update = fn
    }

    render(fn) {
        this._render = fn
    }

    play (ms = 30) {
        if (this._start && this._status === 'restart') {
            this._start()
        }
        this._status = 'started'
   
        if (! this._gameLoop) {
            this._gameLoop = () => {
                if (this._status === 'started') {
                    if (this._update) this._update()
                    if (this._render) this._render()
                }
            }

            this._gameLoop()
            setInterval(this._gameLoop, ms)
        }

    }

    isPaused() {
        return this._status === 'paused'
    }

    pause () {
        this._status = 'paused'
    }

    restart() {
        this._status = 'restart'
        this.play()
    }

    sleep(ms) {
        const oldStatus = this._status
        this._status = 'paused'
        return Utils.sleep(() => {
            this._status = oldStatus
        }, ms)
    }
}
