function InputForm() {
  return (
    <div
      className="container border rounded-3 mt-3"
      style={{ maxWidth: "658px" }}
    >
        <p className="text-uppercase text-center fs-1 mb-0 playfair-display">Contact us!</p>
        <p className="text-center p-0 fs-4 m-0 playfair-display">
          We love to hear from our listeners
        </p>
        <p className="text-center mt-0 playfair-display">
          (as long as they don't make it weird).
        </p>
      <form class="row g-3 text-secondary bg-light rounded m-3">
        <div class="col-md-6">
          <label for="inputName" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="inputName" />
        </div>
        <div class="col-md-6">
          <label for="inputLocation" class="form-label">
            City/State
          </label>
          <input type="text" class="form-control" id="inputLocation" />
        </div>
        <div class="col-12">
          <label for="inputEmail" class="form-label">
            Email (so we can respond)
          </label>
          <input type="email" class="form-control" id="inputEmail" />
        </div>
        <div class="col-12">
          <label for="commentArea" class="form-label">
            Your message
          </label>
          <textarea class="form-control" id="commentArea" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary mb-3">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
