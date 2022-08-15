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

export default function ShowBestScore({ startTime, ready }) {
  const [scoreBoard, setScoreBoard] = useState([]);
  const [endTime] = useState(new Date().getTime());
  const [timing, setTiming] = useState(0);
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
    setTiming((endTime - startTime) / 1000);
  }, [endTime, startTime]);
  useEffect(() => {
    if (scoreBoard.length > 0) {
      const docRef = doc(getFirestore(), "scores", scoreBoard[0].id);
      setDoc(docRef, {
        name: scoreBoard[0].name,
        createdAt: scoreBoard[0].createdAt,
        timing: timing,
      });
    }
  }, [scoreBoard, timing]);
  useEffect(() => {
    ready();
  }, [ready]);
}
