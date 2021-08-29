import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, desc } = this.props;
    if (!title) {
      return null;
    }
    return (
      <div data-test="listItemComponent">
        <h2 data-test="componentTitle"> {title} </h2>
        <div data-test="componentDesc">{desc}</div>
      </div>
    );
  }
}

ListItem.propTypes = {};

export default ListItem;
