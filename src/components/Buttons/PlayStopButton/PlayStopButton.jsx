import React from 'react';
import { Icon, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

export default class PlayStopButton extends React.Component {
    handleClick = () => {
      const parentState = this.props;
      parentState.onPlayStopButtonPress(!parentState.isSequencerRunning);
    }

    render() {
      const parentState = this.props;
      return (
        <Button
          variant="contained"
          color={parentState.isSequencerRunning ? 'primary' : 'secondary'}
          onClick={this.handleClick}
        >
          <Icon>{parentState.isSequencerRunning ? 'stop' : 'play_arrow'}</Icon>
        </Button>
      );
    }
}

/*
    Props Validation:
        - isSequencerRunning    : bool -> true for Play, false for Stop
        - onPlayStopButtonPress : func -> triggers the Sequencer functionality on the parent class
*/
PlayStopButton.propTypes = {
  isSequencerRunning: PropTypes.bool.isRequired,
  onPlayStopButtonPress: PropTypes.func.isRequired,
};
