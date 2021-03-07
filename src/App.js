import { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  const [bgColor, setBgColor] = useState("bg-white");
  const [timerRun, setTimerRun] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setAlert("Tab was pressed!");
      }
    });
  }, []);

  useEffect(() => {
    if (timerRun) {
      const timer = setTimeout(() => {
        if (timerRun) {
          setBgColor("bg-green");
          setTimerRun(false);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [timerRun]);

  const handleColorChange = (color) => {
    setBgColor(color);
    setTimerRun(true);
  };

  const handleAlertClose = () => {
    setAlert(null);
  };
  const handleCancellation = () => {
    setTimerRun(false);
    setAlert("Aborted");
  };
  return (
    <div className={`App ${bgColor ? bgColor : ""}`}>
      {alert && <Alert message={alert} handleAlertClose={handleAlertClose} />}
      <div className="main">
        <p>Click the button</p>
        <button
          className="color-btn"
          onClick={() =>
            timerRun ? handleCancellation() : handleColorChange("bg-blue")
          }
        >
          {timerRun ? "Cancel" : "Change the color"}
        </button>
      </div>
    </div>
  );
}

export default App;
