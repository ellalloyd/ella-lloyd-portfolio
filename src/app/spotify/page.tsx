import { getMostRecentTrack } from '@/lib/spotify/api';

export default async function SpotifyPage() {
    const recentTrackData = await getMostRecentTrack();
    const trackName = recentTrackData?.items?.[0]?.track?.name || 'No recen track found.';
    const trackArtist = recentTrackData?.items?.[0]?.track?.artists?.map((artist: any) => artist.name).join(', ') || '';
    return (
        <div>
            <h1>Spotify Page</h1>
            <p>{trackName}</p>
            <p>{trackArtist}</p>
        </div>
    );
}