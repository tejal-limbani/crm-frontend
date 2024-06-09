import PropTypes from 'prop-types';
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export const ResetPassword = ({ handleOnChange, handleOnSubmit, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">
                        Reset Password
                    </h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                value={email}
                                placeholder="Enter Email"
                            />
                        </Form.Group>

                        <Button type="submit">Reset Password</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher('login')}>Logging now</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
