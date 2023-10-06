import { useState } from "react";

export default function Box(props){
  const [quote,setQuote]=useState("");
  async function getQuote()
  {
    const res = await fetch("https://api.themotivate365.com/stoic-quote");
    const data = await res.json();


  }
  return (
    <div id="quote-box">
      <p></p>
      <h3>{props.}</h3>
    </div>
  )
}
