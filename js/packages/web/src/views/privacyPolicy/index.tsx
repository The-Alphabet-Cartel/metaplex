import React from 'react';
import { Layout } from 'antd';
import { PrivacyPolicy } from '../../components/PrivacyPolicy';
import { data } from './privacyPolicyData';

export const PrivacyPolicyView = () => {
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <PrivacyPolicy
        leftContent={data.leftContent}
        headContent={data.headContent}
        midContent={data.midContent}
        bottomContent={data.bottomContent}
      />
    </Layout>
  );
};
