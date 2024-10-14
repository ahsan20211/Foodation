import Mainsect from "./mainsect"
import Rightsidebar from "./Rightsidebar"

function Products() {
  return (
    <div className="flex bg-white w-full	m-4 rounded-lg ">
      <div className='w-[70%] mr-14 p-10'>
        <Mainsect/>

      </div>
      <div className="w-[30%] bg-custome h-screen rounded-r-lg p-10	">

          <Rightsidebar/> 
      </div>
        
    </div>


  )
}

export default Products     