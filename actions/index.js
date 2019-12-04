export function setuser(user) {
  console.log("in action")
    return {
       type: 'SET-USER',
       payload: user

    }
 }
 export function setrole(role) {
  console.log("in role action")
    return {
       type: 'SET-ROLE',
       payload: role

    }
 }