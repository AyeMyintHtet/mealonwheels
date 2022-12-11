import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { ticket as TicketAction } from 'store'

type PropsType = {
}

export const useTicket = (props?: PropsType) => {
  const ticket = useSelector((state: any) => state.ticket, shallowEqual)
  const dispatch = useDispatch()
  return {
    ...ticket,
    TicketAction,
    dispatch,
    useSelector,
    shallowEqual,
  }
}
