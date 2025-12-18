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
            className="w-full min-w-0 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!trackName && (
                <div className="flex items-center">
                    <p>Not found.</p>
                </div>
            )}
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
                    <div className="flex size-6 shrink-0">
                        {albumURL && <img src={albumURL} alt="Album Art" className="rounded-sm" />}
                    </div>
                    <div className="flex flex-col flex-1 gap-1 min-w-0">
                        <Link className="text-primary hover:underline underline-offset-4 truncate" href={trackUrl}>{trackName}</Link>
                        <Link className="text-sm text-secondary hover:underline underline-offset-4 truncate" href={artistUrl}>{trackArtist}</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export { SpotifyClient };