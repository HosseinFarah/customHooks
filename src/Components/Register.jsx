import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

export const Register = () => {

const chkSubmit =(data)=>{
 reset();
  console.log(data);
  
}
const schema = yup.object().shape({
  fname:yup.string().required("Enter Firstname"),
  lname:yup.string().required("Enter Lastname"),
  email:yup.string().email("Enter Valid Email!").required("Enter Your Email"),
  reemail:yup.string().oneOf([yup.ref("email")],"Email Not Match!").required(),
  age:yup.number().min(18,"<=18").required().typeError("Enter Number >= 18"),
  password:yup.string().min(4,"Min Pass Lenght:4").max(15,"Max Pass Lenght:15").matches(/[a-z]+/,"add one a-z").matches(/[A-Z]+/,"add one A-Z").required("Enter Your Password Like 1234aA"),
  repassword:yup.string().oneOf([yup.ref("password")],"pass not match").required("Enter Pass Again!")
})
const {register,handleSubmit,formState:{errors},reset}=useForm({resolver:yupResolver(schema)});
  return (
    <div className="container mt-5 my-5 col-4">
      <form onSubmit={handleSubmit(chkSubmit)}>
        First Name:
        <input className="form-control" type="text" placeholder="First Name" register{...register("fname")}/>
        {errors.fname && <h5>{errors.fname.message}</h5>}
        Last Name:
        <input className="form-control" type="text" placeholder="Last Name" {...register("lname")}/>
        {errors.lname && <h5>{errors.lname.message}</h5>}
        Email:
        <input className="form-control" type="email" placeholder="Email" {...register("email")}/>
        {errors.email && <h5>{errors.email.message}</h5>}
        Email Confirmation:
        <input className="form-control"type="email" placeholder="Email Confirmation" {...register("reemail")}/>
        {errors.reemail && <h5>{errors.reemail.message}</h5>}
        Age:
        <input className="form-control" type="number" placeholder="Age" {...register("age")} />
        {errors.age && <h5>{errors.age.message}</h5>}
        Password:
        <input className="form-control" type="password" placeholder="Password" {...register("password")}/>
        {errors.password && <h5>{errors.password.message}</h5>}
        Password Again:
        <input className="form-control" type="password" placeholder="Re Password" {...register("repassword")}/>
        {errors.repassword && <h5>{errors.repassword.message}</h5>}
        <input className="form-control" type="submit" />
      </form>
    </div>
  );
};
