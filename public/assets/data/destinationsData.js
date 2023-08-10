const destinations = [
  {
    country: 'Malaysia',
    countryImage: 'https://demo.bosathemes.com/html/travele/assets/images/img3.jpg',
    discounted: true,
    popular: true,
    pricePerPerson: 1900, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Malaysia',  
    packageTitle: 'Sunset view of beautiful lakeside resident',  
    numberOfReviews: 20,  
    ratingOutOfFive : 4, 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.', 
    picture: 'package1.jpg',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Trader's Hotel",
        tourCardDays: '3 Days',
        tourCardPax: '4+',
        tourCardDestination: 'Malaysia',
        tourCardWishList: true,
        details: {
          images: [
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-1.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-2.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-3.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-4.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-5.jpg',
          ],
          overview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus aliquid, laboriosam rerum saepe ipsa. Autem corporis sed eveniet eius quisquam porro explicabo quod expedita sint, deleniti voluptates delectus voluptatum?'
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Arrive at Kuala Lumpur Aiport',
        time: '8:00 am to 10:00 am',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Drinks', 'Awesome Breakfast', '5 Star Accommodation']
      },
      {
        count: '02',
        title: 'Day 2: Lunch at  Bukit Bintang District',
        time: '10:00 am to 12:00 nn',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Shopping', 'Awesome Lunch', 'Buffet']
      },
      {
        count: '03',
        title: 'Day 3: Picnic at Cameron Lands',
        time: '8:00 am to 12:00 am',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Meal', 'Awesome Attractions', 'Chill Vibe']
      },
      {
        count: '04',
        title: "Day 4: Stay at Trader's Hotel",
        time: '8:00 am to 3:00 pm',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Meal', '5 Star Accommodation', 'Shopping']
      }
    ],
  },
  {
    country: 'Portugal',
    countryImage: 'https://demo.bosathemes.com/html/travele/assets/images/img4.jpg',
    discounted: true,
    popular: true,
    pricePerPerson: 1900, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Portugal',  
    packageTitle: 'Sunset view of beautiful lakeside resident',  
    numberOfReviews: 20,  
    ratingOutOfFive : 4, 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.', 
    picture: 'package1.jpg',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Trader's Hotel",
        tourCardDays: '3 Days',
        tourCardPax: '4+',
        tourCardDestination: 'Malaysia',
        tourCardWishList: true,
        details: {
          images: [
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-1.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-2.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-3.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-4.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-5.jpg',
          ],
          overview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus aliquid, laboriosam rerum saepe ipsa. Autem corporis sed eveniet eius quisquam porro explicabo quod expedita sint, deleniti voluptates delectus voluptatum?'
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Arrive at Kuala Lumpur Aiport',
        time: '8:00 am to 10:00 am',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Drinks', 'Awesome Breakfast', '5 Star Accommodation']
      },
      {
        count: '02',
        title: 'Day 2: Lunch at  Bukit Bintang District',
        time: '10:00 am to 12:00 nn',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Shopping', 'Awesome Lunch', 'Buffet']
      },
      {
        count: '03',
        title: 'Day 3: Picnic at Cameron Lands',
        time: '8:00 am to 12:00 am',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Meal', 'Awesome Attractions', 'Chill Vibe']
      },
      {
        count: '04',
        title: "Day 4: Stay at Trader's Hotel",
        time: '8:00 am to 3:00 pm',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Meal', '5 Star Accommodation', 'Shopping']
      }
    ],
  },
  {
    country: 'Canada',
    countryImage: 'https://demo.bosathemes.com/html/travele/assets/images/img4.jpg',
    discounted: true,
    popular: true,
    pricePerPerson: 1900, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Canada',  
    packageTitle: 'Sunset view of beautiful lakeside resident',  
    numberOfReviews: 20,
    ratingOutOfFive: 4, 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.', 
    picture: 'package1.jpg',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Trader's Hotel",
        tourCardDays: '3 Days',
        tourCardPax: '4+',
        tourCardDestination: 'Malaysia',
        tourCardWishList: true,
        details: {
          images: [
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-1.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-2.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-3.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-4.jpg',
            'https://layerdrops.com/tripo/assets/images/tour/tour-d-1-5.jpg',
          ],
          overview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus aliquid, laboriosam rerum saepe ipsa. Autem corporis sed eveniet eius quisquam porro explicabo quod expedita sint, deleniti voluptates delectus voluptatum?'
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Arrive at Kuala Lumpur Aiport',
        time: '8:00 am to 10:00 am',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Drinks', 'Awesome Breakfast', '5 Star Accommodation']
      },
      {
        count: '02',
        title: 'Day 2: Lunch at  Bukit Bintang District',
        time: '10:00 am to 12:00 nn',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Shopping', 'Awesome Lunch', 'Buffet']
      },
      {
        count: '03',
        title: 'Day 3: Picnic at Cameron Lands',
        time: '8:00 am to 12:00 am',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Meal', 'Awesome Attractions', 'Chill Vibe']
      },
      {
        count: '04',
        title: "Day 4: Stay at Trader's Hotel",
        time: '8:00 am to 3:00 pm',
        description: 'Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi dicta sunt explicabo.',
        inclusion: ['Free Meal', '5 Star Accommodation', 'Shopping']
      }
    ],
  },
]

module.exports = destinations
