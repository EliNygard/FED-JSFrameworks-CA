import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-200">
      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Infinite Finds</Link>
            <p>Where Variety Never Ends</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
