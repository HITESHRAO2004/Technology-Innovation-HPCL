interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  status?: 'normal' | 'warning' | 'critical';
}

export default function StatusCard({ title, value, subtitle, icon, status = 'normal' }: StatusCardProps) {
  const statusColors = {
    normal: 'text-sky-600',
    warning: 'text-yellow-600',
    critical: 'text-red-600'
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sky-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-600 font-medium">{title}</h3>
        <div className={statusColors[status]}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold text-slate-800">{value}</p>
        <p className={`text-sm ${statusColors[status]}`}>{subtitle}</p>
      </div>
    </div>
  );
}