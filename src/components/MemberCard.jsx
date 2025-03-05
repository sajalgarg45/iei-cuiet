import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function MemberCard({ name, imgUrl, position, socialLinks, index }) {
  return (
    <Tilt className='xs:w-[250px] w-full z-[1]'>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 100 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <motion.div className='p-1 green-pink-gradient rounded-full'>
            <img src={imgUrl} alt="image" className='rounded-full h-[90px] w-[90px]' />
          </motion.div>
          <div>
            <div className='text-center text-white font-bold text-[20px]'>{name}</div>
            <div className='text-center text-secondary text-[16px]'>{position}</div>
          </div>
          <div className='flex flex-row justify-center items-center xs:gap-4 gap-10'>
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} target='_blank' className='cursor-pointer'>
                {link.name === 'Email' ? (
                  <HiOutlineMail className='text-green-300 text-lg' />
                ) : link.name === 'Github' ? (
                  <FaGithub className='text-gray-400 text-lg' />
                ) : link.name === 'linkedIn' ? (
                  <FaLinkedin className='text-blue-600 text-lg' />
                ) : link.name === 'Instagram' ? (
                  <FaInstagram className='text-pink-600 text-lg' />
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
