import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDE1qXmpmcEJDo-xD2tRak-bryDwPVbtE4",
  authDomain: "dashboard-077.firebaseapp.com",
  projectId: "dashboard-077",
  storageBucket: "dashboard-077.appspot.com",
  messagingSenderId: "7133694152",
  appId: "1:7133694152:web:ab6e9a85e79d49a02d3dfd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);