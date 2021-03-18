import AnchorLink from "react-anchor-link-smooth-scroll";

const Navigation = () => {
  const navItems = [
    {
      title: "Info",
      anchor: "#info",
    },
    {
      title: "Servers",
      anchor: "#servers",
    },
    {
      title: "Paths",
      anchor: "#paths",
    },
    {
      title: "Security",
      anchor: "#security",
    },
  ].map((navItem) => (
    <li key={navItem.title}>
      <AnchorLink
        className="cursor-pointer font-medium text-gray-600 hover:text-gray-900 transition"
        href={navItem.anchor}
      >
        {navItem.title}
      </AnchorLink>
    </li>
  ));

  return (
    <nav className="sticky">
      <ul>{navItems}</ul>
    </nav>
  );
};

export default Navigation;
