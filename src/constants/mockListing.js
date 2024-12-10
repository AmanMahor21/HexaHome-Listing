import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";
import house5 from "../assets/images/house5.jpg";
import house6 from "../assets/images/house6.jpg";
import house7 from "../assets/images/house7.jpg";


// Mock property data

export const mockListing = [
  {
    price: "₹ 74L",
    label: "2BHK Builder House for sale",
    location: "in MG Road, Bengaluru, Karnataka", // Changed city to Bengaluru
    images: [house1, house2, house3],
    propetyInfo: {
      status: "Ready to Move",
      age: "1 to 3 years old",
      furnishedType: "Unfurnished",
      area: "1200 sq.ft",
      floor: 3,
      bath: 2,
      balcony: 1,
    },
    freeHold: "Freehold",
    image: null,
    name: "Sanjana Shrivastava",
    propertyType: "Builder House",
  },
  {
    price: "₹ 1.2Cr",
    label: "4BHK Villa for sale",
    location: "in Jubilee Hills, Hyderabad, Telangana", // Changed city to Hyderabad
    images: [house4, house5],
    propetyInfo: {
      status: "Ready to Move",
      age: "0 to 1 year old",
      furnishedType: "Furnished",
      area: "3000 sq.ft",
      floor: 2,
      bath: 4,
      balcony: 3,
    },
    freeHold: "Freehold",
    image: null,
    name: "Ravi Verma",
    propertyType: "Villa",
  },
  {
    price: "₹ 56L",
    label: "3BHK Apartment for sale",
    location: "in Koregaon Park, Pune, Maharashtra", // Changed city to Pune
    images: [house2, house3, house6],
    propetyInfo: {
      status: "Under Construction",
      age: "New Launch",
      furnishedType: "Semi-Furnished",
      area: "1500 sq.ft",
      floor: 5,
      bath: 3,
      balcony: 2,
    },
    freeHold: "Leasehold",
    image: null,
    name: "Anita Desai",
    propertyType: "Apartment",
  },
  {
    price: "₹ 85L",
    label: "2BHK Apartment for sale",
    location: "in DLF Phase 3, Gurugram, Haryana", // Changed city to Gurugram
    images: [house3, house5],
    propetyInfo: {
      status: "Ready to Move",
      age: "2 to 4 years old",
      furnishedType: "Furnished",
      area: "1400 sq.ft",
      floor: 2,
      bath: 2,
      balcony: 1,
    },
    freeHold: "Freehold",
    image: null,
    name: "Meera Sharma",
    propertyType: "Apartment",
  },
  {
    price: "₹ 95L",
    label: "3BHK Individual Floor for sale",
    location: "in Banjara Hills, Hyderabad, Telangana", // Changed city to Hyderabad
    images: [house1, house6, house7],
    propetyInfo: {
      status: "Under Construction",
      age: "New Launch",
      furnishedType: "Unfurnished",
      area: "1800 sq.ft",
      floor: 7,
      bath: 3,
      balcony: 2,
    },
    freeHold: "Leasehold",
    image: null,
    name: "Kunal Agarwal",
    propertyType: "Individual Floor",
  },
  {
    price: "₹ 1.8Cr",
    label: "5BHK Villa for sale",
    location: "in ECR Road, Chennai, Tamil Nadu", // Changed city to Chennai
    images: [house4, house7],
    propetyInfo: {
      status: "Ready to Move",
      age: "0 to 1 year old",
      furnishedType: "Furnished",
      area: "4000 sq.ft",
      floor: 1,
      bath: 5,
      balcony: 4,
    },
    freeHold: "Freehold",
    image: null,
    name: "Shruti Iyer",
    propertyType: "Villa",
  },
  {
    price: "₹ 48L",
    label: "1BHK Apartment for sale",
    location: "in Whitefield, Bengaluru, Karnataka", // Changed city to Bengaluru
    images: [house2, house4],
    propetyInfo: {
      status: "Under Construction",
      age: "New Launch",
      furnishedType: "Semi-Furnished",
      area: "800 sq.ft",
      floor: 10,
      bath: 1,
      balcony: 1,
    },
    freeHold: "Leasehold",
    image: null,
    name: "Ramesh Kumar",
    propertyType: "Apartment",
  },
  {
    price: "₹ 67L",
    label: "2BHK Apartment for sale",
    location: "in Powai, Mumbai, Maharashtra", // Changed city to Mumbai
    images: [house5, house7],
    propetyInfo: {
      status: "Ready to Move",
      age: "1 to 3 years old",
      furnishedType: "Unfurnished",
      area: "900 sq.ft",
      floor: 6,
      bath: 2,
      balcony: 1,
    },
    freeHold: "Freehold",
    image: null,
    name: "Nikita Joshi",
    propertyType: "Apartment",
  },
  {
    price: "₹ 2.5Cr",
    label: "2BHK Individual Floor for sale",
    location: "in Marine Drive, Mumbai, Maharashtra", // Changed city to Mumbai
    images: [house6, house7, house1],
    propetyInfo: {
      status: "Ready to Move",
      age: "0 to 1 year old",
      furnishedType: "Fully Furnished",
      area: "3500 sq.ft",
      floor: 15,
      bath: 4,
      balcony: 3,
    },
    freeHold: "Freehold",
    image: null,
    name: "Arjun Mehta",
    propertyType: "Individual Floor",
  },
  {
    price: "₹ 1.1Cr",
    label: "3BHK Apartment for sale",
    location: "in Sector 21, Chandigarh", // Changed city to Chandigarh
    images: [house3, house4],
    propetyInfo: {
      status: "Under Construction",
      age: "New Launch",
      furnishedType: "Semi-Furnished",
      area: "1900 sq.ft",
      floor: 4,
      bath: 3,
      balcony: 2,
    },
    freeHold: "Leasehold",
    image: null,
    name: "Divya Kapoor",
    propertyType: "Apartment",
  },
];