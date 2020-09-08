import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./InnerDtcCommentListItem.css";

export default class InnerDtcCommentListItem extends Component {
  static contextType = MechContext;

  render() {
    const { comment } = this.props;
    const { user_id, deleteComment, editComment, setError } = this.context;

    return (
      <div className="InnerDtcCommentListItem__comment-wrapper">
        <div className="InnerDtcCommentListItem__comment">
          {comment.comment}
        </div>
        <div className="InnerDtcCommentListItem__footer">
          <DtcCommentNickname comment={comment} />
          <DtcCommentCreated comment={comment} />
        </div>
        <div className="InnerDtcCommentListItem__buttons">
          {/* Add up and down vote buttons here */}
          <DtcCommentDeleteButton
            comment={comment}
            userId={user_id}
            deleteComment={deleteComment}
            setError={setError}
          />
          <DtcCommentEditButton
            comment={comment}
            userId={user_id}
            editComment={editComment}
            setError={setError}
          />
        </div>
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

function DtcCommentDeleteButton({ comment, userId, deleteComment, setError }) {
  return (
    <span className="InnerDtcCommentListItem__span">
      {comment.user_id.id !== parseInt(userId) ? null : (
        <button
          className="InnerDtcCommentListItem__button"
          onClick={() => handleDeleteComment(comment.id, userId, deleteComment, setError)}
        >
          Delete
        </button>
      )}
    </span>
  );
}

function handleDeleteComment(commentId, userId, deleteComment, setError) {
  MechApiService.deleteComment(commentId, userId)
    .then(deleteComment(commentId))
    .catch(setError);
}

function DtcCommentEditButton({ comment, userId, editComment, setError }) {
  return (
    <span className="InnerDtcCommentListItem__span">
      {comment.user_id.id !== parseInt(userId) ? null : (
        <button
          className="InnerDtcCommentListItem__button"
          onClick={() =>
            handleEditComment(comment.id, userId, editComment, setError)
          }
        >
          Edit
        </button>
      )}
    </span>
  );
}

function handleEditComment(commentId, userId, editComment, setError) {
  MechApiService.editComment(commentId, userId)
    .then(editComment(commentId))
    .catch(setError);
}