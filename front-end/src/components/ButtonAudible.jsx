function ButtonAudible() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="assets/Audible_button.avif"
        alt="Audible"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://www.audible.com/pd/Podcast/B08K57NBYZ",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonAudible;
