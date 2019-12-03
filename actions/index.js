export function setuser(user) {
  console.log("in action")
    return {
       type: 'SET-USER',
       payload: user

    }
 }