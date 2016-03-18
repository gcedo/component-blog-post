import React from 'react';

function BlogPostImage({ caption, src, alt }) {
  return (
    <figure className="blog-post__image">
      <img
        alt={alt}
        src={src}
        itemProp="image"
        className="blog-post__image-block"
      />
      {caption}
    </figure>
  );
}

BlogPostImage.propTypes = {
  alt: React.PropTypes.string,
  caption: React.PropTypes.element,
  src: React.PropTypes.string.isRequired,
};

export default BlogPostImage;
