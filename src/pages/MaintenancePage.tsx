import GlobalKPIs from '../components/GlobalKPIs';
import EquipmentTabs from '../components/EquipmentTabs';
import AlertsList from '../components/AlertsList';
import RULSection from '../components/RULSection';

export default function MaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">HPCL Predictive Maintenance Dashboard</h2>
      <GlobalKPIs />
      <RULSection />
      <EquipmentTabs />
      <AlertsList />
    </div>
  );
}