import React from 'react';
import { Icon, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export default class PauseButton extends React.Component {
    handleClick = () => {
      const parentState = this.props;
      parentState.onPauseButtonPress(!parentState.isSequencerRunning);
    }

    render() {
      const parentState = this.props;
      return (
        <Button
          variant="contained"
          disabled={!parentState.isSequencerRunning}
          color="primary"
          onClick={this.handleClick}
        >
          <Icon>pause</Icon>
        </Button>
      );
    }
}

/*
    Props Validation:
        - isSequencerRunning    : bool -> true for Play, false for Stop
        - onPauseButtonPress    : func -> pauses the Sequencer functionality on the parent class
*/
PauseButton.propTypes = {
  isSequencerRunning: PropTypes.bool.isRequired,
  onPauseButtonPress: PropTypes.func.isRequired,
};
