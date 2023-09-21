import React from 'react'

const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUser('/users', user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
    handleOpenForm();
  }
  return (
    <article className='article__form'>

      <h3>#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>

      <ul className='edit__ul'>

        <li><span>Email: </span><span>{user.email}</span></li>

        <li><span>Birthday: </span><span>{user.birthday}</span></li>

      </ul>
      <div className='edit__items'> 
      <button className="delete__btn" onClick={handleDelete}>Delete</button>

        <button className="edit__btn" onClick={handleEdit}>Edit</button>
      </div>
    </article>
  )
}

export default UserCard