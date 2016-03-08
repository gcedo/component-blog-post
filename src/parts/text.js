import React from 'react';

function Text({ text }) {
  if (typeof text === 'string') {
    return (
      <div
        className="blog-post__text"
        itemProp="description"
        /* eslint-disable react/no-danger */
        dangerouslySetInnerHTML={{
          '__html': text,
        }}
      />
    );
  } else if (text) {
    return (
      <div
        className="blog-post__text"
        itemProp="description"
      >
        {text}
      </div>
    );
  }
}

Text.propTypes = {
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]).isRequired,
};

export default Text;
