import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  function clickLogo() {
    navigate("/");
  }

  return (
    <div className={styles.flex}>
      <img
        onClick={clickLogo}
        className={styles.logo}
        src="https://png.pngtree.com/png-clipart/20230207/original/pngtree-veterinary-design-dog-logo-vet-clipart-puppy-akita-inu-shiba-png-image_8947057.png"
        alt="logo"
      />
      <nav>
        <Link to={"/pets"}>Pets</Link>
        <Link to={"/medications"}>Medications</Link>
      </nav>
    </div>
  );
}
