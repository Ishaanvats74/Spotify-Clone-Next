import React from 'react';
import {HomeIcon , MagnifyingGlassIcon , BuildingLibraryIcon , PlusCircleIcon, HeartIcon, RssIcon} from '@heroicons/react/24/outline';

function SideBar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900 '>
        <di className='space-y-4'>

            <button className='flex items-center space-x-2 hover:text-white '>
                <HomeIcon className='h-5 w-5' />
                <p>Home</p>
            </button>

            <button className='flex items-center space-x-2 hover:text-white '>
                <MagnifyingGlassIcon className='h-5 w-5' />
                <p>Search</p>
            </button>

            <button className='flex items-center space-x-2 hover:text-white '>
                <BuildingLibraryIcon className='h-5 w-5' />
                <p>Your Library</p>
            </button>

            <hr className='border-t-[0.1px] border-gray-900 '/>


            <button className='flex items-center space-x-2 hover:text-white '>
                <PlusCircleIcon className='h-5 w-5' />
                <p>Create Playlist </p>
            </button>


            <button className='flex items-center space-x-2 hover:text-white '>
                <HeartIcon className='h-5 w-5' />
                <p>Liked Songs</p>
            </button>

            <button className='flex items-center space-x-2 hover:text-white '>
                <RssIcon className='h-5 w-5' />
                <p>Your Episodes</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900 '/>


            {/* Playlists....... */}
        <p className='hover:text-white cursor-pointer'>Playlists Name..........</p>
        <p className='hover:text-white cursor-pointer'>Playlists Name..........</p>
        <p className='hover:text-white cursor-pointer'>Playlists Name..........</p>
        <p className='hover:text-white cursor-pointer'>Playlists Name..........</p>
        <p className='hover:text-white cursor-pointer'>Playlists Name..........</p>
        <p className='hover:text-white cursor-pointer'>Playlists Name..........</p>


        </di>
    </div>
  )
}

export default SideBar