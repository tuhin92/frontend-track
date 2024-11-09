import React, { useRef } from "react";

// useRef return object not array 
// It's a reference, it's not a state. We can't chage the state value like use state 
const USE_Ref = () => {
  const myRef = useRef("Bnagladesh");
  console.log(myRef);

  return (
    <div>
      <h2 className="text-4xl text-black border bg-purple-500 text-center my-6">useRef</h2>
      <button className="btn btn-primary">Use Ref</button>
    </div>
  );
};

export default USE_Ref;
