import { Gauge, AlertTriangle, Clock } from 'lucide-react';
import StatusCard from './StatusCard';

export default function GlobalKPIs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatusCard
        title="Total Equipment Monitored"
        value="42"
        subtitle="Units in operation"
        icon={<Gauge size={24} />}
        status="normal"
      />
      <StatusCard
        title="Critical Equipment"
        value="15%"
        subtitle="6 units need attention"
        icon={<AlertTriangle size={24} />}
        status="warning"
      />
      <StatusCard
        title="Predicted Downtime"
        value="48h"
        subtitle="Next maintenance window"
        icon={<Clock size={24} />}
        status="critical"
      />
    </div>
  );
}