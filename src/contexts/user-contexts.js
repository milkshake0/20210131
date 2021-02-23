import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

//줌
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user') || 'null'),
  )

  useEffect(() => {
    //null이 아닌 user정보가 들어왔다면
    if (user) {
      //저장하고
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      //아니라면 삭제
      localStorage.removeItem('user')
    }
  })
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

//가져다 씀
export function useUserContext() {
  return useContext(Context)
}
