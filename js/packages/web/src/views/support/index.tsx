import React from 'react';
import { Layout } from 'antd';
import { Support } from '../../components/Support';
import { data } from './supportData';

export const SupportView = () => {
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <Support
        leftContent={data.leftContent}
        headContent={data.headContent}
        midContent={data.midContent}
        bottomContent={data.bottomContent}
      />
    </Layout>
  );
};
