import { getAllPostIds, getPostData } from "../../lib/posts";
import BlogPost from "../../components/BlogPost";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  //   console.log("Paths:", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //   console.log("Params:", params);
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <BlogPost post={postData} />
    </Layout>
  );
}
