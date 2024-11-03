import React, { useEffect, useState } from "react";

const UseContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";
  const getUser = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
      console.log(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if(isLoading && !error){
    return <p>Loading....</p>
  }

  return <div className="my-6">
    {
        data.map(item => <p>{item.name}</p>)
    }
  </div>;
};

export default UseContainer;
