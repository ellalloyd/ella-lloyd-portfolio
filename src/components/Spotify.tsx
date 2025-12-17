import { getMostRecentTrack } from '@/lib/spotify/api';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { AudioLinesIcon } from './ui/AudioLinesIcon';

export async function Spotify() {
    const recentTrackData = await getMostRecentTrack();
    const trackName = recentTrackData?.items?.[0]?.track?.name || 'No recen track found.';
    const trackArtist = recentTrackData?.items?.[0]?.track?.artists?.map((artist: any) => artist.name).join(', ') || '';
    const albumURL = recentTrackData?.items?.[0]?.track?.album?.images?.[0]?.url || '';
    const trackUrl = recentTrackData?.items?.[0]?.track?.external_urls?.spotify || '';
    const artistUrl = recentTrackData?.items?.[0]?.track?.artists?.[0]?.external_urls?.spotify || '';
    return (
        <HoverCard>
            <HoverCardTrigger className="flex flex-row gap-2 items-center cursor-pointer w-fit">
                <AudioLinesIcon className="size-6 [&_svg]:stroke-primary/70!" />
                <p className="text-lg text-primary/70">Listening to...</p>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row gap-4 items-center bg-white p-4 rounded-lg max-w-2xl">
                <div className="flex">
                    {albumURL && <img src={albumURL} alt="Album Art" className="w-16 h-16" />}
                </div>
                <div className="flex flex-col gap-1">
                    <a className="text-xl hover:underline underline-offset-4" href={trackUrl}>{trackName}</a>
                    <a className="text-md text-current/50 hover:underline underline-offset-4" href={artistUrl}>{trackArtist}</a>

                </div>

            </HoverCardContent>
        </HoverCard>
    );
}