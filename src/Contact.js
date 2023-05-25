import React, { useState } from 'react'

const Contact = () => {
    const [user, setuser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

     let name,value;
     const getuserdata=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setuser({ ...user,[name]:value});
     }; 
    


     const postform=async (e)=>{
        e.preventDefault();

        const {name,email,phone,address,message}=user;
        const res=await fetch(
            "https://reactform-d0a30-default-rtdb.firebaseio.com/form.json", {
            method :"POST",
            headers:{
                "Content-Type":"application/json",
            },body:JSON.stringify({
                name,email,phone,address,message
            })
            });
            if(res){
                setuser({ name: "",
                email: "",
                phone: "",
                address: "",
                message: "",});
                alert("DATA STORED");
            }
        };
        
     


    return (
        <>
            <form method="POST">
            <h3>Name:</h3>
            <input type="text" required name="name" value={user.name} onChange={getuserdata}></input>
            <h3>Email:</h3>
            <input type="email" required name="email" value={user.email} onChange={getuserdata}></input>
            <h3>Number:</h3>
            <input type="number" required name="phone" value={user.phone} onChange={getuserdata}></input>
            <h3>Address:</h3>
            <input type="text" required name="address" value={user.address} onChange={getuserdata}></input>
            <h3>Message:</h3>
            <input type="text" required name="message" value={user.message} onChange={getuserdata}></input>
            <hr></hr>
            <button onClick={postform}>Submit</button>
            </form>
        </>
    )
}
export default Contact;