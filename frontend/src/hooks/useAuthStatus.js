import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedin] = useState(false);
  const [checkingStatus, setChekcingStatus] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(()=>{
    if(user){
      setLoggedin(true)
    }
    else{
      setLoggedin(false)
    }
    setChekcingStatus(false)
  },[user])

  return {loggedIn,checkingStatus}
};
