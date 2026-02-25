export interface TourImage {
  term: string;
  url: string;
}

export interface TourPackage {
  id: string;
  title: string;
  price5Seater: number;
  price7Seater: number;
  duration?: string;
  places: string[];
  images: TourImage[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "local-plan-a",
    title: "Local Sightseeing – Plan A",
    price5Seater: 2999,
    price7Seater: 3499,
    duration: "Full Day",
    places: [
      "Simhachalam",
      "Lumbini Park",
      "Kailasagiri",
      "Teneti Park",
      "Vuda Park",
      "Submarine Museum",
      "Aircraft Museum",
      "RK Beach",
      "Fishing Harbour Boating",
      "Central Park",
    ],
    images: [
      { term: "Simhachalam Temple", url: "/src/assets/tours/simhachalam.jpg" },
      { term: "Lumbini Park", url: "/src/assets/tours/lumbini-park.jpg" },
      { term: "Kailasagiri Hilltop", url: "/src/assets/tours/kailasagiri.jpg" },
      { term: "Teneti Park", url: "/src/assets/tours/teneti-park.jpg" },
      { term: "VUDA Park", url: "/src/assets/tours/vuda-park.jpg" },
      { term: "Submarine Museum", url: "/src/assets/tours/submarine-museum.jpg" },
      { term: "Aircraft Museum", url: "/src/assets/tours/aircraft-museum.jpg" },
      { term: "RK Beach", url: "/src/assets/tours/rk-beach.jpg" },
      { term: "Fishing Harbour", url: "/src/assets/tours/fishing-harbour.jpg" },
      { term: "Central Park", url: "/src/assets/tours/central-park.jpg" },
    ],
  },
  {
    id: "local-plan-b",
    title: "Local Sightseeing – Plan B",
    price5Seater: 2499,
    price7Seater: 2999,
    duration: "Full Day",
    places: [
      "Bheemili Beach",
      "Natural Rock Arch",
      "Thotlakonda",
      "Rama Naidu Studio",
      "Rushikonda Beach",
      "Venkateswara Swami Temple",
      "ISKON Temple",
      "Vizag View Point",
      "Kambalakonda",
      "Zoo Park",
    ],
    images: [
      { term: "Bheemili Beach", url: "/src/assets/tours/bheemili-beach.jpg" },
      { term: "Natural Rock Arch", url: "/src/assets/tours/natural-rock-arch.jpg" },
      { term: "Thotlakonda Buddhist Site", url: "/src/assets/tours/thotlakonda.jpg" },
      { term: "Rama Naidu Studios", url: "/src/assets/tours/rama-naidu-studio.jpg" },
      { term: "Rushikonda Beach", url: "/src/assets/tours/rushikonda-beach.jpg" },
      { term: "Venkateswara Temple", url: "/src/assets/tours/venkateswara-temple.jpg" },
      { term: "ISKCON Temple", url: "/src/assets/tours/iskcon-temple.jpg" },
      { term: "Vizag View Point", url: "/src/assets/tours/vizag-view-point.jpg" },
      { term: "Kambalakonda Wildlife", url: "/src/assets/tours/kambalakonda.jpg" },
      { term: "Zoo Park", url: "/src/assets/tours/zoo-park.jpg" },
    ],
  },
  {
    id: "4-points-out",
    title: "4 Points – Out Sightseeing",
    price5Seater: 2499,
    price7Seater: 2999,
    duration: "Half Day",
    places: ["Yarada Beach", "Ross Hill Church", "Light House", "Port Area"],
    images: [
      { term: "Yarada Beach", url: "/src/assets/tours/yarada-beach.jpg" },
      { term: "Ross Hill Church", url: "/src/assets/tours/ross-hill-church.jpg" },
      { term: "Light House", url: "/src/assets/tours/light-house.jpg" },
      { term: "Port Area", url: "/src/assets/tours/port-area.jpg" },
    ],
  },
  {
    id: "araku-sightseeing",
    title: "Araku Sightseeing",
    price5Seater: 4999,
    price7Seater: 5999,
    duration: "Full Day",
    places: [
      "Borra Caves",
      "Ananthagiri Waterfalls",
      "Ananthagiri Coffee Plantation",
      "Galikonda View Point",
      "Coffee Museum",
      "Tribes Museum",
      "Padmapuram Gardens",
      "Shooting Spots",
    ],
    images: [
      { term: "Borra Caves", url: "/src/assets/tours/borra-caves.jpg" },
      { term: "Ananthagiri Waterfalls", url: "/src/assets/tours/ananthagiri-waterfalls.jpg" },
      { term: "Coffee Plantation", url: "/src/assets/tours/ananthagiri-coffee-plantation.jpg" },
      { term: "Galikonda View Point", url: "/src/assets/tours/galikonda-view-point.jpg" },
      { term: "Coffee Museum", url: "/src/assets/tours/coffee-museum.jpg" },
      { term: "Tribes Museum", url: "/src/assets/tours/tribal-museum.jpg" },
      { term: "Padmapuram Gardens", url: "/src/assets/tours/padmapuram-gardens.jpg" },
      { term: "Shooting Spots", url: "/src/assets/tours/shooting-spots.jpg" },
    ],
  },
  {
    id: "3-day-trip",
    title: "3-Day Trip (2 Days Vizag + 1 Day Araku)",
    price5Seater: 9999,
    price7Seater: 12499,
    duration: "3 Days",
    places: [
      "Day 1: Simhachalam, Kailasagiri, Zoo Park, Kambalakonda, Rushikonda Beach, Rama Naidu Studio, Thotlakonda, Natural Rock Arch, Venkateswara Swami Temple",
      "Day 2: Teneti Park, Vuda Park, Lumbini Park, RK Beach, Fishing Harbour, Port View, Ross Hill Church, Central Park",
      "Day 3: Borra Caves, Ananthagiri Waterfalls, Wooden Bridge, Galikonda View Point, Coffee Museum, Tribes Museum, Padmapuram Gardens",
    ],
    images: [
      { term: "Zoo Park", url: "/src/assets/tours/zoo-park-2.jpg" },
      { term: "Kambalakonda", url: "/src/assets/tours/kambalakonda-2.jpg" },
      { term: "Rushikonda Beach", url: "/src/assets/tours/rushikonda-beach-2.jpg" },
      { term: "Rama Naidu Studio", url: "/src/assets/tours/rama-naidu-studio-2.jpg" },
      { term: "Thotlakonda", url: "/src/assets/tours/thotlakonda-2.jpg" },
      { term: "Natural Rock Arch", url: "/src/assets/tours/natural-rock-arch-2.jpg" },
      { term: "Venkateswara Temple", url: "/src/assets/tours/venkateswara-temple-2.jpg" },
      { term: "Borra Caves", url: "/src/assets/tours/borra-caves-3.jpg" },
      { term: "Ananthagiri Waterfalls", url: "/src/assets/tours/ananthagiri-waterfalls-3.jpg" },
      { term: "Galikonda View Point", url: "/src/assets/tours/galikonda-view-point-3.jpg" },
      { term: "Coffee Museum", url: "/src/assets/tours/coffee-museum-3.jpg" },
      { term: "Tribes Museum", url: "/src/assets/tours/tribal-museum-3.jpg" },
      { term: "Padmapuram Gardens", url: "/src/assets/tours/padmapuram-gardens-3.jpg" },
    ],
  },
  {
    id: "2-day-trip",
    title: "2-Day Trip",
    price5Seater: 7499,
    price7Seater: 8499,
    duration: "2 Days",
    places: [
      "Borra Caves",
      "Ananthagiri Waterfalls",
      "Wooden Bridge",
      "Galikonda View Point",
      "Coffee Museum",
      "Tribes Museum",
      "Padmapuram Gardens",
      "Chaparai",
      "Madagada View Point",
      "Katiki Waterfalls",
      "Pinery Trees",
    ],
    images: [
      { term: "Borra Caves", url: "/src/assets/tours/borra-caves-2.jpg" },
      { term: "Ananthagiri Falls", url: "/src/assets/tours/ananthagiri-waterfalls-2.jpg" },
      { term: "Wooden Bridge", url: "/src/assets/tours/wooden-bridge.jpg" },
      { term: "Galikonda View Point", url: "/src/assets/tours/galikonda-view-point-2.jpg" },
      { term: "Coffee Museum", url: "/src/assets/tours/coffee-museum-2.jpg" },
      { term: "Tribes Museum", url: "/src/assets/tours/tribal-museum-2.jpg" },
      { term: "Padmapuram Gardens", url: "/src/assets/tours/padmapuram-gardens-2.jpg" },
      { term: "Madagada View Point", url: "/src/assets/tours/madagada-view-point.jpg" },
      { term: "Katiki Waterfalls", url: "/src/assets/tours/katiki-waterfalls.jpg" },
      { term: "Pinery Trees", url: "/src/assets/tours/pinery-trees.png" },
    ],
  },
];

