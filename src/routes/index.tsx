import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ModalCom } from 'components'
import AppRoute from './router'

type AppLayoutProps = {}
const AppLayout: React.FC<AppLayoutProps> = props => {
  return (
    <BrowserRouter>
      <ModalCom />
      <AppRoute />
    </BrowserRouter>
  )
}

export default AppLayout
