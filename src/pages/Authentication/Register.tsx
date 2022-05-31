import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Row, Col, Alert, Container } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// import images
import logoSuper from "../../assets/images/logoSuperNova.webp";
import CarouselPage from "../AuthenticationInner/CarouselPage";

const Register = () => {
  const dispatch = useDispatch();

  const { user, registrationError } = useSelector((state: any) => ({
    user: state.register.user,
    registrationError: state.register.registrationError,
    loading: state.register.loading,
  }));

  // handleValidSubmit
  const handleValidSubmit = (values: any) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    dispatch(apiError(""));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Minia - React Admin & Dashboard Template</title>
      </MetaTags>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/dashboard" className="d-block auth-logo">
                        <img src={logoSuper} alt="" height="28" />{" "}
                        <span className="logo-txt">Minia</span>
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Registar Conta</h5>
                        {/* <p className="text-muted mt-2">
                          Get your free Minia account now.
                        </p> */}
                      </div>
                      <AvForm
                        className="needs-validation custom-form mt-4 pt-2"
                        onValidSubmit={(e: any, v: any) => {
                          handleValidSubmit(v);
                        }}
                      >
                        {user && user ? (
                          <Alert color="success">
                            Cadastrar usuário com sucesso
                          </Alert>
                        ) : null}

                        {registrationError && registrationError ? (
                          <Alert color="danger">{registrationError}</Alert>
                        ) : null}

                        <div className="mb-3">
                          <AvField
                            id="email"
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            type="email"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <AvField
                            name="username"
                            label="Nome de usuário"
                            type="text"
                            required
                            placeholder="Digite nome do usuário"
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            name="password"
                            label="Senha"
                            type="password"
                            required
                            placeholder="Digite sua senha"
                          />
                        </div>
                        <div className="mb-4">
                          <p className="mb-0">
                            Ao se cadastrar você concorda com os termos{" "}
                            <Link to="#" className="text-primary">
                              Termos de uso
                            </Link>
                          </p>
                        </div>
                        <div className="mb-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Cadastrar
                          </button>
                        </div>
                      </AvForm>

                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">
                          Já tem uma conta ?{" "}
                          <Link
                            to="/login"
                            className="text-primary fw-semibold"
                          >
                            {" "}
                            Conecte-se{" "}
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                    {/* <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} Minia . Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </Col>
            <CarouselPage />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
