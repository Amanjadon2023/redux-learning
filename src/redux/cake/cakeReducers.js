const initialState = { numOfCakes: 10 }
console.log(initialState)
export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            console.log('object')
            return { ...state, numOfCakes: state.numOfCakes - 1 }

        default:
            console.log('default')
            return state
    }
}
