import { useState } from 'react';
import HeatExchangers from './equipment/HeatExchangers';
import Compressors from './equipment/Compressors';
import Pumps from './equipment/Pumps';
import Boilers from './equipment/Boilers';

const tabs = [
  { id: 'heat-exchangers', label: 'Heat Exchangers' },
  { id: 'compressors', label: 'Compressors' },
  { id: 'pumps', label: 'Pumps' },
  { id: 'boilers', label: 'Boilers' }
];

export default function EquipmentTabs() {
  const [activeTab, setActiveTab] = useState('heat-exchangers');

  return (
    <div className="mb-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'heat-exchangers' && <HeatExchangers />}
        {activeTab === 'compressors' && <Compressors />}
        {activeTab === 'pumps' && <Pumps />}
        {activeTab === 'boilers' && <Boilers />}
      </div>
    </div>
  );
}