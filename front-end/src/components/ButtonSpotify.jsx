function ButtonSpotify() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/spotify_button.avif"
        alt="Spotify"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://open.spotify.com/show/6n3pdgHObOLtuscAs4ke8M",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonSpotify;
