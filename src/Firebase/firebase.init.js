import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inintializeAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default inintializeAuthentication;