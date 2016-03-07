import React from 'react';

export default function BlogPostSection({ section }) {
  return (
    <h3
      className="blog-post__section"
      itemProp="articleSection"
    >{section}</h3>
  );
}
