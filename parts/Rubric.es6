import React from 'react';

export default function Rubric({ rubric }) {
  return (
    <p
      className="blog-post__rubric"
      itemProp="description"
      key={`blog-post__rubric`}
    >{rubric}</p>
  );
}
