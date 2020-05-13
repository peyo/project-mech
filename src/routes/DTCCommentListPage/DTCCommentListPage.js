import React, { Component } from "react";
import DTCCommentListContext from "../../contexts/DTCCommentListContext";
import MechApiService from "../../services/mech-api-service";
import { Section } from '../../components/Utility/Utility'
import DTCCommentListItem from "../../components/DTCCommentListItem/DTCCommentListItem";
import "./DTCCommentListPage.css";

export default class DTCCommentListPage extends Component {
  static contextType = DTCCommentListContext;

  componentDidMount() {
    this.context.clearError();
    MechApiService.getDTCCommentList()
      .then(this.context.setDTCCommentList)
      .catch(this.context.setError);
  }

  renderDTCCommentList() {
    const { dtcCommentList = [] } = this.context;
    return dtcCommentList.map((dtc) => (
      <DTCCommentListItem key={dtc.id} dtc={dtc} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <div>
        <header role="banner">
          <div className="HomePage__gear-keep-driving">
            <img
              id="HomePage__gear"
              src={require("../../gear.png")}
              alt="gear"
            />
          </div>
        </header>
        <Section list className="DTCCommentListPage">
          {error
            ? <p className="DTCCommentListPage__orange">There was an error, please try again!</p>
            : this.renderDTCCommentList()
          }
        </Section>
        <footer>
          <div className="HomePage__footer-contact-info">
            <div id="HomePage__beep-beep">Beep beep</div>
            <br />
            <div className="HomePage__contact-us">
              Contact Us:&nbsp;
              <a
                className="HomePage__email-connect"
                href="mailto:peteryyoon@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
