import React from "react";
import { connect } from "react-redux";

class Time extends React.Component {
  render() {
    return (
      <div id="timer">
        <span>{this.props.time}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.time,
});
export default connect(mapStateToProps)(Time);
