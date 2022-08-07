import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function HandleForm() {
  const [name, setName] = useState("");
  const [inputNameOpen, setInputNameOpen] = useState(false);
  //Form shoul open 2 Seconds after load
  useEffect(() => {
    setTimeout(() => {
      setInputNameOpen(true);
    }, 2000);
  }, []);
  //Handle Value from Input Textfield
  const handleChange = (e) => {
    setName(e.target.value);
  };
  //Close Form Dialog
  const handleClose = () => {
    setInputNameOpen(false);
  };
  //Handle Button Subscribe and push it to Firestore
  const handleSubscribe = async () => {
    setInputNameOpen(false);
    const scoreRef = collection(getFirestore(), "scores");
    await addDoc(scoreRef, {
      name: name,
      createdAt: serverTimestamp(),
    });

    setName("");
  };

  return [handleChange, inputNameOpen, handleClose, handleSubscribe];
}
