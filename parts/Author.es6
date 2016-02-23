import React from 'react';

export default function Author({ author }) {
  return (
    <div
      className="blog-post__author"
      itemProp="author"
    >
      {author}
    </div>
  );
}
