import { Thermometer, Gauge, Activity, Droplet } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import StatusCard from '../StatusCard';

const combustionData = [
  { name: 'O₂', value: 3 },
  { name: 'CO₂', value: 12 },
  { name: 'CO', value: 0.5 },
  { name: 'Other', value: 84.5 }
];

const COLORS = ['#3b82f6', '#ef4444', '#f59e0b', '#6b7280'];

export default function Boilers() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="Steam Pressure"
          value="12.5 MPa"
          subtitle="Optimal pressure"
          icon={<Gauge size={24} />}
          status="normal"
        />
        <StatusCard
          title="Steam Temperature"
          value="540°C"
          subtitle="Within range"
          icon={<Thermometer size={24} />}
          status="normal"
        />
        <StatusCard
          title="Water Level"
          value="78%"
          subtitle="Normal level"
          icon={<Droplet size={24} />}
          status="normal"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Combustion Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={combustionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {combustionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Thermal Efficiency</span>
              <span className="font-semibold">88%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Feed Water Temperature</span>
              <span className="font-semibold">185°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Stack Temperature</span>
              <span className="font-semibold">165°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}