export interface TempleTourPackage {
  id: string;
  title: string;
  price5Seater: number;
  price7Seater: number;
  temples: string[];
  images: TourImage[];
}

export const templeTourPackages: TempleTourPackage[] = [
  {
    id: "vizag-local-temple",
    title: "Vizag Local Temple Package",
    price5Seater: 2999,
    price7Seater: 3499,
    temples: [
      "Simhachalam",
      "Mahalakshmi Temple",
      "Kanaka Mahalakshmi Temple",
      "Iskcon Temple",
      "Kali Mata Temple",
      "TTD Venkateswara Temple",
      "Sampath Vinayaka Temple",
    ],
    images: [
      { term: "Simhachalam Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Mahalakshmi Temple", url: "https://images.unsplash.com/photo-1564804955877-eb5dbfac8985?w=800&h=600&fit=crop" },
      { term: "ISKCON Temple", url: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop" },
      { term: "Temple Architecture", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" },
    ],
  },
  {
    id: "vizianagaram-temple",
    title: "Vizianagaram Temple Package",
    price5Seater: 3499,
    price7Seater: 4499,
    temples: [
      "Pydithalli Ammavari Temple",
      "Ramanarayanam Temple",
      "Ramatheertham",
    ],
    images: [
      { term: "Pydithalli Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Ramanarayanam Temple", url: "https://images.unsplash.com/photo-1564804955877-eb5dbfac8985?w=800&h=600&fit=crop" },
      { term: "Temple Gopuram", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" },
    ],
  },
  {
    id: "srikakulam-temple",
    title: "Srikakulam Temple Package",
    price5Seater: 5499,
    price7Seater: 6999,
    temples: ["Arasavilli", "Srimukhalingam", "Srikurmam"],
    images: [
      { term: "Arasavilli Sun Temple", url: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&h=600&fit=crop" },
      { term: "Srimukhalingam Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Srikurmam Temple", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" },
    ],
  },
  {
    id: "venkateswara-swamy",
    title: "Venkateswara Swamy (Vadapalli + Annavaram)",
    price5Seater: 7999,
    price7Seater: 9999,
    temples: ["Vadapalli", "Annavaram"],
    images: [
      { term: "Vadapalli Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Annavaram Temple", url: "https://images.unsplash.com/photo-1564804955877-eb5dbfac8985?w=800&h=600&fit=crop" },
    ],
  },
  {
    id: "ammavari-temples",
    title: "Ammavari Temples",
    price5Seater: 4999,
    price7Seater: 5999,
    temples: [
      "Nookalamma Temple",
      "Annavaram",
      "Talupulamma Lova Temple",
    ],
    images: [
      { term: "Nookalamma Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Annavaram Temple", url: "https://images.unsplash.com/photo-1564804955877-eb5dbfac8985?w=800&h=600&fit=crop" },
      { term: "Temple Festival", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" },
    ],
  },
  {
    id: "vijayawada-tour",
    title: "Vijayawada (Including Annavaram, Dwaraka Tirumala, Rajahmundry)",
    price5Seater: 11999,
    price7Seater: 15999,
    temples: [
      "Vijayawada",
      "Annavaram",
      "Dwaraka Tirumala",
      "Rajahmundry",
    ],
    images: [
      { term: "Kanaka Durga Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Annavaram Temple", url: "https://images.unsplash.com/photo-1564804955877-eb5dbfac8985?w=800&h=600&fit=crop" },
      { term: "Dwaraka Tirumala", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" },
      { term: "Godavari River", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop" },
    ],
  },
  {
    id: "pancharama-kshetras",
    title: "One Day Pancharama Kshetras",
    price5Seater: 9999,
    price7Seater: 12499,
    temples: [
      "Amararam - Amareswara Swamy Temple",
      "Somaram - Someswara Swamy Temple",
      "Ksheeraram - Ksheera Ramalingeswara Swamy Temple",
      "Draksharamam - Bheemeswara Swamy Temple",
      "Kumararam - Kumara Bheemeswara Swamy Temple",
    ],
    images: [
      { term: "Amararama Temple", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop" },
      { term: "Somarama Temple", url: "https://images.unsplash.com/photo-1564804955877-eb5dbfac8985?w=800&h=600&fit=crop" },
      { term: "Draksharama Temple", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" },
      { term: "Temple Shiva Lingam", url: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&h=600&fit=crop" },
      { term: "Sacred Temple Art", url: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop" },
    ],
  },
];

export interface RentalPackage {
  id: string;
  duration: string;
  distance: string;
  sedanPrice: number;
  suvPrice: number;
}

export const rentalPackages: RentalPackage[] = [
  {
    id: "rental-4hrs",
    duration: "4 Hours",
    distance: "40 Kms",
    sedanPrice: 799,
    suvPrice: 1199,
  },
  {
    id: "rental-8hrs",
    duration: "8 Hours",
    distance: "80 Kms",
    sedanPrice: 1699,
    suvPrice: 2199,
  },
  {
    id: "rental-12hrs",
    duration: "12 Hours",
    distance: "120 Kms",
    sedanPrice: 2499,
    suvPrice: 2999,
  },
  {
    id: "rental-24hrs",
    duration: "24 Hours",
    distance: "280 Kms",
    sedanPrice: 2699,
    suvPrice: 3499,
  },
];
