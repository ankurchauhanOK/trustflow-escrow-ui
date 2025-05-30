
import React from 'react';
import { TrendingUp, Clock, CheckCircle, AlertTriangle, DollarSign, Users, Plus, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const stats = [
    { title: 'Active Transactions', value: '8', icon: Clock, color: 'text-blue-600' },
    { title: 'Completed', value: '24', icon: CheckCircle, color: 'text-green-600' },
    { title: 'Total Volume', value: '$12,450', icon: DollarSign, color: 'text-purple-600' },
    { title: 'Trust Score', value: '4.8', icon: Users, color: 'text-yellow-600' },
  ];

  const recentTransactions = [
    { id: 'ESC-001', buyer: 'Alice Johnson', seller: 'TechStore', amount: '$899', status: 'pending', item: 'MacBook Pro 13"' },
    { id: 'ESC-002', buyer: 'You', seller: 'HomeDecor Co', amount: '$245', status: 'in-progress', item: 'Vintage Lamp' },
    { id: 'ESC-003', buyer: 'Mike Chen', seller: 'You', amount: '$1,200', status: 'completed', item: 'Photography Services' },
    { id: 'ESC-004', buyer: 'Sarah Wilson', seller: 'AutoParts+', amount: '$330', status: 'disputed', item: 'Car Battery' },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'completed': 'bg-green-100 text-green-800',
      'disputed': 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <TrendingUp size={16} className="mr-2" />
          Create Transaction
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Recent Transactions
            <Button variant="outline" size="sm">View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">{transaction.id}</span>
                    <Badge className={getStatusBadge(transaction.status)}>
                      {transaction.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{transaction.item}</p>
                  <p className="text-xs text-gray-500">
                    {transaction.buyer} ↔ {transaction.seller}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{transaction.amount}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Start New Transaction</h3>
            <p className="text-sm text-gray-600">Create a secure escrow transaction</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Upload Documents</h3>
            <p className="text-sm text-gray-600">Add contracts and agreements</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
            <p className="text-sm text-gray-600">Resolve transaction issues</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
