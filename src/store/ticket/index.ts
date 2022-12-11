import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import serviceController, { routes } from 'controller'
import { isPendingAction, isFulfilledAction, isRejectedAction } from '../typehandle.action'

const initialState: any = {
  isLoading: false
}

const GetTicket = createAsyncThunk('TicketSlice/getTicket', async (data: any, thunkAPI: any) => {
  let email = thunkAPI.getState()?.auth?.UserLogin_data.user?.email
  return await serviceController(`${routes.getTicketByID}${email}`)
    .then((res) => {
      return res.data
    })
})

const PostTicket = createAsyncThunk('TicketSlice/PostTicket', async (data: any, thunkAPI: any) => {
  let email = thunkAPI.getState()?.auth?.UserLogin_data.user?.email
  let obj = {
    ...data,
    email
  }
  return await serviceController(routes.postTicket, obj)
    .then((res) => {
      thunkAPI.dispatch(GetTicket({}))
      return res.data
    })
})

const DeleteTicket = createAsyncThunk('TicketSlice/DeleteTicket', async (data: string, thunkAPI: any) => {
  return await serviceController(`${routes.deleteTicket}${data}`)
    .then((res) => {
      thunkAPI.dispatch(GetTicket({}))
      return res.data
    })
})

const UpdateTicket = createAsyncThunk('TicketSlice/UpdateTicket', async (data: any, thunkAPI: any) => {
  let { id, ...datas } = data
  return await serviceController(`${routes.updateTicket}${data.id}`, datas)
    .then((res) => {
      if (res.data) {
        thunkAPI.dispatch(GetTicket({}))
        return res.data
      }
    })
})


const TicketSlice = createSlice({
  name: 'TicketSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(isPendingAction('TicketSlice/'), state => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addMatcher(isFulfilledAction('TicketSlice/'), (state, action) => {
        let tmp = action.type.split('/')
        return {
          ...state,
          [tmp[1] + '_data']: action.payload,
          isLoading: false,
          error: null,
        }
      })
      .addMatcher(isRejectedAction('TicketSlice/'), (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
  },
})

export default {
  TicketSlice: TicketSlice.reducer,
  GetTicket,
  PostTicket,
  DeleteTicket,
  UpdateTicket
}