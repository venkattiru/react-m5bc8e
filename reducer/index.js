const initState ={
    user :''
}

const reducer = (state = initState, action) => {
  console.log("in red")
  console.log(action)
    switch (action.type) {
       case 'SET-USER': return {
         
           ...state,
           user :action.payload

          
       } ;
       default:
           return state;
       
    }
 }
 export default reducer;