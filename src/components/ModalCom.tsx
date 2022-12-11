import React from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { TextCom } from './TextCom'
import { StyledModal } from 'theme'
import { useAuth } from 'hook'

export const ModalCom = () => {
  const { ModalVisible_data, dispatch, AuthAction } = useAuth()

  const CloseModal = () => {
    dispatch(AuthAction.ModalVisible({}))
  }

  return (
    <StyledModal className={`${ModalVisible_data?.view ? '' : 'd-none'}`}>
      <div className="modals">
        <div className="circle" onClick={() => CloseModal()}>
          <IoIosCloseCircle size={25} fill='black' />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column gap-3">
          <TextCom style={{ textAlign: 'center' }}>{ModalVisible_data?.data}</TextCom>
          <div onClick={() => CloseModal()}>
            <button>Click To Continue</button>
          </div>
        </div>
      </div>
    </StyledModal>
  )
}
