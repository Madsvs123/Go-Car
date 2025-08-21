
import React, { useState } from 'react';
import { 
  Card, 
  Radio, 
  Select, 
  DatePicker, 
  InputNumber, 
  Button, 
  Space, 
  Row, 
  Col,
  message 
} from 'antd';
import { SearchOutlined, EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

const { Option } = Select;

const BookingForm = () => {
  const { t } = useTranslation();
  const [tripType, setTripType] = useState('oneWay');
  const [formData, setFormData] = useState({
    pickupCity: '',
    pickupLocation: '',
    destination: '',
    destinationLocation: '',
    pickupDate: null,
    returnDate: null,
    passengers: 1,
    carType: 'economy'
  });

  const cities = [
    { value: 'cairo', label: 'Cairo' },
    { value: 'alexandria', label: 'Alexandria' },
    { value: 'dubai', label: 'Dubai' },
    { value: 'abu-dhabi', label: 'Abu Dhabi' },
    { value: 'riyadh', label: 'Riyadh' },
    { value: 'jeddah', label: 'Jeddah' }
  ];

  const locations = [
    { value: 'airport', label: 'Airport' },
    { value: 'downtown', label: 'Downtown' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'station', label: 'Station' }
  ];

  const carTypes = [
    { value: 'economy', label: t('economy') },
    { value: 'suv', label: t('suv') },
    { value: 'luxury', label: t('luxury') },
    { value: 'van', label: t('van') }
  ];

  const handleSearch = () => {
    if (!formData.pickupCity || !formData.destination || !formData.pickupDate) {
      message.warning('Please fill in all required fields');
      return;
    }
    
    message.success('Searching for available cars...');
    console.log('Search data:', { tripType, ...formData });
  };

  return (
    <Card 
      style={{ 
        borderRadius: '16px', 
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Radio.Group 
          value={tripType} 
          onChange={(e) => setTripType(e.target.value)}
          buttonStyle="solid"
          size="large"
          style={{ width: '100%', display: 'flex' }}
        >
          <Radio.Button value="oneWay" style={{ flex: 1, textAlign: 'center' }}>
            {t('oneWay')}
          </Radio.Button>
          <Radio.Button value="roundTrip" style={{ flex: 1, textAlign: 'center' }}>
            {t('roundTrip')}
          </Radio.Button>
        </Radio.Group>

        <Row gutter={16}>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                <EnvironmentOutlined /> {t('pickupCity')} *
              </label>
              <Select
                placeholder={t('pickupCity')}
                style={{ width: '100%' }}
                size="large"
                value={formData.pickupCity}
                onChange={(value) => setFormData({...formData, pickupCity: value})}
              >
                {cities.map(city => (
                  <Option key={city.value} value={city.value}>{city.label}</Option>
                ))}
              </Select>
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                <EnvironmentOutlined /> {t('destination')} *
              </label>
              <Select
                placeholder={t('destination')}
                style={{ width: '100%' }}
                size="large"
                value={formData.destination}
                onChange={(value) => setFormData({...formData, destination: value})}
              >
                {cities.map(city => (
                  <Option key={city.value} value={city.value}>{city.label}</Option>
                ))}
              </Select>
            </Space>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                {t('pickupLocation')}
              </label>
              <Select
                placeholder={t('pickupLocation')}
                style={{ width: '100%' }}
                size="large"
                value={formData.pickupLocation}
                onChange={(value) => setFormData({...formData, pickupLocation: value})}
              >
                {locations.map(location => (
                  <Option key={location.value} value={location.value}>{location.label}</Option>
                ))}
              </Select>
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                {t('destinationLocation')}
              </label>
              <Select
                placeholder={t('destinationLocation')}
                style={{ width: '100%' }}
                size="large"
                value={formData.destinationLocation}
                onChange={(value) => setFormData({...formData, destinationLocation: value})}
              >
                {locations.map(location => (
                  <Option key={location.value} value={location.value}>{location.label}</Option>
                ))}
              </Select>
            </Space>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={tripType === 'roundTrip' ? 12 : 24}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                <CalendarOutlined /> {t('pickupDate')} *
              </label>
              <DatePicker
                style={{ width: '100%' }}
                size="large"
                placeholder={t('pickupDate')}
                value={formData.pickupDate}
                onChange={(date) => setFormData({...formData, pickupDate: date})}
                disabledDate={(current) => current && current < dayjs().startOf('day')}
              />
            </Space>
          </Col>
          {tripType === 'roundTrip' && (
            <Col span={12}>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <label style={{ fontWeight: 500, color: '#374151' }}>
                  <CalendarOutlined /> {t('returnDate')} *
                </label>
                <DatePicker
                  style={{ width: '100%' }}
                  size="large"
                  placeholder={t('returnDate')}
                  value={formData.returnDate}
                  onChange={(date) => setFormData({...formData, returnDate: date})}
                  disabledDate={(current) => current && (current < dayjs().startOf('day') || (formData.pickupDate && current < formData.pickupDate))}
                />
              </Space>
            </Col>
          )}
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                <UserOutlined /> {t('passengers')}
              </label>
              <InputNumber
                min={1}
                max={8}
                style={{ width: '100%' }}
                size="large"
                value={formData.passengers}
                onChange={(value) => setFormData({...formData, passengers: value})}
              />
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151' }}>
                {t('carType')}
              </label>
              <Select
                style={{ width: '100%' }}
                size="large"
                value={formData.carType}
                onChange={(value) => setFormData({...formData, carType: value})}
              >
                {carTypes.map(type => (
                  <Option key={type.value} value={type.value}>{type.label}</Option>
                ))}
              </Select>
            </Space>
          </Col>
        </Row>

        <Button
          type="primary"
          size="large"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          className="gradient-button"
          style={{ width: '100%', height: '50px', fontSize: '16px' }}
        >
          {t('searchCars')}
        </Button>
      </Space>
    </Card>
  );
};

export default BookingForm;
