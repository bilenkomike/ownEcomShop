import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Container from "components/Container/Container";
import BlogPageContent from "modules/BlogPageContent/BlogPageContent";
import React from "react";

const BlogPage: React.FC = () => {
  const params = [
    {
      key: "blog",
      value: "Blog",
    },
  ];

  return (
    <section>
      <BreadCrumbs params={params} />
      <Container>
        <BlogPageContent />
      </Container>
    </section>
  );
};

export default BlogPage;
