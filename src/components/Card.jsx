import React from "react";

const Card = ({ no }) => {
  return (
    <div className="card">
      <h1>{no + 1}</h1>
      <h2>Title</h2>
      <p>
        content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
        facere distinctio? Ad quis dolorem quae excepturi quas velit provident
        ipsa non tenetur aperiam, earum at inventore molestiae quam voluptates!
        Nobis!
      </p>
    </div>
  );
};

export default Card;
