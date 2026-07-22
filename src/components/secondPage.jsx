import ticketBg from "/images/pattern-ticket.svg";
import logo from "/src/assets/logo-full.svg";
import logoGithub from "/src/assets/icon-github.svg";
import avatar from "/images/image-avatar.jpg"
import { useMemo } from "react";

const date = new Date();
const dayNumeric = new Intl.DateTimeFormat('en-US',{day:'numeric',month:'short'}).format(date);
const year = new Intl.DateTimeFormat('en-US',{year:'numeric'}).format(date);
const finalDate = dayNumeric +', '+year;

export function TextSecondPage({Username,UserAddress}) {
  return (
    <div>
      <div className='space-y-8 '>
        <h1 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white '>
          Congrats,<span className='bg-clip-text text-transparent bg-linear-to-r from-[var(--Orange-500)] to-white'>{Username}!</span><br /> Your ticket is ready.
        </h1>
        <p className='text-center text-sm sm:text-base text-neutral-300 '>we've emailed your ticket to <br /><span className='bg-clip-text text-transparent bg-linear-to-r from-[var(--Orange-500)] to-white'>{UserAddress}</span> and will send updates <br />in the run up to the event.</p>
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
  return(
  <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[600px] h-auto sm:h-[280px] rounded-lg overflow-hidden shadow-md mt-10 sm:mt-20 ">
      
      <img 
        src={ticketBg} 
        alt="" 
        className="col-start-1 row-start-1 w-full h-full object-contain" 
      />

      <div className="col-start-1 row-start-1 p-1 z-10 text-slate-800 flex flex-col justify-between   ">
       <div className='flex justify-between h-full p-1 px-2 m-0 '>
          <div className="p-0 flex flex-col justify-between ">
            <div className='flex flex-col justify-start  '>
              <div className=' '>
                <img src={logo} alt="" className='h-7 sm:h-10' />
              </div>
              <div className='ml-10 sm:ml-16'>
              
                <span className='text-xs sm:text-md font-light text-white '>
                  {finalDate}/Austin , TX
                </span>
                </div>
            </div>
            <div className='flex space-x-2 text-white justify-start items-center '>
              <div>
                <img src={image? image: avatar} alt="" className='h-10 sm:h-12 rounded-md '/>
              </div>
              <div className='flex flex-col text-lg sm:text-2xl font-bold '>
                <span className='truncate'>{Username}</span>
                <div className='flex w-full text-xs sm:text-sm font-light  '>
                  <img src={logoGithub} alt="" className=''/>
                  <span className='w-full truncate'>{Github}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center  '>
            <div className='text-lg sm:text-2xl flex h-14 w-14 sm:h-20 sm:w-20 justify-center items-center rotate-90 text-white/20 font-bold '>
                          {id}
            </div>
          </div>
       </div>
      </div>

    </div>
  )
}
