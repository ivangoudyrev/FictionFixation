import emailjs from "emailjs-com";

function InputForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ku7ed29",
        "template_hmunpw4",
        e.target,
        "asEuy2hBS_W8ZBXCW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send.");
        }
      );
  };

  return (
    <div
      className="container border rounded-3 mt-3"
      style={{ maxWidth: "658px" }}
    >
      <p className="text-uppercase text-center fs-1 mb-0 playfair-display">
        Contact us!
      </p>
      <p className="text-center p-0 fs-4 m-0 playfair-display">
        We love to hear from our listeners
      </p>
      <p className="text-center mt-0 playfair-display">
        (as long as they don't make it weird).
      </p>
      <form
        className="row g-3 text-secondary bg-light rounded m-0"
        onSubmit={sendEmail}
      >
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="inputName" name="name" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLocation" className="form-label">
            City/State
          </label>
          <input type="text" className="form-control" id="inputLocation" name="location" />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email (so we can respond)
          </label>
          <input type="email" className="form-control" id="inputEmail" name="email" required />
        </div>
        <div className="col-12">
          <label htmlFor="commentArea" className="form-label">
            Your message
          </label>
          <textarea className="form-control" id="commentArea" name="message" required />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary mb-3">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
