import logo from './logo.webp';
import hero_img from './Banner-right.png';

export const assets = {
  logo,
  hero_img,
};

// 🧀 Cheese Product Images
import img50_50_Shredded_Cheese from './50_50_Shredded-cheese.webp';
import img50_50_Shredded_Cheese_pack from './Pack-50_50_Shredded_Cheese.webp';

import img70_30_Shredded_Cheese from './Shredded-Cheese-70-30.webp';
import img70_30_Shredded_Cheese_Pack from './Pack-70_30_Shredded-Cheese.webp';

import imgCheddar_Cheese_Block from './cheddar-block.webp';
import imgCheddar_Cheese_Block_pack from './cheddar-cheese-block.webp';

import imgMozzarella_Cheese_Block from './mozzarella--block_1.webp';
import imgMozzarella_Cheese_Block_pack from './pack-mozzarella-cheese-block.webp';

import img50_50_Shredded_Cheese_2kg from './Shredded-50-50-2Kg.webp';
import img50_50_Shredded_Cheese_2kg_pack from './Pack-50-50-Shredded-Cheese-2Kg.webp';

import img70_30_Shredded_Cheese_2kg_pack from './Pack-70_30_Shredded-Cheese-2kg.webp';

import imgCheddar_Cheese_Block_2kg from './Cheddar-block-2kg.webp';
import imgCheddar_Cheese_Block_2kg_pack from './cheddar-cheese-block-2kg.webp';

import imgMozzarella_Cheese_Block_2kg from './mozzarellla-block-2kg.webp';
import imgMozzarella_Cheese_Block_2kg_pack from './pack-mozzarellla-block-2kg.webp';

import imgYellow_Burger_Slices_1kg from './yellow-burger-slices.webp';
import imgYellow_Burger_Slices_1kg_pack from './pack-yellow-burger-slices-1kg.webp';

import imgCheesy_Slice_Deal from './cheesy-slice-deal.webp';
import imgCheesy_Slice_Deal_pack from './pack-cheesy-slice-deal.webp';

import imgPremium_White_Cheddar_Slices_1kg from './white-cheese-slices.webp';

import img100_Mozzarella_Shredded_2kg from './Mozzarella-Cheese-2Kg.webp';
import img100_Mozzarella_Shredded_2kg_pack from './Pack-Shredded-100_-Mozzarella-Cheese-2Kg.webp';

import imgStretchy_Deal from './stretchy-deal.webp';
import imgStretchy_Deal_pack from './pack-stretchy-deal.webp';

import imgStretch_And_Melt_Deal from './stretch-melt-deal.webp';
import imgStretch_And_Melt_Deal_pack from './pack-stretch-melt-deal.webp';

