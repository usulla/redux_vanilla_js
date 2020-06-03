export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribes = []

    return {
        // action === {type: 'INCREMENT'}
        dispatch(action) {
            state = rootReducer(state, action)
            subscribes.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribes.push(callback)
        },
        getState() {
            return state
        }
    }
}