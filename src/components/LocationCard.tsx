import { MapPinHouse } from "lucide-react";

function LocationCard({ }) {
    return (
        <div className="w-full flex flex-row gap-2 items-center text-white">

            <MapPinHouse size={24} />
            <div className="flex flex-col gap-1">
                <p className="text-white">{"San Diego"}</p>
                <p className="text-[#d9d9d9]">{"2002 - 2021"}</p>
            </div>

        </div>
    )
}

export { LocationCard };