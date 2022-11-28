import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';


function NavBar({ }) {
  const [toggle, setToggle] = useState(false)

  function onClickToggle () { setToggle(prevState => !prevState) }

  return (
    <nav className='bg-[#FFF] flex py-6 justify-between items-center navbar' >
      <ul className='list-none sm:flex hidden justify-start items-center flex-1' >
        <li className='nav-link cursor-pointer text-[20px] mr-10 font-poppins font-normal' ><Link to={'/'} >Home</Link></li>
        <li className='nav-link cursor-pointer text-[20px] font-poppins font-normal' ><Link to={'/Country'} >Country</Link></li> 
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center' >
        {toggle ? <FaBars onClick={onClickToggle} /> : <IoClose onClick={onClickToggle} />}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >
          <ul className='list-none flex-col hidden justify-start items-center flex-1' >
            <li className='nav-link cursor-pointer text-[20px] font-poppins font-normal' ><Link to={'/'} >Home</Link></li>
            <li className='nav-link cursor-pointer text-[20px] font-poppins font-normal' ><Link to={'/Country'} >Country</Link></li> 
          </ul>
        </div>
      </div>
    </nav>
  )
};


export default NavBar;

