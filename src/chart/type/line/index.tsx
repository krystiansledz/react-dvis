import React, { Ref } from 'react';
import { LineChart as ReLineChart, Legend, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { SetOfColors } from '../../const';
import { AxisDomain } from 'recharts/types/util/types';

type Props = {
  data: any[];
  names: Record<string, string>;
  fields: string[];
  xAxis: string;
  domain?: AxisDomain;
  downloadRef?: Ref<any>;
};

const LineChart: React.FC<Props> = ({ data, names, fields, domain, xAxis, downloadRef }) => {
  return (
    <ResponsiveContainer width='100%'>
      <ReLineChart data={data} ref={downloadRef}>
        <XAxis dataKey={xAxis} />
        <YAxis domain={domain} />
        <Tooltip />
        <Legend />
        {fields.map((field, index) => (
          <Line key={field} name={names[field]} dataKey={field} stroke={SetOfColors[index]} />
        ))}
      </ReLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
