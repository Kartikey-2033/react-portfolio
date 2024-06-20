import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Filter out Microsoft, Netflix, Graph QL, and Figma entries from history
  const filteredHistory = history.filter(
    (item) =>
      item.organisation !== "Mirosoft" &&
      item.organisation !== "Netflix" &&
      item.organisation !== "GraphQL" &&
      item.organisation !== "Figma"
  );

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills
            .filter((skill) => skill.title !== "GraphQL" && skill.title !== "Figma")
            .map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
        </div>
        <ul className={styles.history}>
          {filteredHistory.map((historyItem, id) => (
            <li
              key={id}
              className={`${styles.historyItem} ${
                historyItem.organisation === "Google" ? styles.google : ""
              }`}
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                {historyItem.organisation === "Google" ? (
                  <>
                    <h3>Full Stack Developer Intern</h3>
                    <p>June, 2024 - August, 2024</p>
                  </>
                ) : (
                  <>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
