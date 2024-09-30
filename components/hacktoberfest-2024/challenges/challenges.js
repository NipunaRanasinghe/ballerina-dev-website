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
import { Row, Col, Container, Table, Card } from 'react-bootstrap';

import styles from './Challenges.module.css';

export default function Intro(props) {

  return (
    <>
      <Col xs={12}>
        <Container>

          <Row>
            <Col sm={12} className='sectionTitle'>
              <h2 id="how-to-contribute" className='section'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#20b6b0"
                  className="bi bi-link-45deg mdButton pe-2"
                  viewBox="0 0 16 16"
                  onClick={(e) => props.getLink(e.target, 'how-to-contribute')}
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
                How to contribute?
              </h2>
            </Col>
          </Row>

          <Row>

            <Col xs={12} sm={12} md={12} lg={3} className={styles.boxCol}>
              <div className={styles.challengeType}>
                <div>
                  <h3>Code contributions</h3>

                  <Table hover variant="dark" className={styles.customDarkTable}>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th className={styles.reward}>Reward</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Easy</td>
                        <td className={styles.reward}>+10</td>
                      </tr>
                      <tr>
                        <td>Medium</td>
                        <td className={styles.reward}>+20</td>
                      </tr>
                      <tr>
                        <td>Hard</td>
                        <td className={styles.reward}>+30</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <a className={styles.issues} href="https://github.com/orgs/ballerina-platform/projects/376/views/1" target="_blank" rel="noreferrer" title='View issues'>View issues</a>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={3} className={styles.boxCol}>
              <div className={styles.challengeType}>
                <div>
                  <h3>No/Low Code contributions</h3>

                  <Table hover variant="dark" className={styles.customDarkTable}>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th className={styles.reward}>Reward</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Documentation - Easy</td>
                        <td className={styles.reward}>+5</td>
                      </tr>
                      <tr>
                        <td>Documentation - Medium</td>
                        <td className={styles.reward}>+10</td>
                      </tr>
                      <tr>
                        <td>Documentation - Hard</td>
                        <td className={styles.reward}>+15</td>
                      </tr>
                      <tr>
                        <td>Blog/article</td>
                        <td className={styles.reward}>+20</td>
                      </tr>
                      <tr>
                        <td>Video tutorial</td>
                        <td className={styles.reward}>+40</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <a className={styles.issues} href="https://github.com/orgs/ballerina-platform/projects/376/views/6" target="_blank" rel="noreferrer" title='View issues'>View issues</a>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={3} className={styles.boxCol}>
              <div className={styles.challengeType}>
                <div>
                  <h3>Connectors</h3>

                  <Table hover variant="dark" className={styles.customDarkTable}>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th className={styles.reward}>Reward</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Easy</td>
                        <td className={styles.reward}>+50</td>
                      </tr>
                      <tr>
                        <td>Medium</td>
                        <td className={styles.reward}>+75</td>
                      </tr>
                      <tr>
                        <td>Hard</td>
                        <td className={styles.reward}>+100</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div>
                <a className={styles.issues} href="https://ballerina.io/learn/create-your-first-connector-with-ballerina/" target="_blank" rel="noreferrer" title='View issues' style={{marginBottom: "10px"}}>Read the guide</a>
                <a className={styles.issues} href="https://github.com/orgs/ballerina-platform/projects/376/views/5" target="_blank" rel="noreferrer" title='View issues'>View projects</a>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={3} className={`sectionTitle ${styles.boxCol}`}>

              <Row xs={1} md={1} className={`g-4 ${styles.btnCol}`}>

                <Col>
                  <Card className={`${styles.cutomCard}`}>

                    <Card.Body className={styles.stack}>
                      <Card.Title className={styles.title}>Stack Oveflow</Card.Title>
                      <p className={styles.msg}>
                        Got a technical question?
                        <br />
                        Then get help from experts
                      </p>

                      <a href="https://stackoverflow.com/questions/tagged/ballerina" target="_blank" rel="noreferrer" className={styles.ask} title="Stack Overflow">Ask on Stack Oveflow</a>
                    </Card.Body>
                  </Card>
                </Col>


                <Col>
                  <Card className={`${styles.cutomCard}`}>

                    <Card.Body className={styles.discord}>
                      <Card.Title className={styles.title}>Discord</Card.Title>

                      <p className={styles.msg}>Join our Discord community</p>

                      <a href="https://discord.gg/ballerinalang" target="_blank" rel="noreferrer" className={styles.join} title='Discord'>Join Ballerina Discord</a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Col>
          </Row>


        </Container>
      </Col>
    </>
  );
}
