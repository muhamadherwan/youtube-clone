import React from 'react'
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos() {
    return (
        <div className='recommendedVideos'>
            <h2>Recommended</h2>

            <div className='recommendedVideos__videos'>
                
                <VideoCard 
                title="MUSTARD SIX - BHAG"
                views='32 Views'
                timestamp='2 weeks ago'
                channelImage='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s176-c-k-c0x00ffffff-no-rj-mo'
                channel='Hendri Helmi'
                image='https://i.ytimg.com/an_webp/7OvL70lszSo/mqdefault_6s.webp?du=3000&sqp=CKDwo_wF&rs=AOn4CLCkclgaNh9EJIJvikEWUuSSSRmgaQ'
                />

                <VideoCard 
                title="MV Cover Ku dihalaman Rindu - lefthanded"
                views='926 Views'
                timestamp='4 months ago'
                channelImage='https://yt3.ggpht.com/a/AATXAJweAJDfc2ut5DezfaP1bRSGtGXGiAv7QKzT0n4H=s88-c-k-c0x00ffffff-no-rj'
                channel='Studio Bawah Tanah'
                image='https://i.ytimg.com/an_webp/meVwg0E8CH0/mqdefault_6s.webp?du=3000&sqp=CKSZpPwF&rs=AOn4CLAqwcfNlMeny-hM5MGglGapn51j6Q'
                />

                <VideoCard 
                title="My Chemical Romance - Im Not Okay (I Promise)..."
                views='591K Views'
                timestamp='2 years ago'
                channelImage='https://yt3.ggpht.com/a/AATXAJyhuo2TAAQhLO1URo8Wlzi1i9oFGx2aUdqxJMA-Mw=s88-c-k-c0x00ffffff-no-rj'
                channel='My Chemical Romance'
                image='https://i.ytimg.com/an_webp/dhZTNgAs4Fc/mqdefault_6s.webp?du=3000&sqp=CJXwo_wF&rs=AOn4CLCwKM10246MxtxntqvEvLE8UIqd2w'
                />


                <VideoCard 
                title="Adding Individual EGT Sensor to a GTR Engine"
                views='9.3K Views'
                timestamp='5 months ago'
                channelImage='https://yt3.ggpht.com/a/AATXAJxPf7iOE28I3d7eOoRJg5Q72IYO6aJkzqekty-dbg=s88-c-k-c0x00ffffff-no-rj'
                channel='Chris Forsberg'
                image='https://i.ytimg.com/an_webp/qCI7fn3p7CM/mqdefault_6s.webp?du=3000&sqp=CJSopPwF&rs=AOn4CLD-crMdm-gEz3d6jt3GShJZRV6mHw'
                />
                

            </div>

        </div>
    )
}

export default RecommendedVideos
