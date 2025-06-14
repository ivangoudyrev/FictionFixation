function Note() {
  return (
    <div 
      className="container border rounded-3 p-0 mt-2 playfair-display" 
      style={{ maxWidth: "658px" }}
    >
      <div className="p-4 m-2 bg-light rounded-3 shadow-sm">
        <h2 className="text-center text-uppercase fw-bold mb-3">
          Join Us Weekly!
        </h2>
        <p className="fs-5 text-secondary text-center">
          Join us as we recap a different <strong>book or movie</strong> every
          week.
        </p>

        <div className="my-4 px-3">
          <h5 className="text-decoration-underline mb-3">
            Here's what to expect:
          </h5>
          <ul className="list-unstyled fs-5">
            <li>📢 Pearl-clutching Jokes</li>
            <li>🔥 Character roasts</li>
            <li>😂 Hilarious banter</li>
            <li>🙌 Relatable side-stories</li>
            <li>⏰ 45–50 mins of pure entertainment</li>
          </ul>
        </div>

        <p className="fs-5 text-center mt-4">
          <strong>Subscribe today!</strong> New episodes every <u>Wednesday</u>!
          <br />
          Listen wherever you get your podcasts.
        </p>
        <p className="text-center text-muted fst-italic">
          Podcasts are <strong>FREE</strong> on Apple Podcasts, Spotify,
          Audible, Amazon Music, and more!
        </p>

        <p className="text-center mt-3 fs-5">
          xo, <strong>Courtney & Rose</strong>
        </p>
      </div>
    </div>
  );
}

export default Note;
