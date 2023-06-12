
import './FormValidation.css'
import { useState } from 'react'

const initialState = {
    username: '',
    email: '',
    password: "",
    confirmpassword: '',
    fathersname: '',
    mothersname: '',
    firstname: '',
    lastname:'',
    date: '',
    time: '',
    gender: '',

};

//Gender select
const Gender = [
   {id: 1, name: 'Male'},
   {id: 2, name: 'Femal'},
];

const FormValidation = () => {

    const[formData, setformData] = useState(initialState);


// de-structuring the initialState
    const{username, email, password, confirmpassword, date, time, gender, fathersname, mothersname, firstname, lastname} = formData

    const [errors, setErrors] = useState({});

    //Validation form
    const ValidationForm = () => {
        let newErrors = {};

    
    // validate username
    if (!username) {
        newErrors.username = 'Username is require'  
      }
  
      //validate Email
      if (!email) {
          newErrors.email = 'Email is required';
         }else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
         }

         //Validate password
         if (!password) {
            newErrors.password = 'password is required';
         }else if (password.length < 6) {
            newErrors.password = 'password must be at least 6 characters long';
         }

         //validate confirmed password
         if (!confirmpassword) {
            newErrors.confirmpassword = 'confirm password is reqire';
         }else if (confirmpassword !== password) {
            newErrors.confirmpassword = 'password do not match'
         }
         
         if (!fathersname) {
            newErrors.fathersname = "father's name is required";
            
         }

         if (!mothersname) {
            newErrors.mothersname = "mother's name is required";
            
         }

         if (!firstname) {
            newErrors.firstname = 'first name is required';
         }

         if (!lastname) {
            newErrors.lastname = 'last name is required';
         }

         if (!date) {
            newErrors.date = 'Date is require' ; 
          }

          if (!time) {
            newErrors.time = 'Time is require' ; 
          }

          if (!gender) {
            newErrors.gender = 'Gender is require'  
          }


         setErrors(newErrors);

         //return true if there are no errors
         return Object.keys(newErrors).length === 0;

    
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (ValidationForm()) {
            //perform form submition
            console.log('form submitted:', formData);
            setformData(initialState)     
        }
    }

    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value});

      
    };

  


  return (
                
    <form className='form' onSubmit={handleSubmit}>
          <h1 className='page'>Form</h1>
        <div className='form-group'>
            <label>Username</label>
            <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            />

            {errors.username && <span className='error'>{errors.username}</span>}
           </div>

           <div className='form-group'>
            <label>First Name</label>
            <input
            type='text'
            name='firstname'
            value={firstname}
            onChange={handleChange}
            />
            {errors.firstname && <span className='error'>{errors.firstname}</span>}
         </div>
         <div className='form-group'>
            <label>Last Name</label>
            <input
            type='text'
            name='lastname'
            value={lastname}
            onChange={handleChange}
            />
            {errors.lastname && <span className='error'>{errors.lastname}</span>}
         </div>


          <div className='form-group'>
            <label>Email</label>
            <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            />
             {errors.email && <span className='error'>{errors.email}</span>}

           </div>

           <div className='form-group'>
            <label>Father's Name</label>
            <input
            type='text'
            name='fathersname'
            value={fathersname}
            onChange={handleChange}
            />
            {errors.fathersname && <span className='error'>{errors.fathersname}</span>}
         </div>
         <div className='form-group'>
            <label>Mother's Name</label>
            <input
            type='text'
            name='mothersname'
            value={mothersname}
            onChange={handleChange}
            />
            {errors.mothersname && <span className='error'>{errors.mothersname}</span>}
         </div>


          <div className='form-group'>
            <label>Password</label>
            <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            />
            {errors.password && <span className='error'>{errors.password}</span>}

        </div>
        <div className='form-group'>
            <label> confirmPassword</label>
            <input
            type='password'
            name='confirmpassword'
            value={confirmpassword}
            onChange={handleChange}
            />
 {errors.confirmpassword && <span className='error'>{errors.confirmpassword}</span>}
        </div>

       
      
         <div className='form-group'>
            <label>Date Of Birth</label>
            <input
            type='date'
            name='date'
            value={date}
            onChange={handleChange}
             />
              {errors.date && <span className='error'>{errors.date}</span>}

             </div>
         <div className='form-group'>
            <label>Time</label>
            <input
            type='time'
            name='time'
            value={time}
            onChange={handleChange}
             />
              {errors.time && <span className='error'>{errors.time}</span>}
             </div>

             <div className='form-group'>
               <select value={gender} name='gender' onChange={handleChange}>
                  <option value="" disabled>-- choose product Gender--</option>
                  {Gender.map((e)=>{
                     return (
                        <option key={e.id} value={e.name}>
                           {e.name}
                        </option>
                     )
                  })}
               </select>
               {errors.gender && <span className='error'>{errors.gender}</span>}
             </div>


        <button type='submit'>Submit</button>

    </form>
  )
}

export default FormValidation
