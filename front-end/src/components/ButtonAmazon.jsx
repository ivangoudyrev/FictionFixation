function ButtonAmazon() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="assets/Amazon_music_button.avif"
        alt="Amazon Music"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://music.amazon.com/podcasts/3f4809f3-345e-4138-899f-39d93c07dfe6",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonAmazon;
