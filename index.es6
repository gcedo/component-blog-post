import React from 'react';
import classnames from 'classnames';
import urlJoin from 'url-join';

import Author from './parts/Author';
import FlyTitle from './parts/FlyTitle';
import Title from './parts/Title';
import ImageCaption from './parts/ImageCaption';
import BlogPostImage from './parts/BlogPostImage';
import BlogPostSection from './parts/BlogPostSection';
import Rubric from './parts/Rubric';
import ShareBar from './parts/BlogPostShareBar';
import Text from './parts/Text';

export default class BlogPost extends React.Component {
  static get propTypes() {
    return {
      className: React.PropTypes.string,
      image: React.PropTypes.shape({
        src: React.PropTypes.string,
        caption: React.PropTypes.string,
      }),
      author: React.PropTypes.string,
      byline: React.PropTypes.string,
      shareBar: React.PropTypes.bool,
      section: React.PropTypes.string,
      sectionUrl: React.PropTypes.string,
      flyTitle: React.PropTypes.string,
      title: React.PropTypes.string.isRequired,
      rubric: React.PropTypes.string,
      dateTime: React.PropTypes.instanceOf(Date),
      dateString: React.PropTypes.string,
      timestampISO: React.PropTypes.string,
      dateFormat: React.PropTypes.func,
      text: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.node,
      ]).isRequired,
      afterText: React.PropTypes.node,
      itemType: React.PropTypes.string,
      itemProp: React.PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/BlogPosting',
      itemProp: 'blogPost',
      dateFormat: (date) => {
        // Sep 19th 2015, 9:49
        function addPostFix(day) {
          const daystr = day.toString();
          const lastChar = daystr.charAt(daystr.length - 1);
          let postFix = '';
          switch (lastChar) {
            case '1':
              postFix = 'st';
              break;
            case '2':
              postFix = 'nd';
              break;
            case '3':
              postFix = 'rd';
              break;
            default:
              postFix = 'th';
              break;
          }
          return `${day}${postFix}`;
        }
        const shortMonthList = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        let minutes = date.getMinutes() < 10 ? '0' : '';
        minutes += date.getMinutes();
        return [ `${shortMonthList[date.getMonth()]}`,
                 `${addPostFix(date.getDate())}`,
                 `${date.getFullYear()},`,
                 `${date.getHours()}:${minutes}` ].join(' ');
      },
    };
  }
  render() {
    const content = [];
    let caption = null;
    if (this.props.image && this.props.image.src && this.props.image.caption) {
      caption = <ImageCaption caption={this.props.image.caption} />;
    }
    const asideableContent = [];
    if (this.props.section) {
      let { sectionUrl } = this.props;
      if (sectionUrl && !/^(\w+:)?\/\//.test(sectionUrl)) {
        sectionUrl = urlJoin('/', sectionUrl);
      }
      const section = sectionUrl ? (
        <a href={sectionUrl} className="blog-post__section-link">
          {this.props.section}
        </a>
      ) : this.props.section;
      asideableContent.push(<BlogPostSection section={section} />);
    }
    if (this.props.dateTime) {
      asideableContent.push((
        <time
          className="blog-post__datetime"
          itemProp="dateCreated"
          dateTime={this.props.dateTime}
          key={`blog-post__datetime`}
        >{this.props.dateFormat(this.props.dateTime)}</time>));
    }
    if (this.props.dateString && this.props.timestampISO) {
      asideableContent.push((
        <time
          className="blog-post__datetime"
          itemProp="dateCreated"
          dateTime={this.props.timestampISO}
          key={`blog-post__datetime`}
        >{this.props.dateString}</time>));
    }
    if (this.props.byline) {
      asideableContent.push((
        <p className="blog-post__byline-container" key={`blog-post__byline-container`}>
          {"by "}
          <span
            className="blog-post__byline"
            itemProp="author"
          >{this.props.byline}</span>
        </p>));
    }
    if (this.props.shareBar) {
      asideableContent.push(<ShareBar />);
    }
    if (asideableContent.length) {
      content.push((
        <div className="blog-post__asideable-content blog-post__asideable-content--meta" key="asideable-content">
          {asideableContent}
        </div>
      ));
    }

    return (
      <article
        itemScope
        className={classnames('blog-post', this.props.className)}
        itemProp={this.props.itemProp}
        itemType={this.props.itemType}
        role="article"
      >
        {this.props.flyTitle && <FlyTitle title={this.props.flyTitle} />}
        {this.props.title && <Title title={this.props.title} />}
        {this.props.rubric && <Rubric rubric={this.props.rubric} />}
        {this.props.image && this.props.image.src && <BlogPostImage caption={caption} imageProps={this.props.image} />}
        {content}
        {this.props.author && <Author author={this.props.author} />}
        <Text text={this.props.text} />
        {this.props.afterText}
      </article>
    );
  }
}
