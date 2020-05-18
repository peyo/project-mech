import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import { Section } from "../../components/Utility/Utility";
import FilteredDtcCommentListItem from "../../components/FilteredDtcCommentListItem/FilteredDtcCommentListItem";
import "./DtcSearchPage.css";

export default class DtcSearchPage extends Component {
  static contextType = MechContext

  renderFilteredDtcCommentList() {
    const { filteredDtcCommentList = [] } = this.context;
    return filteredDtcCommentList.map((comment) => (
      <FilteredDtcCommentListItem
        key={comment.id}
        comment={comment}
      />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <main className="DtcSearchPage__main">
        <div className="DtcSearchPage__screen-wrapper">
          <Section list className="DtcSearchPage">
            {error
              ? <p className="DtcSearchPage__orange">Error. Please try again.</p>
              : this.renderFilteredDtcCommentList()
            }
          </Section>
        </div>
      </main>
    )
  }
}