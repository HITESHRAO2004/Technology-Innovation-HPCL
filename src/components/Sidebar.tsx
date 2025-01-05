import { Activity, Truck, ClipboardCheck, FlaskConical, Menu } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: Activity, label: 'Maintenance', path: '/' },
  { icon: Truck, label: 'Logistics', path: '/logistics' },
  { icon: ClipboardCheck, label: 'Quality', path: '/quality' },
  { icon: FlaskConical, label: 'R&D', path: '/rd' }
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`bg-white/80 backdrop-blur-sm border-r border-sky-100 h-screen transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 border-b border-sky-100 flex items-center justify-between">
        <h1 className={`font-bold text-xl text-slate-800 ${collapsed ? 'hidden' : 'block'}`}>RefineryOS</h1>
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 hover:bg-sky-50 rounded-lg text-sky-600">
          <Menu size={20} />
        </button>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors
              ${location.pathname === item.path 
                ? 'bg-sky-50 text-sky-600' 
                : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`}
          >
            <item.icon size={20} />
            <span className={`ml-3 ${collapsed ? 'hidden' : 'block'}`}>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}