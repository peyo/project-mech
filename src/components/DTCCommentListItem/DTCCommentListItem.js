import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DtcCommentListItem.css";

export default class DtcCommentListItem extends Component {
  render() {
    const { dtc } = this.props;
    return (
      <Link to={`/dtc/${dtc.id}`} className="DtcCommentListItem">
        <header className="DtcCommentListItem__header">
          <h2 className="DtcCommentListItem__heading">{dtc.dtc}</h2>
        </header>
        <body className="DtcCommentListItem__body">{dtc.description}</body>
        <footer className="DtcCommentListItem__footer">
          <DtcCommentMake dtc={dtc} />
          <DtcCommentCount dtc={dtc} />
        </footer>
      </Link>
    );
  }
}

function DtcCommentMake({ dtc }) {
  return (
    <span className="DtcCommentListItem__make_vin">
      {dtc.vinmake_id.make_vin}
    </span>
  );
}

function DtcCommentCount({ dtc }) {
  return (
    <span className="DtcCommentListItem__comment-count">
      Comments: {dtc.number_of_comments}
    </span>
  );
}