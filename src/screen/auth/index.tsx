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
  const { UserRole_data, AuthAction, dispatch } = useAuth()
  const [registerData, setRegisterData]: any = useState({
    name: '',
    role: ''
  })

  useEffect(() => {
    dispatch(AuthAction.UserRole());
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
      userrole: registerData.role
    }
    if (location.pathname === '/register') {

      if (registerData?.name === '' || registerData?.role === '') {
        return dispatch(AuthAction.ModalVisible({ data: 'Name or Role must not empty!' }))
      }
      
      let res = await dispatch(AuthAction.Register(obj));
      if (!res.payload) {
        await dispatch(AuthAction.ModalVisible({ data: `${res.payload.response.data.message}` }))
        return
      }
      
      navigate('/login', { replace: true })
    
    } else {
    
      delete obj.name
      delete obj.userrole
    
      let res = await dispatch(AuthAction.Login(obj))
      if (res?.payload.status === 'success') return navigate('/')
      dispatch(AuthAction.ModalVisible({ data: `${res.payload}` }))
    }
  }
  const RouteChange = async () => {
  
    setChangeRoute((prev) => !prev)
    if (ChangeRoute) return navigate('/login')
    return navigate('/register')
  
  }
  
  const ChangeText = (from: string, to: string) => {
    if (location.pathname === '/register') return from
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
                          location.pathname === '/register' &&
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
                          location.pathname === '/register' &&
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
                                        <TextCom as='option' value={data.roleID} key={key}>{data.roleName}</TextCom>
                                      )
                                    })
                                    :
                                    null
                                }
                              </TextCom>
                            </div>
                          </>
                        }
                        <button type="submit">{ChangeText('Register', 'Login')}</button>
                        <div className="d-flex align-items center justify-content-between">
                          <TextCom className='notmember'>{ChangeText('Not a member ?', 'Already Register ?')}</TextCom>
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