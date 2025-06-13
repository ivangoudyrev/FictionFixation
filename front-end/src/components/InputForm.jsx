function InputForm() {
  return (
    <div
      className="container text-bg-secondary rounded-3 mb-5 ml-1"
      style={{ maxWidth: "658px" }}
    >
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            City/State
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Email (so we can respond) *
          </label>
          <input type="text" class="form-control" id="inputAddress" />
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
