import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  getFirestore,
  query,
  orderBy,
  limit,
  doc,
  setDoc,
} from "firebase/firestore";

export default function ShowBestScore() {
  const [scoreBoard, setScoreBoard] = useState([]);
  useEffect(() => {
    const myData = query(
      collection(getFirestore(), "scores"),
      orderBy("createdAt", "desc"),
      limit(1)
    );
    onSnapshot(myData, (snapshot) => {
      setScoreBoard(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  useEffect(() => {
    if (scoreBoard.length > 0) {
      const docRef = doc(getFirestore(), "scores", scoreBoard[0].id);
      setDoc(docRef, {
        name: scoreBoard[0].name,
        createdAt: scoreBoard[0].createdAt,
        test: "test",
      });
    }
  }, [scoreBoard]);
  //return [scoreBoard];
}
