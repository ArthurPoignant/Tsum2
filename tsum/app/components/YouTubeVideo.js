'use client';

import { useState, useEffect } from 'react';

const YouTubeVideo = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <iframe src="https://www.youtube.com/embed/KUFnQHVRCCk?si=g0bhsRgul7CI0gtm&amp;controls=0"  /* className='h-full w-full' */ frameBorder="0" width="100%" height="400px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
};

export default YouTubeVideo;
