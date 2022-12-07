export default function Button({ text }: { text: string }) {
    return (
        <div className="customButton">
            <div >{text}</div>
        </div>
    );
}
