import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DtcCommentListItem.css";

export default class DtcCommentListItem extends Component {
  render() {
    const { dtc } = this.props;

    return (
      <div>
        <Link to={`/dtc/${dtc.id}`} className="DtcCommentListItem">
          <header className="DtcCommentListItem__header">
            <h2 className="DtcCommentListItem__heading">{dtc.dtc}</h2>
          </header>
        </Link>
        <div className="DtcCommentListItem__body">{dtc.description}</div>
        <footer className="DtcCommentListItem__footer">
          <DtcCommentMake dtc={dtc} />
          <DtcCommentCount dtc={dtc} />
        </footer>
      </div>
    );
  }
}

function DtcCommentMake({ dtc }) {
  return (
    <span className="DtcCommentListItem__make_vin">
      <FontAwesomeIcon className="DtcCommentListItem__icon" size="sm" icon="car" />
      {dtc.vinmake_id.make_vin ? (
        <p> {dtc.vinmake_id.make_vin}</p>
      ) : (
        <p>All Cars</p>
      )}
    </span>
  );
}

function DtcCommentCount({ dtc }) {
  return (
    <span className="DtcCommentListItem__comment-count">
      <FontAwesomeIcon className="DtcCommentListItem__icon" size="sm" icon="comment" />
      Comments: {dtc.number_of_comments}
    </span>
  );
}
