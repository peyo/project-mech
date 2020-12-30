import React, { Component } from "react";
import "./InnerDtcCommentListItemHeader.css";

export default class InnerDtcCommentListItemHeader extends Component {
  render() {
    const { specificDtc } = this.props;
    return (
      <div className="InnerDtcCommentListItemHeader__wrapper">
        <div className="InnerDtcCommentListItemHeader__dtc">
          {Boolean(specificDtc) && specificDtc.dtc}
        </div>
        <div className="InnerDtcCommentListItemHeader__description">
          {Boolean(specificDtc) && specificDtc.description}
        </div>
      </div>
    );
  }
}
