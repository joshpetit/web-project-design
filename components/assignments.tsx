import styles from "@styles/Assignments.module.css";
import { NextPage } from "next";
import assignments from "./assignments.json";

const Assignments: NextPage = () => {
  return (
    <div className={styles.assignments}>
      <h3 className={styles.assignmentTitle}>Class Assignments:</h3>
      {assignments.map(({ name, link }, index) => (
        <Assignment key={index} number={index + 1} link={link} name={name} />
      ))}
    </div>
  );
};

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

export default Assignments;
