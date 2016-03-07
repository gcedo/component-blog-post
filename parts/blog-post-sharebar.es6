import React from 'react';
import ShareBar from '@economist/component-sharebar';
import Balloon from '@economist/component-balloon';
import Icon from '@economist/component-icon';
import MobileDetect from 'mobile-detect';
import classnames from 'classnames';

const DesktopProviders = (
  <div className="blog-post__sharebar-desktop">
    <ShareBar icons={[ 'linkedin', 'googleplus', 'mail', 'print' ]} />
  </div>
);

const MobileProviders = (
  <div className="blog-post__sharebar-mobile">
    <ShareBar
      icons={[
        'facebook',
        'twitter',
        'linkedin',
        'googleplus',
        'mail',
        'whatsapp',
      ]}
    />
  </div>
);

export default function BlogPostSideBar() {
  const shareBarTrigger = (
    <a href="/Sections">
      <Icon className="blog-post__sharebar-icon-share" icon="share" size="23px" />
      <Icon className="blog-post__sharebar-icon-close" icon="close" size="23px" />
    </a>
  );

  let isMobile = false;
  if (typeof window !== 'undefined') {
    const mobileDetector = new MobileDetect(window.navigator.userAgent);
    isMobile = mobileDetector.mobile() !== null;
  }

  return (
    <div className="blog-post__sharebar">
      {!isMobile && <ShareBar icons={[ 'twitter', 'facebook' ]} />}
      <Balloon
        className="blog-post__toggle-share"
        className={classnames(
          'blog-post__toggle-share',
          { 'blog-post__toggle-share-mobile': isMobile }
        )}
        shadow={false}
        trigger={shareBarTrigger}
      >
      {isMobile ? MobileProviders : DesktopProviders}
      </Balloon>
    </div>
  );
}
