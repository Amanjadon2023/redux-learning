/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
const redux = require('redux');
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();
const applyMiddleWare=redux.applyMiddleware
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM
    }
}
const initialCakeState = {
    numberOfCakes: 10
}
const initialIceCreamState = {
    numberOfIceCreams: 20
}

const cakeReducer= (state = initialCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return { ...state, numberOfCakes: state.numberOfCakes - 1 }
            
            default:
                return state
            }
}
const iceCreamReducer= (state = initialIceCreamState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 }
            
            default:
                return state
            }
}
const rootReducers=redux.combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = redux.legacy_createStore(rootReducers,applyMiddleWare(logger));
// console.log(store.getState(),"initial state")
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
// console.log('update state',store.getState())
// unsubscribe();

