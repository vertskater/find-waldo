import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./fb-init";

export default function GetPicture() {
  const loading =
    "https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif";
  const [img, setImg] = useState({
    publicURL: loading,
  });

  useEffect(() => {
    const getImageURL = async () => {
      const imgRef = ref(storage, "wimmelbild.png");
      const publicURL = await getDownloadURL(imgRef);
      setImg({ publicURL: publicURL });
    };
    getImageURL();
  }, []);

  return <img src={img.publicURL} alt="wimmelbild" />;
}
