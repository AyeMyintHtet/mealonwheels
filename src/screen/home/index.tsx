import React, { useEffect, useState } from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { HomeCom } from 'theme'
import { Header, CardCom, TextCom } from 'components'
import { useAuth, useTicket } from 'hook'

const Home = () => {
  const { UserLogin_data, AuthAction } = useAuth()
  const { getTicket_data, dispatch, TicketAction } = useTicket()
  const [ticket_data, setTicket_data]: any = useState({
    name: '',
    description: ''
  })
  const [showTicket, setshowTicket] = useState({
    view: false,
    from: '',
    id: ''
  })

  useEffect(() => {
    dispatch(TicketAction.GetTicket({}))
  }, [])

  const TargetValue = (from: 'name' | 'desc', val: string | number) => {
    //Get Field Value from Update or New
    if (from === 'name') {
      setTicket_data({ ...ticket_data, name: val })
    } else {
      setTicket_data({ ...ticket_data, description: val })
    }
    
  }

  const AddOrUpdateTicket = async () => {
    if (ticket_data.name === '' || ticket_data.description === '') return dispatch(AuthAction.ModalVisible({ data: 'Name and Description must not empty!' }))
  
    let obj: any = {
      title: ticket_data.name,
      description: ticket_data.description,
      id: showTicket.id
    }
  
    if (showTicket.from === 'new') {
      await dispatch(TicketAction.PostTicket(obj))
    } else {
      obj.statusID = 4
      await dispatch(TicketAction.UpdateTicket(obj))
    }

    setTicket_data({ name: '', description: '' })
    setshowTicket({ view: !showTicket.view, from: '', id: '' })
  }

  const CancelBtn = () => {
    setTicket_data({ name: '', description: '' })
    setshowTicket({ view: !showTicket.view, from: '', id: '' })
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
  return (
    <HomeCom>
      <Header />
      <div className="container">
        {
          UserLogin_data?.user?.userrole === 'staff' ?
            <>
              <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <TextCom size='30' weight='600' className='mb-3 mt-3 '>Your Tickets</TextCom>
                <TextCom className='addTicket' onClick={() => setshowTicket({ view: !showTicket.view, from: 'new', id: '' })}>Add Ticket</TextCom>
              </div>
              <div className="row">
                {
                  getTicket_data?.map((item: any) => {
                    return (
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <CardCom items={item} setTicket_data={setTicket_data} setshowTicket={setshowTicket} />
                      </div>
                    )
                  })
                }
              </div>
            </>
            :
            <>
              <TextCom size='30' weight='600' className='mb-3 mt-3 border-bottom mb-3' style={{ textAlign: 'center' }}>
                Staff Ticket that you need to approved! <TextCom as='span' weight='500' size='25'>{UserLogin_data?.user?.userrole === 'Leader' && '(Already Approved By Supervisor)'}</TextCom>
              </TextCom>
              <div className="row">
                {
                  getTicket_data?.map((item: any) => {
                    return (
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <CardCom items={item} setTicket_data={setTicket_data} setshowTicket={setshowTicket} />
                      </div>
                    )
                  })
                }
              </div>
            </>
        }
        {
          getTicket_data?.length === 0 &&
          <div>
            <div className="waterdrop1">
              <AiFillExclamationCircle fill='red' size={25} />
              <TextCom weight='500'>{UserLogin_data?.user?.userrole === 'staff' ? 'There is no Ticket in your account.' : 'There is no ticket you need to approve.'}</TextCom>
            </div>
          </div>
        }
      </div>
      <div className={`addTicketData ${showTicket.view ? '' : 'd-none'}`} >
        <div className="layer" />
        <div className="content">
          <TextCom className='mb-3' weight='700' size='25' style={{ textAlign: 'center' }}>Please Fill Following Field To Add Ticket</TextCom>
          <div className="d-flex flex-column gap-2 mb-3">
            <TextCom>Ticket Name:</TextCom>
            <TextCom as='input' value={ticket_data.name} onChange={(e: any) => TargetValue('name', e.target.value)} />
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <TextCom>Ticket Description:</TextCom>
            <TextCom as='input' value={ticket_data.description} onChange={(e: any) => TargetValue('desc', e.target.value)} />
          </div>
          <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
            <button className='cancel' onClick={() => CancelBtn()}>Cancel</button>
            <button className='submit' onClick={() => AddOrUpdateTicket()}>Submit</button>
          </div>
        </div>
      </div>
    </HomeCom>
  )
}

export default Home