import Image from "next/image";

export default function MidSec(){
    return(
        <div className="w-full h-full rounded-t-3xl py-[10vh] px-4 md:px-8 lg:px-12 bg-[#131313]">
            <h2 className="w-full md:w-[90vw] lg:w-[70vw]">
                OUR SPECIAL PROGRAMS FOR YOUR&nbsp; 
                <span className="bg-lime-500 p-2 rounded-full"><span className="bg-lime-500 w-fit h-fit px-4 md:px-8 lg:px-12 text-[#131313] border-dashed border-4 border-[#131313] rounded-full">EDUCTAION</span></span>
            </h2>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-12 my-12">
                
                <div className="relative bg-[#6033ae] rounded-[28px] w-fit gap-x-4">

                <div className="absolute rounded-[24px] w-full h-full flex flex-row justify-between p-4 z-10">

                <div className="flex flex-col justify-end">
                <h3 className="text-gray-900">Virtual Class</h3>
                <p className="text-gray-800">Provide online tutoring services to students of all ages and educational level</p>
                </div>

                </div>

                    <div className="w-fit h-fit">
                    <Image className='rounded-3xl object-contain' src='/images/camera.png' width={2000} height={2000} />
                    </div>

                </div>

                <div className="relative bg-[#6033ae] rounded-[28px] w-fit gap-x-4">

                <div className="absolute rounded-[24px] w-full h-full flex flex-row justify-between p-4 z-10">

                <div className="flex flex-col justify-end">
                <h3 className="text-gray-200">Scholarship Program</h3>
                <p className="text-gray-300">Provide online tutoring services to students of all ages and educational level</p>
                </div>

                </div>

                    <div className="w-fit h-fit">
                    <Image className='rounded-3xl object-contain' src='/images/scholar.png' width={2000} height={2000} />
                    </div>

                </div>

                <div className="relative bg-[#6033ae] rounded-[28px] w-fit gap-x-4">

                <div className="absolute rounded-[24px] w-full h-full flex flex-row justify-between p-4 z-10">

                <div className="flex flex-col justify-end">
                <h3 className="text-gray-900">Students Program</h3>
                <p className="text-gray-800">Provide online tutoring services to students of all ages and educational level</p>
                </div>

                </div>

                    <div className="w-fit h-fit">
                    <Image className='rounded-3xl object-contain' src='/images/pie.png' width={2000} height={2000} />
                    </div>

                </div>

            </div>

            <h2 className="w-full justify-center">
                OUR PROGRAMS ARE &nbsp; 
                <span className="rotate-45 bg-sky-500 p-2 rounded-full"><span className="bg-sky-500 w-fit h-fit px-4 md:px-8 lg:px-12 text-[#131313] border-dashed border-4 border-[#131313] rounded-full">EASY</span></span>
                &nbsp; TO USE AND USEFUL FOR THE FUTURE
            </h2>
        </div>
    )
}