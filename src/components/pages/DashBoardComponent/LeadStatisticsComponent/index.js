import React from "react";
import "./LeadStatisticsComponent.css";
import MainCard from "../../../shared/MainCard/index";
import { Form } from "react-bootstrap";

const LeadStatisticsComponent = () => {
  return (
    <div className="lead-statistics-container">
      <MainCard title="Lead Statistics">
        <div className="lead-statistics-main-container">
          <div className="row g-2">
            <div className="col-6 col-md-6 mb-3">
              <div className="left-leads">
                <div className="title">Fresh Lead</div>
                <div className="data ms-2 mt-4">362</div>
              </div>
            </div>
            <div className="col-6 col-md-6 mb-3">
              <div className="left-leads">
                <div className="title">Open Leads</div>
                <div className="data ms-2 mt-4">205</div>
              </div>
            </div>
            <div className="col-6 col-md-6 mb-2">
              <div className="left-leads">
                <div className="title">Converted</div>
                <div className="data ms-2 mt-4">112</div>
              </div>
            </div>
            <div className="col-6 col-md-6 mb-2">
              <div className="left-leads">
                <div className="title">Lost Leads</div>
                <div className="data ms-2 mt-4">211</div>
              </div>
            </div>
          </div>
        </div>
      </MainCard>
    </div>
  );
};

export default LeadStatisticsComponent;
