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
      <div>
        <Section list className="DtcCommentListPage">
          {error
            ? <p className="DtcCommentListPage__orange">There was an error, please try again.</p>
            : this.renderDtcCommentList()}
        </Section>
        <footer>
          <div className="DtcCommentListPage__footer-contact-info">
            <div id="DtcCommentListPage__beep-beep">
              Beep beep
            </div>
            <br />
            <div className="DtcCommentListPage__contact-us">
              Contact Us:&nbsp;
              <a
                className="DtcCommentListPage__email-connect"
                href="mailto:peteryyoon@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}