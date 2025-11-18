import { getMostRecentTrack } from '@/lib/spotify/api';

export async function Spotify() {
    const recentTrackData = await getMostRecentTrack();
    const trackName = recentTrackData?.items?.[0]?.track?.name || 'No recen track found.';
    const trackArtist = recentTrackData?.items?.[0]?.track?.artists?.map((artist: any) => artist.name).join(', ') || '';
    return (
        <div>
            <p>{trackName}</p>
            <p>{trackArtist}</p>
        </div>
    );
}