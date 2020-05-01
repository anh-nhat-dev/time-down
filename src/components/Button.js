import React from "react";
import { connect } from "react-redux";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };
  }

  clickStart = (e) => {
    this.props.startTime();
    this.setState({
      interval: setInterval(() => {
        this.props.updateTime();
      }, 1000),
    });
  };

  clickStop = () => {
    clearInterval(this.state.interval);

    this.setState({
      interval: null,
    });
    this.props.stopTime();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.time === 1 && this.state.interval) {
      this.clickStop();
    }
  }

  render() {
    const { status, time } = this.props;
    return (
      <div id="but">
        {time > 0 &&
          (!status ? (
            <button
              id="start"
              style={{
                backgroundColor: "green",
              }}
              onClick={this.clickStart}
              type="button"
              className="btn btn-info"
            >
              Start
            </button>
          ) : (
            <button
              id="stop"
              onClick={this.clickStop}
              type="button"
              className="btn btn-danger"
            >
              Stop
            </button>
          ))}

        {time <= 0 && (
          <button
            onClick={() => this.props.resetTime()}
            id="stop"
            style={{
              backgroundColor: "blue",
            }}
            // onClick={this.clickStop}
            type="button"
            className="btn btn-danger"
          >
            Reset
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.time,
  status: state.status,
});

const mapDisPatchToProps = (dispatch) => ({
  startTime: () =>
    dispatch({
      type: "START-TIME",
    }),
  updateTime: () =>
    dispatch({
      type: "UPDATE-TIME",
    }),
  stopTime: () =>
    dispatch({
      type: "STOP-TIME",
    }),
  resetTime: () =>
    dispatch({
      type: "RESET-TIME",
    }),
});

export default connect(mapStateToProps, mapDisPatchToProps)(Button);
