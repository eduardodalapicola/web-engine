
export default {
    sleep: (fn, time) => {
        return new Promise((resolve) => setTimeout(
            () => {
                fn(); resolve()
            }, time
        ))
    }
}