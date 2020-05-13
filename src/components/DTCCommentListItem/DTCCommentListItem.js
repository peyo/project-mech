import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DTCCommentListItem.css";

export default class DTCCommentListItem extends Component {
  render() {
    const { dtc } = this.props;
    return (
      <Link to={`/dtc/${dtc.id}`} className="DTCCommentListItem">
        <header className="DTCCommentListItem__header">
          <h2 className="DTCCommentListItem__heading">{dtc.dtc}</h2>
        </header>
        <body className="DTCCommentListItem__body">{dtc.description}</body>
        <footer className="DTCCommentListItem__footer">
          <DTCCommentMake dtc={dtc} />
          <DTCCommentCount dtc={dtc} />
        </footer>
      </Link>
    );
  }
}

function DTCCommentMake({ dtc }) {
  return (
    <span className="DTCCommentListItem__make_vin">
      {dtc.vinmake_id.make_vin}
    </span>
  );
}

function DTCCommentCount({ dtc }) {
  return (
    <span className="DTCCommentListItem__comment-count">
      Comments: {dtc.number_of_comments}
    </span>
  );
}