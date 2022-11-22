import React, { Ref } from 'react';
import { AreaChart as ReAreaChart, Area, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { SetOfColors } from '../../const';

type Props = {
  data: any[];
  names: Record<string, string>;
  fields: string[];
  xAxis: string;
  downloadRef?: Ref<any>;
};

const AreaChart: React.FC<Props> = ({ data, names, fields, xAxis, downloadRef }) => {
  return (
    <ResponsiveContainer width='100%'>
      <ReAreaChart data={data} ref={downloadRef}>
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        {fields.map((field, index) => (
          <Area key={field} name={names[field]} dataKey={field} stroke={SetOfColors[index]} fill={SetOfColors[index]} />
        ))}
      </ReAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
