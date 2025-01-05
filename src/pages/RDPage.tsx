import { Lightbulb, Zap, Package, Printer } from 'lucide-react';
import StatusCard from '../components/StatusCard';

export default function RDPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-slate-800">R&D Process Improvement</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatusCard
          title="Active Simulations"
          value="8"
          subtitle="3 high priority"
          icon={<Lightbulb size={24} />}
          status="normal"
        />
        <StatusCard
          title="Energy Efficiency"
          value="+15%"
          subtitle="Improvement this quarter"
          icon={<Zap size={24} />}
          status="normal"
        />
        <StatusCard
          title="Material Tests"
          value="12"
          subtitle="4 pending approval"
          icon={<Package size={24} />}
          status="warning"
        />
        <StatusCard
          title="3D Prototypes"
          value="5"
          subtitle="2 in printing queue"
          icon={<Printer size={24} />}
          status="normal"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sky-100">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Energy Efficiency Simulation</h3>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Engineering Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sky-100">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Prototype Queue</h3>
          <div className="space-y-6">
            {[
              { name: 'Heat Exchanger v2', status: 'Printing', progress: 85 },
              { name: 'Valve Assembly', status: 'In Queue', progress: 0 },
              { name: 'Sensor Housing', status: 'Complete', progress: 100 }
            ].map((prototype, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">{prototype.name}</span>
                  <span className="text-sm text-slate-500">{prototype.status}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-sky-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${prototype.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}