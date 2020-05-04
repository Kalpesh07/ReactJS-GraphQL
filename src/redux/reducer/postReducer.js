import {
    GET_ALL_POSTS_BEGIN,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL,
  } from '../action/postAction'
  
  const initialState = {
    posts: null,
    post: null,
    loading: false,
    error: null,
  }

  export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ALL_POSTS_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload.error.response.data
            }
        case GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                loading:false,
                posts:action.payload.data.posts
            }
        default:
            return state;
    }
}