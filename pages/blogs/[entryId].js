import React from "react";
import useContentful from "../../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";

export const getServerSideProps = async (context) => {
  const { items } = await useContentful(false).getEntries({
    "sys.id": `${context.params.entryId}`,
  });

  return {
    props: {
      blog: items[0],
    },
  };
};

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <Layout>
      <Container>
        <div>{blog.fields.blogTitle}</div>
        {documentToReactComponents(blog.fields.blogBody)}
      </Container>
    </Layout>
  );
};

export default Blog;
