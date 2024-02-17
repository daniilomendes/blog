import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: "blog-b5a53.firebaseapp.com",
  projectId: "blog-b5a53",
  storageBucket: "blog-b5a53.appspot.com",
  messagingSenderId: "622853507251",
  appId: "1:622853507251:web:fa8169c8a50c4bb3ddc8c6"
};

export const app = initializeApp(firebaseConfig);
