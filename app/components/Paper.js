
import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export class Paper extends React.Component {

    static defaultProps = {
        animateAppear: true,
        animationTimeout: 500,
        className: ''
    }

    render() {

        var cnt;
        var props = {
            key: 'paper-child',
            className: ['paper', 'shadow-z-3', 'app-area', this.props.className].join(' ')
        };

        if (this.props.isVisible) {
            cnt = <div {...props}>{this.props.children}</div>;
        };

        return (
            <ReactCSSTransitionGroup
                transitionName="paper"
                transitionAppear={this.props.animateAppear}
                transitionAppearTimeout={this.props.animationTimeout}
                transitionEnterTimeout={this.props.animationTimeout}
                transitionLeaveTimeout={this.props.animationTimeout}
                children={cnt} />
        );
    }
}
