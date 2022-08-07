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
import { Scoreboard } from "@mui/icons-material";

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
}
