import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1 className="display-4">404 NOT FOUND :/</h1>
      <p>
        Go back home :) <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};
