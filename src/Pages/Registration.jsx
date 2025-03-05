import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { RegistrationForm } from '../components/RegistrationForm';

function Registration() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Fetch the event data from the API
        axios.get('https://iei-api.cyclic.app/event/upcoming')
            .then((response) => {
                const event = response.data[0];
                if (event && event.Image) {
                    setImageUrl(event.Image);
                } else {
                    console.error('Image URL not found in API response');
                }
            })
            .catch((error) => {
                console.error('Error fetching event data:', error);
            });
    }, []);
    
    
    
    

    return (
        <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
            <section className='flex flex-col lg:flex-row justify-center items-center lg:items-start py-10'>
                <div className="lg:w-1/2">
                    {/* col1 */}
                    <h1 className="text-white font-black md:text-[46px] sm:text-[30px] xs:text-[25px] text-[30px] font-sans">
                        Register Now
                    </h1>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt=""
                            className="h-4/6 lg:h-96 mt-8 lg:block hidden"
                        />
                    )}
                </div>

                <div className="lg:w-1/2 w-9/12">
                    {/* col2 (form) */}
                    <RegistrationForm />
                </div>
            </section>
        </div>
    );
}

export default Registration;
