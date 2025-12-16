'use client'

import { LiftingData } from "@/lib/types";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

function PowerliftingCard({ data }: { data: LiftingData[] }) {
    return (
        <div className="flex flex-col lg:gap-2 gap-4 h-full">
            <p className="text-white text-2xl pb-2">Powerlifting</p>
            <p className="text-[#d9d9d9]">1 Rep Max Tracker</p>
            <div className="h-[436px] lg:flex-1 bg-white rounded-2xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="squat" stroke="var(--chart-1)" strokeWidth={2} name="Squat" />
                        <Line type="monotone" dataKey="bench" stroke="var(--chart-2)" strokeWidth={2} name="Bench" />
                        <Line type="monotone" dataKey="deadlift" stroke="var(--chart-3)" strokeWidth={2} name="Deadlift" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export { PowerliftingCard };