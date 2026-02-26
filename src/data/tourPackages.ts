import simhachalam from "@/assets/tours/simhachalam.jpg";
import lumbiniPark from "@/assets/tours/lumbini-park.jpg";
import kailasagiri from "@/assets/tours/kailasagiri.jpg";
import tenetiPark from "@/assets/tours/teneti-park.jpg";
import vudaPark from "@/assets/tours/vuda-park.jpg";
import submarineMuseum from "@/assets/tours/submarine-museum.jpg";
import aircraftMuseum from "@/assets/tours/aircraft-museum.jpg";
import rkBeach from "@/assets/tours/rk-beach.jpg";
import fishingHarbour from "@/assets/tours/fishing-harbour.jpg";
import centralPark from "@/assets/tours/central-park.jpg";

import bheemiliBeach from "@/assets/tours/bheemili-beach.jpg";
import naturalRockArch from "@/assets/tours/natural-rock-arch.jpg";
import thotlakonda from "@/assets/tours/thotlakonda.jpg";
import ramaNaiduStudio from "@/assets/tours/rama-naidu-studio.jpg";
import rushikondaBeach from "@/assets/tours/rushikonda-beach.jpg";
import venkateswaraTemple from "@/assets/tours/venkateswara-temple.jpg";
import iskconTemple from "@/assets/tours/iskcon-temple.jpg";
import vizagViewPoint from "@/assets/tours/vizag-view-point.jpg";
import kambalakonda from "@/assets/tours/kambalakonda.jpg";
import zooPark from "@/assets/tours/zoo-park.jpg";

import yaradaBeach from "@/assets/tours/yarada-beach.jpg";
import rossHillChurch from "@/assets/tours/ross-hill-church.jpg";
import lightHouse from "@/assets/tours/light-house.jpg";
import portArea from "@/assets/tours/port-area.jpg";

import borraCaves from "@/assets/tours/borra-caves.jpg";
import ananthagiriWaterfalls from "@/assets/tours/ananthagiri-waterfalls.jpg";
import coffeePlantation from "@/assets/tours/ananthagiri-coffee-plantation.jpg";
import galikondaViewPoint from "@/assets/tours/galikonda-view-point.jpg";
import coffeeMuseum from "@/assets/tours/coffee-museum.jpg";
import tribalMuseum from "@/assets/tours/tribal-museum.jpg";
import padmapuramGardens from "@/assets/tours/padmapuram-gardens.jpg";
import shootingSpots from "@/assets/tours/shooting-spots.jpg";

import zooPark2 from "@/assets/tours/zoo-park-2.jpg";
import kambalakonda2 from "@/assets/tours/kambalakonda-2.jpg";
import rushikondaBeach2 from "@/assets/tours/rushikonda-beach-2.jpg";
import ramaNaiduStudio2 from "@/assets/tours/rama-naidu-studio-2.jpg";
import thotlakonda2 from "@/assets/tours/thotlakonda-2.jpg";
import naturalRockArch2 from "@/assets/tours/natural-rock-arch-2.jpg";
import venkateswaraTemple2 from "@/assets/tours/venkateswara-temple-2.jpg";
import borraCaves3 from "@/assets/tours/borra-caves-3.jpg";
import ananthagiriWaterfalls3 from "@/assets/tours/ananthagiri-waterfalls-3.jpg";
import galikondaViewPoint3 from "@/assets/tours/galikonda-view-point-3.jpg";
import coffeeMuseum3 from "@/assets/tours/coffee-museum-3.jpg";
import tribalMuseum3 from "@/assets/tours/tribal-museum-3.jpg";
import padmapuramGardens3 from "@/assets/tours/padmapuram-gardens-3.jpg";

