import React, { Ref } from 'react';
import { ScatterChart as ReScatterChart, Scatter, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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

const ScatterChart: React.FC<Props> = ({ data, names, fields, xAxis, domain, downloadRef }) => {
  return (
    <ResponsiveContainer width='100%'>
      <ReScatterChart data={data} ref={downloadRef}>
        <XAxis dataKey={xAxis} />
        <YAxis domain={domain} />
        <Tooltip />
        <Legend />
        {fields.map((field, index) => (
          <Scatter key={field} name={names[field]} dataKey={field} fill={SetOfColors[index]} />
        ))}
      </ReScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChart;
