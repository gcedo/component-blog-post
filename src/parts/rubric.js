import React from 'react';

function Rubric({ rubric }) {
  return (
    <p
      className="blog-post__rubric"
      itemProp="description"
    >{rubric}</p>
  );
}

Rubric.propTypes = {
  rubric: React.PropTypes.string.isRequired,
};

export default Rubric;
