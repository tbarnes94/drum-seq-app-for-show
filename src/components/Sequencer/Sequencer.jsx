import React from 'react';
import DrumButton from '../Buttons/DrumButton/DrumButton';
import PlayStopButton from '../Buttons/PlayStopButton/PlayStopButton';
import PauseButton from '../Buttons/PauseButton/PauseButton';
import { convertFileNameToRowName, soundNames, sounds } from '../../utils/util';

const numRows = 8;
const numCols = 16;
const BPM = 120;

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSequencerRunning: false,
      column: -1,
      maxColumn: numCols,
      maxRow: numRows,
      bpm: BPM,
      buttonGrid: Array(numRows).fill().map((_) => Array(numCols).fill(false)),
      toggledButtons: Array(numCols).fill().map((_) => []),
    };
  }

updateGrid = (row, col) => {
  const currentState = this.state;
  const tempGrid = currentState.buttonGrid.slice();
  tempGrid[row][col] = !currentState.buttonGrid[row][col];
  const tempToggledButtons = currentState.toggledButtons.slice();
  if (tempToggledButtons[col].includes(row)) {
    tempToggledButtons[col].splice(tempToggledButtons[col].indexOf(row), 1);
  } else {
    tempToggledButtons[col].push(row);
  }
  this.setState({
    buttonGrid: tempGrid,
    toggledButtons: tempToggledButtons,
  });
}

createTable = () => {
  const table = [];
  const currentState = this.state;

  // Outer loop to create rows
  for (let i = 0; i < currentState.maxRow + 1; i += 1) {
    const columns = [];
    // Inner loop to create columns
    for (let j = 0; j < currentState.maxColumn + 1; j += 1) {
      if (j === 0 && i === 0) {
        // Empty cell in top left
        columns.push(<td id={`db-${j}`} key={`db-${j}`} />);
      } else if (j !== 0 && i === 0) {
        // Header row for the beat number
        columns.push(<td id={`db-${j}`} key={`db-${j}`}><span>{`${j}`}</span></td>);
      } else if (j === 0 && i !== 0) {
        // Header column for the beat name
        columns.push(<td id={`db-${j}`} key={`db-${j}`}><span>{convertFileNameToRowName(soundNames[i - 1] ? soundNames[i - 1] : '')}</span></td>);
      } else {
        // The Drum Buttons
        columns.push(
          <td id={`db-${j}`} key={`db-${j}`}>
            <DrumButton
              row={i - 1}
              col={j - 1}
              updateGrid={this.updateGrid}
              activeColumn={currentState.column}
            />
          </td>,
        );
      }
    }
    // Create the row and add the columns
    table.push(<tr id={`row-${i}`} key={`row-${i}`}>{columns}</tr>);
  }
  return table;
}

playSound = () => {
  const currentState = this.state;
  if (currentState.toggledButtons[currentState.column]) {
    currentState.toggledButtons[currentState.column].forEach((idx) => {
      sounds[idx].play();
    });
  }
}

onPlayStopButtonPress = (isClicked) => {
  this.setState({ isSequencerRunning: isClicked });
  const currentState = this.state;
  if (!currentState.isSequencerRunning) {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        column: (state.column + 1) % state.maxColumn,
      }),
      () => {
        this.playSound();
      });
    }, (60 * 1000) / currentState.bpm);
  } else {
    this.setState({ column: -1 });
    clearInterval(this.interval);
  }
}

onPauseButtonPress = (isClicked) => {
  this.setState({ isSequencerRunning: isClicked });
  clearInterval(this.interval);
}

render() {
  const currentState = this.state;
  return (
    <div>
      <table>
        <tbody key="tbody">
          {this.createTable()}
        </tbody>
      </table>
      <PlayStopButton
        isSequencerRunning={currentState.isSequencerRunning}
        onPlayStopButtonPress={this.onPlayStopButtonPress}
      />
      <PauseButton
        isSequencerRunning={currentState.isSequencerRunning}
        onPauseButtonPress={this.onPauseButtonPress}
      />
    </div>
  );
}
}
