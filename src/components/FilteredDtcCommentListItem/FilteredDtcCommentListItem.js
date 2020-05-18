import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FilteredDtcCommentListItem.css";

export default class FilteredDtcCommentListItem extends Component {
  render() {
    const { dtc } = this.props;

    return (
      <div>
        <Link to={`/dtc/${dtc.id}`} className="FilteredDtcCommentListItem">
          <header className="FilteredDtcCommentListItem__header">
            <h2 className="FilteredDtcCommentListItem__heading">{dtc.dtc}</h2>
          </header>
        </Link>
        <div className="FilteredDtcCommentListItem__body">{dtc.description}</div>
        <footer className="FilteredDtcCommentListItem__footer">
          <DtcCommentMake dtc={dtc} />
          <DtcCommentCount dtc={dtc} />
        </footer>
      </div>
    );
  }
}

function DtcCommentMake({ dtc }) {
  return (
    <span className="FilteredDtcCommentListItem__make-vin">
      <FontAwesomeIcon className="FilteredDtcCommentListItem__icon" size="sm" icon="car" />
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
    <span className="FilteredDtcCommentListItem__comment-count">
      <FontAwesomeIcon className="FilteredDtcCommentListItem__icon" size="sm" icon="comment" />
      Comments: {dtc.number_of_comments}
    </span>
  );
}
