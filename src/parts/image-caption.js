import React from 'react';

function ImageCaption({ caption }) {
  return (
    <figcaption className="blog-post__image-caption">
      {caption}
    </figcaption>
  );
}

ImageCaption.propTypes = {
  caption: React.PropTypes.string.isRequired,
};

export default ImageCaption;
