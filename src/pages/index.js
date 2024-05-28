import { useState } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import styles from "./index.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPostsData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>My Blog</title>
      </Head>
      <section>
        <h1>Blog</h1>
        <input
          type="text"
          placeholder="Search posts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <BlogList posts={filteredPosts} />
      </section>
    </Layout>
  );
}
