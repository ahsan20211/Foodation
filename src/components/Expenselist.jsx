import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
import { IoIosPlayCircle } from "react-icons/io";
import { Cardions } from './Cardicons';


// import  {Button}  from "./components/ui/Button"

export default function Expenselist() {
    const data = [
        {
            day: "Today",
            items: [
                {
                    icon: <FaShoppingCart />,
                    bg: "bg-black",
                    text: "Grocery",
                    time: new Date().toLocaleTimeString(),
                    desc: "•  Belanja di pasar",
                    price: "-326.800"

                },
                {
                    icon: <FaBus />,
                    bg: "bg-purple-500",
                    text: "Transportation    ",
                    time: new Date().toLocaleTimeString(),
                    desc: "• Naik bus umum",
                    price: "-15.000"

                },
                {
                    icon: <FaHouse />,
                    bg: "bg-amber-600",
                    text: "Housing",
                    time: new Date().toLocaleTimeString(),
                    desc: "• Bayar Listrik",
                    price: "-185.750"

                }

            ]



        },
        {

            day: "Monday, 23 March 2020",
            items: [
                {
                    icon: <BiSolidDish />,
                    bg: "bg-customRed",
                    text: "Food and Drink",
                    time: new Date().toLocaleTimeString(),
                    desc: "• Makan Steak",
                    price: "-156.000"

                },
                {
                    icon: <IoIosPlayCircle />,
                    bg: "bg-customGreen",
                    text: "Entertainment",
                    time: new Date().toLocaleTimeString(),
                    desc: "Nonton Bioskop",
                    price: "-35.200"

                }

            ]
        }
    ]

    return (
        <div>
            <div className='flex flex-col w-full'>
                {
                    data.map((dataheading, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <h1>{dataheading.day}</h1>
                                </div>
                                <div>
                                    {dataheading.items.map((item , itemindex)=>{
                                        console.log(item.icon)
                                        return(
                                            <Cardions 
                                            icon={item.icon} 
                                            color={item.bg}
                                            text={item.text}
                                            time={item.time}
                                            desc={item.desc}
                                            price={item.price}

                                            />

                                        )
                                    })}
                                </div>


                            </div>
                        )
                    })
                }
            
            </div>
        </div>

    )
}


