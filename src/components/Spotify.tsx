'use client'

import { useState } from 'react';
import { AudioLinesIcon } from './ui/AudioLinesIcon';
import Link from 'next/link';

interface SpotifyClientProps {
    trackName: string;
    trackArtist: string;
    albumURL: string;
    trackUrl: string;
    artistUrl: string;
}

function SpotifyClient({ trackName, trackArtist, albumURL, trackUrl, artistUrl }: SpotifyClientProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Show this div when not hovered */}
            {!isHovered && (
                <div className="flex flex-row gap-2 items-center cursor-pointer w-fit overflow-hidden">
                    <AudioLinesIcon className="size-6 [&_svg]:stroke-primary!" />
                    <p className="text-primary">Listening to...</p>
                </div>
            )}
            {/* Show this div when hovered */}
            {isHovered && (
                <div className="flex flex-row gap-2 items-center cursor-pointer w-fit">
                    <div className="flex">
                        {albumURL && <img src={albumURL} alt="Album Art" className="size-6 rounded-sm" />}
                    </div>
                    <div className="flex flex-col gap-1 truncate">
                        <Link className="text-primary hover:underline underline-offset-4" href={trackUrl}>{trackName}</Link>
                        <Link className="text-sm text-secondary hover:underline underline-offset-4" href={artistUrl}>{trackArtist}</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export { SpotifyClient };