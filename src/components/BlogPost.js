import Head from "next/head";
import styles from "./BlogPost.module.css";

export default function BlogPost({ post }) {
  return (
    <article className={styles.container}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.date}>{post.date}</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
