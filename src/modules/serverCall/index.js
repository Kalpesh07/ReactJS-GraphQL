//import Auth from '../Auth'
import jumpTo from '../Navigation'
import axios from 'axios'
import qs from 'qs'

const URL = ' https://api.producthunt.com/v2/api/graphql'
// const URL = 'http://localhost:4000'

const serverCall = (config) => {
  //header authorization
  //if (Auth.user_token) {
    const token = 'r8KNwzVM0wpUv9FU8TZW_00TSeeX1zNhORb5p-28ANM'
    config.headers = {
      "authorization": 'Bearer ' +token
    }
  //}
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      //console.log(response);
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500
        }
      }
      if(error.response.status===401){
        //Auth.logout()
        //jumpTo('/login')
        throw error
      }
      return Promise.reject(error);
    });
  config.baseURL = URL
  return axios(config)
}
export default serverCall