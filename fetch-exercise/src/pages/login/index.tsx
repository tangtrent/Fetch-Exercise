import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './index.module.scss'
import axios from "axios";
import { Input, Label } from "reactstrap";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async (values) => {
      const {name, email} = values;
      // await axios.post('https://frontend-take-home-service.fetch.com/auth/login', {
      //   name,
      //   email
      // });
      console.log(values)
    }
  })

  const onChange = (e) => {
    formik?.setFieldValue(e.target.name, e.target.value);
  }

  return (
    <div className={styles?.container}>
      <Form className={styles?.form} onSubmit={(e) => {
          e.preventDefault();
          formik?.handleSubmit()
      }}>
        <Col lg={12}>
          <Label>Name</Label>
          <Input required name="name" onChange={onChange} />
        </Col>
        <Col lg={12}>
          <Label>Email</Label>
          <Input required type="email" name="email" onChange={onChange} />
        </Col>
          <Button variant="primary" as="input" type="submit" value="Log In"/>
      </Form>
    </div>
  )
}

export default Login;