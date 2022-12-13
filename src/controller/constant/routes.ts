export const routes = {
  allRole : `get:api/role`,

  //auth
  adminRegister :`post:api/user/AddUser`,
  loginUser :`post:api/createToken`,
  customerRegister:`post:api/customer/AddCustomer`,

  //ticket
  getTicketByID : `get:api/posts/`,
  postTicket :  `post:api/posts`,
  deleteTicket: `delete:api/posts/`,
  updateTicket: `patch:api/posts/`
}

