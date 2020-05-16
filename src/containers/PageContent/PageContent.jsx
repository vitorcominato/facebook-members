/**
 *
 * PageContent
 *
 * Componente de layout de página padrão
 *
 */
import React, { Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './PageContent.scss';


const PageContent = ({
  page,
  children,
  bg,
  className,
}) => {
  const pageContent = (
    <ReactCSSTransitionGroup
      transitionName="page-content"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className={`${page} PageContent ${bg}`}>
        <div className={`container ${className !== undefined ? className : ''}`}>
          {Children.toArray(children)}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );

  return pageContent;
};

export default PageContent;
