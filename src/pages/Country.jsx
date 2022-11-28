import { useState } from 'react';

import { NavBar, SideBar, DoughnutChart } from '../components';

import data from '../assets/data/data.json';
import migrationData from "../assets/data/migrationData.json";
import AmericaPic from '../assets/images/America.jpeg';
import UKPic from '../assets/images/UK.jpeg'
import AustraliaPic from '../assets/images/Australia.jpeg';
import CanadaPic from '../assets/images/Canada.jpeg';
import JapanPic from '../assets/images/Japan.jpeg';
import MalaysiaPic from "../assets/images/Malaysia.jpeg";
import NewZealandPic from "../assets/images/New Zealand.jpeg";
import SouthAfricaPic from "../assets/images/South Africa.jpeg";
import SriLankaPic from "../assets/images/Sri Lanka.jpeg";


const Images = {
  America: AmericaPic,
  // UK: UKPic,
  Australia: AustraliaPic,
  Canada: CanadaPic,
  Japan: JapanPic,
  Malaysia: MalaysiaPic,
  "New Zealand": NewZealandPic,
  "South Africa": SouthAfricaPic,
  "Srilanka": SriLankaPic,
}


function Country({ }) {
  const [dataSet, setDataSet] = useState(data)
  const [selectedCountry, setSelectedCountry] = useState("America")

  return (
    <div className="w-full">
      <div className="sm:px-10 px-10">
        <NavBar />
      </div>
      <div className="flex">
        <SideBar data={dataSet} selectedCountry={selectedCountry} setCountry={setSelectedCountry} />
        <div className="w-9/12 mx-5">
          <DoughnutChart dataSet={dataSet[selectedCountry]} />
          {Images[selectedCountry] && <img src={Images[selectedCountry]} alt="country" className="p-1 bg-white border rounded max-w-full h-auto self-center" />}
          <div className="text-justify font-serif font-normal text-lg" >
            {migrationData[selectedCountry]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country