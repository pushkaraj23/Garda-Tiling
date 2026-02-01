// // projectData.js
// export const projectCategories = [
//   { id: 'bathroom', name: 'Bathroom Tiling', count: 24 },
//   { id: 'kitchen', name: 'Kitchen Splashback', count: 18 },
//   { id: 'outdoor', name: 'Outdoor & Pool', count: 15 },
//   { id: 'commercial', name: 'Commercial Projects', count: 12 },
//   { id: 'renovation', name: 'Full Renovations', count: 8 },
//   { id: 'waterproofing', name: 'Waterproofing', count: 22 },
// ];

// export const projectStatuses = [
//   { id: 'completed', name: 'Completed', color: 'green' },
//   { id: 'in-progress', name: 'In Progress', color: 'blue' },
//   { id: 'upcoming', name: 'Upcoming', color: 'yellow' },
//   { id: 'on-hold', name: 'On Hold', color: 'orange' },
// ];

// export const projects = [
//   {
//     id: 'PROJ-001',
//     title: 'Luxury Penthouse Bathroom',
//     category: 'bathroom',
//     status: 'completed',
//     location: 'South Yarra, VIC',
//     client: 'Mr. & Mrs. Johnson',
//     budget: '$28,500',
//     duration: '21 days',
//     startDate: '2024-01-15',
//     completionDate: '2024-02-05',
//     images: [
//       'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
//       'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w-800',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
//     ],
//     description: 'Complete luxury bathroom renovation with marble tiling, heated floors, and smart bathroom features.',
//     services: ['Full demolition', 'Waterproofing', 'Marble tiling', 'Heated flooring', 'Smart fixtures', 'Vanity installation'],
//     team: [
//       { name: 'John Smith', role: 'Project Manager' },
//       { name: 'Sarah Chen', role: 'Lead Tiler' },
//       { name: 'Mike Wilson', role: 'Waterproofing Specialist' },
//     ],
//     testimonials: [
//       {
//         text: 'Exceptional workmanship and attention to detail. The team delivered beyond our expectations.',
//         author: 'Mrs. Johnson',
//         rating: 5
//       }
//     ],
//     beforeAfter: {
//       before: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800',
//       after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800'
//     },
//     specifications: {
//       area: '18 sqm',
//       tiles: 'Carrara Marble 600x600',
//       waterproofing: 'Schluter Systems',
//       warranty: '10 years'
//     },
//     challenges: ['Limited access to penthouse', 'Marble tile matching', 'Custom vanity fabrication'],
//     solutions: ['Used materials lift', 'Batch-matched marble slabs', 'On-site custom cabinet making']
//   },
//   {
//     id: 'PROJ-002',
//     title: 'Modern Kitchen Splashback',
//     category: 'kitchen',
//     status: 'completed',
//     location: 'Hawthorn, VIC',
//     client: 'The Thompson Family',
//     budget: '$4,200',
//     duration: '3 days',
//     startDate: '2024-02-10',
//     completionDate: '2024-02-13',
//     images: [
//       'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
//       'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
//     ],
//     description: 'Glass mosaic splashback installation in modern kitchen with integrated LED lighting.',
//     services: ['Glass tile installation', 'LED lighting integration', 'Seamless grouting', 'Clean finish'],
//     team: [
//       { name: 'Alex Brown', role: 'Tiler' },
//       { name: 'Lisa Wong', role: 'Electrician' },
//     ],
//     testimonials: [
//       {
//         text: 'Beautiful work! The LED lighting really makes the splashback pop.',
//         author: 'Karen Thompson',
//         rating: 5
//       }
//     ],
//     specifications: {
//       area: '6 sqm',
//       tiles: 'Glass mosaic 25x25',
//       lighting: 'Integrated LED strip',
//       grout: 'Epoxy-based'
//     }
//   },
//   {
//     id: 'PROJ-003',
//     title: 'Pool & Outdoor Entertainment Area',
//     category: 'outdoor',
//     status: 'in-progress',
//     location: 'Brighton, VIC',
//     client: 'David Wilson',
//     budget: '$45,000',
//     duration: '28 days',
//     startDate: '2024-03-01',
//     completionDate: '2024-03-29',
//     images: [
//       'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
//     ],
//     description: 'Complete pool tiling and outdoor entertaining area with non-slip porcelain tiles.',
//     services: ['Pool tiling', 'Outdoor paving', 'Waterproofing', 'Copestone installation'],
//     progress: 65,
//     team: [
//       { name: 'Mark Taylor', role: 'Project Manager' },
//       { name: 'James Wilson', role: 'Pool Tiler' },
//       { name: 'Emma Davis', role: 'Waterproofer' },
//     ],
//     specifications: {
//       area: '85 sqm',
//       poolTiles: 'Ceramic mosaic 50x50',
//       deckTiles: 'Anti-slip porcelain 600x600',
//       warranty: '7 years'
//     }
//   },
//   {
//     id: 'PROJ-004',
//     title: 'Commercial Office Waterproofing',
//     category: 'commercial',
//     status: 'in-progress',
//     location: 'Brisbane CBD',
//     client: 'Corporate Towers Ltd',
//     budget: '$120,000',
//     duration: '45 days',
//     startDate: '2024-03-15',
//     completionDate: '2024-04-30',
//     images: [
//       'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
//     ],
//     description: 'Large-scale commercial waterproofing project across 3 levels of office building.',
//     services: ['Structural waterproofing', 'Bathroom pods', 'Balcony membranes', 'Compliance certification'],
//     progress: 40,
//     team: [
//       { name: 'Robert Kim', role: 'Site Manager' },
//       { name: 'Team of 8', role: 'Installation Crew' },
//     ],
//     specifications: {
//       area: '1200 sqm',
//       system: 'Liquid applied membrane',
//       warranty: '15 years',
//       certification: 'Australian Standards'
//     }
//   },
//   {
//     id: 'PROJ-005',
//     title: 'Heritage Bathroom Restoration',
//     category: 'bathroom',
//     status: 'upcoming',
//     location: 'Fitzroy, VIC',
//     client: 'Heritage Victoria',
//     budget: '$32,000',
//     duration: '25 days',
//     startDate: '2024-04-10',
//     completionDate: '2024-05-05',
//     description: 'Heritage-listed bathroom restoration with period-appropriate tiles and fixtures.',
//     services: ['Heritage tile restoration', 'Traditional waterproofing', 'Period fixture installation'],
//     team: [
//       { name: 'Thomas Reed', role: 'Heritage Specialist' },
//       { name: 'Maria Garcia', role: 'Restoration Tiler' },
//     ]
//   },
//   {
//     id: 'PROJ-006',
//     title: 'Apartment Complex Flooring',
//     category: 'flooring',
//     status: 'completed',
//     location: 'Docklands, VIC',
//     client: 'Urban Living Developers',
//     budget: '$85,000',
//     duration: '30 days',
//     startDate: '2024-01-20',
//     completionDate: '2024-02-20',
//     images: [
//       'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
//     ],
//     description: 'Hybrid flooring installation across 15 apartments in new development.',
//     services: ['Floor preparation', 'Hybrid flooring install', 'Skirting boards', 'Final cleaning'],
//     testimonials: [
//       {
//         text: 'Professional team completed on schedule despite tight deadlines.',
//         author: 'Project Manager, ULD',
//         rating: 5
//       }
//     ],
//     specifications: {
//       area: '650 sqm',
//       flooring: 'Waterproof hybrid',
//       apartments: '15 units',
//       timeline: 'On schedule'
//     }
//   },
//   {
//     id: 'PROJ-007',
//     title: 'Restaurant Kitchen Waterproofing',
//     category: 'commercial',
//     status: 'completed',
//     location: 'Richmond, VIC',
//     client: 'Bistro Moderne',
//     budget: '$18,500',
//     duration: '7 days',
//     startDate: '2024-02-05',
//     completionDate: '2024-02-12',
//     images: [
//       'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
//     ],
//     description: 'Commercial kitchen waterproofing with chemical-resistant membranes for restaurant.',
//     services: ['Commercial waterproofing', 'Floor grading', 'Drainage installation', 'Compliance certificates'],
//     testimonials: [
//       {
//         text: 'Minimal disruption to our business. Excellent work!',
//         author: 'Chef Marco',
//         rating: 5
//       }
//     ]
//   },
//   {
//     id: 'PROJ-008',
//     title: 'Bathroom & Laundry Renovation',
//     category: 'renovation',
//     status: 'in-progress',
//     location: 'Camberwell, VIC',
//     client: 'The Williams Family',
//     budget: '$35,000',
//     duration: '35 days',
//     startDate: '2024-03-10',
//     completionDate: '2024-04-15',
//     images: [
//       'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
//     ],
//     description: 'Complete bathroom and laundry renovation with custom storage solutions.',
//     progress: 55,
//     services: ['Bathroom tiling', 'Laundry cabinetry', 'Waterproofing', 'Plumbing relocation'],
//     team: [
//       { name: 'David Miller', role: 'Project Manager' },
//       { name: 'Sophie Taylor', role: 'Tiler' },
//       { name: 'Plumbing Team', role: 'Plumbers' },
//     ]
//   }
// ];

