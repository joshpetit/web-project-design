import {NextPage} from "next"
import styles from "@styles/Navigation.module.css";

const Navigation: NextPage = () => {
  return (
    <div className={styles.imgBanner}>
      <div className={`primary ${styles.navigationBar}`}>
        <NavButton title="Assignments" link="/index.html" />
        <NavButton title="Home" link="https://petit.dev" />
        <NavButton title="Final Project" link="/index.html" />
      </div>
    </div>
  )
}

interface NavigationButtonProps {
  title: string;
  link: string;
}

const NavButton: React.FC<NavigationButtonProps> = ({ title, link }) => (
  <div className={styles.button}>{title}</div>
);

export default Navigation;
