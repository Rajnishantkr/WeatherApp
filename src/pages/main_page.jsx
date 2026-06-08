import { Plus, Bolt, Leaf,CalendarDays ,Cloudy} from 'lucide-react';

export default function MainPage() {
    return (
        <div className="  h-screen bg-gradient-to-r from-blue-400 to-blue-300 flex flex-col items-center rounded-2xl">
            <div className="w-screen h-10 flex items-center relative"> 
                <Plus className="  w-8 h-8 m-2 text-gray-1000 mt-3 " />
                <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold mt-3">City</h1>
                <Bolt className="  mt-3 w-8 h-8 m-2 text-gray-1000 ml-auto" />
            </div>
            <div className="w-screen h-screen ">

                <div className="w-screen  mt-30 flex items-center justify-center ">
                    <h1 className="text-7xl font-bold text-white">36°C</h1> 
                </div>

                <div className="w-screen  mt-2 flex flex-col items-center "> 
                 <p className="text-2xl  text-gray-600">
                    Sunny 36°/26°
                 </p>

                 <p className="text-sm bg-gray-300 
                    h-8 w-21 font-normal flex items-center gap-1
                    justify-center mt-2 text-gray-600 rounded-3xl">
                    <Leaf size={20}/>AQI 95
                 </p>
                </div>

                <div className=" h-47 mx-3 bg-gradient-to-r
                     from-blue-300 to-blue-400 
                     rounded-2xl mt-6">
                    <div className='flex'>
                        <CalendarDays size={16} className='ml-2 mt-3 text-gray-600'/>
                        <p className='text-normal text-gray-500 mt-2 ml-1'>5-day forecast</p>
                    </div>

                    <div className='flex '>  
                        <Cloudy size={20} className='ml-2 mt-1 text-gray-800'/>
                         <p className='text-normal text-gray-800 mt-1 ml-2 '>Today Cloudy</p>
                        <p className='text-normal text-gray-800 mt-1 ml-auto mr-2'>32°/24° </p>
                    </div>

                    <div className='flex'>  
                        <Cloudy size={20} className='ml-2 mt-1 text-gray-800'/>
                         <p className='text-normal text-gray-800 mt-1 ml-2'>Today Cloudy</p>
                        <p className='text-normal text-gray-800 mt-1 ml-auto mr-2'>32°/24° </p>
                    </div>

                    <div className='flex '>  
                        <Cloudy size={20} className='ml-2 mt-1 text-gray-800'/>
                         <p className='text-normal text-gray-800 mt-1 ml-2'>Today Cloudy</p>
                        <p className='text-normal text-gray-800 mt-1 ml-auto mr-2'>32°/24° </p>
                    </div>

                     <div className='flex h-12 items-center justify-center mt-3 bg-gray-300 rounded-3xl mx-2'>
                        <button className=' text-xl text-gray-800'>
                            5-day forecast</button>
                     </div>
                </div>
                  
            </div>
        </div>
    )
}