import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBJlH2w_CtHwt8y4rs1lLD1ZWGVF2hqitI",
    authDomain: "qarash-e4207.firebaseapp.com",
    projectId: "qarash-e4207",
    storageBucket: "qarash-e4207.appspot.com",
    messagingSenderId: "319513978462",
    appId: "1:319513978462:web:d39446813adf74ada976cf",
    measurementId: "G-3W4C6TKBX0"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };