import { BiSearch } from 'react-icons/bi';

function SideBar({ data, setCountry, selectedCountry  }) {
  
  function onClickCountry(key) { setCountry(key) }

  return (
    <div className="px-4 w-[300px]">
      {/*<div className="flex items-center rounded-md border-[2px] border-cyan-300 px-2">
        <input
          className="px-2 w-[240px] h-[32px] text-sm font-poppins cursor-pointer focus:outline-none active:border-0"
          placeholder="Search"
          type="text"
        />
        <BiSearch className="cursor-pointer" />
      </div>*/}
      <ul className="no-list ">
        {Object.keys(data).map((item, i) => (
          <li
            key={i.toString()}
            onClick={() => onClickCountry(item)}
            className={`${selectedCountry === item ? 'bg-cyan-400 text-white' : ''} w-full mt-4 h-[40px] flex items-center font-poppins border-[2px] rounded-md hover:bg-cyan-300 active:bg-cyan-500 hover:text-white hover:border-0 cursor-pointer px-1`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar