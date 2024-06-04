import React from "react";
import { Row } from "reactstrap";

import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.inner}>
          <div className={Styles.content}>
            <Row>
              <div>
                <span>TETE</span>
                <p>© 2013-2024 | All rights reserved.</p>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </footer>
  );
}
