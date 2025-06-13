import Message from "./Message";

function AboutUs() {
  return (
    <div
      className="container border rounded-3 mt-3 playfair-display"
      style={{ maxWidth: "658px" }}
    >
      <div className="p-2 m-3 bg-light rounded-4 shadow-sm">
        <h2 className="text-center text-uppercase fw-bold mb-3">About Us</h2>
        <div className="bg-white rounded-4 p-3">
          <Message sender="Courtney" text="Hi, I'm Courtney"/>
          <Message sender="Rose" text="I'm Jose"/>
          <Message sender="Courtney" text="We are long-time friends"/>
          <Message sender="Rose" text="And life-long bookworms"/>
          <Message sender="Courtney" text="We haven't always read the same types of books..."/>
          <Message sender="Rose" text="Until now..."/>
          <Message sender="Courtney" text="YES! I will be choosing the books and movies we will cover on the podcast"/>
          <Message sender="Rose" text="Courtney is drunk with power"/>
          <Message sender="Courtney" text="Tipsy. Tipsy with power"/>
          <Message sender="Rose" text="Well, I'm excited and scared. Mostly excited!"/>
          <Message sender="Courtney" text="Buckle up because it's going to be a wild ride"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