import borraCaves2 from "@/assets/tours/borra-caves-2.jpg";
import ananthagiriFalls2 from "@/assets/tours/ananthagiri-waterfalls-2.jpg";
import woodenBridge from "@/assets/tours/wooden-bridge.jpg";
import galikondaViewPoint2 from "@/assets/tours/galikonda-view-point-2.jpg";
import coffeeMuseum2 from "@/assets/tours/coffee-museum-2.jpg";
import tribalMuseum2 from "@/assets/tours/tribal-museum-2.jpg";
import padmapuramGardens2 from "@/assets/tours/padmapuram-gardens-2.jpg";
import madagadaViewPoint from "@/assets/tours/madagada-view-point.jpg";
import katikiWaterfalls from "@/assets/tours/katiki-waterfalls.jpg";
import pineryTrees from "@/assets/tours/pinery-trees.png";

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
  { term: "Simhachalam Temple", url: simhachalam },
  { term: "Lumbini Park", url: lumbiniPark },
  { term: "Kailasagiri Hilltop", url: kailasagiri },
  { term: "Teneti Park", url: tenetiPark },
  { term: "VUDA Park", url: vudaPark },
  { term: "Submarine Museum", url: submarineMuseum },
  { term: "Aircraft Museum", url: aircraftMuseum },
  { term: "RK Beach", url: rkBeach },
  { term: "Fishing Harbour", url: fishingHarbour },
  { term: "Central Park", url: centralPark },
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
  { term: "Bheemili Beach", url: bheemiliBeach },
  { term: "Natural Rock Arch", url: naturalRockArch },
  { term: "Thotlakonda Buddhist Site", url: thotlakonda },
  { term: "Rama Naidu Studios", url: ramaNaiduStudio },
  { term: "Rushikonda Beach", url: rushikondaBeach },
  { term: "Venkateswara Temple", url: venkateswaraTemple },
  { term: "ISKCON Temple", url: iskconTemple },
  { term: "Vizag View Point", url: vizagViewPoint },
  { term: "Kambalakonda Wildlife", url: kambalakonda },
  { term: "Zoo Park", url: zooPark },
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
  { term: "Yarada Beach", url: yaradaBeach },
  { term: "Ross Hill Church", url: rossHillChurch },
  { term: "Light House", url: lightHouse },
  { term: "Port Area", url: portArea },
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
  { term: "Borra Caves", url: borraCaves },
  { term: "Ananthagiri Waterfalls", url: ananthagiriWaterfalls },
  { term: "Coffee Plantation", url: coffeePlantation },
  { term: "Galikonda View Point", url: galikondaViewPoint },
  { term: "Coffee Museum", url: coffeeMuseum },
  { term: "Tribes Museum", url: tribalMuseum },
  { term: "Padmapuram Gardens", url: padmapuramGardens },
  { term: "Shooting Spots", url: shootingSpots },
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
  { term: "Zoo Park", url: zooPark2 },
  { term: "Kambalakonda", url: kambalakonda2 },
  { term: "Rushikonda Beach", url: rushikondaBeach2 },
  { term: "Rama Naidu Studio", url: ramaNaiduStudio2 },
  { term: "Thotlakonda", url: thotlakonda2 },
  { term: "Natural Rock Arch", url: naturalRockArch2 },
  { term: "Venkateswara Temple", url: venkateswaraTemple2 },
  { term: "Borra Caves", url: borraCaves3 },
  { term: "Ananthagiri Waterfalls", url: ananthagiriWaterfalls3 },
  { term: "Galikonda View Point", url: galikondaViewPoint3 },
  { term: "Coffee Museum", url: coffeeMuseum3 },
  { term: "Tribes Museum", url: tribalMuseum3 },
  { term: "Padmapuram Gardens", url: padmapuramGardens3 },
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
  { term: "Borra Caves", url: borraCaves2 },
  { term: "Ananthagiri Falls", url: ananthagiriFalls2 },
  { term: "Wooden Bridge", url: woodenBridge },
  { term: "Galikonda View Point", url: galikondaViewPoint2 },
  { term: "Coffee Museum", url: coffeeMuseum2 },
  { term: "Tribes Museum", url: tribalMuseum2 },
  { term: "Padmapuram Gardens", url: padmapuramGardens2 },
  { term: "Madagada View Point", url: madagadaViewPoint },
  { term: "Katiki Waterfalls", url: katikiWaterfalls },
  { term: "Pinery Trees", url: pineryTrees },
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
  {
    term: "Simhachalam Temple",
    url: "https://tse1.mm.bing.net/th/id/OIP.wrv9NNTAz5WUPK56TGNb3gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    term: "Mahalakshmi Temple Vizag",
    url: "https://vizagtourism.org.in/images/places-to-visit/header/sri-kanaka-mahalakshmi-temple-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
  },
  {
    term: "Kanaka Mahalakshmi Temple",
    url: "https://tripxl.com/blog/wp-content/uploads/2024/08/Kanaka-Mahalakshmi-Temple-cp-840x425.jpg"
  },
  {
    term: "ISKCON Temple Vizag",
    url: "https://s7ap1.scene7.com/is/image/incredibleindia/iskcon-temple-vishakapatnam-andhra-pradesh-2-attr-hero?qlt=82&ts=1726744384470"
  },
  {
    term: "Kali Mata Temple Vizag",
    url: "https://tse3.mm.bing.net/th/id/OIP.jvP3T839C8tnJ-6ybnUGOwHaGh?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    term: "TTD Venkateswara Temple Vizag",
    url: "https://www.yovizag.com/wp-content/uploads/2022/03/ttd-vizag.jpg"
  },
  {
    term: "Sampath Vinayaka Temple",
    url: "https://vizagtourism.org.in/images/tourist-places/sree-sampath-vinayagar-temple-vizag/sree-sampath-vinayagar-temple-vizag-tourism-opening-time-closing.jpg"
  }
]
  },
  {
    id: "vizianagaram-temple",
    title: "Vizianagaram Temple Package",
    price5Seater: 3499,
    price7Seater: 4499,
    temples: [
      "Pydithalli Temple",
      "Ramanarayanam Temple",
      "Ramatheertham",
    ],
    images: [
  {
    term: "Pydithalli Temple",
    url: "https://travellerkaka.com/wp-content/uploads/2024/09/Untitled-design-93-1-1024x536.png"
  },
  {
    term: "Ramanarayanam Temple",
    url: "https://i.ytimg.com/vi/-8qZXtsvRuY/maxresdefault.jpg"
  },
  {
    term: "Ramatheertham",
    url: "https://www.yovizag.com/wp-content/uploads/2021/09/Ram-Teerdhalu-Temple_FB.jpg"
  }
],
  },
  {
    id: "srikakulam-temple",
    title: "Srikakulam Temple Package",
    price5Seater: 5499,
    price7Seater: 6999,
    temples: ["Arasavilli", "Srimukhalingam", "Srikurmam"],
    images: [
  {
    term: "Arasavilli",
    url: "https://media-cdn.tripadvisor.com/media/photo-s/12/aa/98/cb/temple-gate.jpg"
  },
  {
    term: "Srimukhalingam",
    url: "https://tse1.explicit.bing.net/th/id/OIP.NihYygXOlO7ewnbx35ON-QHaD3?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    term: "Srikurmam",
    url: "https://farm2.staticflickr.com/1893/44562940222_480d24af66_b.jpg"
  }
],
  },
  {
    id: "venkateswara-swamy",
    title: "Venkateswara Swamy (Vadapalli + Annavaram)",
    price5Seater: 7999,
    price7Seater: 9999,
    temples: ["Vadapalli", "Annavaram"],
    images: [
      { term: "Vadapalli", url: "https://th.bing.com/th/id/OIP.ghcD3nvBca6m5AiQTa0ziAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { term: "Annavaram", url: "https://travellerkaka.com/wp-content/uploads/2024/09/Untitled-design-48-1024x536.png" },
    ],
  },
  {
    id: "ammavari-temples",
    title: "Ammavari Temples",
    price5Seater: 4999,
    price7Seater: 5999,
    temples: [
      "Nookalamma Temple",
      "Talupulamma Lova Temple",
    ],
    images: [
      { term: "Nookalamma Temple", url: "https://64.media.tumblr.com/2e073f8108f4bafef734054d90311800/8873c99dc1ab6b82-31/s1280x1920/220fcd633c2ba47c5be72f7075945b0267f2d31f.jpg" },
      { term: "Talupulamma Lova Temple", url: "https://tse4.mm.bing.net/th/id/OIP.nuwC6kChPNABaeakHzemUQHaE9?rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "vijayawada-tour",
    title: "Vijayawada (Including Annavaram, Dwaraka Tirumala, Rajahmundry)",
    price5Seater: 11999,
    price7Seater: 15999,
    temples: [
      "Kanaka Durga Temple",
      "Annavaram",
      "Dwaraka Tirumala",
      "Rajahmundry River ( Godavari )",
    ],
    images: [
      { term: "Kanaka Durga Temple", url: "https://tse1.mm.bing.net/th/id/OIP._Ucw2iynXGO-bCYnxCByMAHaDX?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { term: "Annavaram", url: "https://travellerkaka.com/wp-content/uploads/2024/09/Untitled-design-48-1024x536.png" },
      { term: "Dwaraka Tirumala", url: "https://www.templepurohit.com/wp-content/uploads/2015/09/Dwaraka-Tirumala-Sri-Venkateswara-Swamy-temple-2.jpg" },
      { term: "Rajahmundry River ( Godavari )", url: "https://www.holidify.com/blog/wp-content/uploads/2014/06/Godavari-River-Rajahmundry.jpg" },
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
      { term: "Amararama Temple", url: "https://tse4.mm.bing.net/th/id/OIP.88O373O-vwPoWJVaxMIheQHaI9?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { term: "Somarama Temple", url: "https://tse1.mm.bing.net/th/id/OIP.2mL5kegu8QY07csGh8YegQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { term: "Temple Shiva Lingam", url: "https://www.templefolks.com/templefolks_admin/public/uploads/products/ksheerarama_shivalingam-4265675.jpg" },
      { term: "Draksharama Temple", url: "https://kakinadapages.com/images/articles/draksharamam_temple.jpg" },
    
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
