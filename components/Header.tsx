import React from "react";
import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,   
    SpeakerphoneIcon,
    VideoCameraIcon,
} from "@heroicons/react/outline";
import {  
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react"


function Header() {
  const { data: session } = useSession();

  return (
    <div className=" sticky-top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
          layout="fill"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-grey-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="search"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="mx-5 my-2 flex lg:hidden">
    <div className="space-y-2">
      <span className="block w-8 h-0.5 bg-gray-500 animate-pulse" />
      <span className="block w-8 h-0.5 bg-gray-500 animate-pulse" />
      <span className="block w-8 h-0.5 bg-gray-500 animate-pulse" />
    </div>
    </div>

    {/* Sign In / Sign Out */}
    {session ? (
       <div onClick={() => signOut()} className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
       <div className="relative h-5 w-5 flex-shrink-0">
       <Image objectFit="contain"
       src="https://cdn-icons-png.flaticon.com/512/1946/1946543.png" 
       layout="fill" 
       alt=""  />
       </div>
       <p className="text-gray-400">Sign Out</p>
     </div>

    ): (
      <div onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image 
            objectFit="contain"
            src="https://cdn-icons-png.flaticon.com/512/1946/1946543.png" 
            layout="fill" 
            alt=""  
      />
      </div>

      <p className="text-gray-400">Sign In</p>
      
    </div>
    )}    
    </div>
  );
}

export default Header;
