
import React from 'react';
import { Home, Plus, FileText, MessageSquare, History, Settings, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
}

const Sidebar = ({ activeTab, onTabChange, isOpen }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'create', label: 'New Transaction', icon: Plus },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'disputes', label: 'Disputes', icon: MessageSquare },
    { id: 'history', label: 'History', icon: History },
    { id: 'feedback', label: 'Feedback', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 border-r border-gray-200 transform transition-transform duration-300 ease-in-out
      lg:translate-x-0 lg:static lg:inset-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex flex-col h-full pt-16 lg:pt-4">
        <div className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'secondary' : 'ghost'}
                className={`w-full justify-start ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-700 border-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onTabChange(item.id)}
              >
                <Icon size={20} className="mr-3" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
