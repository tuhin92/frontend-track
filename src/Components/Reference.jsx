import React, { useRef } from "react";

const Reference = () => {
  const myRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(myRef.current.value);
  }

  return (
    <div>
      <h2 className=" text-2xl text-black text-center border bg-orange-700">
        {" "}
        Reference of a HTML tag using useRef
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={myRef}
          className="my-6 border w-full rounded border-red-500 bg-slate-100"
          type="text"
          name="name"
          id="name"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Reference;
