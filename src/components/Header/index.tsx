import { AiOutlineShopping } from "react-icons/ai";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-2">
      <Link to={"/"}>
        <h1 className="text-xl text-primary md:text-2xl">Infinite Finds</h1>
      </Link>
      <nav>
        <ul className="flex flex-row gap-4">
          <li className={styles.listitem}>
            <Link to="/cart">
              <span>
                <AiOutlineShopping className="text-primary w-full h-6 md:h-9" />
              </span>
              <span className="hidden md:inline text-base text-primary">
                Shopping cart
              </span>
              <span className={styles.overlay}>1</span>
            </Link>
          </li>
          <li className={styles.listitem}></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
