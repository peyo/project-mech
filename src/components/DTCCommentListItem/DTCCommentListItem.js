import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DtcCommentListItem.css";

export default class DtcCommentListItem extends Component {
  static contextType = MechContext

  render() {
    const { dtc } = this.props;

    return (
      <div>
        <Link
          to={`/dtc/${dtc.id}/comments`}
          className="DtcCommentListItem__link"
        >
          <header className="DtcCommentListItem__header">
            <h2 className="DtcCommentListItem__heading">{dtc.dtc}</h2>
          </header>
        </Link>
        <div className="DtcCommentListItem__body">{dtc.description}</div>
        <footer className="DtcCommentListItem__footer">
          <DtcCommentMake dtc={dtc} />
          <Link
            to={`/dtc/${dtc.id}/comments`}
            className="DtcCommentListItem__link"
          >
            <DtcCommentCount dtc={dtc} />
          </Link>
        </footer>
      </div>
    );
  }
}

function DtcCommentMake({ dtc }) {
  return (
    <span className="DtcCommentListItem__make-vin">
      <FontAwesomeIcon className="DtcCommentListItem__icon" size="sm" icon="car" />
      {dtc.vinmake_id.make_vin
        ? <p> {dtc.vinmake_id.make_vin}</p>
        : <p>All Cars</p>
      }
    </span>
  );
}

function DtcCommentCount({ dtc }) {
  return (
    <span className="DtcCommentListItem__comment-count">
      <FontAwesomeIcon className="DtcCommentListItem__icon" size="sm" icon="comment" />
      {dtc.number_of_comments > 1
        ? <p>{dtc.number_of_comments} comments </p>
        : <p>{dtc.number_of_comments} comment </p>
      }
    </span>
  );
}
