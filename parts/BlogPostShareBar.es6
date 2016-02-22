import React from 'react';
import ShareBar from '@economist/component-sharebar';
import Balloon from '@economist/component-balloon';
import Icon from '@economist/component-icon';

export default function BlogPostSideBar({ }) {
  const shareBarTrigger = (
    <a href="/Sections" className="navigation__sections-link">
      <Icon icon="share" size="28px" color="black" />
      <Icon icon="close" size="28px" color="black" />
    </a>
  );
  return (
    <div className="blog-post__sharebar">
      <ShareBar
        icons={[
          'facebook',
          'twitter',
        ]}
      />
      <Balloon
        className="navigation__main-navigation-link navigation__mobile-accordion"
        trigger={shareBarTrigger}
      >
        <ShareBar
          className="blog-post__sharebar-desktop"
          icons={[
            'linkedin',
            'googleplus',
          ]}
        />
        <ShareBar
          className="blog-post__sharebar-mobile"
          icons={[
            'facebook',
            'twitter',
            'linkedin',
            'googleplus',
            'whatsapp',
          ]}
        />
      </Balloon>
    </div>
  );
}
