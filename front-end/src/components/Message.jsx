function Message(props) {
  const { sender, text } = props;

  return (
    <>
      {sender === "Rose" ? (
        <div>
          <div className="d-flex align-items-start justify-content-end mb-3">
            <div className="speech-bubble bg-teal text-white">{text}</div>
            <img
              src="/assets/rose.avif"
              alt="Rose"
              className="rounded-circle ms-3"
              width="60"
              height="60"
            />
          </div>
        </div>
      ) : sender === "Courtney" ? (
        <div>
          <div className="d-flex align-items-start mb-3">
            <img
              src="/assets/courtney.avif"
              alt="Courtney"
              className="rounded-circle me-3"
              width="60"
              height="60"
            />
            <div className="speech-bubble bg-purple text-white">{text}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Message;
