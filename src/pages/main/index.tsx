/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

import BoltIcon from '@mui/icons-material/Bolt';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Button, Stack } from "@mui/material";

import "./index.css";
import { turnOff, turnOn } from "../../service/robot";

export default function Main() {
  const [animation, setAnimation] = useState<Animation>()
  const onStart = async () => {
    await turnOn();

    setTimeout(() => {
      const robot = document.getElementById("robot-map")?.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(600px) ' },
        { transform: 'translateX(600px) rotate(90deg)' },
        { transform: 'translateX(600px) translateY(100px)  rotate(90deg)' },
        { transform: 'translateX(600px) translateY(100px) rotate(180deg)' },
        { transform: 'translateX(0px) translateY(100px) rotate(180deg)' },
        { transform: 'translateX(0px) translateY(100px) rotate(90deg)' },
        { transform: 'translateX(0px) translateY(200px) rotate(90deg)' },
        { transform: 'translateX(0px) translateY(200px) rotate(0deg)' },
        { transform: 'translateX(600px) translateY(200px) rotate(0deg)' },
        { transform: 'translateX(600px) translateY(200px) rotate(90deg)' },
        { transform: 'translateX(600px) translateY(300px) rotate(90deg)' },
        { transform: 'translateX(600px) translateY(300px) rotate(180deg)' },
        { transform: 'translateX(0px) translateY(300px) rotate(180deg)' },
      ], {
        duration: 48000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in",
      });
      setAnimation(robot);
    }, 5000)

  }

  const onStop = async () => {
    animation?.reverse();
    await turnOff();
  }
  return (
    <div>
      <div className="map-container">
        <div className="robot-motion" id="robot-map">
          <div className="robot" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => onStop()} startIcon={<BoltIcon />} size="large" variant="contained">Voltar para a base</Button>
          <Button onClick={() => onStart()} startIcon={<PowerSettingsNewIcon />} size="large" color="success" variant="contained">Iniciar limpeza</Button>
        </Stack>
      </div>

    </div >
  );
}
