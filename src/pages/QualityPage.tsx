import { Droplet, Activity, CheckCircle, AlertTriangle } from 'lucide-react';
import StatusCard from '../components/StatusCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const qualityTrends = [
  { month: 'Jan', sulfur: 0.05, viscosity: 3.2, quality: 98.5 },
  { month: 'Feb', sulfur: 0.04, viscosity: 3.3, quality: 99.0 },
  { month: 'Mar', sulfur: 0.05, viscosity: 3.1, quality: 98.8 },
  { month: 'Apr', sulfur: 0.04, viscosity: 3.2, quality: 99.2 },
  { month: 'May', sulfur: 0.05, viscosity: 3.2, quality: 98.5 }
];

export default function QualityPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Fuel Quality Monitoring</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatusCard
          title="Sulfur Content"
          value="0.05%"
          subtitle="Within acceptable range"
          icon={<Droplet size={24} />}
          status="normal"
        />
        <StatusCard
          title="Viscosity"
          value="3.2 cSt"
          subtitle="Optimal range: 2.8-4.1"
          icon={<Activity size={24} />}
          status="normal"
        />
        <StatusCard
          title="Batch Quality"
          value="98.5%"
          subtitle="Above quality threshold"
          icon={<CheckCircle size={24} />}
          status="normal"
        />
        <StatusCard
          title="Compliance"
          value="100%"
          subtitle="All standards met"
          icon={<AlertTriangle size={24} />}
          status="normal"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quality Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={qualityTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sulfur" stroke="#3b82f6" name="Sulfur Content" />
                <Line type="monotone" dataKey="viscosity" stroke="#ef4444" name="Viscosity" />
                <Line type="monotone" dataKey="quality" stroke="#10b981" name="Quality Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Batch Analysis</h3>
          <div className="space-y-4">
            {[
              { id: 'B-1234', status: 'Verified', rating: 'High' },
              { id: 'B-1235', status: 'In Progress', rating: 'Pending' },
              { id: 'B-1236', status: 'Verified', rating: 'High' }
            ].map((batch, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Batch {batch.id}</h4>
                  <p className="text-sm text-gray-500">{batch.status}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    batch.rating === 'High' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {batch.rating}
                  </p>
                  <p className="text-sm text-gray-500">Quality Rating</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}