import React, { Component } from "react";

export default class Toolbar extends Component {
  render() {
    return (
      <div className="btn-list">
        {this.props.filters.map((el, idx) => (
          <button
            onClick={() => this.props.onSelectFilter(el)}
            className={
              this.props.selected === el ? "btn-item active" : "btn-item"
            }
            key={idx}
          >
            {el}
          </button>
        ))}
      </div>
    );
  }
}
