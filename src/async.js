const redux = require('redux');
const axios=require('axios')
const initialState = {
    loading: false,
    data: [],
    error: ''
}
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = () => {
    return {
        type: FETCH_USERS_SUCCESS
    }
}
const fetchUserFailure = () => {
    return {
        type: FETCH_USERS_FAILURE
    }
}
const getData=async()=>{
     store.dispatch(fetchUserRequest())
    console.log(store.getState().reducer.loading,"request")
  axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      store.dispatch(fetchUserSuccess())
    //   console.log(data.data)
    console.log(store.getState().reducer.loading,"success")

  }).catch((err)=>{
    store.dispatch(fetchUserFailure())
    // console.log(err.message)
    console.log(store.getState().reducer.loading,"failure")

  })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
         
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false }
        case FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: 'error comes' }

        default:
            return state
    }
}
const rootReducers = redux.combineReducers({
    reducer:reducer
})
const store = redux.legacy_createStore(rootReducers);

getData()

