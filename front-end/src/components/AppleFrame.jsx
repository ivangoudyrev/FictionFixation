function AppleFrame() {
  return (
    <div className="container border rounded-3 p-0 mt-2" 
         style={{ maxWidth: "658px" }}>
      <p className="text-uppercase text-center fs-1 playfair-display">
        Now Streaming!!!
      </p>
      <div
        className="container text-center"
        dangerouslySetInnerHTML={{
          __html: `
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameborder="0"
          height="450"
          style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/us/podcast/fiction-fixation/id1585974420"
        ></iframe>`,
        }}
      />
    </div>
  );
}

export default AppleFrame;
