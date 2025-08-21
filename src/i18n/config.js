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
      contact: 'Contact',
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
      ourFleet: 'Our Fleet',
      fleetDescription: 'Choose from our diverse fleet of premium vehicles. Each car is maintained to the highest standards and equipped with modern amenities for your comfort and safety.',
      bookNow: 'Book Now',
      perDay: 'per day',
      passengers: 'passengers',
      reviews: 'reviews',
      whyChooseFleet: 'Why Choose Our Fleet?',
      safetyFirst: 'Safety First',
      safetyDescription: 'All vehicles undergo regular safety inspections and maintenance',
      premiumQuality: 'Premium Quality',
      qualityDescription: 'Modern vehicles with the latest features and amenities',
      support247: '24/7 Support',
      supportDescription: 'Round-the-clock customer support and roadside assistance',

      // Destinations
      popularDestinations: 'Popular Destinations',

      // Blog
      latestNews: 'Latest News & Tips',
      latestFromBlog: 'Latest From Our Blog',
      readMore: 'Read More',
      allArticles: 'All Articles',
      travelTips: 'Travel Tips',
      carGuides: 'Car Guides',
      safety: 'Safety',
      viewAllArticles: 'View All Articles',

      // Contact
      getInTouch: 'Get In Touch',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      sendMessage: 'Send Message',
      contactInformation: 'Contact Information',
      sendUsMessage: 'Send us a Message',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone Number',
      subject: 'Subject',
      available247: 'Available 24/7',
      replyWithin24: 'We reply within 24 hours',
      visitOffice: 'Visit our office',
      planPerfectTrip: 'Plan Your Perfect Trip',
      customRouteDescription: 'Can\'t find your destination? Contact us for custom route planning and special requests.',
      requestCustomRoute: 'Request Custom Route',

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
      ourFleet: 'أسطولنا',
      fleetDescription: 'اختر من أسطولنا المتنوع من المركبات المتميزة. كل سيارة يتم صيانتها وفقاً لأعلى المعايير ومجهزة بوسائل الراحة الحديثة لراحتك وأمانك.',
      bookNow: 'احجز الآن',
      perDay: 'في اليوم',
      passengers: 'راكب',
      reviews: 'تقييم',
      whyChooseFleet: 'لماذا تختار أسطولنا؟',
      safetyFirst: 'الأمان أولاً',
      safetyDescription: 'جميع المركبات تخضع لفحوصات أمان وصيانة منتظمة',
      premiumQuality: 'جودة متميزة',
      qualityDescription: 'مركبات حديثة بأحدث الميزات ووسائل الراحة',
      support247: 'دعم 24/7',
      supportDescription: 'دعم عملاء على مدار الساعة ومساعدة على الطريق',

      // Destinations
      popularDestinations: 'الوجهات الشائعة',

      // Blog
      latestNews: 'آخر الأخبار والنصائح',
      latestFromBlog: 'آخر أخبار مدونتنا',
      readMore: 'اقرأ المزيد',
      allArticles: 'جميع المقالات',
      travelTips: 'نصائح السفر',
      carGuides: 'أدلة السيارات',
      safety: 'السلامة',
      viewAllArticles: 'عرض جميع المقالات',

      // Contact
      getInTouch: 'تواصل معنا',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      contactInformation: 'معلومات الاتصال',
      sendUsMessage: 'أرسل لنا رسالة',
      fullName: 'الاسم الكامل',
      emailAddress: 'عنوان البريد الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      subject: 'الموضوع',
      available247: 'متاح 24/7',
      replyWithin24: 'نرد خلال 24 ساعة',
      visitOffice: 'زيارة مكتبنا',
      planPerfectTrip: 'خطط لرحلتك المثالية',
      customRouteDescription: 'لا يمكنك العثور على وجهتك؟ اتصل بنا للحصول على تخطيط مسار مخصص وطلبات خاصة.',
      requestCustomRoute: 'طلب مسار مخصص',

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