// export const projectStats = {
//   totalProjects: 42,
//   completed: 28,
//   inProgress: 9,
//   upcoming: 5,
//   totalValue: '$1.2M',
//   averageRating: 4.8
// };


// lib/projectData.js

export const projects = [
  {
    id: "1",
    slug: "luxury-bathroom-renovation",
    title: "Luxury Bathroom Renovation",
    description: "Complete bathroom transformation featuring premium marble tiles, underfloor heating, and custom mosaic patterns. This high-end residential project showcases our expertise in luxury finishes.",
    category: "bathroom",
    status: "completed",
    location: "Brisbane, VIC",
    client: "Johnson Family",
    budget: "$45,000",
    duration: "6 weeks",
    startDate: "Jan 2024",
    completionDate: "Feb 2024",
    progress: 100,
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
    ],
    services: [
      "Floor Tiling",
      "Wall Tiling",
      "Waterproofing",
      "Underfloor Heating",
      "Custom Mosaic Work"
    ],
    team: [
      { name: "Michael Chen", role: "Lead Tiler" },
      { name: "Sarah Williams", role: "Designer" },
      { name: "Tom Brown", role: "Apprentice" }
    ],
    specifications: {
      tileType: "Italian Marble",
      squareMeters: "35 sqm",
      groutColor: "Charcoal",
      pattern: "Herringbone"
    },
    testimonials: [
      {
        text: "Absolutely stunning work! The team was professional and the results exceeded our expectations.",
        author: "Mrs. Johnson",
        rating: 5
      }
    ],
    challenges: [
      "Uneven subfloor requiring extensive leveling",
      "Complex waterproofing around freestanding bath"
    ],
    solutions: [
      "Applied self-leveling compound for perfect finish",
      "Used premium waterproofing membrane with extended warranty"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
      after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800"
    }
  },
  {
    id: "2",
    slug: "modern-kitchen-splashback",
    title: "Modern Kitchen Splashback",
    description: "Contemporary kitchen renovation with stunning geometric splashback tiles and coordinating floor tiles. Features heat-resistant materials and easy-clean surfaces.",
    category: "kitchen",
    status: "completed",
    location: "Brisbane, NSW",
    client: "The Martinez Family",
    budget: "$28,000",
    duration: "3 weeks",
    startDate: "Dec 2023",
    completionDate: "Jan 2024",
    progress: 100,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800"
    ],
    services: [
      "Splashback Installation",
      "Floor Tiling",
      "Grout Sealing"
    ],
    team: [
      { name: "David Lee", role: "Lead Tiler" },
      { name: "Emma Wilson", role: "Project Manager" }
    ],
    specifications: {
      tileType: "Porcelain",
      squareMeters: "22 sqm",
      groutColor: "White",
      pattern: "Subway"
    },
    testimonials: [
      {
        text: "The kitchen looks amazing! Great attention to detail.",
        author: "Mr. Martinez",
        rating: 5
      }
    ]
  },
  {
    id: "3",
    slug: "commercial-office-flooring",
    title: "Commercial Office Flooring",
    description: "Large-scale commercial project featuring durable porcelain tiles throughout a 500sqm office space. Designed for high traffic areas with slip-resistant finish.",
    category: "commercial",
    status: "in-progress",
    location: "Brisbane, QLD",
    client: "TechCorp Industries",
    budget: "$120,000",
    duration: "8 weeks",
    startDate: "Feb 2024",
    completionDate: "Apr 2024",
    progress: 65,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
    ],
    services: [
      "Commercial Floor Tiling",
      "Subfloor Preparation",
      "Anti-slip Treatment",
      "Expansion Joint Installation"
    ],
    team: [
      { name: "James Taylor", role: "Project Lead" },
      { name: "Chris Anderson", role: "Senior Tiler" },
      { name: "Mark Davis", role: "Tiler" },
      { name: "Luke Thompson", role: "Apprentice" }
    ],
    specifications: {
      tileType: "Commercial Porcelain",
      squareMeters: "500 sqm",
      groutColor: "Grey",
      pattern: "Grid"
    }
  },
  {
    id: "4",
    slug: "outdoor-pool-area",
    title: "Outdoor Pool Area",
    description: "Resort-style pool surround with non-slip tiles, featuring a stunning infinity edge and integrated spa. Weather-resistant materials designed for Australian conditions.",
    category: "outdoor",
    status: "upcoming",
    location: "Gold Coast, QLD",
    client: "Paradise Resort",
    budget: "$85,000",
    duration: "5 weeks",
    startDate: "Mar 2024",
    completionDate: "Apr 2024",
    progress: 0,
    images: [
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800"
    ],
    services: [
      "Pool Surround Tiling",
      "Non-slip Surface Treatment",
      "Coping Installation",
      "Drainage Solutions"
    ],
    specifications: {
      tileType: "Natural Stone",
      squareMeters: "180 sqm",
      groutColor: "Sand",
      pattern: "Random"
    }
  },
  {
    id: "5",
    slug: "heritage-home-restoration",
    title: "Heritage Home Restoration",
    description: "Careful restoration of original Victorian-era tessellated tiles in a heritage-listed property. Matching period-appropriate patterns and colors.",
    category: "residential",
    status: "completed",
    location: "Adelaide, SA",
    client: "Heritage Trust",
    budget: "$62,000",
    duration: "10 weeks",
    startDate: "Oct 2023",
    completionDate: "Dec 2023",
    progress: 100,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    ],
    services: [
      "Tile Restoration",
      "Period Tile Matching",
      "Tessellated Pattern Recreation",
      "Heritage Conservation"
    ],
    team: [
      { name: "Robert Hughes", role: "Heritage Specialist" },
      { name: "Anna Mitchell", role: "Restoration Expert" }
    ],
    specifications: {
      tileType: "Encaustic",
      squareMeters: "45 sqm",
      groutColor: "Original Match",
      pattern: "Victorian Tessellated"
    },
    testimonials: [
      {
        text: "They brought our heritage tiles back to life. Incredible craftsmanship!",
        author: "Heritage Trust Director",
        rating: 5
      }
    ],
    challenges: [
      "Sourcing matching heritage tiles",
      "Working with fragile original materials"
    ],
    solutions: [
      "Partnered with specialty heritage tile manufacturers",
      "Used conservation-grade adhesives and techniques"
    ]
  },
  {
    id: "6",
    slug: "restaurant-feature-wall",
    title: "Restaurant Feature Wall",
    description: "Eye-catching feature wall installation for an upscale restaurant, featuring custom hand-painted tiles imported from Portugal.",
    category: "commercial",
    status: "on-hold",
    location: "Perth, WA",
    client: "Oceanic Dining",
    budget: "$38,000",
    duration: "4 weeks",
    startDate: "Apr 2024",
    completionDate: "May 2024",
    progress: 25,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    ],
    services: [
      "Feature Wall Installation",
      "Custom Tile Arrangement",
      "Lighting Integration"
    ],
    specifications: {
      tileType: "Hand-painted Ceramic",
      squareMeters: "28 sqm",
      groutColor: "Navy",
      pattern: "Portuguese Azulejo"
    }
  }
];

export const projectCategories = [
  { id: "bathroom", name: "Bathroom", count: 1 },
  { id: "kitchen", name: "Kitchen", count: 1 },
  { id: "commercial", name: "Commercial", count: 2 },
  { id: "outdoor", name: "Outdoor", count: 1 },
  { id: "residential", name: "Residential", count: 1 }
];

export const projectStatuses = [
  { id: "completed", name: "Completed", color: "green" },
  { id: "in-progress", name: "In Progress", color: "blue" },
  { id: "upcoming", name: "Upcoming", color: "yellow" },
  { id: "on-hold", name: "On Hold", color: "orange" }
];

export const projectStats = {
  totalProjects: 6,
  completed: 3,
  inProgress: 1,
  upcoming: 1,
  onHold: 1,
  totalValue: "$378,000",
  averageRating: 4.9
};
