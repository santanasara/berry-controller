import { useState } from "react";

import { TextField } from "@mui/material";

import './index.css';
import { talk } from "../../service/alexa";

export default function Talk() {
    const [message, setMessage] = useState<string>("");

    const sendMessage = async (e: React.KeyboardEvent<HTMLDivElement>
    ) => {
        if (e.key === "Enter") await talk(message)
    }

    return (
        <div className="talk-container">
            <div>
                <img src="https://m.media-amazon.com/images/G/32/kindle/journeys/82FfYIaDjN3JE8QaD4p4evJBuRQztaUkXFHTYXwqQdJU3D/MWYwODNjYWEt._CB608163428_.png" alt="alexa" />
            </div>
            <div style={{ marginTop: "1rem" }}>
                <TextField
                    id="talk"
                    label="Falar"
                    variant="filled"
                    onKeyDown={(e) => sendMessage(e)}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
        </div>)
}