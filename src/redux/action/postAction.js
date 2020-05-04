import serverCall from '../../modules/serverCall'

export const getAllPosts=()=>dispatch=>{
    dispatch({
      type:GET_ALL_POSTS_BEGIN,
    })
    return serverCall({
      method:'POST',
      data:{
          query:"query { posts(first: 10) { edges { node { id, name,tagline,website, thumbnail {type,url,videoUrl} } } }  }"
      }
    })
    .then(res=>{
      dispatch({
        type: GET_ALL_POSTS_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error=>{
      dispatch({
        type: GET_ALL_POSTS_FAIL,
        payload: {error}
      })
      return error
    })
  }

  export const GET_ALL_POSTS_BEGIN='GET_ALL_POSTS_BEGIN'
  export const GET_ALL_POSTS_SUCCESS='GET_ALL_POSTS_SUCCESS'
  export const GET_ALL_POSTS_FAIL='GET_ALL_POSTS_FAIL'
  