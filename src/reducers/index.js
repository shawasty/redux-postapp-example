import { combineReducers } from "redux";
import postsReducer from './postsReducers'

// when we have multiple reducers, eg postreducers, comment reducers, like reducers, we will need to combine them

const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer