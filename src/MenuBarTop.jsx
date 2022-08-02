import { mainStyle, imgStyling } from "./styling";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import Timer from "./Timer";

export default function MenuBarTop({ foundMonster }) {
  const sullyImg = process.env.PUBLIC_URL + "/sully.webp";
  const mikeImg = process.env.PUBLIC_URL + "mike.webp";
  const fuzzyImg = process.env.PUBLIC_URL + "fuzzy.webp";
  const [foundAll, setFoundAll] = useState(false);
  useEffect(() => {
    if (
      foundMonster.sulleyFound &&
      foundMonster.mikeFound &&
      foundMonster.fuzzyFound
    ) {
      setFoundAll(true);
    }
  }, [foundMonster, foundAll]);

  return (
    <div style={mainStyle}>
      {foundMonster.sulleyFound !== true && (
        <div style={imgStyling}>
          <img
            src={sullyImg}
            style={{ height: "100%" }}
            alt="sully the monster"
          />
          <Typography variant="h6" compontnet="span">
            Sulley
          </Typography>
        </div>
      )}

      {foundMonster.mikeFound !== true && (
        <div style={imgStyling}>
          <img
            src={mikeImg}
            style={{ height: "100%" }}
            alt="sully the monster"
          />
          <Typography variant="h6" compontnet="span">
            Mike
          </Typography>
        </div>
      )}
      {foundMonster.fuzzyFound !== true && (
        <div style={imgStyling}>
          <img
            src={fuzzyImg}
            style={{ height: "100%" }}
            alt="sully the monster"
          />
          <Typography variant="h6" compontnet="span">
            Fuzzy
          </Typography>
        </div>
      )}
      {foundAll === false && <Timer />}
      {foundAll && (
        <Typography variant="h3" component="h3">
          Yeah you found all Monsters!!
        </Typography>
      )}
    </div>
  );
}
