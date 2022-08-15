import { useEffect, useState } from "react";

import GetPicture from "./GetPicture";
import PopUpMenu from "./PopUpMenu";
import MenuBarTop from "./MenuBarTop";
import useCoordinates from "./useCoordinates";
import Timer from "./Timer";
import InputName from "./InputName";
import HandleForm from "./HandleForm";
import BestScore from "./BestScore";

function App() {
  const [startTime] = useState(new Date().getTime());
  const [isGameboarReady, setIsGameBoardReady] = useState(false);
  const [handleChange, inputNameOpen, handleClose, handleSubscribe] =
    HandleForm();
  const [menuOpen, setMenuOpen] = useState(null);
  const [handleSulley, handleMike, handleFuzzy, foundMonster] =
    useCoordinates();
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    let x = 0;
    let y = 0;
    let xw = 0;
    let yw = 0;
    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.left = x + xw + "px";
      cursor.style.top = y + yw + "px";
      //console.log("x:", x + xw, "y:", y + yw);
    };
    const handleScroll = (e) => {
      xw = window.scrollX;
      yw = window.scrollY;
      cursor.style.left = xw + x + "px";
      cursor.style.top = yw + y + "px";
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleMove);
    };
  }, []);
  const handleMenuOpen = (e) => {
    e.preventDefault();
    setMenuOpen(
      menuOpen === null
        ? {
            mouseX: e.clientX + 2,
            mouseY: e.clientY - 6,
          }
        : null
    );
  };
  const handleMenuClose = () => {
    setMenuOpen(null);
  };
  const [timer] = Timer();
  const styling = {
    position: "absolute",
    width: 80,
    height: 80,
    border: "5px dotted black",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "none",
    backgroundColor: "#ff000080",
    opacity: menuOpen === null ? 1 : 0,
  };
  const handleGameBoardReady = () => {
    setIsGameBoardReady(() => true);
  };
  return (
    <>
      <MenuBarTop
        foundMonster={foundMonster}
        timer={timer}
        startTime={startTime}
        ready={handleGameBoardReady}
      />
      <div className="App" onClick={handleMenuOpen}>
        <div id="cursor" style={styling}></div>
        <PopUpMenu
          menuOpen={menuOpen}
          handleMenuClose={handleMenuClose}
          handleSulley={handleSulley}
          handleMike={handleMike}
          handleFuzzy={handleFuzzy}
        />
        <GetPicture />
      </div>
      <InputName
        open={inputNameOpen}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSubscribe={handleSubscribe}
      />
      {isGameboarReady && <BestScore />}
      <span
        style={{
          color: "white",
          textAlign: "center",
          padding: 20,
          position: "relative",
          bottom: "63px",
          left: 0,
          zIndex: 999,
          textShadow: "0 0  10px black",
        }}
      >
        Art by Ulises Farinas and color by Melody Often
      </span>
    </>
  );
}

export default App;
