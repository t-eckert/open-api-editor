import Button from "../inputs/Button";

const Navigation = () => {
  const navItems = [
    {
      title: "Info",
      action: () => {},
    },
    {
      title: "Servers",
      action: () => {},
    },
    {
      title: "Paths",
      action: () => {},
    },
    {
      title: "Security",
      actions: () => {},
    },
  ].map((navItem) => (
    <li key={navItem.title}>
      <Button role="link" action={navItem.action}>
        {navItem.title}
      </Button>
    </li>
  ));

  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
};

export default Navigation;
