import React from "react";
// import "font-awesome/css/font-awesome.min.css";

export default function NavMain({ signout }) {
  const redirectMe = isLoggedin => {
    isLoggedin();
  };

  return (
    <span
      className="is-clickable auth fas fa-sign-out-alt"
      onClick={() => signout(redirectMe)}
    />
  );
}
