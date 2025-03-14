import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-200 px-2 py-9">
      <nav className="max-w-2xl m-auto">
        <ul className="flex flex-col gap-3 items-center">
          <div className="flex flex-row gap-10">
            <li className="uppercase">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="uppercase">
              <Link to="/sale">Sale</Link>
            </li>
          </div>
          <li className="text-center mt-8 font-montserrat">
            <Link to="/">
              <p>Infinite Finds</p>
              <p className="italic text-sm">Where Variety Never Ends</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
