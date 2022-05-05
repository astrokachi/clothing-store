import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDeQrzbTYH54qocrn02a-m_QpTzf46-kCs",
	authDomain: "clothing-store-6263d.firebaseapp.com",
	projectId: "clothing-store-6263d",
	storageBucket: "clothing-store-6263d.appspot.com",
	messagingSenderId: "582748697674",
	appId: "1:582748697674:web:1b350d5e5749f364e0e2b3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

