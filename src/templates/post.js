import React from "react";
import { graphql } from "gatsby";

const PostTemplate = ({ data }) => {
  const post = data.wpgraphql.post;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostTemplate;

export const query = graphql`
  query($postId: ID!) {
    wpgraphql {
      post(id: $postId) {
        title
        content
      }
    }
  }
`;
