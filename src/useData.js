import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

export default function useData() {
  const [coordinates, setCoordinates] = useState({});

  useEffect(
    () =>
      onSnapshot(collection(getFirestore(), "coordinates"), (snapshot) => {
        setCoordinates(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  return coordinates;
}
