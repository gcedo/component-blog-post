'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _urlJoin = require('url-join');

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _partsAuthor = require('./parts/author');

var _partsAuthor2 = _interopRequireDefault(_partsAuthor);

var _partsBlogPostImage = require('./parts/blog-post-image');

var _partsBlogPostImage2 = _interopRequireDefault(_partsBlogPostImage);

var _partsBlogPostSection = require('./parts/blog-post-section');

var _partsBlogPostSection2 = _interopRequireDefault(_partsBlogPostSection);

var _partsFlyTitle = require('./parts/fly-title');

var _partsFlyTitle2 = _interopRequireDefault(_partsFlyTitle);

var _partsImageCaption = require('./parts/image-caption');

var _partsImageCaption2 = _interopRequireDefault(_partsImageCaption);

var _partsRubric = require('./parts/rubric');

var _partsRubric2 = _interopRequireDefault(_partsRubric);

var _partsBlogPostSharebar = require('./parts/blog-post-sharebar');

var _partsBlogPostSharebar2 = _interopRequireDefault(_partsBlogPostSharebar);

var _partsText = require('./parts/text');

var _partsText2 = _interopRequireDefault(_partsText);

var _partsTitle = require('./parts/title');

var _partsTitle2 = _interopRequireDefault(_partsTitle);

var BlogPost = (function (_React$Component) {
  _inherits(BlogPost, _React$Component);

  function BlogPost() {
    _classCallCheck(this, BlogPost);

    _React$Component.apply(this, arguments);
  }

  BlogPost.prototype.render = function render() {
    var content = [];
    var caption = null;
    var asideableContent = [];
    var sectionDateAuthor = [];
    if (this.props.image && this.props.image.src && this.props.image.caption) {
      caption = _react2['default'].createElement(_partsImageCaption2['default'], { caption: this.props.image.caption, key: 'blog-post__image-caption' });
    }
    if (this.props.rubric) {
      content.push(_react2['default'].createElement(_partsRubric2['default'], { rubric: this.props.rubric, key: 'blog-post__rubric' }));
    }
    if (this.props.image && this.props.image.src) {
      content.push(_react2['default'].createElement(_partsBlogPostImage2['default'], { caption: caption, imageProps: this.props.image, key: 'blogimg' }));
    }
    if (this.props.section) {
      var sectionUrl = this.props.sectionUrl;

      if (sectionUrl && !/^(\w+:)?\/\//.test(sectionUrl)) {
        sectionUrl = _urlJoin2['default']('/', sectionUrl);
      }
      var section = sectionUrl ? _react2['default'].createElement(
        'a',
        { href: sectionUrl, className: 'blog-post__section-link' },
        this.props.section
      ) : this.props.section;
      sectionDateAuthor.push(_react2['default'].createElement(_partsBlogPostSection2['default'], { key: 'blog-post__section', section: section }));
    }
    if (this.props.dateTime) {
      sectionDateAuthor.push(_react2['default'].createElement(
        'time',
        {
          className: 'blog-post__datetime',
          itemProp: 'dateCreated',
          dateTime: this.props.dateTime,
          key: 'blog-post__datetime'
        },
        this.props.dateFormat(this.props.dateTime)
      ));
    }
    if (this.props.dateString && this.props.timestampISO) {
      sectionDateAuthor.push(_react2['default'].createElement(
        'time',
        {
          className: 'blog-post__datetime',
          itemProp: 'dateCreated',
          dateTime: this.props.timestampISO,
          key: 'blog-post__datetimeISO'
        },
        this.props.dateString
      ));
    }
    if (this.props.byline) {
      sectionDateAuthor.push(_react2['default'].createElement(
        'p',
        { className: 'blog-post__byline-container', key: 'blog-post__byline-container' },
        "by ",
        _react2['default'].createElement(
          'span',
          {
            className: 'blog-post__byline',
            itemProp: 'author'
          },
          this.props.byline
        )
      ));
    }
    if (sectionDateAuthor.length) {
      asideableContent.push(_react2['default'].createElement(
        'div',
        { className: 'blog-post__section-date-author', key: 'blog-post__section-date-author' },
        sectionDateAuthor
      ));
    }
    if (this.props.shareBar) {
      asideableContent.push(_react2['default'].createElement(_partsBlogPostSharebar2['default'], { key: 'sharebar' }));
    }
    if (asideableContent.length) {
      content.push(_react2['default'].createElement(
        'div',
        {
          className: 'blog-post__asideable-content blog-post__asideable-content--meta',
          key: 'asideable-content'
        },
        asideableContent
      ));
    }
    if (this.props.author) {
      content.push(_react2['default'].createElement(_partsAuthor2['default'], { key: 'blog-post__author', author: this.props.author }));
    }

    return _react2['default'].createElement(
      'article',
      {
        itemScope: true,
        className: _classnames2['default']('blog-post', this.props.className),
        itemProp: this.props.itemProp,
        itemType: this.props.itemType,
        role: 'article'
      },
      _react2['default'].createElement(_partsFlyTitle2['default'], { title: this.props.flyTitle, key: 'blog-post__flytitle' }),
      _react2['default'].createElement(_partsTitle2['default'], { title: this.props.title, key: 'blog-post__title' }),
      content,
      _react2['default'].createElement(_partsText2['default'], { text: this.props.text, key: 'blog-post__text' }),
      this.props.afterText
    );
  };

  _createClass(BlogPost, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react2['default'].PropTypes.string,
        image: _react2['default'].PropTypes.shape({
          src: _react2['default'].PropTypes.string,
          caption: _react2['default'].PropTypes.string
        }),
        author: _react2['default'].PropTypes.string,
        byline: _react2['default'].PropTypes.string,
        shareBar: _react2['default'].PropTypes.bool,
        section: _react2['default'].PropTypes.string,
        sectionUrl: _react2['default'].PropTypes.string,
        flyTitle: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.string.isRequired,
        rubric: _react2['default'].PropTypes.string,
        dateTime: _react2['default'].PropTypes.instanceOf(Date),
        dateString: _react2['default'].PropTypes.string,
        timestampISO: _react2['default'].PropTypes.string,
        dateFormat: _react2['default'].PropTypes.func,
        text: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]).isRequired,
        afterText: _react2['default'].PropTypes.node,
        itemType: _react2['default'].PropTypes.string,
        itemProp: _react2['default'].PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        itemType: 'http://schema.org/BlogPosting',
        itemProp: 'blogPost',
        dateFormat: function dateFormat(date) {
          // Sep 19th 2015, 9:49
          function addPostFix(day) {
            var daystr = day.toString();
            var lastChar = daystr.charAt(daystr.length - 1);
            var postFix = '';
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
            return '' + day + postFix;
          }
          var shortMonthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          var minutes = date.getMinutes() < 10 ? '0' : '';
          minutes += date.getMinutes();
          return ['' + shortMonthList[date.getMonth()], '' + addPostFix(date.getDate()), date.getFullYear() + ',', date.getHours() + ':' + minutes].join(' ');
        }
      };
    }
  }]);

  return BlogPost;
})(_react2['default'].Component);

exports['default'] = BlogPost;
module.exports = exports['default'];