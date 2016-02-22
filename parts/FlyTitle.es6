import React from 'react';

export default function FlyTitle({ title }) {
  return (
    <h2
      className="blog-post__flytitle"
      itemProp="alternativeHeadline"
      key={`blog-post__flytitle`}
    >{title}</h2>
  );
}
