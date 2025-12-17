import { Spotify } from "@/components/SpotifyWrapper";
import { Suspense } from "react";
import { Loader } from "lucide-react";

export default async function SpotifyPage() {
    return (
        <div>
            <h1>Spotify Page</h1>
            <Suspense fallback={<Loader className="animate-spin" />}><Spotify /></Suspense>
        </div>
    );
}