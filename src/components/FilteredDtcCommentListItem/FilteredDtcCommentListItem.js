import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./FilteredDtcCommentListItem.css";

export default class FilteredDtcCommentListItem extends Component {
  static contextType = MechContext;

  render() {
    const { comment } = this.props;
    const { user_id, deleteComment, setError } = this.context;

    return (
      <div className="FilteredDtcCommentListItem__comment-wrapper">
        <div className="FilteredDtcCommentListItem__comment">
          {comment.comment}
        </div>
        <footer className="FilteredDtcCommentListItem__footer">
          <DtcCommentNickname comment={comment} />
          <DtcCommentCreated comment={comment} />
          <DtcCommentDeleteButton
            comment={comment}
            userId={user_id}
            deleteComment={deleteComment}
            setError={setError}
          />
        </footer>
      </div>
    );
  }
}

function DtcCommentNickname({ comment }) {
  console.log(comment.user_id.nickname);
  return (
    <span className="FilteredDtcCommentListItem__nickname">
      {comment.user_id.nickname ? (
        <div>{comment.user_id.nickname}</div>
      ) : (
        <div>[deleted]</div>
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

function handleDeleteComment(e, commentId, deleteComment, setError) {
  e.preventDefault();
  MechApiService.deleteComment(commentId)
    .then(deleteComment(commentId))
    .catch(setError);
}

function DtcCommentDeleteButton({ comment, userId, deleteComment, setError }) {
  console.log(comment.id);
  return (
    <span className="FilteredDtcCommentListItem__button">
      {comment.user_id.id === parseInt(userId) ? (
        <button
          onClick={(e) => handleDeleteComment(e, comment.id, deleteComment, setError)}
          className="FilteredDtcCommentListItem__delete"
        >
          Delete
        </button>
      ) : null}
    </span>
  );
}
