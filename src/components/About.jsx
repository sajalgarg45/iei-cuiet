import React from 'react'

function About() {
    return (
        <div>
            <section className='sm:px-20 xl:px-36 px-10 bg-bg w-full pt-14 pb-14 h-[100vh] flex'>
                <div className='flex flex-col py-11 w-[60%] gap-6 pr-9 justify-evenly'>
                    <h1 className='text-white sm:text-left font-poppins font-bold text-[44px] text-center mb-4'>About IE(I)</h1>
                    <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>The Institution of Engineers (India) [IEI] Student Chapter, Chitkara University is one of the growing technical society in the university.</p>
                    <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>The society has been giving back to back successful events which have proved to be really helpful for the participants and also given them an opportunity to explore more and have a clear direction for their goals.</p>
                    <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>It is one of those societies that believe in giving fair chances to everyone regardless of your year of study and thus, open core team interviews for all those who firmly believe in dedication and are willing to work for the growth of the society.</p>
                    <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>The society also provides the members with certificates for their hard work and the efforts they put in for boosting their confidence which ultimately leads to a healthy work culture.</p>
                </div>
                <div className='green-pink-gradient h-full w-[40%] rounded-md'>
                </div>
            </section>
        </div>
    )
}

export default About
