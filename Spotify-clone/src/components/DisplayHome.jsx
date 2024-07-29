import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbumItems from './AlbumItems'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'
const DisplayHome = () => {
  const {songsData, albumsData} = useContext(PlayerContext)
  return (
   <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItems key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />))}
        </div>
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-y-scroll'>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />))}
        </div>
    </div>
   </>
  )
}

export default DisplayHome
