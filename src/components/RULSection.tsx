import { Timer, Battery, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const rulData = [
  {
    equipment: 'Heat Exchanger A1',
    remainingLife: 85,
    status: 'Healthy',
    maintenanceDate: '2024-05-15',
  },
  {
    equipment: 'Pump P-101',
    remainingLife: 45,
    status: 'Warning',
    maintenanceDate: '2024-03-20',
  },
  {
    equipment: 'Compressor C2',
    remainingLife: 25,
    status: 'Critical',
    maintenanceDate: '2024-03-10',
  },
  {
    equipment: 'Boiler B3',
    remainingLife: 72,
    status: 'Healthy',
    maintenanceDate: '2024-04-30',
  },
];

export default function RULSection() {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Timer className="text-blue-600" />
            Remaining Useful Life Analysis
          </h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Healthy</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span>Warning</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Critical</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rulData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="equipment" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="remainingLife"
                  name="Remaining Life (%)"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {rulData.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  item.status === 'Critical'
                    ? 'border-red-200 bg-red-50'
                    : item.status === 'Warning'
                    ? 'border-yellow-200 bg-yellow-50'
                    : 'border-green-200 bg-green-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.equipment}</h4>
                  <div className="flex items-center gap-2">
                    <Battery className={`${
                      item.status === 'Critical'
                        ? 'text-red-600'
                        : item.status === 'Warning'
                        ? 'text-yellow-600'
                        : 'text-green-600'
                    }`} />
                    <span className="font-semibold">{item.remainingLife}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Next Maintenance:</span>
                  <span className="font-medium">{item.maintenanceDate}</span>
                </div>
                {item.status === 'Critical' && (
                  <div className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertTriangle size={16} />
                    <span>Immediate maintenance required</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}