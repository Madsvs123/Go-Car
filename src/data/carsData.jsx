
// Dummy data for cars
export const carsData = [
  {
    id: 1,
    name: 'Economy Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: 29,
    passengers: 4,
    rating: 4.5,
    reviews: 128,
    features: ['AC', 'Bluetooth', 'GPS'],
    description: 'Perfect for city driving and short trips. Fuel-efficient and comfortable.',
    transmission: 'Automatic',
    fuel: 'Petrol'
  },
  {
    id: 2,
    name: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: 89,
    passengers: 7,
    rating: 4.8,
    reviews: 89,
    features: ['Leather Seats', '4WD', 'Premium Sound'],
    description: 'Spacious luxury vehicle ideal for family trips and business travel.',
    transmission: 'Automatic',
    fuel: 'Hybrid'
  },
  {
    id: 3,
    name: 'Sports Convertible',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: 129,
    passengers: 2,
    rating: 4.7,
    reviews: 45,
    features: ['Convertible', 'Sport Mode', 'Premium Audio'],
    description: 'Experience the thrill of open-top driving with our premium sports car.',
    transmission: 'Manual',
    fuel: 'Petrol'
  },
  {
    id: 4,
    name: 'Electric Compact',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: 45,
    passengers: 4,
    rating: 4.6,
    reviews: 72,
    features: ['Zero Emissions', 'Fast Charging', 'Smart Tech'],
    description: 'Eco-friendly electric vehicle with cutting-edge technology.',
    transmission: 'Automatic',
    fuel: 'Electric'
  },
  {
    id: 5,
    name: 'Family Van',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: 65,
    passengers: 8,
    rating: 4.4,
    reviews: 156,
    features: ['Extra Space', 'Child Seats', 'Entertainment System'],
    description: 'Spacious van perfect for large families and group adventures.',
    transmission: 'Automatic',
    fuel: 'Diesel'
  },
  {
    id: 6,
    name: 'Business Sedan',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: 55,
    passengers: 4,
    rating: 4.9,
    reviews: 234,
    features: ['Executive Interior', 'Wi-Fi', 'Chauffeur Available'],
    description: 'Professional vehicle for business meetings and corporate travel.',
    transmission: 'Automatic',
    fuel: 'Hybrid'
  }
];

// Dummy data for fleet
export const fleetData = [
  { id: 1, type: 'Sedan', capacity: 4, available: true, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, type: 'SUV', capacity: 7, available: false, image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, type: 'Coupe', capacity: 2, available: true, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 4, type: 'Van', capacity: 8, available: true, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 5, type: 'Truck', capacity: 3, available: true, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 6, type: 'Convertible', capacity: 2, available: false, image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 7, type: 'Motorcycle', capacity: 1, available: true, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];
