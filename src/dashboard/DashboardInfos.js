import React from "react";

export default function DashboardInfos({ user }) {
  return (
    user && (
      <>
        <p>
          {user.name} - {user.lastname} : {user.email}
        </p>
      </>
    )
  );
}
