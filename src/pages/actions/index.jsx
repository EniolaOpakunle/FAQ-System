// import { useDispatch } from 'react-redux'
import { applyMiddleware } from 'redux'
import axios from 'axios'
// const dispatch = useDispatch()
// const axios = require('axios')
export const loading = () =>{
    return{
        type: 'LOADING'
    }
}
export const displayFaq = (data) =>{
    return{
        type: 'DISPLAYDATA',
        payload: data
    }
}
export const displayError = (error) =>{
    return{
        type: 'DISPLAYERROR',
        payload: error
    }
}
export const generateData = () =>{
    return async (dispatch) =>{
        dispatch(loading());
        try{
            const response = await axios.get('https://faq-accordion-backenddddd.onrender.com/api/faqs');
            dispatch(displayFaq(response.data.faqs))
            console.log(response)
        }catch(error){
            dispatch(displayError(error.message))
        }
    }
    // console.log('hello world')
    // return function(dispatch, getState){
    //     dispatch(loading());
    //     axios.get('https://faq-accordion-backenddddd.onrender.com/api/faqs')
    //     .then (function (response){
    //         console.log(response.data.faqs)
    //         const faqs = response.data.faqs;
    //         dispatch(displayFaq(faqs));
    //         console.log(faqs)
    //     })
    //     .catch(function (error) {
    //         dispatch(displayError(error.message))
    //         console.log(error);
    //       });
    // }
}
 
export default {displayFaq , generateData}
