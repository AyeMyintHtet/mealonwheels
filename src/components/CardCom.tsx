import React from 'react'
import {AiOutlineEdit}from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'

import { TextCom } from './TextCom'
import { StyledCard } from 'theme'
import {useAuth, useTicket} from 'hook'

type CardComIProps ={
    image?: string
    desc?:string
    amount?:number
    itemId?:number
    key?:number
    items:{
      _id:string
      title: string,
      description:string,
      statusName: string,
      date:string
    } 
    setTicket_data:any
    setshowTicket:any
}
export const CardCom:React.FC<CardComIProps> = ({items,setTicket_data,setshowTicket}) => {
  const {UserLogin_data} = useAuth()
  const {dispatch,TicketAction}=useTicket()

  const status:any = items.statusName?.toLocaleLowerCase() || ''
  const user = UserLogin_data?.user?.userrole.toLowerCase() || 'staff'

  const DeleteTicket = async(id:string)=>{
    dispatch(TicketAction.DeleteTicket(id))
  }

  const UpdateTicket = async (name:string,description:string,id:string)=>{
    setTicket_data({name,description})
    setshowTicket({view:true,from:'update',id})
  }
  
  const UpperRoleSubmitReject = async (from:'approve'|'reject' ,id:string)=>{
    let obj :any={id}

    if(user === 'supervisor'){
      if(from ==='approve'){
        obj.statusID = 1
      }else{
        obj.statusID = 3
      }
    }else if(user === 'leader'){
      if(from ==='approve'){
        obj.statusID = 2
      }else{
        obj.statusID = 3
      }
    }
    await dispatch(TicketAction.UpdateTicket(obj))
  }

  return (
    <StyledCard className={`${user === 'staff' ? status : 'upperRole'}`} >
      <div className={`${user === 'staff' ? '' : 'd-none'}`}>
      <div className="deleteTicket" onClick={()=>DeleteTicket(items._id)}>
        <IoIosClose fill='white' size={23}/>
      </div>
      <div className="status d-flex align-items-center justify-content-between">
          <TextCom>Status: {items?.statusName}</TextCom>
        <div className='scale' onClick={()=>UpdateTicket(items.title,items.description,items._id)}>
          <AiOutlineEdit fill='white' size={20}/>
        </div>
      </div>
      </div>
      <div className='desc'>
        <div className="d-flex flex-column gap-2">
          <TextCom weight='700'>Title:</TextCom>
          <TextCom className='border-bottom'> {items?.title}</TextCom>
        </div>
        <div className="d-flex flex-column gap-2">
          <TextCom weight='700'>Description:</TextCom>  
          <TextCom className='border-bottom'> {items?.description}</TextCom>
        </div>
        <div className="d-flex gap-2">
          <TextCom weight='700' size='14'>Created Date: </TextCom>
          <TextCom size='14'> {items?.date.split('T')[0]}</TextCom>
        </div>
        <div className={` d-flex gap-2 align-items-center justify-content-center mt-3 ${user === 'staff' && 'd-none'}`}>
          <button className='cancel' onClick={()=>UpperRoleSubmitReject('reject',items._id)}>Reject</button>
          <button className='submit' onClick={()=>UpperRoleSubmitReject('approve',items._id)}>Approved</button>
        </div>
      </div>
    </StyledCard>
  )
}
