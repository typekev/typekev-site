import React from 'react';
import 'whatwg-fetch';

export default class Rebloggr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postList: [] };
  }
  componentWillMount() {
    const { blogUrl } = this.props;
    const { postList } = this.state;
    if (postList.length === 0) {
      this.generatePostList(blogUrl);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { onComplete = () => {} } = this.props;
    const { postList } = this.state;
    if (prevState.postList !== postList) {
      onComplete(postList);
    }
  }

  generatePostList(blogUrl = 'https://blog.typekev.com', props) {
    const exposedWordPressPostList = blogUrl + '/wp-json/wp/v2/posts';
    fetch(exposedWordPressPostList)
      .then(response => response.json())
      .then(postList => {
        this.setState({ postList });
      });
  }

  render() {
    const {
      titleIcon,
      titleClassName,
      linkClassName,
      dateClassName,
      excerptClassName,
      includeDate,
      includeExcerpt,
      cta,
      linkTarget = '_blank',
      loadingComponent,
      ...rest,
    } = this.props;
    const { postList } = this.state;
    return (
      <div id="Rebloggr" {...rest}>
        {postList.length < 1 && loadingComponent}
        {postList.map(post => {
          const { id, title, date, excerpt, link } = post;
          return (
            <div key={id}>
              <a className={linkClassName} href={link} target={linkTarget}>
                <span className={titleClassName}>
                  {titleIcon}
                  {title.rendered}
                </span>
                {includeDate && <span className={dateClassName}>{date}</span>}
                {includeExcerpt && (
                  <span className={excerptClassName}>{excerpt.rendered}</span>
                )}
              </a>
              {cta}
            </div>
          );
        })}
      </div>
    );
  }
}
