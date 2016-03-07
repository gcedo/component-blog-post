import React from 'react';

function Title({ title }) {
  return (
    <h1
      className="blog-post__title"
      itemProp="headline"
    >{title}</h1>
  );
}

Title.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Title;
