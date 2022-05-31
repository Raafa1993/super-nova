import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  Col,
  Card,
} from "reactstrap";
import classnames from "classnames";

//SimpleBar
import SimpleBar from "simplebar-react";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <div className="card-header align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Transações</h4>
            <div className="flex-shrink-0">
              <Nav
                className="justify-content-end nav-tabs-custom rounded card-header-tabs"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Tudo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Comprar
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Vender
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>

          <CardBody className="px-0">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <SimpleBar
                  className="table-responsive px-3"
                  style={{ maxHeight: "352px" }}
                >
                  <table className="table align-middle table-nowrap table-borderless">
                    <tbody>
                      <tr>
                        <td style={{ width: "50px" }}>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              14 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 125.20
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              15 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 112.34
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar LTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              16 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">1.88 LTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 94.22
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              17 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.42 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 84.32
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              18 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.018 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 145.80
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style={{ width: "50px" }}>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              14 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 125.20
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              15 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 112.34
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SimpleBar>
              </TabPane>

              <TabPane tabId="2">
                <SimpleBar
                  className="table-responsive px-3"
                  style={{ maxHeight: "352px" }}
                >
                  <table className="table align-middle table-nowrap table-borderless">
                    <tbody>
                      <tr>
                        <td style={{ width: "50px" }}>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              14 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 125.20
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              18 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.018 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 145.80
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar LTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              16 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">1.88 LTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 94.22
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              15 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 112.34
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              17 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.42 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 84.32
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              15 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 112.34
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style={{ width: "50px" }}>
                          <div className="font-size-22 text-success">
                            <i className="bx bx-down-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Comprar BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              14 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 125.20
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SimpleBar>
              </TabPane>

              <TabPane tabId="3">
                <SimpleBar
                  className="table-responsive px-3"
                  style={{ maxHeight: "352px" }}
                >
                  <table className="table align-middle table-nowrap table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              15 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 112.34
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style={{ width: "50px" }}>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              14 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 125.20
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              18 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.018 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 145.80
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              15 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 112.34
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender LTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              16 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">1.88 LTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 94.22
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              17 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.42 ETH</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 84.32
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style={{ width: "50px" }}>
                          <div className="font-size-22 text-danger">
                            <i className="bx bx-up-arrow-circle d-block"></i>
                          </div>
                        </td>

                        <td>
                          <div>
                            <h5 className="font-size-14 mb-1">Vender BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              14 Mar, 2021
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor da Moeda
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="text-end">
                            <h5 className="font-size-14 text-muted mb-0">
                              R$ 125.20
                            </h5>
                            <p className="text-muted mb-0 font-size-12">
                              Valor
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SimpleBar>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Transactions;
