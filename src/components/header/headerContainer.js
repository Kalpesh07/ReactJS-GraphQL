import {connect} from 'react-redux'
import Header from './Header'
//import {getDepartments} from '../../redux/action/departmentAction'
//import {getProductsByCategory,getAllProducts,search} from '../../redux/action/productAction'
import { getAllPosts } from '../../redux/action/postAction'

const mapStoreToProps=state=>({
//   user_token:state.token.user_token,
//   departments:state.department.departments,
 })

 const mapDispatchToProps=dispatch=>({
//   getDepartments:dispatch(getDepartments()),
//   search:(t)=>dispatch(search(t)),
//   getProductsByCategory:(c)=>dispatch(getProductsByCategory(c)),
getAllPosts:()=>dispatch(getAllPosts())
 })

export default connect(mapStoreToProps,mapDispatchToProps)(Header)