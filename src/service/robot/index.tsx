import { api } from ".."

export const turnOn = () => {
    api.get("/ligar");
}

export const turnOff = () => {
    api.get("/desligar");
}