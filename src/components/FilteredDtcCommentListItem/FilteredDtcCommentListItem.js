import React, { Component, useState } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./FilteredDtcCommentListItem.css";

export default class FilteredDtcCommentListItem extends Component {
  static contextType = MechContext;

  render() {
    const { comment } = this.props;
    const { user_id, deleteComment, editComment, setError } = this.context;

    return (
      <div className="FilteredDtcCommentListItem__comment-wrapper">
        <div className="FilteredDtcCommentListItem__comment">
          {comment.comment}
        </div>
        <div className="FilteredDtcCommentListItem__footer">
          <DtcCommentNickname comment={comment} />
          <DtcCommentCreated comment={comment} />
        </div>
        <div className="FilteredDtcCommentListItem__buttons">
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

function DtcCommentDeleteButton({ comment, userId, deleteComment, setError }) {
  return (
    <span className="FilteredDtcCommentListItem__span">
      {comment.user_id.id !== parseInt(userId) ? null : (
        <button
          className="FilteredDtcCommentListItem__button"
          onClick={() =>
            handleDeleteComment(comment.id, deleteComment, setError)
          }
        >
          Delete
        </button>
      )}
    </span>
  );
}

function handleDeleteComment(commentId, deleteComment, setError) {
  MechApiService.deleteComment(commentId)
    .then(deleteComment(commentId))
    .catch(setError);
}

function DtcCommentEditButton({ comment, userId, editComment, setError }) {
  const [ editing, setEditing ] = useState(false);
  const [ text, setText ] = useState(comment.comment);

  return (
    <span className="FilteredDtcCommentListItem__span">
      {comment.user_id.id !== parseInt(userId) ? null : (
        <div>
          {editing ? (
            <p>{text}</p>
          ) : (
            <textarea
              value={text}
              onChange={({ target }) => setText(target.value)}
            ></textarea>
          )}
          <button
            className="FilteredDtcCommentListItem__button"
            onClick={() => setEditing(!editing)}>
            {editing ? "Edit" : "Submit"}
          </button>
        </div>
      )}
    </span>
  );
}

/*function handleEditComment(commentId, editComment, setError) {
  MechApiService.editComment(commentId)
    .then(editComment(commentId))
    .catch(setError);
}
*/
