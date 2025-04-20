"use client";
import React from "react";
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon, RssIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


function SideBar() {

  const {data: session , status} = useSession();

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        
        {/* <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
        > */}
          <Link href="/api/auth/signout" callback="http://localhost:3000/" className="flex items-center space-x-2 hover:text-white">Sign Out</Link>
          
          
          {/* <p>Log out</p>
        </button> */}

        <button className="flex items-center space-x-2 hover:text-white">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <BuildingLibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Placeholder for playlists */}
        <p className="hover:text-white cursor-pointer">Playlists Name..........</p>
        <p className="hover:text-white cursor-pointer">Playlists Name..........</p>
      </div>
    </div>
  );
}

export default SideBar;