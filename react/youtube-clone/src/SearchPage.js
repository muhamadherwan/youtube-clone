import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s88-c-k-c0x00ffffff-no-rj'
                channel='Hendri Helmi'
                verified=''
                subs='727'
                noOfVideos={92}
                description='This is official channel YouTube Hendri Helmi.'
            />


        </div>
    )
}

export default SearchPage
