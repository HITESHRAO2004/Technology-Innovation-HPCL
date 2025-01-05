import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Thermometer, Droplet, Activity } from 'lucide-react';
import StatusCard from '../StatusCard';

const temperatureData = [
  { time: '00:00', inlet: 85, outlet: 55 },
  { time: '04:00', inlet: 88, outlet: 58 },
  { time: '08:00', inlet: 92, outlet: 62 },
  { time: '12:00', inlet: 90, outlet: 60 },
  { time: '16:00', inlet: 87, outlet: 57 },
  { time: '20:00', inlet: 85, outlet: 55 }
];

export default function HeatExchangers() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="Temperature Difference"
          value="30°C"
          subtitle="Within normal range"
          icon={<Thermometer size={24} />}
          status="normal"
        />
        <StatusCard
          title="Flow Rate"
          value="120 L/min"
          subtitle="Optimal flow maintained"
          icon={<Droplet size={24} />}
          status="normal"
        />
        <StatusCard
          title="Fouling Factor"
          value="0.85"
          subtitle="Cleaning recommended"
          icon={<Activity size={24} />}
          status="warning"
        />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Temperature Trends</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="inlet" stroke="#ef4444" name="Inlet Temperature" />
              <Line type="monotone" dataKey="outlet" stroke="#3b82f6" name="Outlet Temperature" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}