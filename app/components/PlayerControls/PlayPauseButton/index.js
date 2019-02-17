import React from 'react';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class PlayPauseButton extends React.Component {
  getIcon() {
    if (this.props.loading) {
      return <FontAwesome name='spinner' pulse />;
    } else if (this.props.playing) {
      return <FontAwesome name='pause' />;
    } else {
      return <FontAwesome name='play' />;
    }
  }

  render() {
    const {disable} = this.props;
    return (
      <div
        className={classnames(
          styles.play_pause_button_container,
          {'loading': this.props.loading},
          (disable ? styles.noCursor : ''),
        )}
        aria-label='Play/Pause button'
      >
        <a href='#' onClick={this.props.onClick} className={disable ? 'disable' : ''}>{
          this.getIcon()
        }</a>
      </div>
    );
  }
}

export default PlayPauseButton;
