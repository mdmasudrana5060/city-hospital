import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const useFirebase = () => {

    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);

            })
            .catch((error) => {

            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
        });

    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {

        });
    }



    return {
        user,
        googleSignIn,
        logOut

    }
}
export default useFirebase;