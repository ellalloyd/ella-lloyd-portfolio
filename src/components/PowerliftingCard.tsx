import { LiftingData } from "@/lib/types";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

function PowerliftingCard({ data }: { data: LiftingData[] }) {
    return (
        <div>
            <p className="text-white text-[24px]">Powerlifting</p>
            <p className="text-[#d9d9d9] text-[16px]">1 Rep Max Tracker</p>
            <p className="text-white text-[16px]">Squat | Bench | Deadlift</p>
            <div className="flex-1 bg-white rounded-[16px] p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
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