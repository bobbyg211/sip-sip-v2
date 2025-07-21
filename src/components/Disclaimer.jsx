export default function Disclaimer() {
  function agreeToPlay() {
    const disclaimer = document.querySelector(".disclaimer");
    disclaimer.classList.add("fade-out");
    setTimeout(() => {
      disclaimer.style.display = "none";
    }, 500);
  }

  return (
    <div className="disclaimer">
      <div className="content">
        <small>To play:</small>
        <p>
          All players must be over the age of 21. Everyone will drink responsibly, be safe, and have
          fun!
        </p>
        <button onClick={agreeToPlay} type="button" className="primary-btn">
          Agree
        </button>
      </div>
    </div>
  );
}
