import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    fetch("http://localhost:8080/allusers")
      .then((res) => {
        return res.json();
      })
      .then((res1) => console.log(res1));
  }, []);
  return (
    <div style={{ minHeight: "56vh" }}>
      <h1 className="text-center">Contact</h1>
    </div>
  );
};

export default Contact;
