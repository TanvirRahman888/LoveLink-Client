import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from '../../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current User : ", currentUser);
            setLoading(false)
        });
        //ToDo 
        return () => {
            return unsubscribe();
        } // return 1

        // return unsubscribe(); // return 2
    }, [])

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(Name, Photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: Name, photoURL: Photo
          })
           
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        auth,
        loading,
        setLoading,
        createUser,
        logIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.object
}