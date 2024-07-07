import { delivery, customer, shield_tick, phone, computers, head_phone, camera, game_pad,
  smart_watch, woman, speaker, perfume, playstation
} from "./assets"

export const headerAd = {
  discount: '50%',
  text: 'Summer Sale For All Swim Suits And Free Express Delivery',
  link: '/',
}

export const navLinks = [
  {name: 'Home', to: '/'},
  {name: 'Contact', to: '/contact'},
  {name: 'About', to: '/about'},
  {name: 'Signup', to: '/signup'},
]

export const categories = [
  {name: 'Phones', img: phone},
  {name: 'Computers', img: computers},
  {name: 'SmartWatch', img: smart_watch},
  {name: 'Camera', img: camera},
  {name: 'HeadPhones', img: head_phone},
  {name: 'Gaming', img: game_pad},
]

export const newArrival = [
  {img: playstation, title: 'PlayStation 5', text: 'Black and White version of the PS5 coming out on sale.'},
  {img: woman, title: 'Women’s Collections', text: 'Featured woman collections that give you another vibe.'},
  {img: speaker, title: 'Speakers', text: 'Amazon wireless speakers'},
  {img: perfume, title: 'Perfume', text: 'GUCCI INTENSE OUD EDP'},
]

export const servicesInfo = [
  {img: delivery, title: 'FREE AND FAST DELIVERY', text: 'Free delivery for all orders over $140'},
  {img: customer, title: '24/7 CUSTOMER SERVICE', text: 'Friendly 24/7 customer support'},
  {img: shield_tick, title: 'MONEY BACK GUARANTEE', text: 'We reurn money within 30 days'},
]

export const footerLinks = [
  {
    title: 'Support',
    text: ['111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.', 'exclusive@gmail.com', '+88015-88888-9999']
  },
  {
    title: 'Accounts',
    links: [
      {name: 'My Account', to: '/'},
      {name: 'Login / Register', to: '/signup'},
      {name: 'Cart', to: '/cart'},
      {name: 'Wishlist', to: '/wishlist'},
      {name: 'Shop', to: '/shop'},
    ]
  },
  {
    title: 'Quick Link',
    text: ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact']
  },
]