import {
    MdOutlineApartment,
    MdHouseSiding,
    MdOutlineWater,
    MdCabin,
  } from 'react-icons/md';
  import { BsSnow } from 'react-icons/bs';
  import { BiHomeAlt } from 'react-icons/bi';
  import {
    GiKidSlide,
    GiSpaceNeedle,
    GiCampingTent,
    GiLightningDome,
    GiEvilTree,
    GiWaveSurfer,
    GiMountainCave,
    GiCaveEntrance,
    GiGolfFlag,
  } from 'react-icons/gi';
  import { AiOutlineCoffee } from 'react-icons/ai';
  import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
  import { RiEarthquakeFill } from 'react-icons/ri';
  
  export const locationsTab = [
    { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
    { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
    { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
    { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
    { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
    { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
    { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
    { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
    { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
    { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
    { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
    { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
    { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
    { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
    { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
    { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
    { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
    { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
    { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
    { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
  ];
  
  export const locations = [
    {
      id: 1,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Manali, Himachal Pradesh',
      days: 'Oct 2-9',
      price: '7999 INR night',
      isNew: true,
      rating: 4.5,
    },
    {
      id: 2,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Darjeeling, West Bengal',
      days: 'Sep 2-11',
      price: '5999 INR night',
      isNew: false,
      rating: 4.99,
    },
    {
      id: 3,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Guwahati, Assam',
      days: 'Nov 19-22',
      price: '5299 INR night',
      isNew: true,
      rating: 4.6,
    },
    {
      id: 4,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Puducherry, India',
      days: 'Sep 13-18',
      price: '8499 INR night',
      isNew: false,
      rating: 4.2,
    },
    {
      id: 5,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Dehradun, Uttarakhand',
      days: 'Aug 1-6',
      price: '4999 INR night',
      isNew: true,
      rating: 4.1,
    },
    {
      id: 6,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Ladakh, India',
      days: 'Oct 9-15',
      price: '13999 INR night',
      isNew: false,
      rating: 4.6,
    },
    {
      id: 7,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Coorg, Karnataka',
      days: 'June 7-12',
      price: '3599 INR night',
      isNew: true,
      rating: 4.7,
    },
    {
      id: 8,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Bharatpur Bird Sanctuary, Rajasthan',
      days: 'Jun 11-16',
      price: '3999 INR night',
      isNew: false,
      rating: 4.8,
    },
    {
      id: 9,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Shillong, Meghalaya',
      days: 'Jul 1-6',
      price: '$6599 INR night',
      isNew: true,
      rating: 4.3,
    },
    {
      id: 10,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Kaundinya Sanctuary, Andhra Pradesh',
      days: 'Jun 12-18',
      price: '5599 INR night',
      isNew: false,
      rating: 4.6,
    },
    {
      id: 11,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Yercaud, Tamil Nadu',
      days: 'Nov 2-7',
      price: '4999 INR night',
      isNew: false,
      rating: 4.1,
    },
    {
      id: 12,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Dzongri Trek, Sikkim',
      days: 'Jun 3-4',
      price: '7999 INR night',
      isNew: false,
      rating: 4.2,
    },
  ];
  