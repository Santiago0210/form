
import { useEffect } from "react";
import { useForm } from "react-hook-form";



const FormUser = ({ createUser, 
  infoUpdate,
   updateUser, 
   setInfoUpdate, 
   closeForm, 
   setCloseForm }) => {
  
  

  const { handleSubmit, register, reset } = useForm();
  useEffect(() => {
    reset(infoUpdate)

  }, [infoUpdate])

  const submit = data => {
    if (infoUpdate) {
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate()
    } else {
      createUser('/users', data)
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: ""

    })
  }
  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm}className={`container ${closeForm && 'close-form'}`}>
      <form onClick={e => e.stopPropagation()}className="formuser"onSubmit={handleSubmit(submit)}>
       <div className="user__close"> <div onClick={handleCloseForm} className="close">X</div> </div>

        <div className="formuser__item one">

          <label className="formuser__label "htmlFor="email">Email</label>

          <input {...register('email')} type="email" id="email" />

        </div>

        <div className="formuser__item two">

          <label htmlFor="password">Password</label>

          <input {...register('password')} type="password" id="password" />

        </div>

        <div className="formuser__item three">

          <label htmlFor="first_name">First name</label>

          <input {...register('first_name')} type="text" id="first_name" />

        </div>

        <div className="formuser__item four">

          <label htmlFor="last_name">Last name</label>

          <input {...register('last_name')} type="text" id="last_name" />

        </div>

        <div className="formuser__five">

          <label htmlFor="birthday">Birthday</label>

          <input {...register('birthday')} type="date" id="birthday" />

        </div>

       <div className="btn"> <button className="formuser__btn">{infoUpdate ? 'Update' : 'Create'}</button>
        </div>
      </form>
    </div>
  )
}
export default FormUser;