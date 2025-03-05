import React from 'react';
import useStorage from './useStorage';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProgressBar = ({file,setFile}) =>{
    const{ url ,progress } = useStorage(file);
    console.log(progress,url);

    useEffect(() =>{
        if(url){
            setFile(null);
        }
    },[url,setFile])

    return (
        <motion.div className='progress-bar'
        initial={{width:0}}
        animate={{width: progress+'%'}}
        >
        </motion.div>
    )
}

export default ProgressBar;