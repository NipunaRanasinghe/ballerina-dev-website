/**
 * Copyright (c) 2024, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Head from 'next/head';

import Layout from '../../layouts/LayoutHacktoberfest';
import Intro from '../../components/nust/intro/Intro';
import Contribute from '../../components/nust/contribute/Contribute';
import Rewards from '../../components/nust/rewards/Rewards';
import Rules from '../../components/nust/rules/Rules';
import styles from '../../styles/Hacktoberfest.module.css';

export default function Home({ }) {

  const getLink = (element, id) => {
    if (element.tagName.toLowerCase() === "path")
      element = element.parentElement;

    const elementNodeList = document.querySelectorAll(`#${id}`);
    const elementArray = Array.prototype.slice.call(elementNodeList);
    const count = elementArray.indexOf(element.parentElement);

    if (count === 0) {
      location.hash = `#${id}`;
    } else {
      location.hash = `#${id}-${count}`;
    }

    navigator.clipboard.writeText(window.location.href);
    element.parentElement.scrollIntoView();
  };

  return (
    <><Head>
      <meta
        name="description"
        content="Join the Forging Integration Innovations - Ballerina Hackathon 2024, organized by Namibia University of Science and Technology. Innovate with Ballerina, the next-gen programming language, and showcase your skills in building cutting-edge integration solutions."
      />
      <meta
        name="keywords"
        content="ballerina, nust hackathon, integration, hackathon"
      />
      <title>Forging Integration Innovations - Ballerina Hackathon 2024 - The Ballerina programming language</title>

      {/* FB */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Forging Integration Innovations - Ballerina Hackathon 2024 - The Ballerina programming language" />
      <meta
        property="og:description"
        content="Join the Forging Integration Innovations - Ballerina Hackathon 2024, organized by Namibia University of Science and Technology. Innovate with Ballerina, the next-gen programming language, and showcase your skills in building cutting-edge integration solutions."
      />
      <meta
        property="og:image"
        itemProp="image"
        content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
      />

      {/* LINKED IN */}
      <meta property="og:title" content="Forging Integration Innovations - Ballerina Hackathon 2024 - The Ballerina programming language" />
      <meta
        property="og:image"
        content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
      />
      <meta
        property="og:description"
        itemProp="image"
        content="Join the Forging Integration Innovations - Ballerina Hackathon 2024, organized by Namibia University of Science and Technology. Innovate with Ballerina, the next-gen programming language, and showcase your skills in building cutting-edge integration solutions."
      />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ballerinalang" />
      <meta name="twitter:creator" content="@ballerinalang" />
      <meta name="twitter:title" content="Forging Integration Innovations - Ballerina Hackathon 2024 - The Ballerina programming language" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:description"
        content="Join the Forging Integration Innovations - Ballerina Hackathon 2024, organized by Namibia University of Science and Technology. Innovate with Ballerina, the next-gen programming language, and showcase your skills in building cutting-edge integration solutions."
      />
      <meta
        name="twitter:image"
        content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
      />
      <meta
        property="twitter:text:description"
        content="Join the Forging Integration Innovations - Ballerina Hackathon 2024, organized by Namibia University of Science and Technology. Innovate with Ballerina, the next-gen programming language, and showcase your skills in building cutting-edge integration solutions."
      />
      <meta
        property="twitter:image"
        content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
      />

    </Head>
      <Layout>
        <Col sm={12}>

          <Row className={`${styles.hacktoberfestIntro} ${styles.mesh}`}>
            <Intro />
          </Row>

          <Row className={styles.hacktoberfestChallenges}>
            <Contribute getLink={getLink} />
          </Row>

          <Row className={styles.hacktoberfestRewards}>
            <Rewards getLink={getLink} />
          </Row>

          <Row className={styles.hacktoberfestRules}>
            <Rules getLink={getLink} />
          </Row>
        </Col>
      </Layout>
    </>
  );
}
