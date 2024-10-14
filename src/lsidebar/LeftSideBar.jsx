import React from 'react'
// import { Link } from "react-router-dom";


import logo from '../assets/images/Profile.png'

const LeftSideBar = () => {

//   const routes = [
//     {
//        name:"Dashboard",
//        link:"/Dashboard"
//     },
//     {
//       name:"Expenses",
//       link:"/Expenses"
//    },
//    {
//     name:"Wallets",
//     link:"/Wallets"
//  },
//   {
//   name:"Summary",
//   link:"/Summary"
// },
//   {
//   name:"Accounts",
//   link:"/Account"

// },
//   {
//   name:"Settings",
//   link:"/Settings"
// },
//   ]

const routes = [

"Dasshboard","Expenses","Wallets","Summmary","Accounts","Settings"

]


    
  return (

                <div className='py-8 bg-black w-64 px-10 h-screen flex-col flex justify-center rounded-3xl'>
                    <div className='logo'>
                <img src={logo} alt="ahsan"/> 
                </div>
               <div className='content mt-8'> 
                <h3 className='text-xl  text-white font-semibold'>Samantha</h3>
                <h4 className='text-white opacity-50 '>samantha@email.com</h4>
                   </div>

                   <div className='menu '> 
                   <ul className='text-white opacity-50 py-14  '>
                       { 
                        routes.map((route)=>(
                            <li  className='py-1'>{route}</li>
                          )
                        )
                       }

                   </ul>
                  </div>
                </div>
);
}

export default LeftSideBar