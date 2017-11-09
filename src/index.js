
import { createPost, editPost, setFilter } from './actions';
import { postsReducer } from './reducers'

const initialState = []
const action = createPost('John Doe', 'hello world')
const newState = postsReducer(initialState, action)

console.log(newState)