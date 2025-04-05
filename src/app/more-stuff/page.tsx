import { moreStuff } from "../consts";
import Image from "next/image";

export default function MoreStuff() {
  return (
    <div className="relative w-full h-full my-10 px-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="col-span-1 flex lg:justify-start justify-center items-center">
          <div className="relative group">
            <Image 
              src={moreStuff[0].image} 
              alt={moreStuff[0].name} 
              width={600} 
              height={600} 
              className="group-hover:opacity-30 transition-opacity duration-300 shadow-lg shadow-black"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black text-2xl text-center px-4 font-extrabold">
                {moreStuff[0].name}
              </p>
              <p className="text-black text-4xl text-center px-4 font-extrabold">
                {moreStuff[0].description}
              </p>
              <Image 
                src={moreStuff[0].image2 || ''} 
                alt={moreStuff[0].name} 
                width={350} 
                height={350} 
                className="mt-10"
              />
            </div>
          </div>
        </div>
        
        <div className="col-span-1 flex lg:justify-end justify-center items-center">
          <div className="relative group">
            <Image 
              src={moreStuff[1].image} 
              alt={moreStuff[1].name} 
              width={600} 
              height={600} 
              className="group-hover:opacity-30 transition-opacity duration-300 shadow-lg shadow-black"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black text-2xl text-center px-4 font-extrabold">
                {moreStuff[1].name}
              </p>
              <p className="text-black text-4xl text-center px-4 font-extrabold">
                {moreStuff[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}