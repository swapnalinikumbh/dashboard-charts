// src/components/pages/DashboardComponent/QualitativeResearch/index.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./QualitativeResearch.css";
import MainCard from "../../../shared/MainCard";
import PieChart from "../../../shared/PieChart"; // Import the PieChart component

const QualitativeResearch = () => {
  const researchFindings = [
    {
      type: "caseStudy",
      title: "Case Study: Improving Productivity",
      content:
        "Our client saw a 50% increase in productivity after using our product for three months.",
    },
  ];

  return (
    <div className="qualitative-container">
      <MainCard title="Qualitative Research">
        <Row>
          <Col md={6}>
            <PieChart /> {/* Include the PieChart component */}
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                {researchFindings.map((finding, index) => (
                  <div key={index}>
                    {finding.type === "caseStudy" && (
                      <>
                        <Card.Title>{finding.title}</Card.Title>
                        <Card.Text>{finding.content}</Card.Text>
                      </>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </MainCard>
    </div>
  );
};

export default QualitativeResearch;
