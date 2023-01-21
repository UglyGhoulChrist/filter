import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import projects from "./../data/projects";

export default class Portfolio extends Component {
  filters = ["All", "Websites", "Flayers", "Business Cards"];
  state = {
    selected: "All",
  };
  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => {
            this.setState({ selected: filter });
          }}
        />
        <ProjectList
          projects={
            this.state.selected === "All"
              ? projects
              : projects.filter(
                  (project) => project.category === this.state.selected
                )
          }
        />
      </>
    );
  }
}
