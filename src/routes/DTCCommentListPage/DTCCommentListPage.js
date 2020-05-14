import React, { Component } from "react";
import DtcCommentListContext from "../../contexts/DtcCommentListContext";
import MechApiService from "../../services/mech-api-service";
import { Section } from "../../components/Utility/Utility";
import DtcCommentListItem from "../../components/DtcCommentListItem/DtcCommentListItem";
import "./DtcCommentListPage.css";

export default class DtcCommentListPage extends Component {
  static contextType = DtcCommentListContext

  componentDidMount() {
    this.context.clearError();
    MechApiService.getDtcCommentList()
      .then(this.context.setDtcCommentList)
      .catch(this.context.setError)
  }

  renderDtcCommentList() {
    const { dtcCommentList = [] } = this.context;
    return dtcCommentList.map((dtc) => (
      <DtcCommentListItem
        key={dtc.id}
        dtc={dtc}
      />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <main className="DtcCommentListPage__main">
        <div className="DtcCommentListPage__screen-wrapper">
          <Section list className="DtcCommentListPage">
            {error
              ? <p className="DtcCommentListPage__orange">There was an error, please try again.</p>
              : this.renderDtcCommentList()}
            </Section>
        </div>
      </main>
    )
  }
}