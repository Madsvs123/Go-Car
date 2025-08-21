
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
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Excellent service and beautiful cars. The booking process was smooth and the staff was very helpful.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "Great experience! The luxury SUV was perfect for our family vacation. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 4,
    comment: "Good value for money and reliable service. The electric car was a joy to drive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export const pricingPlansData = [
  {
    title: "Basic",
    price: "29",
    period: "per day",
    features: ["Economy Cars", "Basic Insurance", "24/7 Support", "Free Cancellation"],
    popular: false
  },
  {
    title: "Premium",
    price: "59",
    period: "per day", 
    features: ["Luxury Cars", "Full Insurance", "GPS Navigation", "Free Cancellation", "Priority Support"],
    popular: true
  },
  {
    title: "Executive",
    price: "99",
    period: "per day",
    features: ["Executive Cars", "Comprehensive Insurance", "Chauffeur Available", "Concierge Service", "Premium Support"],
    popular: false
  }
];
