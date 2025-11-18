import 'server-only';
import { cacheLife } from "next/cache";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
    'use cache'
    cacheLife({ revalidate: 1800, expire: 2400 }) // 30 minutes revalidate, 40 minutes expire

    const requestBody = new URLSearchParams();
    requestBody.append('grant_type', 'refresh_token');
    requestBody.append('refresh_token', SPOTIFY_REFRESH_TOKEN!);

    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
        },
        body: requestBody.toString()
    }).then(res => res.json())
        .then(data => {
            return data.access_token;
        })
};


export async function getMostRecentTrack() {
    'use cache'
    cacheLife("minutes") // default cache for stale after 5 mni, revalidate after 1 min, expire after 1 hour

    return fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`
        }
    }).then(res => {
        if (res.status === 204 || res.status > 400) {
            return null;
        }
        return res.json();
    }).then(data => {
        return data;
    });
}