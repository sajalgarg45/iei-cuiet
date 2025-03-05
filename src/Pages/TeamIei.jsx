import React from 'react'
import '../styles/team.css'
import TeamName from '../components/TeamName'
import MemberCard from '../components/MemberCard'
import {coHeads, coreTeam, webDeveloper} from '../utils/teamData'
import {Heads} from '../utils/teamData'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function TeamIei() {
  return (
    <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
      <h1 className="sm:text-[16px] text-[12px] text-secondary uppercase tracking-wider">
        <span className='text-secondary'>Meet Our Team</span>
      </h1>
      <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-sans">
        Team IE<span className='text-yellow-500'>(</span>I<span className='text-yellow-500'>)</span>
      </h1>

      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Faculty"/>
        <div className='mt-20 flex gap-10 justify-center items-center sm:flex-row w-full flex-col'>
          <img src='https://res.cloudinary.com/dnxud81bz/image/upload/v1698694379/WhatsApp_Image_2023-10-31_at_1.01.20_AM_oxda3v.jpg' className='sm:w-[40%] bg-black lg:min-h-[50vh] rounded-2xl w-[80%]'/>
          <div className='w-full min-h-[40vh] text-white flex flex-col justify-evenly items-center sm:items-start gap-6'>
            <h1 className='text-[30px] font-poppins font-medium'>Dr. Yogesh</h1>
            <h1 className='text-[18px] font-poppins font-normal text-gray-400 text-center sm:text-left'>Lead, Society IE(I) CSE Student Chapter</h1>
            <p className='text-[16px] text-center sm:text-left'>Dr. Yogesh is an Assistant Professor-III in the Department of CSE at Chitkara University, Punjab, India, with over 10 years of teaching experience. He has an impressive track record, having filed 27 patents and published 56 research papers in renowned international conferences and journals indexed in SCI/Scopus. In 2021, he was honored with the "Best Researcher Award" at the International Scientist Awards on Engineering, Science, and Medicine. In 2017, he won the Best Paper Award at the IEEE conference ICRITO. Dr. Yogesh has also earned a Digital Badge from IBM.</p>
            <div className='flex flex-row justify-center items-center xs:gap-4 gap-10 mt-3'>
            <a href="https://www.linkedin.com/in/dr--yogesh/" target='_blank' className='cursor-pointer'>
              <FaLinkedin className='text-blue-600 text-[26px]'/>
            </a>
            <a href="mailto:yogesh.1135@chitkara.edu.in" target='_blank' className='cursor-pointer'>
              <HiOutlineMail className='text-green-300 text-[26px]'/>
            </a>
          </div>
          </div>
        </div>
        <div className='mt-20 flex gap-10 justify-center items-center sm:flex-row w-full flex-col'>
          <img src='https://res.cloudinary.com/dnxud81bz/image/upload/v1698694379/WhatsApp_Image_2023-10-31_at_1.01.20_AM_oxda3v.jpg' className='sm:w-[40%] bg-black lg:min-h-[50vh] rounded-2xl w-[80%]'/>
          <div className='w-full min-h-[40vh] text-white flex flex-col justify-evenly items-center sm:items-start gap-6'>
            <h1 className='text-[30px] font-poppins font-medium'>Dr. Yogesh</h1>
            <h1 className='text-[18px] font-poppins font-normal text-gray-400 text-center sm:text-left'>Lead, Society IE(I) CSE Student Chapter</h1>
            <p className='text-[16px] text-center sm:text-left'>Dr. Yogesh is an Assistant Professor-III in the Department of CSE at Chitkara University, Punjab, India, with over 10 years of teaching experience. He has an impressive track record, having filed 27 patents and published 56 research papers in renowned international conferences and journals indexed in SCI/Scopus. In 2021, he was honored with the "Best Researcher Award" at the International Scientist Awards on Engineering, Science, and Medicine. In 2017, he won the Best Paper Award at the IEEE conference ICRITO. Dr. Yogesh has also earned a Digital Badge from IBM.</p>
            <div className='flex flex-row justify-center items-center xs:gap-4 gap-10 mt-3'>
            <a href="https://www.linkedin.com/in/dr--yogesh/" target='_blank' className='cursor-pointer'>
              <FaLinkedin className='text-blue-600 text-[26px]'/>
            </a>
            <a href="mailto:yogesh.1135@chitkara.edu.in" target='_blank' className='cursor-pointer'>
              <HiOutlineMail className='text-green-300 text-[26px]'/>
            </a>
          </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Core Team"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {coreTeam.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index} key={index}/>))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Heads"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {Heads.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index} key={index}/>))}
        </div>
    </section>
    
        {/* <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Co Heads"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {coHeads.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index} key={index}/>))}
        </div>
      </section> */}
      {/* <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Web Developer"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {webDeveloper.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index} key={index}/>))}
        </div>
      </section> */}

    </div>
  )
}

export default TeamIei