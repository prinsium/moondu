"use client"
import { useState } from "react";
import Modal from './Modal';

export default function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return(
        <div>

            {/* for larger screens */}

            <div className="hidden md:block">
            <ul className="flex flex-row justify-evenly text-gray-300 my-2">
               
               <li className="group flex flex-row justify-center items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313]">
                       HOME
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-[2.5vw] h-[2.5vw] p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
   
                   <li className="group flex flex-row justify-center items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313]">
                       PRODUCTS
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-[2.5vw] h-[2.5vw] p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
   
                   <li className="group flex flex-row justify-center items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313]">
                       SERVICES
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-[2.5vw] h-[2.5vw] p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
   
                   <li className="group flex flex-row justify-center items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313]">
                       ABOUT US
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-[2.5vw] h-[2.5vw] p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
                   
                   <li className="group flex flex-row justify-center items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313]">
                       CONTACT
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-[2.5vw] h-[2.5vw] p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
               </ul>
            </div>

            

            {/* for smaller screens */}

            <div className="block md:hidden">
            
            <div className='flex fixed top-4 right-2 z-20'>

            <button
        onClick={isModalOpen ? closeModal : openModal}
        className="absolute top-2 right-2 text-[#ededed] rounded-full"
      >
        {/* {isModalOpen ? 'Close Modal' : 'Open Modal'} */}

        
                    <svg className={`w-5 h-5 ${isModalOpen ? 'rotate-45' : 'rotate-0'}`} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3683 8.19388C10.0453 8.19388 8.93756 9.25122 8.93756 10.5805V15.8067H8.44525V10.5805C8.44525 9.25122 7.33756 8.19388 5.98371 8.19388H0.691406V7.71052H5.98371C7.33756 7.68031 8.44525 6.62297 8.41448 5.29374V0.0976562H8.93756V5.29374C8.93756 6.62297 10.0453 7.68031 11.3683 7.68031H16.6914V8.19388H11.3683Z" fill="currentColor"></path>
              </svg>
      </button>
              
              
              <Modal isOpen={isModalOpen} onClose={closeModal}>

                <ul className="flex flex-col justify-evenly text-gray-300 my-2">
               
               <li className="group flex flex-row justify-start items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313] text-xl font-medium">
                       HOME
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-8 h-8 p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
   
                   <li className="group flex flex-row justify-start items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313] text-xl font-medium">
                       SERVICES
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-8 h-8 p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
   
                   <li className="group flex flex-row justify-start items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313] text-xl font-medium">
                       SERVICES
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-8 h-8 p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
   
                   <li className="group flex flex-row justify-start items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313] text-xl font-medium">
                       ABOUT US
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-8 h-8 p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
                   
                   <li className="group flex flex-row justify-start items-center gap-2">
                       <span className="group-hover:bg-red-300 px-2.5 py-1.5 rounded-full group-hover:text-[#131313] text-xl font-medium">
                       CONTACT
                       </span>
                   <div className="invisible group-hover:visible">
   
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#131313" class="transition ease-out delay-150 duration-200 group-hover:rotate-45 w-8 h-8 p-1 bg-red-300 rounded-full">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                       </svg>
   
                   </div>
                   </li>
               </ul>

                </Modal>
                </div>
            
            </div>

        </div>
    )
}