import React from "react";
import { Link } from "gatsby";

export default function Header(): JSX.Element {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="about">About</Link>
    </>
  );
}
