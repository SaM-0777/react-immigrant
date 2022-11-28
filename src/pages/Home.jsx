import { Link } from 'react-router-dom';

import { NavBar } from '../components';

import migrationData from '../assets/data/migrationData.json';
import AboutMigrationImg1 from '../assets/images/About Migration.jpg';
import AboutMigrationImg2 from "../assets/images/migration2ndrevision1.jpg";
import NRI from "../assets/images/NRI.jpg";
import OCI from "../assets/images/OCI.jpg";
import POI from "../assets/images/POI.jpg";
import IndianDiaspora from "../assets/images/Indian Diaspora.svg";


function Home({  }) {
  return (
    <div className="bg-white sm:px-10 px-10 w-full overflow-hidden">
      <NavBar />
      <div className="w-full flex item-center">
        <div className="w-full mx-auto">
          <div className="text-justify text-[24px] font-serif">
            This website aims to assist its visitors by giving them information
            on Indians who have immigrated to other nations. 
          </div>
          <img src={AboutMigrationImg2} alt="img" className='max-w-full h-auto rounded-lg mb-5' />
          {/*<img src={IndianDiaspora} alt="img" className='max-w-full h-auto rounded-lg my-5 px-[10px]' />*/}
          <div className='text-justify text-[16px] font-serif' >
            The Diaspora encompasses a group of people who can either trace their origins to India or who are Indian citizens living abroad, either temporarily or permanently.
            It includes Non-Resident Indians (NRIs), Persons of Indian Origin (PIOs) and Overseas Citizens of India (OCI). PIO and OCI card holders were merged under OCI category in 2015.
          </div>
          <img src={NRI} alt="img" className='max-w-full h-auto rounded-lg my-5 px-[10px]' />
          <div className='text-justify text-[16px] font-serif' >
            An Indian citizen who is ordinarily residing outside India and holds an Indian Passport.
            A person is considered NRI if She is not in India for 182 days or more during the financial year or
            If he/she is in India for less than 365 days during the 4 years preceding that year and less than 60 days in that year.
            Indian example of large-scale migration began during the British rule as indentured laborers to former colonies like Fiji, Kenya and Malaysia.
            Today the Indian diaspora numbers over 20 million, reflecting the full multiplicity, variety of the rich social, ethnic and cultural tapestry of the land of its origin.
          </div>
          <img src={OCI} alt="img" className='max-w-full h-auto rounded-lg my-5 px-[10px]' />
          <div className='text-justify text-[16px] font-serif' >
            A person with OCI status is not an Indian citizen. The person does not have voting rights in India, nor can contest elections or hold any constitutional office.
            An Overseas Citizen of India is however entitled to some benefits such as a multiple-entry, multi-purpose life-long visa to visit India.
            They are exempted from police reporting for any length of stay in the country.
            They are also granted all rights in parity with NRIs except, the right to acquisition of agricultural or plantation properties.
          </div>
          <img src={POI} alt="img" className='max-w-full h-auto rounded-lg my-5 px-[10px]' />
          <div className='text-justify text-[16px] font-serif' >
            Until recently, the term "person of Indian origin" (PIO) was used to refer to any foreigner (apart from citizens of Pakistan, Afghanistan, Bangladesh, China, Iran, Bhutan, Sri Lanka, and/or Nepal) who:
            possessed a passport issued by India at any moment (but not currently) or
            If neither of their parents, grandparents, or great-grandparents was ever a citizen of any of the aforementioned nations and they were born and have lived permanently in India as defined by the Government of India Act of 1935 and other areas that joined India afterward (as referred above) or is a PIO or the spouse of an Indian national.
            On September 28, 2014, Indian Prime Minister Narendra Modi declared that PIO and OCI cards would be combined. The Person of Indian Origin Card system was discontinued by the Indian government on January 9, 2015, and it was combined with the Overseas Citizen of India card program. PIO cardholders who want to change their current cards into OCI cards must apply. According to the Bureau of Immigration, outdated PIO cards will still be recognized as legitimate travel documents till December 31, 2022.
          </div>
        </div>
        {/*<div className="w-3/12">
          /*{/*<img src={AboutMigrationImg2} alt="img" className='max-w-full h-auto rounded-lg mb-5' />
          <Link to={'/country'} >
            <img src={AboutMigrationImg1} alt="img" className='max-w-full h-auto rounded-lg' />
          </Link>
        </div>*/}
      </div>
    </div>
  );
};


export default Home;

