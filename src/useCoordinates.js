import { useEffect, useState } from "react";
import useData from "./useData";

export default function useCoordinates() {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [foundMonster, setFoundMonster] = useState({
    sulleyFound: false,
    mikeFound: false,
    fuzzyFound: false,
  });
  const coordinates = useData();
  useEffect(() => {
    let x = 0;
    let y = 0;
    let xw = 0;
    let yw = 0;
    const handleClick = (e) => {
      x = e.clientX;
      y = e.clientY;
      xw = window.scrollX;
      yw = window.scrollY;
      setClickPosition({ x: x + xw, y: y + yw });
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  const handleSulley = () => {
    const monster = coordinates[0];
    if (
      clickPosition.x - 20 > monster.sulleyTopX &&
      clickPosition.x - 20 < monster.sulleyBottomX &&
      clickPosition.y - 10 > monster.sulleyTopY &&
      clickPosition.y - 10 < monster.sulleyBottomY
    ) {
      setFoundMonster({
        ...foundMonster,
        sulleyFound: true,
      });
    }
  };
  const handleMike = () => {
    const monster = coordinates[0];
    if (
      clickPosition.x - 20 > monster.mikeTopX &&
      clickPosition.x - 20 < monster.mikeBottomX &&
      clickPosition.y - 20 > monster.mikeTopY &&
      clickPosition.y - 20 < monster.mikeBottomY
    ) {
      setFoundMonster({
        ...foundMonster,
        mikeFound: true,
      });
    }
  };
  const handleFuzzy = () => {
    const monster = coordinates[0];
    if (
      clickPosition.x - 20 > monster.fuzzyTopX &&
      clickPosition.x - 20 < monster.fuzzyBottomX &&
      clickPosition.y - 20 > monster.fuzzyTopY &&
      clickPosition.y - 20 < monster.fuzzyBottomY
    ) {
      setFoundMonster({
        ...foundMonster,
        fuzzyFound: true,
      });
    }
  };
  return [handleSulley, handleMike, handleFuzzy, foundMonster];
}
