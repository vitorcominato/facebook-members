/**
 *
 * PageContent
 *
 * Componente de layout de página padrão
 *
 */
import React, { Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import MlErrorBoundary from '../../MlErrorBoundary';
import './PageContent.scss';
import DgErrorBoundary from '../../DgErrorBoundary';


const PageContent = ({
  page,
  children,
  bg,
  className,
  history,
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
          <DgErrorBoundary history={history}>
            {Children.toArray(children)}
          </DgErrorBoundary>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );

  return pageContent;
};

export default PageContent;
