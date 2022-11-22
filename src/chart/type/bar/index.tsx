import React, { Ref } from 'react';
import { BarChart as ReBarChart, Bar, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { SetOfColors } from '../../const';

type Props = {
  data: any[];
  names: Record<string, string>;
  fields: string[];
  xAxis: string;
  downloadRef?: Ref<any>;
};

const BarChart: React.FC<Props> = ({ data, names, fields, xAxis, downloadRef }) => {
  return (
    <ResponsiveContainer width='100%'>
      <ReBarChart data={data} ref={downloadRef}>
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        {fields.map((field, index) => (
          <Bar key={field} name={names[field]} dataKey={field} fill={SetOfColors[index]} />
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
