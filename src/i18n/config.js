
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      destinations: 'Destinations',
      fleet: 'Fleet',
      blog: 'Blog',
      contact: 'Contact Us',
      login: 'Login',
      register: 'Register',
      language: 'العربية',

      // Hero Section
      heroTitle: 'The fastest and most comfortable way',
      heroSubtitle: 'to book your car',
      heroDescription: 'Where are you traveling? Find the perfect car for your journey with our premium fleet.',
      
      // Booking Form
      oneWay: 'One Way',
      roundTrip: 'Round Trip',
      pickupCity: 'Pickup City',
      pickupLocation: 'Pickup Location',
      destination: 'Destination',
      destinationLocation: 'Destination Location',
      pickupDate: 'Pickup Date',
      returnDate: 'Return Date',
      passengers: 'Passengers',
      carType: 'Car Type',
      searchCars: 'Search Cars',
      
      // Car Types
      economy: 'Economy',
      suv: 'SUV',
      luxury: 'Luxury',
      van: 'Van',
      
      // Fleet Section
      ourFleet: 'Our Premium Fleet',
      bookNow: 'Book Now',
      perDay: 'per day',
      
      // Destinations
      popularDestinations: 'Popular Destinations',
      
      // Blog
      latestNews: 'Latest News & Tips',
      readMore: 'Read More',
      
      // Contact
      getInTouch: 'Get In Touch',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      sendMessage: 'Send Message',
      
      // Footer
      aboutUs: 'About Us',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      faq: 'FAQ',
      support: 'Support',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
    },
  },
  ar: {
    translation: {
      // Navigation
      home: 'الرئيسية',
      destinations: 'الوجهات',
      fleet: 'الأسطول',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      login: 'تسجيل الدخول',
      register: 'التسجيل',
      language: 'English',

      // Hero Section
      heroTitle: 'أسرع وأكثر الطرق راحة',
      heroSubtitle: 'لحجز سيارتك',
      heroDescription: 'إلى أين تسافر؟ اعثر على السيارة المثالية لرحلتك مع أسطولنا المميز.',
      
      // Booking Form
      oneWay: 'ذهاب فقط',
      roundTrip: 'ذهاب وإياب',
      pickupCity: 'مدينة الانطلاق',
      pickupLocation: 'موقع الانطلاق',
      destination: 'الوجهة',
      destinationLocation: 'موقع الوجهة',
      pickupDate: 'تاريخ الانطلاق',
      returnDate: 'تاريخ العودة',
      passengers: 'عدد الركاب',
      carType: 'نوع السيارة',
      searchCars: 'البحث عن السيارات',
      
      // Car Types
      economy: 'اقتصادية',
      suv: 'دفع رباعي',
      luxury: 'فاخرة',
      van: 'فان',
      
      // Fleet Section
      ourFleet: 'أسطولنا المميز',
      bookNow: 'احجز الآن',
      perDay: 'في اليوم',
      
      // Destinations
      popularDestinations: 'الوجهات الشائعة',
      
      // Blog
      latestNews: 'آخر الأخبار والنصائح',
      readMore: 'اقرأ المزيد',
      
      // Contact
      getInTouch: 'تواصل معنا',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      
      // Footer
      aboutUs: 'معلومات عنا',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      faq: 'الأسئلة الشائعة',
      support: 'الدعم',
      followUs: 'تابعنا',
      allRightsReserved: 'جميع الحقوق محفوظة',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
