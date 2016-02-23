import React from 'react';

export default function ImageCaption({ caption }) {
  return (
    <figcaption className="blog-post__image-caption">
      {caption}
    </figcaption>
  );
}
