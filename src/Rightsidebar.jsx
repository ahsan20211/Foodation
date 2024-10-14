import React from 'react'

function Rightsidebar() {
  const progress = [{

    value: 0.9,
    text: "Food and Drinks",
    price: 872.400


  },
  {

    value: 0.7,
    text: "Housing",
    price: 928.500


  },
  {

    value: 0.5,
    text: "Transportation",
    price: 420.700


  },
  {

    value: 0.4,
    text: "Vehicle",
    price: 520.000


  }]
  return (
    <div className="flex flex-col justify-around h-screen">
      <div>
      <div className='text-sm font-bold'>Where Your Money Go?</div>

      {
        progress.map((data) => {
          return (
            <>
      

              <div className='flex flex-col justify-between'>
                <div className='flex justify-between'>

                  <p className='text-sm'>{data.text}</p>
                  <p className='text-sm'>{data.price}</p>
                </div>
                <div className='w-full'>
                  <meter value={data.value} min={0.3} max={0.9} optimum={0.5} className='w-full' ></meter>

                </div>
              </div>

        
            </>
          )
        })
      }
      </div>
      <div className="box-1 bg-customLightBlue pl-5 p
      -5  rounded-lg	">
        <div className="flex justify-between">
          <img src="src\assets\images\plant.svg" alt="" />
          <img src="src\assets\images\box.svg" alt="" />

        </div>
        <div className="content ">
          <h3 className='text-sm font-bold'>Save More Money</h3>
          <p className='text-sm'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>

        </div>
      </div>
    </div>

  )
}


export default Rightsidebar