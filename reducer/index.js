const initState ={
    user :'',
    role:''
}

const reducer = (state = initState, action) => {
  console.log("in red")
  console.log(action)
    switch (action.type) {
       case 'SET-USER': return {
         
           ...state,
           user :action.payload

          
       } ;
       case 'SET-ROLE': return {
         
           ...state,
           role :action.payload

          
       } ;
       default:
           return state;
       
    }
 }
 export default reducer;