import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import serviceController, { routes } from 'controller'
import { isPendingAction, isFulfilledAction, isRejectedAction } from '../typehandle.action'

const initialState: any = {
  isLoading: false,
  ModalVisible_data: []
}


const UserRole = createAsyncThunk('authSlice/UserRole', async () => {
  return await serviceController(routes.allRole)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('err', err)
    })
})

const Register = createAsyncThunk('authSlice/UserRegister', async (data) => {
  return await serviceController(routes.adminRegister, data)
    .then((res) => {
      if (res.data) return res.data
      return res
    })
})
const CustomerRegister = createAsyncThunk('authSlice/CustomerRegister', async (data)=>{
  return await serviceController(routes.customerRegister,data)
  .then((res)=>{
    if(res.data) return res.data
    return res
  })
})

const Login = createAsyncThunk('authSlice/UserLogin', async (data:any) => {
  return await serviceController(`${routes.loginUser}?email=${data.email}&password=${data.password}`)
    .then((res) => {
      if (res?.data) {
        localStorage.setItem('auth-store', res.data)
        return res.data
      }
      return res.response.data
    })

})

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    Logout: (state: any, action: any) => {
      state.UserLogin_data = []
    },
    ModalVisible: (state: any, action: any) => {
      console.log('action.paylad', action)
      state.ModalVisible_data = { view: !state.ModalVisible_data.view, data: action.payload.data || '' }
    }

  },
  extraReducers: builder => {
    builder
      .addMatcher(isPendingAction('authSlice/'), state => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addMatcher(isFulfilledAction('authSlice/'), (state, action) => {
        let tmp = action.type.split('/')
        return {
          ...state,
          [tmp[1] + '_data']: action.payload,
          isLoading: false,
          error: null,
        }
      })
      .addMatcher(isRejectedAction('authSlice/'), (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
  },
})

export default {
  authSlice: authSlice.reducer,
  Logout: authSlice.actions.Logout,
  ModalVisible: authSlice.actions.ModalVisible,
  UserRole,
  CustomerRegister,
  Register,
  Login
}