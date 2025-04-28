import React, { useState } from 'react';
import { BarChart, LineChart, PieChart, Pie, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Search, Plus, Download, Filter, MapPin, Droplet, Activity, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';

const diseaseData = [
  { name: 'Fungal', value: 35 },
  { name: 'Viral', value: 11 },
  { name: 'Bacterial', value: 6 },
  { name: 'Insects', value: 6 },
  { name: 'Abiotic', value: 19 },
  { name: 'No pathogen', value: 23 }
];

const COLORS = ['#0088FE', '#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#82ca9d'];

const Disease = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar></Sidebar>
      

      <div className="flex-1 overflow-auto">
        <div className="p-6 pl-80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 lg:text-4xl">Crop Disease Detection</h1>
              <p className="mt-2 text-slate-600">Detect Diseases</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search diseases..." 
                  className="py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <button className="flex items-center px-4 py-2 text-white bg-green-500 rounded-lg">
                <Plus size={18} className="mr-2" />
                New Analysis
              </button>
              <button className="flex items-center px-4 py-2 text-green-500 border border-green-500 rounded-lg">
                <Download size={18} className="mr-2" />
                Export
              </button>
            </div>
          </div>
          

          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-500">Total Scans</h3>
                <span className="text-xs text-green-500">↑ 12%</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-bold">458</p>
                <div className="w-12 h-8 text-green-500">📈</div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-500">Diseases Detected</h3>
                <span className="text-xs text-red-500">↓ 3%</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-bold">352</p>
                <div className="w-12 h-8 text-blue-500">📊</div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-500">Treatment Success</h3>
                <span className="text-xs text-green-500">↑ 8%</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-bold">87%</p>
                <div className="w-12 h-8 text-purple-500">📈</div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-500">Yield Improvement</h3>
                <span className="text-xs text-green-500">↑ 15%</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-bold">32%</p>
                <div className="w-12 h-8 text-yellow-500">📈</div>
              </div>
            </div>
          </div>
          

          <div className="grid grid-cols-12 gap-6 mb-8">
            <div className="col-span-8 p-6 bg-white rounded-lg shadow">
              <h2 className="mb-4 text-xl font-bold">Types of Disease Recovered</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      {name: 'Fungal', value: 35},
                      {name: 'Viral', value: 11},
                      {name: 'Bacterial', value: 6},
                      {name: 'Insects', value: 6},
                      {name: 'Abiotic', value: 19},
                      {name: 'No pathogen', value: 23}
                    ]}
                    margin={{top: 20, right: 30, left: 20, bottom: 5}}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#4f46e5" name="Percentage (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="col-span-4 p-6 bg-white rounded-lg shadow">
              <h2 className="mb-4 text-xl font-bold">Disease Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {diseaseData.map((entry, index) => (
                        <Pie key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Blight" className="mr-4 rounded" />
                <h2 className="text-xl font-bold">Blight</h2>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Probability:</span>
                  <span className="font-medium">40%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-red-500 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <p className="mb-4"><span className="font-semibold">Symptoms:</span> Brown spots on leaves, wilting stems.</p>
              <div>
                <h3 className="mb-2 font-semibold">Recovery Steps:</h3>
                <ul className="pl-5 space-y-1 text-gray-600 list-disc">
                  <li>Apply copper-based fungicides.</li>
                  <li>Remove and burn infected leaves.</li>
                  <li>Improve drainage to avoid waterlogging.</li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Rust" className="mr-4 rounded" />
                <h2 className="text-xl font-bold">Rust</h2>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Probability:</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>
              <p className="mb-4"><span className="font-semibold">Symptoms:</span> Reddish-brown pustules on leaves.</p>
              <div>
                <h3 className="mb-2 font-semibold">Recovery Steps:</h3>
                <ul className="pl-5 space-y-1 text-gray-600 list-disc">
                  <li>Use rust-resistant crop varieties.</li>
                  <li>Spray sulfur-based fungicides.</li>
                  <li>Maintain proper spacing to improve airflow.</li>
                </ul>
              </div>
            </div>
          </div>
          

          <div className="p-6 mb-8 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Crop Recommendations</h2>
              <div className="flex space-x-4">
                <button className="flex items-center px-3 py-1 text-gray-500 border rounded-lg">
                  <Filter size={16} className="mr-2" />
                  All Filters
                </button>
                <select className="px-3 py-1 text-gray-500 border rounded-lg">
                  <option>Status: Active</option>
                  <option>Status: All</option>
                </select>
                <select className="px-3 py-1 text-gray-500 border rounded-lg">
                  <option>Grade: All</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="overflow-hidden border rounded-lg">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-green-600">Rice Cultivation Area A</h3>
                    <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    34°N, 118°W
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="mb-1 text-sm text-gray-500">Soil Depth</div>
                      <div className="font-semibold">60cm</div>
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-gray-500">pH Level</div>
                      <div className="font-semibold">6.5</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Mineral Content</div>
                    <div className="font-semibold">High Phosphorus</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Growing Period</div>
                    <div className="font-semibold">90 days</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Yield Potential</div>
                    <div className="font-semibold">500kg/acre</div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">Last updated: 2h ago</div>
                    <button className="flex items-center text-green-600">
                      View Details
                      <ChevronRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="overflow-hidden border rounded-lg">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-green-600">Wheat Zone B</h3>
                    <span className="px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full">Pending</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    35°N, 119°W
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="mb-1 text-sm text-gray-500">Soil Depth</div>
                      <div className="font-semibold">45cm</div>
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-gray-500">pH Level</div>
                      <div className="font-semibold">7.0</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Mineral Content</div>
                    <div className="font-semibold">Medium Nitrogen</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Growing Period</div>
                    <div className="font-semibold">120 days</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Yield Potential</div>
                    <div className="font-semibold">420kg/acre</div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">Last updated: 4h ago</div>
                    <button className="flex items-center text-green-600">
                      View Details
                      <ChevronRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="overflow-hidden border rounded-lg">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-green-600">Maize Region C</h3>
                    <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    33°N, 117°W
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="mb-1 text-sm text-gray-500">Soil Depth</div>
                      <div className="font-semibold">75cm</div>
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-gray-500">pH Level</div>
                      <div className="font-semibold">6.8</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Mineral Content</div>
                    <div className="font-semibold">High Potassium</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Growing Period</div>
                    <div className="font-semibold">100 days</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="mb-1 text-sm text-gray-500">Yield Potential</div>
                    <div className="font-semibold">600kg/acre</div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">Last updated: 1h ago</div>
                    <button className="flex items-center text-green-600">
                      View Details
                      <ChevronRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease;