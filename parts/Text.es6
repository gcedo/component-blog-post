import React from 'react';

export default function Text({ text }) {
  if (typeof text === 'string') {
    return (
      <div
        className="blog-post__text"
        itemProp="description"
        key={`blog-post__text`}
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
        key={`blog-post__text`}
      >
        {text}
      </div>
    );
  }
}
