import { useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState(
    "Do not give your attention to what others do or fail to do; give it to what you do or fail to do."
  );
  const [author, setAuthor] = useState("Dhammapada");
  const getQuote = async () => {
    const apiRes = await fetch("https://api.themotivate365.com/stoic-quote");
    const data = await apiRes.json();
    setQuote(data.quote);
    setAuthor(data.author);
  };
  const twitter = () => {
    const tweetText = `${quote}-${author}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
      "_blank"
    );
  };

  return (
    <div className="Box" id="quote-box">
      <p id="text">
        <span className="Auth">Quote:-</span>
        {quote}
      </p>
      <br />
      <p id="author">
        <span className="Auth">Author:-</span>
        {author}
      </p>
      <br />
      <button onClick={getQuote} className="  btn btn-warning" id="new-quote">
        NextQuote
      </button>
      <button id="tweet-quote" onClick={twitter}>
        Tweet
      </button>
    </div>
  );
}
