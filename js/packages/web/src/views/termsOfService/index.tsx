import React from 'react';
import { Layout } from 'antd';
import { TOS } from '../../components/TermsOfService';
import { data } from './tosData';

export const TOSView = () => {
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <TOS
        leftContent={data.leftContent}
        headContent={data.headContent}
        midContent={data.midContent}
        bottomContent={data.bottomContent}
      />
    </Layout>
  );
};
