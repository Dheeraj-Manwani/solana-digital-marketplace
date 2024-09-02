"use server";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERS_ID,
  appId: process.env.APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app, `gs://${process.env.STORAGE_BUCKET}`);

export const uploadFile = async (file: File) => {
  const storageRef = ref(storage, `aaa`);

  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  console.log("innside server actions yaaay:::::::::", url);

  return url;
};
