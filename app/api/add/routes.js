import React, { useEffect, useState } from 'react';

const Routes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuotes(data.results); 
    };

    getdata();
  }, []);

  return (
    <>
      {quotes.map((quote) => (
        <p key={quote._id}>
          {quote.content}
        </p>
      ))}
    </>
  );
};

export default Routes;