// 🛒 Product Dataset
export const products = [
  {
    _id: '50_50_Shredded',
    name: '50/50 Shredded Cheese',
    description:
      'A perfect blend of 50% sharp cheddar and 50% creamy mozzarella—great for all your cheesy dishes.',
    price: 2650,
    image: [img50_50_Shredded_Cheese, img50_50_Shredded_Cheese_pack],
    category: 'Shredded',
    subCategory: 'Blend',
    sizes: ['1 kg', '2 kg'],
    bestseller: true,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: '70_30_Shredded',
    name: '70/30 Shredded Cheese',
    description:
      'Made with 70% mozzarella and 30% cheddar, this blend gives you the perfect melt and taste for pizzas and more.',
    price: 2750,
    image: [img70_30_Shredded_Cheese, img70_30_Shredded_Cheese_Pack],
    category: 'Shredded',
    subCategory: 'Blend',
    sizes: ['1 kg', '2 kg'],
    bestseller: true,
    brand: 'Aangan Dairy',
    rating: 4.7,
    deal: false,
  },
  {
    _id: 'cheddar_block',
    name: 'Cheddar Cheese Block',
    description:
      'Rich, sharp, and creamy cheddar block—perfect for slicing, shredding, or melting in your favorite dishes.',
    price: 2450,
    image: [imgCheddar_Cheese_Block, imgCheddar_Cheese_Block_pack],
    category: 'Cheddar',
    subCategory: 'Block',
    sizes: ['1 kg', '2 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.6,
    deal: false,
  },
  {
    _id: 'mozzarella_block',
    name: 'Mozzarella Cheese Block',
    description:
      'Creamy mozzarella block with excellent stretch and melt—ideal for pizzas, lasagnas, and baked dishes.',
    price: 2550,
    image: [imgMozzarella_Cheese_Block, imgMozzarella_Cheese_Block_pack],
    category: 'Mozzarella',
    subCategory: 'Block',
    sizes: ['1 kg', '2 kg'],
    bestseller: true,
    brand: 'Aangan Dairy',
    rating: 4.8,
    deal: false,
  },

  {
    _id: '50_50_2kg',
    name: '50/50 Shredded Cheese 2 kg',
    description:
      'A perfect blend of 50% sharp cheddar and 50% creamy mozzarella—great for all your cheesy dishes.',
    price: 2650,
    image: [img50_50_Shredded_Cheese_2kg, img50_50_Shredded_Cheese_2kg_pack],
    category: 'Shredded',
    subCategory: 'Blend',
    sizes: ['2 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: '70_30_2kg',
    name: '70/30 Shredded Cheese 2 kg',
    description:
      'A delicious mix: 70% mozzarella, 30% cheddar for that perfect melt and stretch.',
    price: 2800,
    image: [img70_30_Shredded_Cheese_2kg_pack],
    category: 'Shredded',
    subCategory: 'Blend',
    sizes: ['2 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: 'cheddar_block_2kg',
    name: 'Cheddar Cheese Block 2 kg',
    description:
      'Rich, sharp-flavored cheddar block—ideal for slicing, grating, or snacking.',
    price: 2550,
    image: [imgCheddar_Cheese_Block_2kg, imgCheddar_Cheese_Block_2kg_pack],
    category: 'Cheddar',
    subCategory: 'Block',
    sizes: ['2 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: 'mozzarella_block_2kg',
    name: 'Mozzarella Cheese Block 2 kg',
    description:
      'Smooth, melty mozzarella block—perfect for pizzas, baking, or melting.',
    price: 2850,
    image: [
      imgMozzarella_Cheese_Block_2kg,
      imgMozzarella_Cheese_Block_2kg_pack,
    ],
    category: 'Mozzarella',
    subCategory: 'Block',
    sizes: ['2 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: 'yellow_burger_slices_1kg',
    name: 'Yellow Burger Slices 1 kg',
    description:
      'Cheesy yellow slices, perfect for burgers and quick sandwiches.',
    price: 1450,
    image: [imgYellow_Burger_Slices_1kg, imgYellow_Burger_Slices_1kg_pack],
    category: 'Cheddar',
    subCategory: 'Slices',
    sizes: ['1 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: 'premium_white_slices_1kg',
    name: 'Premium White Cheddar Cheese Slices 1 kg',
    description:
      'Creamy, smooth white cheddar slices—ideal for gourmet sandwiches and snacking.',
    price: 1500,
    image: [imgPremium_White_Cheddar_Slices_1kg],
    category: 'Cheddar',
    subCategory: 'Slices',
    sizes: ['1 kg'],
    bestseller: true,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: 'cheesy_slice_deal',
    name: 'Cheesy Slice Deal',
    description:
      'Combo pack featuring sliced cheese—great value for everyday cheesy cravings.',
    price: 3050,
    image: [imgCheesy_Slice_Deal, imgCheesy_Slice_Deal_pack],
    category: 'Deals',
    subCategory: 'Slices',
    sizes: ['combo'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: true,
  },
  {
    _id: '100_mozzarella_shredded_2kg',
    name: '100% Mozzarella Shredded Cheese 2 kg',
    description:
      'Pure mozzarella, shredded—perfect for that creamy, stringy cheese pull.',
    price: 3200,
    image: [
      img100_Mozzarella_Shredded_2kg,
      img100_Mozzarella_Shredded_2kg_pack,
    ],
    category: 'Shredded',
    subCategory: 'Mozzarella',
    sizes: ['2 kg'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: false,
  },
  {
    _id: 'stretchy_deal',
    name: 'Stretchy Deal',
    description:
      'A value pack designed for maximum stretch—great for pizzas and casseroles.',
    price: 5200,
    image: [imgStretchy_Deal, imgStretchy_Deal_pack],
    category: 'Deals',
    subCategory: 'Combo',
    sizes: ['deal pack'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: true,
  },
  {
    _id: 'stretch_melt_deal',
    name: 'Stretch & Melt Deal',
    description:
      'Combo of stretchy and melting cheeses—perfect all-in-one deal.',
    price: 5400,
    image: [imgStretch_And_Melt_Deal, imgStretch_And_Melt_Deal_pack],
    category: 'Deals',
    subCategory: 'Combo',
    sizes: ['deal pack'],
    bestseller: false,
    brand: 'Aangan Dairy',
    rating: 4.5,
    deal: true,
  },
];
