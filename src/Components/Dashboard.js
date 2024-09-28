import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaCog, FaClipboardList } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import axios from 'axios';

const Dashboard = () => {
  const [revenue, setRevenue] = useState('');
  const [users, setUsers] = useState('');
  const [issues, setIssues] = useState('');
  const [tasks, setTasks] = useState('');
  const [revenueTrend, setRevenueTrend] = useState('');
  const [userGrowth, setUserGrowth] = useState('');
  const [ghgEmissions, setGhgEmissions] = useState('');
  const [totalEmissions, setTotalEmissions] = useState('');
  const [globalAvgEmissions, setGlobalAvgEmissions] = useState('');
  const [emissionIntensity, setEmissionIntensity] = useState('');
  const [foodSecurity, setFoodSecurity] = useState('');
  const [qualitySafety, setQualitySafety] = useState('');

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => {
        setRevenue(response.data.revenue);
        setUsers(response.data.users);
        setIssues(response.data.issues);
        setTasks(response.data.tasks);
        setRevenueTrend(response.data.revenueTrend);
        setUserGrowth(response.data.userGrowth);
        setGhgEmissions(response.data.ghgEmissions);
        setTotalEmissions(response.data.totalEmissions);
        setGlobalAvgEmissions(response.data.globalAvgEmissions);
        setEmissionIntensity(response.data.emissionIntensity);
        setFoodSecurity(response.data.foodSecurity);
        setQualitySafety(response.data.qualitySafety);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, User!</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
          Update Data
        </button>
      </header>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Revenue"
          value={revenue}
          icon={<FaChartLine className="text-blue-500 w-8 h-8" />}
          bgColor="bg-blue-100"
        />
        <DashboardCard
          title="Users"
          value={users}
          icon={<FaUsers className="text-green-500 w-8 h-8" />}
          bgColor="bg-green-100"
        />
        <DashboardCard
          title="Settings"
          value={issues}
          icon={<FaCog className="text-yellow-500 w-8 h-8" />}
          bgColor="bg-yellow-100"
        />
        <DashboardCard
          title="Tasks"
          value={tasks}
          icon={<FaClipboardList className="text-purple-500 w-8 h-8" />}
          bgColor="bg-purple-100"
        />
      </section>

      {/* Charts and Details Section */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
          <div className="h-64 bg-blue-100 rounded-lg">
            {/* Add your chart here */}
            <div className="flex justify-center items-center h-full text-blue-700">
              <FiTrendingUp className="w-12 h-12 animate-bounce" />
              <p className="text-lg">{revenueTrend}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 .7 }}
        >
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          <div className="h-64 bg-green-100 rounded-lg">
            {/* Add your chart here */}
            <div className="flex justify-center items-center h-full text-green-700">
              <FiTrendingUp className="w-12 h-12 animate-pulse" />
              <p className="text-lg">{userGrowth}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sustainability Section */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">GHG Emissions</h2>
          <div className="h-64 bg-blue-100 rounded-lg">
            {/* Add your chart here */}
            <div className="flex justify-center items-center h-full text-blue-700">
              <FiTrendingUp className="w-12 h-12 animate-bounce" />
              <p className="text-lg">{ghgEmissions}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl font-semibold mb-4">Total Emissions</h2>
          <div className="h-64 bg-green-100 rounded-lg">
            {/* Add your chart here */}
            <div className="flex justify-center items-center h-full text-green-700">
              <FiTrendingUp className="w-12 h-12 animate-pulse" />
              <p className="text-lg">{totalEmissions}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Food Security Section */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Food Security Index</h2>
          <div className="h-64 bg-blue-100 rounded-lg">
            {/* Add your chart here */}
            <div className="flex justify-center items-center h-full text-blue-700">
              <FiTrendingUp className="w-12 h-12 animate-bounce" />
              <p className="text-lg">{foodSecurity}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl font-semibold mb-4">Quality and Safety Index</h2>
          <div className="h-64 bg-green-100 rounded-lg">
            {/* Add your chart here */}
            <div className="flex justify-center items-center h-full text-green-700">
              <FiTrendingUp className="w-12 h-12 animate-pulse" />
              <p className="text-lg">{qualitySafety}</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ title, value, icon, bgColor }) => (
  <motion.div
    className={`p-6 rounded-lg shadow ${bgColor} flex items-center space-x-4`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="bg-white p-2 rounded-full shadow">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </motion.div>
);

export default Dashboard;