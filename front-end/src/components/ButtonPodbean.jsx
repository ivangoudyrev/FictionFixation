function ButtonPodbean() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="assets/podbean_button.avif"
        alt="Podbean"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://fictionfixationpodcast.podbean.com/",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonPodbean;
