import ButtonAmazon from "./ButtonAmazon";
import ButtonApple from "./ButtonApple";
import ButtonAudible from "./ButtonAudible";
import ButtonPodbean from "./ButtonPodbean";
import ButtonSpotify from "./ButtonSpotify";

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
      <div className="p-1 bg-dark">
        <div className="container d-flex justify-content-center gap-1 flex-wrap">
          <ButtonApple />
          <ButtonSpotify />
          <ButtonAudible />
          <ButtonAmazon />
          <ButtonPodbean />
        </div>
      </div>
    </>
  );
}

export default Header;
