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
      <main className={styles.main}>
        <h1 className={styles.title} >Web Project Design & Development</h1>
        <div className={styles.assignmentsContainer}>
        <p> Stylings to come later!</p>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            number={index + 1}
            name={assignment.name}
            link={`/assignment${index + 1}/index.html`}
          />
        ))}
        </div>
      </main>
    </div>
  );
};

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
