function Header() {
  return (
    <>
      <div style={{ backgroundColor: "#49a6cc" }}>
        <div className="container text-center">
          <picture className="d-block mx-auto" style={{ maxWidth: "980px" }}>
            <source
              srcSet="/assets/fictionfixation_banner.avif"
              type="image/avif"
            />
            <img
              src="/assets/fictionfixation_banner.avif"
              className="img-fluid"
              alt="..."
            />
          </picture>
        </div>
      </div>
      <div className="p-3 bg-dark">
        <div className="container d-flex justify-content-center gap-2 flex-wrap">
          <button type="button" className="btn custom-btn">
            <img
              src="/assets/apple_podcast_button.avif"
              alt="Apple Podcasts"
              className="btn-icon"
            />
          </button>
          <button type="button" className="btn custom-btn">
            <img
              src="/assets/spotify_button.avif"
              alt="Spotify"
              className="btn-icon"
            />
          </button>
          <button type="button" className="btn custom-btn">
            <img
              src="assets/Audible_button.avif"
              alt="Audible"
              className="btn-icon"
            />
          </button>
          <button type="button" className="btn custom-btn">
            <img
              src="assets/Amazon_music_button.avif"
              alt="Amazon Music"
              className="btn-icon"
            />
          </button>
          <button type="button" className="btn custom-btn">
            <img
              src="assets/podbean_button.avif"
              alt="Podbean"
              className="btn-icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
