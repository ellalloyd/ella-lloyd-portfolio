'use client'

import { useState, useEffect } from "react";
import { MapPinHouse } from "lucide-react";
import { locations } from "@/lib/data";

function LocationCard({ }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            // Wait for fade out, then change content and fade in
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
                // Small delay before fade in for smoother transition
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 50);
            }, 400); // Half of transition duration (800ms / 2)
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const currentLocation = locations[currentIndex];

    return (
        <div className="w-full h-full flex flex-row gap-2 items-center text-white">
            <MapPinHouse size={24} />
            <div className="flex flex-col gap-1">
                <p
                    className={`text-white transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    {currentLocation.city}
                </p>
                <p
                    className={`text-[#d9d9d9] transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    {currentLocation.years}
                </p>
            </div>
        </div>
    )
}

export { LocationCard };