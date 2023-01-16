import React, { Component } from "react";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        {this.props.projects.map((el, idx) => (
          <img key={idx} className={"project-item"} src={el.img} alt="img" />
        ))}
      </div>
    );
  }
}
