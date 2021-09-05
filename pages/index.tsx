import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/Home.module.css";
import Navigation from "@components/navigation/navigation";
import Socials from "@components/social";
import Assignments from "@components/assignments";

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
      <Navigation />
      <main className={styles.main}>
        <div className={styles.textSection}>
          <div className={styles.textBlob}>
            <h2>About</h2>
            <p>
              This is a{" "}
              <a target="_blank" rel="noreferrer" href="https://maximusrex.github.io/web-project-design/">
                web project and design course
              </a>{" "}
              that I am currently taking at Duke University. My goal for this
              course is to be able to improve my UI/UX skills so that a can have
              a more wholistic web development skill set.
            </p>
          </div>
          <div className={styles.textBlob}>
            <h2>More On Me</h2>
            <p>
              To reach me or see more of what I’m working on, checkout these
              links:
            </p>
            <Socials />
          </div>
        </div>
          <Assignments />
      </main>
    </div>
  );
};




export default Home;
