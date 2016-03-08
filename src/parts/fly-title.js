import React from 'react';

function FlyTitle({ title }) {
  return (
    <h2
      className="blog-post__flytitle"
      itemProp="alternativeHeadline"
    >{title}</h2>
  );
}

FlyTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default FlyTitle;
