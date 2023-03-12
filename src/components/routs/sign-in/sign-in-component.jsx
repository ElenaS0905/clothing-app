import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../../utils/firebase/firebase-utils";
import signUpForm from "../../sign-up-form/sign-up-form-component";
import SignUpForm from "../../sign-up-form/sign-up-form-component";

const SignIn = () =>{

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in page</h1>

            <button onClick={logGoogleUser}>
                sign in with google
            </button>

            <SignUpForm/>
        </div>
    )
}

export default SignIn;