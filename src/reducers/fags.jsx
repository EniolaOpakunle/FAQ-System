const initState = {
    isLoading: false,
    data: null,
    error: null
}

const faqs = (state = initState, action) =>{
    switch (action.type) {
        case 'DISPLAYDATA':
                return{
                 ...state, data: action.payload
                };
        case 'DISPLAYERROR':
            return{
                ...state, error: action.payload
            };
        case 'LOADING': 
            return{
                ...state, isLoading: true
            };
        default:
            return{
                state
            }
    }
}
    
    // switch (){
    //     case 'GENERATE' : 
        
    // }
// }
export default faqs