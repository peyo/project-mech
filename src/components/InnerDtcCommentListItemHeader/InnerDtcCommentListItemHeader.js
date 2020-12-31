import React, { Component } from "react";
import "./InnerDtcCommentListItemHeader.css";

export default class InnerDtcCommentListItemHeader extends Component {
  render() {
    const { headerDtc } = this.props;
    return (
      <div className="InnerDtcCommentListItemHeader__wrapper">
        <div className="InnerDtcCommentListItemHeader__dtc">
          {Boolean(headerDtc) && headerDtc.dtc}
        </div>
        <div className="InnerDtcCommentListItemHeader__description">
          {Boolean(headerDtc) && headerDtc.description}
        </div>
      </div>
    );
  }
}