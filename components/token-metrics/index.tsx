import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Title from "components/title";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Container, Row } from "reactstrap";

import Styles from "./token-metrics.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Fairlaunch",
    "Dexs Listing",
    "Marketing",
    "Reward and Staking",
    "Team",
    "Airdrop",
  ],
  datasets: [
    {
      label: "%",
      data: [40, 20, 12, 20, 6, 2],
      backgroundColor: [
        "rgb(17,242,48)",
        "rgb(237,90,209)",
        "rgb(232,242,28)",
        "rgb(244,144,34)",
        "rgb(244,25,56)",
        "rgb(38,105,239)",
      ],
    },
  ],
};

export default function TokenMetrics() {
  return (
    <section id="token-metrics" className={Styles["token-metrics"]}>
      <Container>
        <Row>
          <Title text="TOKENNOMICS" />
        </Row>
        <Row>
          <div className={Styles.chart}>
            <Doughnut
              data={data}
              options={{ plugins: { legend: { position: "bottom" } } }}
            />
          </div>
        </Row>
      </Container>
    </section>
  );
}
