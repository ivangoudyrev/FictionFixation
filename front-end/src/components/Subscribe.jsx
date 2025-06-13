import ButtonAmazon from "./ButtonAmazon";
import ButtonApple from "./ButtonApple";
import ButtonAudible from "./ButtonAudible";
import ButtonPodbean from "./ButtonPodbean";
import ButtonSpotify from "./ButtonSpotify";

function Subscribe() {
  return (
    <>
      <div
        className="container border rounded-3 mt-3 playfair-display"
        style={{ maxWidth: "658px" }}
      >
        <div className="p-4 m-3 bg-light rounded-4 shadow-sm">
          <h2 className="text-center text-uppercase fw-bold mb-3">
            Don't Forget to Subscribe!
          </h2>
          <p className="fs-5 mb-0 text-secondary text-center">
            Don't miss a single episode of our podcast.
          </p>
          <p className="fs-5 text-secondary text-center">
            Subscribe and get it on your favorite podcasting app!
          </p>
          <div className="p-1">
            <div className="container d-flex justify-content-center gap-1 flex-wrap">
              <ButtonApple />
              <ButtonSpotify />
              <ButtonAudible />
              <ButtonAmazon />
              <ButtonPodbean />
            </div>
          </div>
          <div className="text-center mt-4 px-3">
            <h5 className="text-decoration mb-0">Get the tea! ☕️ 🫖</h5>
            <p className="mb-0">We've got some tea brewing.</p>
            <p className="mt-0">Let us send you an email when it's ready!</p>
          </div>
          <form className="row g-3 text-secondary text-center bg-light rounded">
            <div class="col-12">
              <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email here*" />
            </div>
            <div class="col-12">
              <button type="submit" className="btn btn-primary mb-3">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
