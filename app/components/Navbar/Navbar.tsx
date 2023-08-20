import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-md'>
        <div className=' border-b-[2px]'>
            <Container>
                <div 
                    className='
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0

                    '
                >
                    <Logo/>
                    <Search/>
                    <UserMenu/>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar