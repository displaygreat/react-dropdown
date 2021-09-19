import React from "react";
import { Link } from "./Link.js";

const NavList = () => {
  const navLinks = [
    {
      id: "home",
      text: "Home",
      link: "#",
      dropdown: false,
    },
    {
      id: "about",
      text: "About",
      link: "#",
      dropdown: false,
    },
    {
      id: "services",
      text: "Services",
      link: "#",
      dropdown: true,
      dropdownLinks: [
        {
          id: "design",
          text: "Web Design",
          link: "#",
        },
        {
          id: "development",
          text: "Web Development",
          link: "#",
        },
        {
          id: "graphic",
          text: "Graphic Design",
          link: "#",
        },
      ],
    },
    {
      id: "pricing",
      text: "Pricing",
      link: "#",
      dropdown: false,
    },
    {
      id: "contact",
      text: "Contact",
      link: "#",
      dropdown: false,
    },
  ];

  // const dropdownLinks = [
  //   {
  //     id: "1",
  //     text: "Web Design",
  //     link: "#",
  //   },
  //   {
  //     id: "2",
  //     text: "Web Development",
  //     link: "#",
  //   },
  //   {
  //     id: "3",
  //     text: "Graphic Design",
  //     link: "#",
  //   },
  // ];

  return (
    <ul className="nav-list">
      {navLinks.map(({ id, href, text, dropdown, dropdownLinks }) =>
        dropdown && dropdownLinks ? (
          <Link
            key={id}
            text={text}
            href={href}
            children={dropdownLinks.map(({ id, href, text }) => (
              <Link key={id} text={text} href={href} />
            ))}
          />
        ) : (
          <Link key={id} text={text} href={href} />
        )
      )}
    </ul>
  );
};

export default NavList;
