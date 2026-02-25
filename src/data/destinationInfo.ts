export interface DestinationInfo {
  name: string;
  description: string;
  highlights: string[];
  bestTimeToVisit?: string;
}

export const destinationInfoMap: Record<string, DestinationInfo> = {
  // Local Plan A destinations
  "Simhachalam Temple": {
    name: "Simhachalam Temple",
    description: "A magnificent Hindu temple dedicated to Lord Narasimha, perched atop Simhachalam hill. This 11th-century architectural marvel features stunning Kalinga-style architecture and is one of the most revered pilgrimage sites in South India.",
    highlights: ["Ancient Kalinga architecture", "Sacred Narasimha deity", "Panoramic hill views", "Annual Chandanotsavam festival"],
    bestTimeToVisit: "October to March"
  },
  "Lumbini Park": {
    name: "Lumbini Park",
    description: "A beautiful urban park located near the serene Hussain Sagar Lake. Named after Buddha's birthplace, this park offers musical fountains, lush green lawns, and a peaceful escape from the city bustle.",
    highlights: ["Musical fountain shows", "Boating facilities", "Scenic lake views", "Perfect for evening walks"],
    bestTimeToVisit: "Evening hours for fountain show"
  },
  "Kailasagiri Hilltop": {
    name: "Kailasagiri",
    description: "A hilltop park offering breathtaking panoramic views of Visakhapatnam city and the Bay of Bengal. Famous for its giant Shiva-Parvati statues, ropeway ride, and stunning sunset views.",
    highlights: ["Giant Shiva-Parvati statues", "Ropeway cable car", "360° city views", "Toy train ride"],
    bestTimeToVisit: "Early morning or sunset"
  },
  "Teneti Park": {
    name: "Teneti Park",
    description: "A charming seaside park built on a rocky cliff overlooking the beautiful RK Beach. Perfect for leisurely walks with stunning ocean views and cool sea breezes.",
    highlights: ["Cliff-top ocean views", "Sunrise viewing point", "Peaceful walking paths", "Sea breeze relaxation"],
    bestTimeToVisit: "Early morning for sunrise"
  },
  "VUDA Park": {
    name: "VUDA Park",
    description: "One of the largest urban parks in Visakhapatnam, featuring well-maintained gardens, water rides, and recreational facilities. A favorite spot for families and picnics.",
    highlights: ["Water rides", "Landscaped gardens", "Children's play area", "Swimming pool"],
    bestTimeToVisit: "Morning or late afternoon"
  },
  "Submarine Museum": {
    name: "INS Kursura Submarine Museum",
    description: "A unique museum housed inside India's first submarine museum ship, INS Kursura. Walk through the actual submarine to experience naval life and learn about India's maritime history.",
    highlights: ["Walk-through submarine experience", "Naval history exhibits", "Original equipment display", "Beach location"],
    bestTimeToVisit: "Morning hours"
  },
  "Aircraft Museum": {
    name: "TU-142 Aircraft Museum",
    description: "A fascinating museum featuring a decommissioned TU-142M aircraft of the Indian Navy. Visitors can explore the cockpit and learn about anti-submarine warfare operations.",
    highlights: ["Walk-through aircraft", "Naval aviation history", "Interactive exhibits", "Beach promenade access"],
    bestTimeToVisit: "Morning or evening"
  },
  "RK Beach Sunset": {
    name: "RK Beach (Ramakrishna Beach)",
    description: "The most popular beach in Vizag, stretching along the scenic Beach Road. Named after the Ramakrishna Mission ashram nearby, it's perfect for evening strolls and sunset watching.",
    highlights: ["Golden sunset views", "Street food stalls", "Beach activities", "Submarine and Aircraft museums nearby"],
    bestTimeToVisit: "Evening for sunset"
  },
  "Fishing Harbour": {
    name: "Fishing Harbour",
    description: "Experience the vibrant fishing industry of Vizag at this bustling harbour. Watch colorful fishing boats return with their daily catch and enjoy authentic seafood at nearby restaurants.",
    highlights: ["Boat rides available", "Fresh seafood", "Colorful fishing boats", "Authentic local experience"],
    bestTimeToVisit: "Early morning for boat activity"
  },
  "Central Park": {
    name: "Central Park",
    description: "A well-maintained urban park in the heart of Visakhapatnam, offering lush greenery, walking trails, and a serene environment for relaxation and recreation.",
    highlights: ["Jogging tracks", "Green landscapes", "Children's area", "Peaceful atmosphere"],
    bestTimeToVisit: "Morning or evening"
  },
  
  // Local Plan B destinations
  "Bheemili Beach": {
    name: "Bheemili Beach",
    description: "A pristine and less crowded beach about 24 km from Vizag, where the Gosthani River meets the Bay of Bengal. Known for its Dutch cemetery and peaceful atmosphere.",
    highlights: ["River-sea confluence", "Historic Dutch cemetery", "Less crowded", "Lighthouse views"],
    bestTimeToVisit: "Morning or sunset"
  },
  "Natural Rock Arch": {
    name: "Natural Rock Arch (Mangamaripeta)",
    description: "A stunning natural rock formation shaped like an arch, formed over millions of years by erosion. This geological wonder offers spectacular photo opportunities.",
    highlights: ["Unique rock formation", "Photography spot", "Geological marvel", "Sea views"],
    bestTimeToVisit: "Morning with good lighting"
  },
  "Thotlakonda Buddhist Site": {
    name: "Thotlakonda Buddhist Heritage Site",
    description: "An ancient Buddhist monastery complex dating back to the 3rd century BC. Perched on a hill overlooking the sea, it offers insights into Buddhist heritage and stunning ocean views.",
    highlights: ["2000+ year old ruins", "Ancient stupas", "Hilltop ocean views", "Archaeological significance"],
    bestTimeToVisit: "Morning or late afternoon"
  },
  "Rama Naidu Studios": {
    name: "Ramanaidu Film Studios",
    description: "One of the largest film studio complexes in India, spread over 2000 acres. Offers guided tours to see film sets, theme parks, and behind-the-scenes of Telugu cinema.",
    highlights: ["Film set tours", "Theme park", "Movie making insights", "Family entertainment"],
    bestTimeToVisit: "Daytime"
  },
  "Rushikonda Beach": {
    name: "Rushikonda Beach",
    description: "A beautiful golden sand beach known for its clear waters and water sports activities. Popular for swimming, surfing, and beach activities with scenic hill backdrop.",
    highlights: ["Water sports", "Clear blue waters", "Swimming friendly", "Hill backdrop"],
    bestTimeToVisit: "Morning for water sports"
  },
  "Venkateswara Temple": {
    name: "TTD Venkateswara Temple",
    description: "A beautiful temple dedicated to Lord Venkateswara, managed by TTD. Features traditional South Indian temple architecture and peaceful spiritual atmosphere.",
    highlights: ["Traditional architecture", "Peaceful darshan", "Well-maintained premises", "Spiritual ambiance"],
    bestTimeToVisit: "Morning for darshan"
  },
  "ISKCON Temple": {
    name: "ISKCON Temple",
    description: "A magnificent temple dedicated to Lord Krishna, known for its beautiful architecture, spiritual programs, and delicious prasadam. A center for Vedic culture and learning.",
    highlights: ["Beautiful architecture", "Daily aartis", "Vegetarian prasadam", "Spiritual programs"],
    bestTimeToVisit: "Evening for aarti"
  },
  "Vizag View Point": {
    name: "Vizag View Point",
    description: "Multiple scenic viewpoints around Vizag offering panoramic views of the city, port, and coastline. Perfect spots for photography and enjoying the cityscape.",
    highlights: ["City panorama", "Port views", "Sunset watching", "Photography spots"],
    bestTimeToVisit: "Sunset"
  },
  "Kambalakonda Wildlife": {
    name: "Kambalakonda Wildlife Sanctuary",
    description: "A protected forest area home to diverse wildlife including leopards, wild boars, and various bird species. Features nature trails, viewpoints, and eco-tourism activities.",
    highlights: ["Wildlife spotting", "Nature trails", "Bird watching", "Eco-tourism"],
    bestTimeToVisit: "Early morning"
  },
  "Zoo Park": {
    name: "Indira Gandhi Zoological Park",
    description: "One of the largest zoos in India spread over 625 acres, housing a wide variety of animals, birds, and reptiles in near-natural habitats. Features toy train and safari options.",
    highlights: ["Diverse animal species", "Safari rides", "Toy train", "Large natural enclosures"],
    bestTimeToVisit: "Morning (opens at 9 AM)"
  },
  
  // 4 Points destinations
  "Yarada Beach": {
    name: "Yarada Beach",
    description: "A secluded and pristine beach surrounded by hills on three sides, offering crystal clear waters and golden sands. One of the most beautiful beaches in Vizag, perfect for relaxation.",
    highlights: ["Secluded location", "Clear waters", "Surrounded by hills", "Peaceful atmosphere"],
    bestTimeToVisit: "Morning or sunset"
  },
  "Ross Hill Church": {
    name: "Ross Hill Church (Our Lady of the Holy Rosary)",
    description: "A 19th-century Catholic church perched on Ross Hill, offering panoramic views of Vizag port and city. A beautiful blend of spiritual significance and scenic beauty.",
    highlights: ["Historic 1864 church", "Port panorama", "Sunset views", "Peaceful hilltop"],
    bestTimeToVisit: "Evening for sunset views"
  },
  "Light House": {
    name: "Dolphin's Nose Lighthouse",
    description: "A historic lighthouse located on the famous Dolphin's Nose promontory, offering spectacular views of the natural harbour and coastline. The rock formation resembles a dolphin's nose.",
    highlights: ["Iconic landmark", "Harbour views", "Photography spot", "Navy patrol area"],
    bestTimeToVisit: "Morning"
  },
  "Port Area": {
    name: "Visakhapatnam Port",
    description: "One of the oldest and largest ports on the eastern coast of India. The port area offers views of massive ships, cranes, and the bustling maritime activities.",
    highlights: ["Massive ships", "Maritime activity", "Strategic importance", "Scenic drive"],
    bestTimeToVisit: "Daytime"
  },
  
  // Araku destinations
  "Borra Caves": {
    name: "Borra Caves",
    description: "India's deepest caves featuring spectacular stalactite and stalagmite formations formed over millions of years. A geological wonder located in the Ananthagiri Hills at 1400m altitude.",
    highlights: ["Million-year-old formations", "Deepest caves in India", "Natural lighting effects", "Tribal legends"],
    bestTimeToVisit: "Morning (less crowded)"
  },
  "Ananthagiri Waterfalls": {
    name: "Ananthagiri Waterfalls",
    description: "A beautiful waterfall cascading through lush green forests in the Ananthagiri Hills. Perfect for nature lovers seeking a refreshing break amidst pristine nature.",
    highlights: ["Scenic waterfall", "Forest surroundings", "Photography spot", "Refreshing atmosphere"],
    bestTimeToVisit: "Post-monsoon (Sept-Nov)"
  },
  "Coffee Plantation": {
    name: "Ananthagiri Coffee Plantations",
    description: "Sprawling coffee estates in the cool Araku Valley, producing the famous Araku Coffee. Take a walk through aromatic coffee plants and learn about coffee cultivation.",
    highlights: ["Fresh coffee aroma", "Plantation walks", "Coffee tasting", "Scenic beauty"],
    bestTimeToVisit: "Morning"
  },
  "Galikonda View Point": {
    name: "Galikonda View Point",
    description: "The highest peak in Andhra Pradesh offering breathtaking panoramic views of the Eastern Ghats. A photographer's paradise with misty mountain vistas.",
    highlights: ["Highest point in AP", "360° mountain views", "Misty landscapes", "Photography paradise"],
    bestTimeToVisit: "Early morning"
  },
  "Coffee Museum": {
    name: "Araku Coffee Museum",
    description: "An informative museum showcasing the complete journey of coffee from bean to cup. Learn about Araku's unique coffee culture and tribal farming traditions.",
    highlights: ["Coffee history", "Interactive exhibits", "Coffee tasting", "Tribal culture"],
    bestTimeToVisit: "Afternoon"
  },
  "Tribes Museum": {
    name: "Tribal Museum",
    description: "A fascinating museum dedicated to the indigenous tribal communities of the Araku region. Features artifacts, traditional items, and insights into tribal lifestyle.",
    highlights: ["Tribal artifacts", "Cultural exhibits", "Traditional crafts", "Heritage preservation"],
    bestTimeToVisit: "Afternoon"
  },
  "Padmapuram Gardens": {
    name: "Padmapuram Botanical Gardens",
    description: "Beautiful botanical gardens featuring a unique tree house, diverse plant species, and landscaped walking paths. A perfect spot for nature walks and relaxation.",
    highlights: ["Famous tree house", "Botanical diversity", "Walking trails", "Photography spot"],
    bestTimeToVisit: "Morning or afternoon"
  },
  "Araku Valley Scenic": {
    name: "Araku Valley",
    description: "A picturesque hill station nestled in the Eastern Ghats at 900m altitude. Known for its pleasant climate, coffee plantations, and rich tribal culture.",
    highlights: ["Pleasant climate year-round", "Coffee plantations", "Tribal culture", "Scenic train journey"],
    bestTimeToVisit: "October to February"
  },
  
  // 2-Day Trip additional destinations
  "Wooden Bridge": {
    name: "Hanging Wooden Bridge",
    description: "An adventurous hanging bridge offering thrilling walks across valleys with stunning views of the surrounding forests and mountains.",
    highlights: ["Adventure experience", "Valley views", "Photo opportunity", "Nature immersion"],
    bestTimeToVisit: "Morning"
  },
  "Mountain Viewpoint": {
    name: "Madagada View Point",
    description: "A scenic viewpoint offering spectacular sunrise views and panoramic vistas of the surrounding valleys and mountains in the Araku region.",
    highlights: ["Sunrise views", "Mountain panorama", "Photography spot", "Peaceful atmosphere"],
    bestTimeToVisit: "Early morning for sunrise"
  },
  "Tribal Art": {
    name: "Tribal Art & Culture",
    description: "Experience the rich artistic traditions of Araku's tribal communities through their colorful handicrafts, traditional paintings, and cultural performances.",
    highlights: ["Traditional handicrafts", "Dhimsa dance", "Bamboo crafts", "Cultural heritage"],
    bestTimeToVisit: "During cultural festivals"
  },
  "Garden Beauty": {
    name: "Padmapuram Gardens",
    description: "Beautiful botanical gardens featuring a unique tree house, diverse plant species, and landscaped walking paths. A perfect spot for nature walks and relaxation.",
    highlights: ["Famous tree house", "Botanical diversity", "Walking trails", "Photography spot"],
    bestTimeToVisit: "Morning or afternoon"
  },
  "Katiki Waterfalls": {
    name: "Katiki Waterfalls",
    description: "A stunning 50-feet waterfall located near the famous Borra Caves. Surrounded by lush greenery, it offers a refreshing experience amidst nature.",
    highlights: ["50-feet cascade", "Near Borra Caves", "Natural pool", "Trekking opportunity"],
    bestTimeToVisit: "Monsoon and post-monsoon"
  },
  "Ananthagiri Falls": {
    name: "Ananthagiri Waterfalls",
    description: "A beautiful waterfall cascading through lush green forests in the Ananthagiri Hills. Perfect for nature lovers seeking a refreshing break amidst pristine nature.",
    highlights: ["Scenic waterfall", "Forest surroundings", "Photography spot", "Refreshing atmosphere"],
    bestTimeToVisit: "Post-monsoon (Sept-Nov)"
  },
  
  // 3-Day Trip destinations
  "Vizag Beaches": {
    name: "Visakhapatnam Beaches",
    description: "Vizag boasts some of the most beautiful beaches on India's east coast, from the popular RK Beach to the serene Rushikonda. Each beach offers unique experiences.",
    highlights: ["Multiple beach options", "Water sports", "Sunset views", "Beach promenade"],
    bestTimeToVisit: "October to March"
  },
  "Araku Valley": {
    name: "Araku Valley",
    description: "A picturesque hill station in the Eastern Ghats, known for its coffee plantations, tribal culture, and stunning landscapes. A perfect escape from the coastal heat.",
    highlights: ["Pleasant hill climate", "Coffee plantations", "Tribal heritage", "Scenic beauty"],
    bestTimeToVisit: "October to February"
  },
  "Scenic Hills": {
    name: "Eastern Ghats",
    description: "The Eastern Ghats mountain range offers spectacular views, winding roads, and diverse ecosystems. The journey to Araku through these hills is an experience in itself.",
    highlights: ["Mountain roads", "Valley views", "Diverse flora", "Tunnel experience"],
    bestTimeToVisit: "Early morning"
  },
  "Temple Visit": {
    name: "Temple Tours",
    description: "Vizag and surrounding regions are home to numerous ancient temples, each with unique architecture and spiritual significance. A journey through centuries of devotion.",
    highlights: ["Ancient architecture", "Spiritual experience", "Cultural heritage", "Multiple temple options"],
    bestTimeToVisit: "Morning for darshan"
  },
  "Waterfall Trek": {
    name: "Waterfall Trekking",
    description: "The Eastern Ghats feature numerous waterfalls accessible through scenic treks. Experience the thrill of trekking through forests to discover hidden cascades.",
    highlights: ["Adventure trekking", "Hidden waterfalls", "Forest trails", "Nature immersion"],
    bestTimeToVisit: "Post-monsoon season"
  },
  
  // Temple Package destinations
  "Simhachalam": {
    name: "Simhachalam Temple",
    description: "An ancient Hindu temple dedicated to Lord Narasimha, situated on Simhachalam hill. This 11th-century temple is renowned for its Kalinga architecture and religious significance.",
    highlights: ["11th-century temple", "Kalinga architecture", "Annual Chandanotsavam", "Hill-top location"],
    bestTimeToVisit: "Morning for darshan"
  },
  "Mahalakshmi Temple": {
    name: "Mahalakshmi Temple",
    description: "A revered temple dedicated to Goddess Mahalakshmi, attracting devotees seeking blessings for prosperity and well-being. Known for its peaceful atmosphere.",
    highlights: ["Goddess of prosperity", "Peaceful ambiance", "Traditional rituals", "Daily aartis"],
    bestTimeToVisit: "Friday mornings"
  },
  "Temple Architecture": {
    name: "South Indian Temple Architecture",
    description: "The temples of Andhra Pradesh showcase magnificent Dravidian and Kalinga architectural styles, featuring intricate carvings, towering gopurams, and sacred mandapams.",
    highlights: ["Dravidian style", "Intricate carvings", "Towering gopurams", "Sacred art"],
    bestTimeToVisit: "Morning"
  },
  "Pydithalli Temple": {
    name: "Pydithalli Ammavari Temple",
    description: "A famous temple in Vizianagaram dedicated to Goddess Pydithalli, known for the grand annual Sirimanotsavam festival attracting lakhs of devotees.",
    highlights: ["Sirimanotsavam festival", "Ancient deity", "Cultural significance", "Massive gatherings"],
    bestTimeToVisit: "October (Sirimanotsavam)"
  },
  "Ramanarayanam Temple": {
    name: "Ramanarayanam Temple",
    description: "A unique temple complex featuring replicas of famous temples from across India. Devotees can experience darshan of multiple deities in one location.",
    highlights: ["Temple replicas", "Multiple deities", "Spiritual tour", "Unique concept"],
    bestTimeToVisit: "Morning"
  },
  "Temple Gopuram": {
    name: "Traditional Temple Gopurams",
    description: "The magnificent entrance towers (gopurams) of South Indian temples are architectural marvels featuring colorful sculptures depicting mythological stories.",
    highlights: ["Colorful sculptures", "Mythological stories", "Architectural marvel", "Photo opportunities"],
    bestTimeToVisit: "Daytime for visibility"
  },
  "Arasavilli Sun Temple": {
    name: "Arasavalli Sun Temple",
    description: "One of the two famous Sun temples in India, dating back to the 7th century. The temple is designed so that sun rays fall directly on the deity during sunrise.",
    highlights: ["7th-century temple", "Sun rays on deity", "Unique architecture", "Ancient heritage"],
    bestTimeToVisit: "Sunrise"
  },
  "Srimukhalingam Temple": {
    name: "Srimukhalingam Temple",
    description: "An ancient temple dedicated to Lord Shiva, known for its magnificent Eastern Ganga dynasty architecture. The Mukhalingam is a rare form of Shiva.",
    highlights: ["Eastern Ganga architecture", "Rare Mukhalingam", "1000+ years old", "Archaeological marvel"],
    bestTimeToVisit: "Morning"
  },
  "Srikurmam Temple": {
    name: "Srikurmam Temple",
    description: "The only temple in India dedicated to Lord Vishnu in his Kurma (tortoise) avatar. An important Vaishnavite pilgrimage site with unique religious significance.",
    highlights: ["Kurma avatar", "Only one in India", "Vaishnavite pilgrimage", "Unique deity form"],
    bestTimeToVisit: "Morning for special darshan"
  },
  "Vadapalli Temple": {
    name: "Vadapalli Venkateswara Temple",
    description: "A serene temple dedicated to Lord Venkateswara, situated in a peaceful village setting. Known for its spiritual ambiance and less crowded darshan.",
    highlights: ["Peaceful setting", "Less crowded", "Spiritual ambiance", "Village charm"],
    bestTimeToVisit: "Morning"
  },
  "Annavaram Temple": {
    name: "Annavaram Satyanarayana Temple",
    description: "A famous hilltop temple dedicated to Lord Satyanarayana (Veera Venkata Satyanarayana Swamy). One of the most visited temples in Andhra Pradesh.",
    highlights: ["Hilltop location", "Highly revered", "Satya Vratha puja", "Scenic surroundings"],
    bestTimeToVisit: "Early morning"
  },
  "Nookalamma Temple": {
    name: "Nookalamma Temple",
    description: "A popular temple dedicated to Goddess Nookalamma, considered a manifestation of Goddess Durga. Known for fulfilling devotees' wishes.",
    highlights: ["Goddess Nookalamma", "Wish fulfillment", "Local devotion", "Traditional rituals"],
    bestTimeToVisit: "Morning"
  },
  "Temple Festival": {
    name: "Temple Festivals",
    description: "The temples of Andhra Pradesh celebrate numerous colorful festivals throughout the year, featuring grand processions, traditional music, and cultural performances.",
    highlights: ["Grand processions", "Traditional music", "Cultural performances", "Spiritual celebrations"],
    bestTimeToVisit: "Festival seasons"
  },
  "Kanaka Durga Temple": {
    name: "Kanaka Durga Temple, Vijayawada",
    description: "One of the most famous temples in South India, situated on Indrakeeladri hill overlooking the Krishna River. Dedicated to Goddess Kanaka Durga.",
    highlights: ["Hilltop temple", "Krishna River views", "Famous Dasara celebrations", "Ancient deity"],
    bestTimeToVisit: "Navaratri/Dasara"
  },
  "Dwaraka Tirumala": {
    name: "Dwaraka Tirumala (Chinna Tirupati)",
    description: "Known as 'Chinna Tirupati', this temple is dedicated to Lord Venkateswara. It's believed to be the southern gateway to Tirupati, attracting millions of devotees.",
    highlights: ["Chinna Tirupati", "Venkateswara Temple", "Spiritual significance", "Lakshmi Narasimha shrine"],
    bestTimeToVisit: "Morning for darshan"
  },
  "Godavari River": {
    name: "Godavari River, Rajahmundry",
    description: "The sacred Godavari River at Rajahmundry offers spiritual boat rides and ghats for holy dips. The Pushkaram festival held here attracts millions.",
    highlights: ["Sacred river", "Boat rides", "Ghats for bathing", "Pushkaram festival"],
    bestTimeToVisit: "Early morning"
  },
  "Amararama Temple": {
    name: "Amararam - Amareswara Swamy Temple",
    description: "One of the Pancharama Kshetras housing a piece of Lord Shiva's divine lingam. An ancient and highly revered pilgrimage site.",
    highlights: ["Pancharama Kshetra", "Ancient Shiva lingam", "Spiritual significance", "Temple architecture"],
    bestTimeToVisit: "Morning"
  },
  "Somarama Temple": {
    name: "Somaram - Someswara Swamy Temple",
    description: "One of the five Pancharama Kshetras, this ancient temple houses a sacred Shiva lingam. Known for its peaceful atmosphere and spiritual vibrations.",
    highlights: ["Pancharama Kshetra", "Sacred Shiva lingam", "Peaceful ambiance", "Ancient heritage"],
    bestTimeToVisit: "Morning"
  },
  "Draksharama Temple": {
    name: "Draksharamam - Bheemeswara Swamy Temple",
    description: "The largest and most famous among the Pancharama Kshetras. This ancient temple features magnificent architecture and is highly revered.",
    highlights: ["Largest Pancharama", "Magnificent architecture", "Ancient heritage", "Spiritual power"],
    bestTimeToVisit: "Morning for darshan"
  },
  "Temple Shiva Lingam": {
    name: "Sacred Shiva Lingams",
    description: "The Pancharama temples house pieces of the divine Shiva lingam that was destroyed by Vishnu's Sudarshana Chakra. Each piece fell at these five locations.",
    highlights: ["Divine origin", "Mythological significance", "Five sacred sites", "Pilgrimage tradition"],
    bestTimeToVisit: "Any day, morning preferred"
  },
  "Sacred Temple Art": {
    name: "Temple Art & Sculpture",
    description: "The temples of Andhra Pradesh feature exquisite sculptures, intricate carvings, and divine artworks that depict various mythological stories and deities.",
    highlights: ["Ancient sculptures", "Mythological carvings", "Divine artistry", "Cultural heritage"],
    bestTimeToVisit: "Daytime for visibility"
  }
};

// Helper function to get destination info with fallback
export const getDestinationInfo = (term: string): DestinationInfo => {
  // Try exact match first
  if (destinationInfoMap[term]) {
    return destinationInfoMap[term];
  }
  
  // Try partial match
  const lowerTerm = term.toLowerCase();
  for (const key of Object.keys(destinationInfoMap)) {
    if (key.toLowerCase().includes(lowerTerm) || lowerTerm.includes(key.toLowerCase().split(' ')[0])) {
      return destinationInfoMap[key];
    }
  }
  
  // Return default info
  return {
    name: term,
    description: `Discover the beauty of ${term}, a popular destination in the Vizag region offering unique experiences and memorable moments.`,
    highlights: ["Scenic beauty", "Local culture", "Photo opportunities", "Memorable experience"]
  };
};
