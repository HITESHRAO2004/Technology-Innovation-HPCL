import { AlertTriangle, Clock } from 'lucide-react';

interface Alert {
  id: number;
  message: string;
  timeAgo: string;
  severity: 'critical' | 'warning';
}

const alerts: Alert[] = [
  {
    id: 1,
    message: 'Heat exchanger failure likelihood: 85% within 48 hours',
    timeAgo: '2 hours ago',
    severity: 'critical'
  },
  {
    id: 2,
    message: 'Pump P-101 vibration exceeds threshold',
    timeAgo: '4 hours ago',
    severity: 'warning'
  }
];

export default function AlertsList() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Active Alerts</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg flex items-start space-x-3 ${
              alert.severity === 'critical' ? 'bg-red-50' : 'bg-yellow-50'
            }`}
          >
            <AlertTriangle className={alert.severity === 'critical' ? 'text-red-500' : 'text-yellow-500'} />
            <div className="flex-1">
              <p className="font-medium">{alert.message}</p>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <Clock size={14} className="mr-1" />
                <span>{alert.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}