import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Top Nav */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-teal-900 text-white w-12 h-12 flex items-center justify-center rounded">
          Logo
        </div>
        <div className="bg-teal-900 text-cyan-300 font-bold px-6 py-2 rounded">
          Dashboard
        </div>
        <div className="ml-auto flex gap-2">
          <div className="bg-teal-900 text-white px-3 py-2 rounded">Achievements</div>
          <div className="bg-teal-900 text-white px-3 py-2 rounded">Insights</div>
          <div className="bg-teal-900 text-white px-3 py-2 rounded">Notification/Alert</div>
          <div className="bg-teal-900 text-white px-3 py-2 rounded">Profile</div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="col-span-4 flex flex-col gap-4">
          <div className="bg-teal-900 text-white p-6 rounded-lg h-64 flex items-center justify-center">
            Calender
          </div>
          <div className="bg-teal-900 text-white p-6 rounded-lg h-64 flex items-center justify-center">
            Comparision (Line Graph)
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-7 grid grid-cols-3 gap-4 auto-rows-min">
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Current Spending (Regular)
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Basic Spending (Power Saving Mode)
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Current Balance
          </div>

          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Burn Rate
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Expense Page
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Days left for the goal
          </div>

          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Income Page
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Analytics
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center">
            Spend / Want / Guilt (chart)
          </div>

          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center col-span-1">
            Flag of expense (Pie chart)
          </div>
          <div className="bg-teal-900 text-white p-4 rounded flex items-center justify-center col-span-2">
            Runway Goal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
