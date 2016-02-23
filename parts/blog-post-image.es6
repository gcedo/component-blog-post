import React from 'react';

export default function BlogPostImage({ caption, imageProps }) {
  return (
    <figure className="blog-post__image">
      <img {...imageProps}
        itemProp="image"
        className="blog-post__image-block"
      />
      {caption}
    </figure>
  );
}
