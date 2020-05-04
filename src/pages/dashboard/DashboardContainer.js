import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { getAllPosts } from '../../redux/action/postAction'
const mapStoreToProps = state => ({
  posts: state.post.posts,
  loading:state.post.loading
})
const mapDispatchToProps = dispatch => ({
  getAllPosts: ()=>dispatch(getAllPosts()),
  //applyFilters:(filter_string)=>dispatch(applyFilters(filter_string))
})

export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard)