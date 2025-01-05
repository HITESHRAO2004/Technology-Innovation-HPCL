import { Activity, Thermometer, Droplet, Gauge } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatusCard from '../StatusCard';

const vibrationData = [
  { time: '00:00', bearing: 2.1, seal: 1.8 },
  { time: '04:00', bearing: 2.3, seal: 1.9 },
  { time: '08:00', bearing: 2.4, seal: 2.0 },
  { time: '12:00', bearing: 2.2, seal: 1.8 },
  { time: '16:00', bearing: 2.3, seal: 1.9 },
  { time: '20:00', bearing: 2.1, seal: 1.8 }
];

export default function Pumps() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="Flow Rate"
          value="850 m³/h"
          subtitle="Operating at capacity"
          icon={<Droplet size={24} />}
          status="normal"
        />
        <StatusCard
          title="Discharge Pressure"
          value="4.2 MPa"
          subtitle="Within limits"
          icon={<Gauge size={24} />}
          status="normal"
        />
        <StatusCard
          title="Seal Health"
          value="90%"
          subtitle="Normal wear"
          icon={<Activity size={24} />}
          status="normal"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Vibration Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vibrationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bearing" stroke="#ef4444" name="Bearing Vibration" />
                <Line type="monotone" dataKey="seal" stroke="#3b82f6" name="Seal Vibration" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Temperature Monitoring</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Motor Temperature</span>
              <span className="font-semibold">75°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Bearing Temperature</span>
              <span className="font-semibold">65°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Fluid Temperature</span>
              <span className="font-semibold">45°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}