import ticketBg from "/images/pattern-ticket.svg";
import logo from "/src/assets/logo-full.svg";
import logoGithub from "/src/assets/icon-github.svg";
import avatar from "/images/image-avatar.jpg"
import { useMemo } from "react";

const date = new Date();
const dayNumeric = new Intl.DateTimeFormat('en-US',{day:'numeric',month:'short'}).format(date);
const year = new Intl.DateTimeFormat('en-US',{year:'numeric'}).format(date);
const finalDate = dayNumeric +', '+year;
console.log(finalDate);
export function TextSecondPage({Username,UserAddress}) {
  return (
    <div>
      <div className='space-y-8 '>
        <p className='text-center font-bold text-5xl text-white '>
          Congrats,<span className='bg-clip-text text-transparent bg-linear-to-r from-[var(--Orange-500)] to-white'>{Username}!</span><br /> Your ticket is ready.
        </p>
        <p className='text-center text-neutral-300 '>we've emailed your ticket to <br /><span className='bg-clip-text text-transparent bg-linear-to-r from-[var(--Orange-500)] to-white'>{UserAddress}</span> and will send updates <br />in the run up to the event.</p>
      </div>
    </div>
  )
}

export function Ticket({Username,UserAddress,Github,image}){
  const id = useMemo(()=>{
    let generated = "#"
    for(let i=0;i<6;i++){
      generated += Math.floor(Math.random()*10).toString(); 
    }
    return generated;
  },[])
  console.log(id)
  return(
  <div className="grid grid-cols-1 grid-rows-1 w-[600px] h-[280px] rounded-lg overflow-hidden shadow-md mt-20 ">
      
      <img 
        src={ticketBg} 
        alt="" 
        className="col-start-1 row-start-1 w-full h-full object-contain" 
      />

      <div className="col-start-1 row-start-1 p-1 z-10 text-slate-800 flex flex-col justify-between   ">
       <div className='flex justify-between h-full p-1   px-2 m-0 '>
          <div className="   p-0 flex flex-col justify-between ">
            <div className='flex flex-col justify-start  '>
              <div className=' '>
                <img src={logo} alt="" className='h-10' />
              </div>
              <div className='ml-16'>
              
                <span className='text-md font-light text-white '>
                  {finalDate}/Austin , TX
                </span>
                </div>
            </div>
            <div className='flex space-x-2 text-white justify-start  items-center '>
              <div>
                <img src={image? image: avatar} alt="" className='h-12 rounded-md '/>
              </div>
              <div className='flex flex-col text-2xl font-bold '>
                <span>{Username}</span>
                <div className='flex w-full  text-sm font-light  '>
                  <img src={logoGithub} alt="" className=''/>
                  <span className='w-full  whitespace-nowrap '>{Github}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center  '>
            <div className='text-2xl flex  h-20 w-20 justify-center items-center rotate-90   text-white/20 font-bold '>
                          {id}
            </div>
          </div>
       </div>
      </div>

    </div>
  )
}

