import {TSongPositions} from 'types';

export const SONG_HEIGHT = 80;
export const SONGS = [
  {
    id: 0,
    title: 'Hymn for the Weekend',
    singer: 'Coldplay',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6',
  },
  {
    id: 1,
    title: 'Paradise',
    singer: 'Coldplay',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d',
  },
  {
    id: 2,
    title: 'Viva La Vida',
    singer: 'Coldplay',
    imageSrc: 'https://i.ytimg.com/vi/dvgZkm1xWPE/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'A Sky Full of Stars',
    singer: 'Coldplay',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273e5a95573f1b91234630fd2cf',
  },
  {
    id: 4,
    title: 'Clocks',
    singer: 'Coldplay',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82',
  },
  {
    id: 5,
    title: 'The Scientist',
    singer: 'Coldplay',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82',
  },
  {
    id: 6,
    title: 'Dusk Till Dawn (feat. Sia)',
    singer: 'ZAYN, Sia',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b27323852b7ef0ecfe29d38d97ee',
  },
  {
    id: 7,
    title: 'Titanium (feat. Sia)',
    singer: 'David Guetta, Sia',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwB_jMjMFnQkQOPvENr-diiJfDWFripRHBMSdeaHZyA&s',
  },
  {
    id: 8,
    title: 'Chandelier',
    singer: 'Sia',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273297b2c53224bd19162f526e3',
  },
  {
    id: 9,
    title: 'Unstoppable',
    singer: 'Sia',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273754b2fddebe7039fdb912837',
  },
  {
    id: 10,
    title: 'Cheap Thrills',
    singer: 'Sia, Sean Paul',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b2731e6901561bb0cd5697cbfded',
  },
  {
    id: 11,
    title: 'Elastic Heart',
    singer: 'Sia',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b2735d199c9f6e6562aafa5aa357',
  },
  {
    id: 12,
    title: 'Believer',
    singer: 'Imagine Dragons',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273156aeddf54ed40b1d9d30c9f',
  },
  {
    id: 13,
    title: 'Let me love you',
    singer: 'DJ Snake, Justin Bieber',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc',
  },
  {
    id: 14,
    title: 'Lean On',
    singer: 'Major Lazer',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273548910835dbfaf3f79a1dc46',
  },
  {
    id: 15,
    title: 'Taki Taki',
    singer: 'DJ Snake',
    imageSrc:
      'https://i.scdn.co/image/ab67616d0000b273e105c410a7b390c61a58cbf8',
  },
];

export const getInitialPositions = (): TSongPositions => {
  let songPositions: TSongPositions = {};
  for (let i = 0; i < SONGS.length; i++) {
    songPositions[i] = {
      updatedIndex: i,
      updatedTop: i * SONG_HEIGHT,
    };
  }
  return songPositions;
};

export const Color_Pallete = {
  metal_black: '#0E0C0A',
  night_shadow: '#1C1C1C',
  crystal_white: '#FFFFFF',
  silver_storm: '#808080',
};

export const ANIMATION_DURATION = 600;

export const MIN_BOUNDRY = 0;
export const MAX_BOUNDRY = (SONGS.length - 1) * SONG_HEIGHT;

export const faqs = [
  {
    id: '1',
    title: 'What is your return policy?',
    description:
      'You can return any item within 30 days of purchase for a full refund. Items must be in their original condition with all tags attached. Please include the receipt or proof of purchase when returning items. Refunds will be processed within 5-7 business days after we receive the returned items.',
  },
  {
    id: '2',
    title: 'Do you offer international shipping?',
    description:
      'Yes, we ship to over 200 countries worldwide. Shipping fees and delivery times vary depending on the destination. Please check our shipping policy page for detailed information on international shipping rates and estimated delivery times.',
  },
  {
    id: '3',
    title: 'How can I track my order?',
    description:
      'You can track your order using the tracking link provided in your confirmation email. The tracking information will be updated as your order progresses through the delivery process. If you have any issues with tracking your order, please contact our customer service team for assistance. In case you do not receive the tracking link or face any issues, you can always log into your account on our website and view the status of your order. We strive to keep you updated at every step. If there are any delays or changes in the delivery schedule, we will notify you via email or SMS',
  },
  {
    id: '4',
    title: 'What payment methods do you accept?',
    description:
      'We accept Visa, MasterCard, American Express, and PayPal. We also offer other payment options such as Apple Pay, Google Pay, and Klarna for your convenience. All transactions are secure and encrypted to protect your payment information.',
  },
  {
    id: '5',
    title: 'How do I change or cancel my order?',
    description:
      'Please contact our customer service team as soon as possible to change or cancel your order. If your order has not yet been processed, we will be able to make the necessary changes or cancel it. Once an order has been processed or shipped, we cannot make any changes.',
  },
  {
    id: '6',
    title: 'Do you offer gift wrapping?',
    description:
      'Yes, we offer gift wrapping for an additional charge. You can select the gift wrapping option during the checkout process. Our gift wrapping includes a premium wrapping paper and a personalized message card. This service is perfect for special occasions such as birthdays, anniversaries, and holidays.',
  },
  {
    id: '7',
    title: 'What is your privacy policy?',
    description:
      'Your privacy is important to us. We do not share your personal information with third parties except as necessary to fulfill your orders and provide our services. Please read our full privacy policy on our website for detailed information on how we collect, use, and protect your personal data.',
  },
  {
    id: '8',
    title: 'Can I buy a gift card?',
    description:
      'Yes, gift cards are available for purchase on our website. Our gift cards are perfect for any occasion and can be used to purchase any item in our store. You can choose from a variety of designs and denominations. Gift cards are delivered electronically via email.',
  },
  {
    id: '9',
    title: 'How do I contact customer service?',
    description:
      'You can contact customer service via email or phone. Our contact information is available on our website. We are committed to providing excellent customer service and will respond to your inquiries within 24 hours. For urgent issues, please call our customer service hotline.',
  },
  {
    id: '10',
    title: 'What is your warranty policy?',
    description:
      'We offer a one-year warranty on all our products. This warranty covers manufacturing defects and issues that arise from normal use. If you experience any problems with your purchase, please contact our customer service team to initiate a warranty claim. We will repair or replace the item at no additional cost to you.',
  },
];
