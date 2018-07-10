import React from 'react';
import 'whatwg-fetch';

class Rebloggr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postsList: [] };
  }
  componentWillMount() {
    if (this.state.postsList.length === 0) {
      this.generatePostsList();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { onComplete = () => {} } = this.props;
    const { postsList } = this.state;
    if (prevState.postsList !== postsList) {
      onComplete(postsList);
    }
  }

  generatePostsList(blogUrl = 'https://blog.typekev.com', props) {
    const exposedWordPressPostsList = blogUrl + '/wp-json/wp/v2/posts';
    fetch(exposedWordPressPostsList)
      .then(response => response.json())
      .then(postsList => {
        this.setState({ postsList });
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
      className,
    } = this.props;
    const { postsList } = this.state;
    return (
      <div id="Rebloggr" className={className}>
        {postsList.length < 1 && loadingComponent}
        {postsList.map(post => {
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
export default Rebloggr;
