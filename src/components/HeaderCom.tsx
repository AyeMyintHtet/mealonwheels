import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

import { useAuth } from 'hook'
import { TextCom } from 'components'
import { StyledHeader } from 'theme'


export const Header = () => {
  const { UserLogin_data, dispatch, AuthAction } = useAuth()
  const navigate = useNavigate()

  const Loggout = async () => {
    localStorage.removeItem('auth-store')
    await dispatch(AuthAction.Logout())
    navigate('/login')
  }

  return (
    <StyledHeader>
      <div className="header">
        <div className='d-flex gap-3'>
          <TextCom weight='600'>Logged as </TextCom>
          <div className='d-flex align-items-center gap-1'>
            <TextCom>{UserLogin_data?.user?.email}</TextCom>
            <TextCom>(Role:<TextCom as='span' weight='700'> {UserLogin_data?.user?.userrole} </TextCom>)</TextCom>
          </div>
        </div>
        <div className='cursor-pointer' onClick={() => Loggout()}>
          <AiOutlineLogout size={25} />
        </div>
      </div>
    </StyledHeader>
  )
}
