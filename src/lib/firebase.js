import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBEKk5_Bwkf04KWAmsUL_Oy7ZKGH0rt0VE",
    authDomain: "fir-demo-51fef.firebaseapp.com",
    projectId: "fir-demo-51fef",
    storageBucket: "fir-demo-51fef.firebasestorage.app",
    messagingSenderId: "390238739243",
    appId: "1:390238739243:web:48ed1c2f6bc219066ec36e",
    measurementId: "G-82KGQXDTT0"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app