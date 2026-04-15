import React, { useMemo } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
  const chartData = useMemo(() => {
    return prepareExpenseBarChartData(data);
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
      </div>

      {/* Hide month labels only for this chart */}
      <CustomBarChart data={chartData} showXAxisLabels={false} xDataKey="x" />
    </div>
  );
};

export default Last30DaysExpenses;
