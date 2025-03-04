import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-200 px-2 py-5">
      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
