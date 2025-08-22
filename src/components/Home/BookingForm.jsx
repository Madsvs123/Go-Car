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
    { value: 'cairo', label: t('city_cairo', 'Cairo') },
    { value: 'alexandria', label: t('city_alexandria', 'Alexandria') },
    { value: 'dubai', label: t('city_dubai', 'Dubai') },
    { value: 'abu-dhabi', label: t('city_abu_dhabi', 'Abu Dhabi') },
    { value: 'riyadh', label: t('city_riyadh', 'Riyadh') },
    { value: 'jeddah', label: t('city_jeddah', 'Jeddah') }
  ];

  const locations = [
    { value: 'airport', label: t('location_airport', 'Airport') },
    { value: 'downtown', label: t('location_downtown', 'Downtown') },
    { value: 'hotel', label: t('location_hotel', 'Hotel') },
    { value: 'station', label: t('location_station', 'Station') }
  ];

  const carTypes = [
    { value: 'economy', label: t('carType_economy', 'Economy') },
    { value: 'suv', label: t('carType_suv', 'SUV') },
    { value: 'luxury', label: t('carType_luxury', 'Luxury') },
    { value: 'van', label: t('carType_van', 'Van') },
    { value: 'electric', label: t('carType_electric', 'Electric') },
    { value: 'sports', label: t('carType_sports', 'Sports') }
  ];

  const handleSearch = () => {
    if (!formData.pickupCity || !formData.destination || !formData.pickupDate) {
      message.warning(t('booking_validation_warning', 'Please fill in all required fields'));
      return;
    }
    
    if (tripType === 'roundTrip' && !formData.returnDate) {
      message.warning(t('booking_validation_return_date', 'Please select return date for round trip'));
      return;
    }
    
    message.success(t('booking_search_success', 'Searching for available cars...'));
    console.log('Search data:', { tripType, ...formData });
  };

  return (
    <Card 
      style={{ 
        borderRadius: '16px', 
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        border: 'none'
      }}
      bodyStyle={{ padding: '24px' }}
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
            {t('booking_oneWay', 'One Way')}
          </Radio.Button>
          <Radio.Button value="roundTrip" style={{ flex: 1, textAlign: 'center' }}>
            {t('booking_roundTrip', 'Round Trip')}
          </Radio.Button>
        </Radio.Group>

        <Row gutter={16}>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                <EnvironmentOutlined style={{ marginRight: '8px' }} /> 
                {t('booking_pickupCity', 'Pickup City')} *
              </label>
              <Select
                placeholder={t('booking_pickupCity_placeholder', 'Select pickup city')}
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
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                <EnvironmentOutlined style={{ marginRight: '8px' }} /> 
                {t('booking_destination', 'Destination')} *
              </label>
              <Select
                placeholder={t('booking_destination_placeholder', 'Select destination')}
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
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                {t('booking_pickupLocation', 'Pickup Location')}
              </label>
              <Select
                placeholder={t('booking_pickupLocation_placeholder', 'Select location')}
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
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                {t('booking_destinationLocation', 'Destination Location')}
              </label>
              <Select
                placeholder={t('booking_destinationLocation_placeholder', 'Select location')}
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
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                <CalendarOutlined style={{ marginRight: '8px' }} /> 
                {t('booking_pickupDate', 'Pickup Date')} *
              </label>
              <DatePicker
                style={{ width: '100%' }}
                size="large"
                placeholder={t('booking_pickupDate_placeholder', 'Select date')}
                value={formData.pickupDate}
                onChange={(date) => setFormData({...formData, pickupDate: date})}
                disabledDate={(current) => current && current < dayjs().startOf('day')}
              />
            </Space>
          </Col>
          {tripType === 'roundTrip' && (
            <Col span={12}>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                  <CalendarOutlined style={{ marginRight: '8px' }} /> 
                  {t('booking_returnDate', 'Return Date')} *
                </label>
                <DatePicker
                  style={{ width: '100%' }}
                  size="large"
                  placeholder={t('booking_returnDate_placeholder', 'Select date')}
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
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                <UserOutlined style={{ marginRight: '8px' }} /> 
                {t('booking_passengers', 'Passengers')}
              </label>
              <InputNumber
                min={1}
                max={8}
                style={{ width: '100%' }}
                size="large"
                value={formData.passengers}
                onChange={(value) => setFormData({...formData, passengers: value})}
                placeholder={t('booking_passengers_placeholder', 'Number of passengers')}
              />
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <label style={{ fontWeight: 500, color: '#374151', fontSize: '14px' }}>
                {t('booking_carType', 'Car Type')}
              </label>
              <Select
                style={{ width: '100%' }}
                size="large"
                value={formData.carType}
                onChange={(value) => setFormData({...formData, carType: value})}
                placeholder={t('booking_carType_placeholder', 'Select car type')}
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
          style={{ 
            width: '100%', 
            height: '50px', 
            fontSize: '16px',
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
            border: "none",
            fontWeight: 600
          }}
        >
          {t('booking_searchCars', 'Search Cars')}
        </Button>
      </Space>
    </Card>
  );
};

export default BookingForm;