import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './DrumButton.css';

export default class DrumButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

    toggleButton = () => {
      const parentState = this.props;
      this.setState((state) => ({ isClicked: !state.isClicked }));
      parentState.updateGrid(parentState.row, parentState.col);
    }

    render() {
      const currentState = this.state;
      const parentState = this.props;
      const isColumnActive = parentState.activeColumn === parentState.col;
      const secondTernary = isColumnActive ? 'secondary' : 'secondary';
      const thirdTernary = isColumnActive ? 'primary' : 'default';
      return (
        <Button
          className="square"
          variant="contained"
          color={currentState.isClicked ? secondTernary : thirdTernary}
          onClick={this.toggleButton}
        >
          <span />
        </Button>
      );
    }
}

/*
    Props Validation:
        - row          : number -> the index of the row assignment of this DrumButton
        - col          : number -> the index of the column assignment of this DrumButton
        - activeColumn : number -> the index of the column that is playing a beat
        - updateGrid   : func   -> toggles the bool corresponding to this DrumButton
                                   in the parent's state grid
*/
DrumButton.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  activeColumn: PropTypes.number.isRequired,
  updateGrid: PropTypes.func.isRequired,
};
