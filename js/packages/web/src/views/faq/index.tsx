import React from 'react';
import { Layout } from 'antd';
import { FAQ } from '../../components/FAQ';
import { data } from './faqData';

export const FAQView = () => {
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <FAQ
        leftContent={data.leftContent}
        headContent={data.headContent}
        midContent={data.midContent}
        bottomContent={data.bottomContent}
      />
    </Layout>
  );
};
