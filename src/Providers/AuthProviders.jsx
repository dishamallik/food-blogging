import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


// social providers
const goggleProvider = new GoogleAuthProvider();




const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
 const [loading, setLoading] = useState(true);
   console.log(loading);
    
// create user
const createUser = ( email, password) => {
    setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)


};


// update user profile
const updateUserProfile = (name, image) => {
    return  updateProfile(auth.currentUser, {
           displayName: name,
            photoURL: image
         })
   };


// sign in 
const sigInUser = ( email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
};


// goggle login
const goggleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, goggleProvider)

}


// Logout 
const logout = () =>{
    setLoading(false);
    setUser(null)
    signOut(auth)
};

// observer
useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, user => {
          console.log(user);
          setUser(user);
          setLoading(false);
        });
        return () =>unsubscribe();
  },[]);

const authInfo = {
user,
loading,
createUser,
sigInUser,
goggleLogin,
logout,
updateUserProfile ,




}





    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;