import { useEffect, useState } from "react";

const RANDOM_QUOTE = "https://dummyjson.com/quotes/random";
const RANDOM_IMAGES = "https://picsum.photos/200/300?grayscale";

function RandomQuote() {
  const [quote, setQuote] = useState({ id: "", author: "", quote: "" });
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getQuote();
  }, []);

  /**
   * Fetches a random quote from the DummyJSON API and a random grayscale
   * image from the Picsum API, and updates the quote and images state
   * variables with the results. Also sets the isLoading state variable to
   * false when the data has been fetched.
   */

  async function getQuote() {
    const response = await fetch(RANDOM_QUOTE);
    const jsonresponse = await response.json();
    const finalresponse = jsonresponse;
    console.log(finalresponse);
    const imageURL = await fetch(RANDOM_IMAGES);
    const getImage = await imageURL.url;
    setImages(getImage);
    console.log(getImage);

    setQuote(finalresponse);
    setIsLoading(false);
    //console.log(jsonresponse);
  }

  return (
    <>
      {isLoading && <p>Loading your happiness.......</p>}
      <img src={images} />
      <h1>{quote.quote}</h1>
      <p> {quote.author}</p>
      <button onClick={getQuote}>Click to Get Inspired</button>
    </>
  );
}
export default RandomQuote;
