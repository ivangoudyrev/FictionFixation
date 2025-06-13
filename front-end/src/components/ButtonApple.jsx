function ButtonApple() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/apple_podcast_button.avif"
        alt="Apple Podcasts"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://podcasts.apple.com/us/podcast/fiction-fixation/id1585974420",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonApple;
