import React, { useState, useEffect } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CampaignIndex = ({ campaigns }) => {
  console.log("DATA", campaigns);

  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };
  return <div>{renderCampaigns()}</div>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  // Pass data to the page via props
  return { props: { campaigns } };
}

export default CampaignIndex;
