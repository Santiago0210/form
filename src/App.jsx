import { useEffect, useState } from "react"
import "./App.css"
import useFetch from "./hooks/useFetch"
import FormUser from "./components/FormUser"
import UserCard from "./components/UserCard"



function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)



  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  }, [])

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (

    <div className="container__principal">
      <div className="container__secundary"> <h1>USERS</h1>
        <div className="opent__form"> <button className="open__btn" onClick={handleOpenForm}>New User</button>
        </div>
      </div>
      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="item__user">
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}

            />
          ))
        }
      </div>
    </div>
  )
}

export default App
