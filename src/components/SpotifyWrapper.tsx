import { getMostRecentTrack } from '@/lib/spotify/api';
import { SpotifyClient } from './Spotify';

export async function Spotify() {
    const recentTrackData = await getMostRecentTrack();
    const trackName = recentTrackData?.items?.[0]?.track?.name || '';
    const trackArtist = recentTrackData?.items?.[0]?.track?.artists?.map((artist: any) => artist.name).join(', ') || '';
    const albumURL = recentTrackData?.items?.[0]?.track?.album?.images?.[0]?.url || '';
    const trackUrl = recentTrackData?.items?.[0]?.track?.external_urls?.spotify || '';
    const artistUrl = recentTrackData?.items?.[0]?.track?.artists?.[0]?.external_urls?.spotify || '';

    return (
        <SpotifyClient
            trackName={trackName}
            trackArtist={trackArtist}
            albumURL={albumURL}
            trackUrl={trackUrl}
            artistUrl={artistUrl}
        />
    );
}
