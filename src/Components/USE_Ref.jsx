import React, { useRef } from "react";

// useRef return object not array 
// It's a reference, it's not a state. We can't chage the state value like use state 
const USE_Ref = () => {
  const myRef = useRef("Bnagladesh");
  console.log(myRef);

  return (
    <div>
      <h2 className="text-4xl text-black text-center my-6">useRef</h2>
    </div>
  );
};

export default USE_Ref;
