import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import assignments from "./assignments.json";
import Navigation from "@components/navigation/navigation";

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
            <div className={styles.linkSection}>
              <SocialLink
                site="GitHub"
                link="https://github.com/joshpetit"
                image="/github.png"
              />
              <SocialLink
                site="LinkedIn"
                link="https://linkedin.com/in/joshua-petitma/"
                image="/li.png"
              />
              <SocialLink
                site="Instagram"
                link="https://instagram.com/josh.petitma/"
                image="/insta.webp"
              />
            </div>
          </div>
        </div>
        <div className={styles.assignments}>
          <h3 className={styles.assignmentTitle}>Class Assignments:</h3>
          {assignments.map( ({name, link}, index) =>
          <Assignment key={index} number={index + 1} link={link} name={name}/>)
          }
        </div>
      </main>
    </div>
  );
};

interface SocialProps {
  site: string;
  link: string;
  image: string;
}

const SocialLink: React.FC<SocialProps> = ({ site, link, image }) => (
  <a target="_blank" rel="noreferrer" href={link}>
    <div className={styles.socialLink}>
      <div className={styles.socialImage}>
        <Image src={image} alt="ok" height="27px" width="27px" />
      </div>
      {site}
    </div>
  </a>
);


interface AssignmentProps {
  number: number;
  name: string;
  link: string;
}

const Assignment: React.FC<AssignmentProps> = ({ number, name, link }) => (
  <div className={styles.assignment}>
    Assignment {number}: <a href={link}>{name}</a>
  </div>
);

export default Home;
