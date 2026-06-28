import useGoogleAuth from "../hooks/useGoogleAuth";

export default function UserLogIn() {
    const googleLogin = useGoogleAuth();

    console.log("Component rendered");

    return (
        <button onClick={googleLogin}>
            Continue with Google
        </button>
    );
}