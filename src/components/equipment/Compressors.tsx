import { Activity, Thermometer, Droplet } from 'lucide-react';
import StatusCard from '../StatusCard';

export default function Compressors() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="Vibration Level"
          value="2.1 mm/s"
          subtitle="Within acceptable range"
          icon={<Activity size={24} />}
          status="normal"
        />
        <StatusCard
          title="Bearing Temperature"
          value="65°C"
          subtitle="Monitor closely"
          icon={<Thermometer size={24} />}
          status="warning"
        />
        <StatusCard
          title="Oil Level"
          value="85%"
          subtitle="Optimal condition"
          icon={<Droplet size={24} />}
          status="normal"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Pressure Readings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Suction Pressure</span>
              <span className="font-semibold">2.1 MPa</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Discharge Pressure</span>
              <span className="font-semibold">8.5 MPa</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Efficiency</span>
              <span className="font-semibold">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Power Consumption</span>
              <span className="font-semibold">450 kW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}