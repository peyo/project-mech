import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import "./FilteredDtcCommentListItem.css";

export default class FilteredDtcCommentListItem extends Component {
  static contextType = MechContext;

  render() {
    const { comment } = this.props;
    const { user_id } = this.context;

    return (
      <div className="FilteredDtcCommentListItem__comment-wrapper">
        <div className="FilteredDtcCommentListItem__comment">
          {comment.comment}
        </div>
        <footer className="FilteredDtcCommentListItem__footer">
          <DtcCommentNickname comment={comment} />
          <DtcCommentCreated comment={comment} />
          <DtcCommentDeleteButton comment={comment} userId={user_id} />
        </footer>
      </div>
    );
  }
}

function DtcCommentNickname({ comment }) {
  return (
    <span className="FilteredDtcCommentListItem__nickname">
      {comment.user_id.nickname === null ? (
        <div>`[deleted]`</div>
      ) : (
        <div>{comment.user_id.nickname}</div>
      )}
    </span>
  );
}

function DtcCommentCreated({ comment }) {
  return (
    <span className="FilteredDtcCommentListItem__created">
      <p> {comment.date_created}</p>
    </span>
  );
}


function DtcCommentDeleteButton({ comment, userId }) {
  return (
    <span className="FilteredDtcCommentListItem__button">
      {comment.user_id !== userId ? (
        null
      ): (
          <button
            onClick={(e) => this.handleDelete(e)}
            className="FilteredDtcCommentListItem__delete">
            Delete
          </button>
      )}
    </span>
  )
}