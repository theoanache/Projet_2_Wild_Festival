import React from "react";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { PropTypes } from "prop-types";
import Faqdata from "./utils/Faqdata";

const FaqPage = (props) => {
  const { showObjetsInterditsAutorises, showQuestionsFrequentes } = props;
  if (showObjetsInterditsAutorises) {
    return (
      <div
        className="faq-page interdits-autorises"
        style={{
          visibility: showObjetsInterditsAutorises ? "visible" : "hidden",
        }}
      >
        <h3>Qu’est ce qu’on a le droit d’emmener dans la zone concerts ?</h3>
        <div className="faq-liste-objet-autorise">
          <div>
            <p>
              <FcCancel /> Sur le site concerts sont interdits :
            </p>
            <ul>
              {Faqdata.nonAutorises.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              <FcCheckmark /> Sur le site concerts sont autorisés :
            </p>
            <ul>
              {Faqdata.autorises.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3>Qu’est ce qu’on a le droit d’emmener au camping ?</h3>
        <div className="faq-liste-objet-autorise">
          <div>
            <p>
              <FcCancel /> Au camping sont interdits :
            </p>
            <ul>
              {Faqdata.interditsCamping.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              <FcCheckmark /> Au camping sont autorisés :
            </p>
            <ul>
              {Faqdata.autorisesCamping.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (showQuestionsFrequentes) {
    return (
      <div
        className="faq-page question-frequente"
        style={{ visibility: showQuestionsFrequentes ? "visible" : "hidden" }}
      >
        {Faqdata.faqList.map((faq) => {
          return (
            <div className="faq-question-item">
              <h3>{faq.question}</h3>
              <p>{faq.reponse}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>Page incorrecte</div>;
};

export default FaqPage;

FaqPage.propTypes = {
  showObjetsInterditsAutorises: PropTypes.bool.isRequired,
  showQuestionsFrequentes: PropTypes.bool.isRequired,
};
