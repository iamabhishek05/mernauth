import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'

const Oauth = () => {


    const dispatch = useDispatch();
    const handleGoogleAuth = async () => {

        try {

            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            const res = fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,

                })
            })

            const data = await res.json();
            dispatch(signInSuccess(data));


        }

        catch (err) {

            console.log("Could not login with google ", err);
        }
    }
    return (

        // we made the type as button because it is in the form and when we click on it , it will submit the form 
        <button type='button' onClick={handleGoogleAuth}
            className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'> Continue with google </button>
    )
}

export default Oauth 