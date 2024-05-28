import Link from "next/link";
import styles from "./BlogList.module.css";

export default function BlogList({ posts }) {
  return (
    <ul className={styles.list}>
      {posts.map(({ id, date, title, summary }) => (
        <li key={id} className={styles.listItem}>
          <Link href={`/posts/${id}`} className={styles.title}>
            {title}
          </Link>
          <br />
          <small className={styles.date}>{date}</small>
          <p className={styles.summary}>{summary}</p>
        </li>
      ))}
    </ul>
  );
}
