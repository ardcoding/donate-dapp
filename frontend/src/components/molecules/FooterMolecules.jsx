import React from 'react'
import DetailIcon from '../atoms/DetailIcon'
import HomeIcon from '../atoms/HomeIcon'
import ProfileIcon from '../atoms/ProfileIcon'

export default function FooterMolecules() {
  return (
    <div className='flex-end flex absolute bottom-0 w-screen justify-around'>
    <DetailIcon />
    <HomeIcon />
    <ProfileIcon />
    </div>
  )
}
