import React from "react";

const Link = ({ href, text, children }) => {
  return (
    <li>
      <a href={href}>{text}</a>
      <ul className="nav-dropdown">{children}</ul>
    </li>
  );
};

export { Link };
