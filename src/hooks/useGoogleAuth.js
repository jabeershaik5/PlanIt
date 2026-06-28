// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// const useGoogleAuth = () => {
//     console.log('reached')
//     const googleLogin = useGoogleLogin({
//         scope: "https://www.googleapis.com/auth/calendar",

//         onSuccess: async (tokenResponse) => {
//             try {
//                 console.log(tokenResponse);

//                 const response = await axios.get(
//                     "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//                     {
//                         headers: {
//                             Authorization: `Bearer ${tokenResponse.access_token}`,
//                         },
//                     }
//                 );

//                 console.log(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         },

//         onError: () => {
//             console.log("Login Failed");
//         },
//     });

//     return googleLogin;
// };

// export default useGoogleAuth;
import { useGoogleLogin } from "@react-oauth/google";

export default function useGoogleAuth() {
    console.log("Hook rendered");

    const login = useGoogleLogin({
        onSuccess: (token) => console.log(token),
        onError: () => console.log("Error"),
    });

    return login;
}