import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./InnerDtcCommentListItem.css";

export default class InnerDtcCommentListItem extends Component {
  static contextType = MechContext;

  handleDeleteComment(commentId) {
    const { user_id } = this.context;

    MechApiService.deleteComment(commentId, user_id)
  };

  render() {
    const { comment } = this.props;
    const { user_id } = this.context;

    return (
      <div className="InnerDtcCommentListItem__comment-wrapper">
        <div className="InnerDtcCommentListItem__comment">
          {comment.comment}
        </div>
        <footer className="InnerDtcCommentListItem__footer">
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
    <span className="InnerDtcCommentListItem__nickname">
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
    <span className="InnerDtcCommentListItem__created">
      <p> {comment.date_created}</p>
    </span>
  );
}

function DtcCommentDeleteButton({ comment, userId }) {
  return (
    <span className="InnerDtcCommentListItem__button">
      {comment.user_id.id != userId ? (
        null
      ) : (
          <button
            onClick={() => this.handleDeleteComment(comment.id)}
            className="InnerDtcCommentListItem__delete">
            Delete
          </button>
      )}
    </span>
  )
}