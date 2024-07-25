import React from "react";
import "./DashboardCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const DashboardCardComponant = ({ productDetails }) => {
  return (
    <div className="dashboard-product-main-container" style={{}}>
      <div className="dashboard-product-container">
        <div className="header-container">
          {/* <FontAwesomeIcon icon={faTruck} className="product-card-icons" /> */}
          {productDetails?.icons && (
            <i
              className={`bi ${productDetails?.icons} product-card-icons`}
              style={{
                backgroundColor: productDetails?.backgroundColor,
              }}
            />
          )}

          {productDetails?.imgIcon && (
            <img
              src={productDetails?.imgIcon}
              alt="icon"
              style={{ width: "30px", height: "30px" }}
            />
          )}
          <div className="header-text">{productDetails?.name || ""}</div>
        </div>
        <div className="dashboard-product-description mt-1">
          <div className="lead-count">
            <span className="count me-2">{productDetails?.value}</span>
            <span
              className={`status ${productDetails?.fector ? "green" : "red"}`}
            >
              {productDetails?.incdecFactor}
            </span>
          </div>
          {(productDetails?.pending || productDetails?.fres) && (
            <div className="right-side-status">
              <div className="text green ">
                Fresh:<span>{productDetails?.fresh}</span>
              </div>
              <div className="text red">
                Pending:<span>{productDetails?.pending}</span>
              </div>
            </div>
          )}
        </div>
        <div className="bottom-view-details mt-1">
          <span>View Details</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCardComponant;
