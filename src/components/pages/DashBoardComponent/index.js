import React from "react";
import "./DashboardCardComponant.css";
import PartyIcon from "../../../assets/icons/logos_partytown-icon.svg";
import MainCard from "../../shared/MainCard/index";
import DashboardCardComponant from "../../pages/DashBoardComponent/DashboardCardComponant";
import LeadSourceComponent from "./LeadSourceComponent";
import LeadStatisticsComponent from "./LeadStatisticsComponent";
import ProductPerformanceChart from "./ProductPerformanceChart";
import TopPlansChart from "./TopPlansChart";
import QualitativeResearch from "./QualitativeResearch";
import MapComponent from "./MapComponent";
const productList = [
  {
    id: 1,
    name: "Leads",
    value: 2200,
    quantity: 10,
    incdecFactor: "+12%",
    fector: true,
    fresh: 1000,
    pending: 1200,
    icons: "bi bi-list",
    backgroundColor: "rgba(216, 254, 224, 1)",
  },
  {
    id: 2,
    name: "Customers",
    value: 3456,
    fector: false,
    quantity: 10,
    incdecFactor: "-2.4%",
    icons: "bi bi-arrow-repeat",
    backgroundColor: "rgba(198, 231, 255, 1)",
  },
  {
    id: 3,
    name: "Premium",
    value: "₹ 18338",
    fector: true,
    quantity: 10,
    incdecFactor: "+12%",
    icons: "bi bi-arrow-repeat",
    backgroundColor: "rgba(255, 215, 209, 1)",
  },
  {
    id: 4,
    name: "Lead Conversion",
    fector: true,
    value: "7.69 %",
    quantity: 10,
    incdecFactor: "+12%",
    icons: "bi bi-card-checklist",
    backgroundColor: "rgba(255, 249, 216, 1)",
  },
  {
    id: 5,
    name: "Active Users",
    value: "119/200",
    fector: false,
    quantity: 10,
    incdecFactor: "-2.4%",
    icons: "bi bi-clipboard-check",
    backgroundColor: "rgba(223, 255, 230, 1)",
  },
  {
    id: 6,
    name: "Active Rewards",
    value: "04",
    fector: true,
    quantity: 10,
    incdecFactor: "This Month",
    icons: "",
    imgIcon: PartyIcon,
  },
];

const DashBoardComponent = () => {
  return (
    <MainCard title="Dashboard">
      <div className="dashboard-first-main-container">
        {productList?.map((value) => {
          return (
            <DashboardCardComponant key={value?.id} productDetails={value} />
          );
        })}
      </div>
      <div className="row g-3 mt-2">
        <div className="col-12">
          <div className="row g-4">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <LeadSourceComponent />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <LeadStatisticsComponent />
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <ProductPerformanceChart />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <TopPlansChart />
            </div>
          </div>
          <div className="row g-4 mt-1 mb-4">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <MapComponent />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <QualitativeResearch />
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  );
};
export default DashBoardComponent;
