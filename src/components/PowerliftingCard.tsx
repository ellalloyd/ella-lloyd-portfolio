'use client'

import { LiftingData } from "@/lib/types";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

function PowerliftingCard({ data }: { data: LiftingData[] }) {
    return (
        <div className="flex flex-col gap-2 h-full">
            <p className="text-white text-2xl pb-2">Powerlifting</p>
            <p className="text-[#d9d9d9] text-base">1 Rep Max Tracker</p>
            <div className="flex flex-1 bg-white rounded-sm p-4 min-h-0 items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="squat" stroke="#6d597a" strokeWidth={2} name="Squat" />
                        <Line type="monotone" dataKey="bench" stroke="#b8abc1" strokeWidth={2} name="Bench" />
                        <Line type="monotone" dataKey="deadlift" stroke="#210534" strokeWidth={2} name="Deadlift" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export { PowerliftingCard };