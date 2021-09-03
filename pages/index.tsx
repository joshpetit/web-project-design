import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import assignments from "./assignments.json";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Project Design & Development</title>
        <meta
          name="description"
          content="A cool web project design & development class I'm taking"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.imgBanner}>
      <div className={`${styles.primary} ${styles.navigation}`}>
        <NavButton title="Assignments" link="/index.html"/>
        <NavButton title="Home" link="/index.html"/>
        <NavButton title="Final Project" link="/index.html"/>
      </div>

      </div>

      <main className={styles.main}>
        <div className={styles.textSection}>
          <div className={styles.textBlob}>
            <h2>About</h2>
            <p>
              This is a <a href="./index.html">web project and design course</a> that I am currently taking at Duke University. My goal for this course is to be able to improve my UI/UX skills so that a can have a more wholistic web development skill set.
            </p>
          </div>
          <div className={styles.textBlob}>
            <h2>More On Me</h2>
            <p>
              To reach me or see more of what I’m working on, checkout these links:
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

interface NavigationButtonProps {
  title: string,
  link: string
}

const NavButton: React.FC<NavigationButtonProps> = ({title, link}) => (
  <div className={styles.button}>
    {title}
  </div>
);

interface AssignmentProps {
  number: number;
  name: string;
  link: string;
}


const Assignment: React.FC<AssignmentProps> = ({ number, name, link }) => (
  <div>
    <p>
      Assignment {number}: <a href={link}>{name}</a>
    </p>
  </div>
);

export default Home;
