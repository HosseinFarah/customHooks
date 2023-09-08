import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
export const Register = ()=>{
    const schema = yup.object().shape({
        firstname:yup.string().required("Enter your Firestname"),
        lastname:yup.string().required(),
        email:yup.string().email("Not Valid").required("Enter your email"),
        reemail: yup.string().oneOf([yup.ref("email")],"Email Must be Same as Your Email").required(),
        age:yup.number().positive().min(18).required(),
        password:yup.string().min(4).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d*/).required(),
        repassword:yup.string().oneOf([yup.ref("password")],"Pass not Match enter the same password as you set").required(),
    })
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});
    const onsubmitForm =(data)=>{
        console.log("The form was Submited");
        console.log(data);
    }
    return (
        <div className="container mt-5 my-5 col-4">
            <form onSubmit={handleSubmit(onsubmitForm)}>
            First Name:<input  className="form-control" type="text" placeholder="First Name" {...register("firstname")}/>
            {errors.firstname && <p>{errors.firstname?.message}</p>}
            Last Name:<input className="form-control" type="text" placeholder="Last Name" {...register("lastname")}/>
            {errors.lastname && <p>{errors.lastname?.message}</p>}
            Email:<input className="form-control" type="email" placeholder="Email" {...register("email")}/>
            {errors.email && <p>{errors.email?.message}</p>}
            Email Confirmation:<input className="form-control" type="email" placeholder="Email Confirmation" {...register("reemail")}/>
            {errors.reemail && <p>{errors.reemail?.message}</p>}
            Age:<input className="form-control" type="number" placeholder="Age" {...register("age")}/>
            {errors.age && <p>{errors.age?.message}</p>}
            Password:<input className="form-control" type="password" placeholder="Password" {...register("password")}/>
            {errors.password && <p>{errors.password?.message}</p>}
            Password Again:<input className="form-control" type="password" placeholder="Re Password" {...register("repassword")}/>
            {errors.repassword && <p>{errors.repassword?.message}</p>}    
                <input className="form-control" type="submit"/>
            </form>
        </div>
    )
}