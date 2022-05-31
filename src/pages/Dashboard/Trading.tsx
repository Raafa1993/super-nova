import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Col,
  CardHeader,
  CardBody,
} from "reactstrap";
import classnames from "classnames";

const Trading = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Negociação</h4>
            <div className="flex-shrink-0">
              <Nav className="nav-tabs-custom card-header-tabs" role="tablist">
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Comprar
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
                    Vender
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>

          <CardBody>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="float-end ms-2">
                  <h5 className="font-size-14">
                    <i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
                    <a
                      href="#!"
                      className="text-reset text-decoration-underline"
                    >
                      R$4335.23
                    </a>
                  </h5>
                </div>
                <h5 className="font-size-14 mb-4">Compras Moedas</h5>
                <div>
                  <div className="form-group mb-3">
                    <label>Método de Pagamento :</label>
                    <select className="form-select">
                      <option>Pagamento Direto no Banco</option>
                      <option>Crédito / Debito</option>
                      <option>Paypal</option>
                      <option>Pagar.Me</option>
                    </select>
                  </div>

                  <div>
                    <label>Adicionar valor :</label>
                    <div className="input-group mb-3">
                      <label className="input-group-text">Valor</label>
                      <select
                        className="form-select"
                        style={{ maxWidth: "90px" }}
                      >
                        <option defaultValue="BT">BTC</option>
                        <option value="ET">ETH</option>
                        <option value="LT">LTC</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0.00121255"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <label className="input-group-text">Preço</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="R$58,245"
                      />
                      <label className="input-group-text">R$</label>
                    </div>

                    <div className="input-group mb-3">
                      <label className="input-group-text">Total</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="$36,854.25"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="button" className="btn btn-success w-md">
                      Comprar Moeda
                    </button>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="float-end ms-2">
                  <h5 className="font-size-14">
                    <i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
                    <a
                      href="#!"
                      className="text-reset text-decoration-underline"
                    >
                      R$ 4.235,23
                    </a>
                  </h5>
                </div>
                <h5 className="font-size-14 mb-4">Vender Moeda</h5>

                <div>
                  <div className="form-group mb-3">
                    <label>ID da Carteira:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="1cvb254ugxvfcd280ki"
                    />
                  </div>

                  <div>
                    <label>Adicionar Valor :</label>
                    <div className="input-group mb-3">
                      <label className="input-group-text">Valor</label>

                      <select
                        className="form-select"
                        style={{ maxWidth: "90px" }}
                      >
                        <option defaultValue="BT">BTC</option>
                        <option value="ET">ETH</option>
                        <option value="LT">LTC</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0.00121255"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <label className="input-group-text">Preço</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="$23,754.25"
                      />

                      <label className="input-group-text">$</label>
                    </div>

                    <div className="input-group mb-3">
                      <label className="input-group-text">Total</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="$6,852.41"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="button" className="btn btn-danger w-md">
                      Vender Moeda
                    </button>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Trading;
