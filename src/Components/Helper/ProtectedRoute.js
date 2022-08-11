import React from 'react'
import { UserContext } from '../../UserContext'

const ProtectedRoute = () => {
  const { login } = React.useContext(UserContext)
  return <div></div>
}

export default ProtectedRoute
