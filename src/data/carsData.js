import React from 'react';
import './App.css'; // Assuming App.css contains the styles

// Dummy data for cars, updated with new image URLs and ensuring all have images.
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
    image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Updated image
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
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Updated image
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
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Updated image
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


// Dummy data for fleet, ensuring size consistency by potentially adding default values or structuring data for uniform display.
// Assuming the CSS will handle the visual consistency, data structure itself doesn't need major changes unless some fleet items are missing critical info.
export const fleetData = [
    { id: 1, type: 'Sedan', capacity: 4, available: true, image: 'https://example.com/sedan.jpg' },
    { id: 2, type: 'SUV', capacity: 7, available: false, image: 'https://example.com/suv.jpg' },
    { id: 3, type: 'Coupe', capacity: 2, available: true, image: 'https://example.com/coupe.jpg' },
    { id: 4, type: 'Van', capacity: 8, available: true, image: 'https://example.com/van.jpg' },
    { id: 5, type: 'Truck', capacity: 3, available: true, image: 'https://example.com/truck.jpg' },
    { id: 6, type: 'Convertible', capacity: 2, available: false, image: 'https://example.com/convertible.jpg' },
    { id: 7, type: 'Motorcycle', capacity: 1, available: true, image: 'https://example.com/motorcycle.jpg' },
];


// Example Navbar Component - rewritten to be contained and responsive.
function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="nav-logo">CarRental</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#fleet" className="nav-link">Fleet</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <button className="nav-btn">Book Now</button>
        {/* Add a hamburger menu icon for mobile */}
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

// Placeholder for App component or other main components
function App() {
  return (
    <div>
      <NavigationBar />
      <header className="hero-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485294851736-2163726624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
        <div className="container">
          <h1>Find Your Perfect Ride</h1>
          <p>Explore our diverse fleet and book your next adventure.</p>
          <button className="cta-button">View Cars</button>
        </div>
      </header>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Service 1" />
              <h3>Hassle-Free Booking</h3>
              <p>Easy online booking system.</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Service 2" />
              <h3>24/7 Roadside Assistance</h3>
              <p>We're always there when you need us.</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Service 3" />
              <h3>Flexible Rental Periods</h3>
              <p>Rent by the day, week, or month.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="fleet-section" style={{ backgroundColor: '#f0f8ff' }}> {/* Adjusted background color */}
        <div className="container">
          <h2>Our Fleet</h2>
          <div className="fleet-grid">
            {carsData.map(car => (
              <div key={car.id} className="fleet-card">
                <img src={car.image} alt={car.name} className="fleet-card-img" />
                <div className="fleet-card-content">
                  <h3>{car.name}</h3>
                  <p>Price: ${car.price}/day</p>
                  <p>Passengers: {car.passengers}</p>
                  <p>Rating: {car.rating} ({car.reviews} reviews)</p>
                  <button className="details-button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485294851736-2163726624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}> {/* Consistent background */}
        <div className="container">
          <h2>About Us</h2>
          <p>We are a leading car rental company dedicated to providing quality vehicles and excellent customer service.</p>
        </div>
      </section>

      <footer className="footer" style={{ backgroundColor: '#333', color: 'white' }}> {/* Consistent footer styling */}
        <div className="container">
          <p>&copy; 2023 CarRental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;