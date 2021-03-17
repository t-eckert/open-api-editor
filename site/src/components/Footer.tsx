const Footer = () => {
  return (
    <footer className="h-96 bg-yellow-600">
      <section className="mx-auto pt-8 container grid grid-cols-3">
        <div className="font-medium text-white">
          <p>
            Open API Editor version <code>0.1.0</code>
          </p>
          <p className="text-yellow-100">This is a work in progress.</p>
        </div>
        <div></div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;