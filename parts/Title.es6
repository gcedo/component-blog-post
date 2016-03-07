import React from 'react';

export default function Title({ title }) {
  return (
    <h1
      className="blog-post__title"
      itemProp="headline"
    >{title}</h1>
  );
}
