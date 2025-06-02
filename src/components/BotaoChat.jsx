import "./BotaoChat.css";

function ChatButton({ onClick }) {
  return (
    <button className="botao-consultor" onClick={onClick} aria-label="Abrir Chat">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28">
        <path d="M12 3C6.48 3 2 6.92 2 11.5c0 2.2 1.02 4.19 2.7 5.68L4 21l4.07-1.35C9.26 20.21 10.6 20.5 12 20.5c5.52 0 10-3.92 10-9S17.52 3 12 3z" />
      </svg>
    </button>
  );
}

export default ChatButton;
