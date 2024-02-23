// import React from "react";
// import { useState } from "react";
// //import search from "../assets/icons/search.svg"

// function Header({ onSearch }) {

//   return (
//     <section className="header">
//       <p className="title-header">How can we help?</p>
//       <input
//         type="text"
//         className="input-header form-control rounded-pill text-lg mx-auto"
//         style={{ width: "541px" }}
//         id="name"
//         name="name"
//         aria-describedby="name"
//         placeholder="Type your question here"
//       />
//     </section>
//   );
// }

// export default Header;


import React from "react";
import { useState } from "react";

function Header({ onSearch }) {

  return (
    <section className="header">
      <p className="title-header">How can we help?</p>
      <input
        type="text"
        className="input-header form-control rounded-pill text-lg mx-auto"
        style={{ maxWidth: "541px", width: "100%" }} // Memastikan bahwa lebar maksimalnya adalah 541px dan akan menyesuaikan lebar layar
        id="name"
        name="name"
        aria-describedby="name"
        placeholder="Type your question here"
      />
    </section>
  );
}

export default Header;
