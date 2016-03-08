import React from 'react';

function Author({ author }) {
  return (
    <div
      className="blog-post__author"
      itemProp="author"
    >
      {author}
    </div>
  );
}

Author.propTypes = {
  author: React.PropTypes.string.isRequired,
};

export default Author;
