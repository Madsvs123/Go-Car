
import React from 'react';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import MainLayout from './components/Layout/MainLayout';
import './App.css';

const theme = {
  token: {
    colorPrimary: '#4F46E5',
    colorSuccess: '#10B981',
    colorWarning: '#F59E0B',
    colorError: '#EF4444',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    borderRadius: 8,
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 600,
    },
    Card: {
      borderRadius: 12,
    },
    Input: {
      borderRadius: 8,
    },
  },
};

export default function App() {
  return (
    <div className="app-container">
      <I18nextProvider i18n={i18n}>
        <ConfigProvider theme={theme}>
          <MainLayout />
        </ConfigProvider>
      </I18nextProvider>
    </div>
  );
}
