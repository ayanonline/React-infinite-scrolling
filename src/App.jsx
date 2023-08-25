import React, { useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  useEffect(() => {
    // Adding scroll event in window object or you can say our website
    window.addEventListener("scroll", handleScroll);

    // this is for the cleanup phase when the app component will unmount; the scroll event listener will be removed from the window object
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // returns the height of entire document, in pixel
    const scrollHeight = document.documentElement.scrollHeight;

    // retunrs the inner height of the window (the height of the browser window's vewport), in pixel
    const innerHeight = window.innerHeight;

    // retuns the height of scroll from top (How much user scroll?) in pixel
    const scrollTop = document.documentElement.scrollTop;

    if (innerHeight + scrollTop + 1 >= scrollHeight) {
      // you can remove the +1( not mandetory, but give better user experiense)
      // ...write the code for pagination (fetch the next page data and add into state)
      console.log("scrolled to bottom💥");
    }
  };
  return (
    <div className="card-container">
      {Array(40)
        .fill(null)
        .map((item, index) => (
          <Card key={index} no={index} />
        ))}
    </div>
  );
};

export default App;
