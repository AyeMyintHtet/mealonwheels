import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";

import { TextCom } from 'components';
import { StyledLoginRegisters } from 'theme';
import { useAuth } from 'hook';


const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [ChangeRoute, setChangeRoute] = useState(true)
  const { AuthAction, dispatch } = useAuth()
  const [registerData, setRegisterData]: any = useState({
    name: '',
    role: '',
    phone: '',
    city: '',
    township: '',
    detailaddress: '',
    age: '',
  })
  let UserRole_data = [
    {
      roleName: 'Admin'
    },
    {
      roleName: 'SuperAdmin'
    }

  ]
  useEffect(() => {
  }, [])

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
  });

  const FormSubmit = async (values: any) => {
    let obj = {
      ...values,
      name: registerData.name,
      role: registerData.role,
      phone: registerData.phone
    }
    if (location.pathname === '/registeradmin') {

      if (registerData?.name === '' || registerData?.role === '') {
        return dispatch(AuthAction.ModalVisible({ data: 'Name or Role must not empty!' }))
      }

      let res = await dispatch(AuthAction.Register(obj));
      if (!res.payload) {
        await dispatch(AuthAction.ModalVisible({ data: `${res.payload.response.data.message}` }))
        return
      }

      navigate('/login', { replace: true })

    } else if (location.pathname === '/registeruser') {
      if (registerData?.name === '' || registerData.phone === '' || registerData.email === '' ||  registerData.city === '' ||registerData.township=== '' || registerData.detailaddress=== '' ||registerData.age === '' ) {
        return dispatch(AuthAction.ModalVisible({ data: 'Name or Role must not empty!' }))
      }
      delete obj.name
      delete obj.role
      obj.customerName = registerData.name
      obj.city = registerData.city
      obj.township = registerData.township
      obj.detailedAddress = registerData.detailaddress
      obj.age = registerData.age
      let res = await dispatch(AuthAction.CustomerRegister(obj));
      if (!res.payload) {
        await dispatch(AuthAction.ModalVisible({ data: `${res.payload.response.data.message}` }))
        return
      }

      navigate('/login', { replace: true })
    } else {

      delete obj.name
      delete obj.userrole

      let res = await dispatch(AuthAction.Login(obj))
      if (res?.payload) return navigate('/')
      dispatch(AuthAction.ModalVisible({ data: `${res.payload}` }))
    }
  }
  const RouteChange = async () => {

    setChangeRoute((prev) => !prev)
    if (ChangeRoute) return navigate('/login')
    return navigate('/registeruser')

  }

  const ChangeText = (from: string, to: string) => {
    if (location.pathname === '/registeruser') return from
    return to
  }
  return (
    <StyledLoginRegisters>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="content">
            <div className='d-flex justify-content-center align-items-center flex-column w-100'>
              <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { resetForm }: any) => { FormSubmit(values); resetForm({ values: '' }) }}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit,
                }) => (
                  <div className="login">
                    <div className="text">
                      <h1>{ChangeText('SIGN UP', 'LOGIN')}</h1>
                    </div>
                    <div className="form">
                      <form noValidate onSubmit={handleSubmit}>
                        {
                          location.pathname === '/registeradmin' || location.pathname === '/registeruser' &&
                          <>
                            <TextCom size='sm' className='mb-2'>Name</TextCom>
                            <div className="field">
                              <input
                                type="text"
                                name="name"
                                onChange={(e: any) => setRegisterData({ ...registerData, name: e.target.value })}
                                placeholder="Enter your name"
                                className="form-control inp_text"
                                id="name"
                              />
                            </div>
                            <TextCom>Phone</TextCom>
                            <div className="field">
                              <input
                                type="text"
                                name="name"
                                onChange={(e: any) => setRegisterData({ ...registerData, phone: e.target.value })}
                                placeholder="Enter your Phone"
                                className="form-control inp_text"
                                id="name"
                              />
                            </div>
                          </>
                        }

                        <TextCom size='sm' className='mb-2'>Email</TextCom>
                        <div className="field">
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter your email"
                            className="form-control inp_text"
                            id="email"
                          />
                        </div>
                        <p className="error">
                          {errors.email && touched.email && errors.email}
                        </p>
                        <TextCom size='sm' className='mb-2'>Password</TextCom>
                        <div className="field">
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Enter your password"
                            className="form-control"
                          />
                        </div>
                        <p className="error">
                          {errors.password && touched.password && errors.password}
                        </p>
                        {
                          location.pathname === '/registeradmin' &&
                          <>
                            <div className="d-flex flex-column">
                              <TextCom as='label' htmlFor="roles" style={{ fontSize: '14px' }}>Choose a Role</TextCom>
                              <TextCom as='select' name="roles" id="roles" className='select'
                                onClick={(e: any) => setRegisterData({ ...registerData, role: e.target.value })}>
                                <TextCom as='option' value="">Select One for your role</TextCom>
                                {
                                  UserRole_data?.length > 0 ?
                                    UserRole_data?.map((data: any, key: number) => {
                                      return (
                                        <TextCom as='option' value={data.roleName} key={key}>{data.roleName}</TextCom>
                                      )
                                    })
                                    :
                                    null
                                }
                              </TextCom>
                            </div>
                          </>
                        }
                        {
                          location.pathname === '/registeruser' &&
                          <>
                            <div className="d-flex flex-column">
                              <TextCom as='label' htmlFor="roles" style={{ fontSize: '14px' }}>City</TextCom>
                              <div className="field">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={(e: any) => setRegisterData({ ...registerData, city: e.target.value })}
                                  placeholder="Enter your name"
                                  className="form-control inp_text"
                                  id="name"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-column">
                              <TextCom as='label' htmlFor="roles" style={{ fontSize: '14px' }}>Township</TextCom>
                              <div className="field">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={(e: any) => setRegisterData({ ...registerData, township: e.target.value })}
                                  placeholder="Enter your name"
                                  className="form-control inp_text"
                                  id="name"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-column">
                              <TextCom as='label' htmlFor="roles" style={{ fontSize: '14px' }}>Detail Address</TextCom>
                              <div className="field">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={(e: any) => setRegisterData({ ...registerData, detailaddress: e.target.value })}
                                  placeholder="Enter your name"
                                  className="form-control inp_text"
                                  id="name"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-column">
                              <TextCom as='label' htmlFor="roles" style={{ fontSize: '14px' }}>Age</TextCom>
                              <div className="field">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={(e: any) => setRegisterData({ ...registerData, age: e.target.value })}
                                  placeholder="Enter your name"
                                  className="form-control inp_text"
                                  id="name"
                                />
                              </div>
                            </div>
                          </>
                        }
                        <button type="submit">{ChangeText('Register', 'Login')}</button>
                        <div className="d-flex align-items center justify-content-between">
                          <TextCom className='notmember'>{ChangeText('Already Register?', 'Not a member ?')}</TextCom>
                          <TextCom className='goTo' onClick={() => RouteChange()}>{ChangeText('Login', 'Sign Up')}</TextCom>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </StyledLoginRegisters>
  )
}

export default Login