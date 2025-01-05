import { Truck, MapPin, Clock, TrendingUp } from 'lucide-react';
import StatusCard from '../components/StatusCard';

export default function LogisticsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Fuel Logistics Optimization</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatusCard
          title="Active Tankers"
          value="24"
          subtitle="12 in transit, 8 loading, 4 idle"
          icon={<Truck size={24} />}
          status="normal"
        />
        <StatusCard
          title="Route Efficiency"
          value="92%"
          subtitle="Average route optimization score"
          icon={<MapPin size={24} />}
          status="normal"
        />
        <StatusCard
          title="On-Time Delivery"
          value="87%"
          subtitle="Last 24 hours performance"
          icon={<Clock size={24} />}
          status="warning"
        />
        <StatusCard
          title="Fuel Efficiency"
          value="95%"
          subtitle="Fleet-wide consumption rate"
          icon={<TrendingUp size={24} />}
          status="normal"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Route Map</h3>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
            alt="World Map"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Driver Performance</h3>
          <div className="space-y-6">
            {[
              { name: 'John D.', status: 'In Transit', score: '95%' },
              { name: 'Sarah M.', status: 'Loading', score: '88%' },
              { name: 'Mike R.', status: 'Delivered', score: '92%' }
            ].map((driver, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{driver.name}</h4>
                  <p className="text-sm text-gray-500">{driver.status}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">{driver.score}</p>
                  <p className="text-sm text-gray-500">Efficiency Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}