import { query, collection, getFirestore } from "firebase/firestore";

export const myData = query(collection(getFirestore(), "coordinates"));
