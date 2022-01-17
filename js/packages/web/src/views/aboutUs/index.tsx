import React from 'react';
import { Layout } from 'antd';
import { AboutUs } from '../../components/AboutUs';
import { data } from './aboutUsData';

export const AboutUsView = () => {
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <AboutUs
        leftContent={data.leftContent}
        headContent={data.headContent}
        midContent={data.midContent}
        bottomContent={data.bottomContent}
      />
    </Layout>
  );
};
