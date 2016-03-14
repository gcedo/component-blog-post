import 'babel-polyfill';
import BlogPost from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.should();
chai.use(chaiEnzyme());

describe('BlogPost', () => {
  it('is compatible with React.Component', () => {
    BlogPost.should.be.a('function')
      .and.respondTo('render');
  });
  it('renders a React element', () => {
    React.isValidElement(<BlogPost />).should.equal(true);
  });
  it('renders a section', () => {
    const post = mount(
      <BlogPost
        section="section"
        title="Required"
        text="Required"
      />
    );
    post.should.have.exactly(1).descendants('.blog-post__section');
    post.find('.blog-post__section').should.have.text('section');
    post.find('.blog-post__section').should.have.tagName('h3');
  });
  it('renders a flytitle', () => {
    const post = mount(
      <BlogPost
        flyTitle="flytitle"
        title="Required"
        text="Required"
      />
    );
    post.should.have.className('blog-post')
      .and.have.exactly(1).descendants('.blog-post__flytitle');
    post.find('.blog-post__flytitle').should.have.text('flytitle');
  });
  it('renders a title', () => {
    const post = mount(
      <BlogPost title="title" text="Required" />
    );
    post.should.have.exactly(1).descendants('.blog-post__title');
    post.find('.blog-post__title').should.have.tagName('h1');
    post.find('.blog-post__title').should.have.text('title');
  });
  it('formats a date', () => {
    const today = new Date(2015, 12 - 1, 15, 20, 18);
    const post = mount(
      <BlogPost
        dateTime={today}
        title="Required"
        text="Required"
      />
    );
    post.should.have.exactly(1).descendants('.blog-post__datetime');
    post.find('.blog-post__datetime').should.have.tagName('time');
    post.find('.blog-post__datetime').should.have.text('Dec 15th 2015, 20:18');
  });
  it('receives and renders a date string and an ISO timestamp', () => {
    const post = mount(
      <BlogPost
        title="Required"
        text="Required"
        dateString="some date, 2015"
        timestampISO="2014-12-31T01:40:30Z"
      />
    );
    post.should.have.exactly(1).descendants('.blog-post__datetime');
    post.find('.blog-post__datetime').should.have.tagName('time');
    post.find('.blog-post__datetime').should.have.text('some date, 2015');
    post.find('.blog-post__datetime').should.have.attr('datetime', '2014-12-31T01:40:30Z');
  });

  it('renders a dateTime', () => {
    const today = new Date();
    function dateFormat(date) {
      return date.toString();
    }
    const post = mount(
      <BlogPost
        dateTime={today}
        title="Required"
        dateFormat={dateFormat}
        text="Required"
      />
    );
    post.should.have.exactly(1).descendants('.blog-post__datetime');
    post.find('.blog-post__datetime').should.have.tagName('time');
    post.find('.blog-post__datetime').should.have.text(today.toString());
  });
  it('renders a text', () => {
    const post = mount(
      <BlogPost
        text="BlogPost text"
        title="Required"
      />
    );
    post.should.have.exactly(1).descendants('.blog-post__text');
    post.find('.blog-post__text').should.have.text('BlogPost text');
  });
  it('can render the text as react "children" as opposed to dangerouslySetInnerHTML', () => {
    const post = mount(
      <BlogPost
        text={(<div className="foo" />)}
        title="Required"
      />
    );
    post.find('.blog-post__text').should.have.exactly(1).descendants('.foo');
  });
  it('renders an image', () => {
    const img = {
      src: '//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg',
      alt: 'Example',
    };
    const post = mount(
      <BlogPost image={img}
        title="Required"
        text="Required"
      />);
    post.should.have.exactly(1).descendants('.blog-post__image-block');
    post.find('.blog-post__image-block').should.have.attr('src')
      .equal('//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg');
    post.find('.blog-post__image-block').should.have.attr('alt', 'Example');
  });
  it('renders the section name', () => {
    const post = mount(
      <BlogPost
        section="test section name"
        title="Required"
        text="Required"
      />);
    post.find('.blog-post__section').should.have.text('test section name');
  });
  it('renders the section link in case of a link', () => {
    const post = mount(
      <BlogPost
        section="test section name"
        sectionUrl="foo/bar/baz"
        title="Required"
        text="Required"
      />);
    post.find('.blog-post__section-link').should.have.attr('href', '/foo/bar/baz');
    post.find('.blog-post__section-link').should.have.text('test section name');
  });
  it('also works with links pointing to other domains', () => {
    const post = mount(
      <BlogPost
        section="test section name"
        sectionUrl="http://foo.io/bar/baz"
        title="Required"
        text="Required"
      />);
    post.find('.blog-post__section-link').should.have.attr('href', 'http://foo.io/bar/baz');
  });
});
