import React from "react";
// import "font-awesome/css/font-awesome.min.css";

export default function NavMain({ signout }) {
  return (
    <span
      className="is-clickable auth fas fa-sign-out-alt"
      onClick={() => signout(res => console.log(res))}
    />
  );
}
