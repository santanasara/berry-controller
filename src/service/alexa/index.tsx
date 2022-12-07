import { api } from ".."

export const talk = (msg: string) => {
    api.get(`/falar?mensagem=${msg}`);
}