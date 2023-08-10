const destinations = [
  {
    country: 'Malaysia',
    countryImage: 'https://demo.bosathemes.com/html/travele/assets/images/img3.jpg',
    discounted: true,
    discount: 20,
    popular: true,
    pricePerPerson: 20000, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Malaysia',  
    packageTitle: 'Sunset view of beautiful lakeside resident',  
    numberOfReviews: 20,  ratingOutOfFive : 4, 
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
    discount: 15,
    popular: true,
    pricePerPerson: 1900, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Portugal',  
    packageTitle: 'Sunset view of beautiful lakeside resident',  
    numberOfReviews: 20,  ratingOutOfFive : 4, 
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
    discount: 30,
    popular: true,
    pricePerPerson: 1900, 
    dayNightFormat: '7D/6N', 
    numberOfPeople: 5, 
    location: 'Canada',  
    packageTitle: 'Sunset view of beautiful lakeside resident',  
    numberOfReviews: 20,  ratingOutOfFive : 4, 
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
    country: 'Maldives',
    countryImage: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    discounted: true,
    discount: 10,
    popular: true,
    pricePerPerson: 25999, 
    dayNightFormat: '8D/7N', 
    numberOfPeople: 8, 
    location: 'Maldives',  
    packageTitle: 'Mesmerizing Marvels of the Maldives',  
    numberOfReviews: 39,  
    ratingOutOfFive : 5, 
    description: 'Nestled in the Indian Ocean, the Maldives is a mesmerizing paradise known for its turquoise waters, white-sand beaches, and luxurious overwater bungalows.', 
    picture: 'https://images.unsplash.com/photo-1609601546193-f558f1ebb385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tours: [
      {
        id: 1,
        tourCardImage: 'https://www.tripsavvy.com/thmb/6ZxdQjD98cX0O1MXz8e8J6tPW_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysia-mosque-626439294-5c37f6bb46e0fb0001cb050b.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "Grand Friday Mosque",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://www.tripsavvy.com/thmb/6ZxdQjD98cX0O1MXz8e8J6tPW_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysia-mosque-626439294-5c37f6bb46e0fb0001cb050b.jpg', 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80', 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1528862973381-9bc5ad6d4227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', 'https://www.holidify.com/images/cmsuploads/compressed/32913036916_3c43e62448_b(1)_20181016215338_20181016215350.jpg'
          ],
          overview: "The Grand Friday Mosque, located in Male, the capital city of the Maldives, stands as an architectural marvel and significant religious landmark. Constructed with intricate Islamic design elements, the mosque is adorned with elegant domes, delicate calligraphy, and intricate patterns that showcase the country's rich cultural heritage. As one of the largest mosques in the Maldives, it can accommodate a large congregation of worshippers. The mosque's serene ambiance and awe-inspiring interior create a spiritual atmosphere, inviting both locals and visitors to appreciate its cultural and religious significance."
        }
      },
      {
        id: 2,
        tourCardImage: 'https://livingnomads.com/wp-content/uploads/2019/05/05/The-National-Museum-of-Maldives.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "The National Museum",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://www.transferotel.com/uploads/articles/20/big/natural_history_museum_elephant_rotunda.jpg', 'https://livingnomads.com/wp-content/uploads/2019/05/05/The-National-Museum-of-Maldives.jpg', 'https://www.makemytrip.com/travel-guide/media/dg_image/maldives/Maldives-National-Museum.jpg', 'https://www.connectingtraveller.com/images/localtip/1664884768Buddhist_sculpture_from_Maldives.jpg', 'https://pyt-blogs.imgix.net/2020/05/mle-scaled.jpg?auto=format&fit=crop&h=400&ixlib=php-3.3.0&w=1500&wpsize=gridlove-cover', 'https://lh3.googleusercontent.com/p/AF1QipNSxpSE44lpCdO6KJ6DJrV908PVT4fRYmZ7ifqV=s1600-w2436', 'https://pyt-blogs.imgix.net/2020/04/101-scaled.jpg?auto=format&fit=scale&h=400&ixlib=php-3.3.0&w=1024&wpsize=large'
          ],
          overview: "The National Museum of the Maldives, located in the capital city of Male, offers a captivating journey through the country's history and culture. Housed within a charming three-story building, the museum's exhibits feature a diverse collection of artifacts, including ancient coins, royal antiques, traditional costumes, and intricate pieces of art. The museum serves as a window into the Maldives' past, allowing visitors to explore its maritime heritage, archaeological treasures, and the evolution of its society over the centuries. With its carefully curated displays, the National Museum provides a compelling narrative of the Maldives' rich heritage and the unique stories that have shaped its identity."
        }
      },
      {
        id: 3,
        tourCardImage: 'https://images.unsplash.com/photo-1586861642026-74a6da22a3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "The Artificial Beach",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            'https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
            'https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
            'https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80',
            'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',

            'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80',
            'https://images.unsplash.com/photo-1586861642026-74a6da22a3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            'https://images.unsplash.com/photo-1609601546193-f558f1ebb385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1586500038052-b831efc02314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            'https://images.unsplash.com/photo-1620065487644-1080510335f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
            'https://images.unsplash.com/photo-1618238832760-7e4129ef4a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'https://c4.wallpaperflare.com/wallpaper/124/352/923/water-beach-sky-maldives-wallpaper-preview.jpg'
        ],
          overview: "Male's Artificial Beach is a serene urban retreat, offering a respite from the bustling city life. This man-made stretch of coastline presents a tranquil spot for relaxation, leisurely strolls, and enjoying the beautiful sea views. The beach's soft sands and gentle waves create an inviting atmosphere for both locals and tourists to unwind, bask in the sun, or simply appreciate the soothing sound of the ocean. As a popular gathering spot, Artificial Beach showcases the Maldives' ability to create peaceful havens within its vibrant urban landscape."
        }
      },
      {
        id: 4,
        tourCardImage: 'https://cdn.virily.com/wp-content/uploads/2017/10/photo-41577764.jpg',
        tourCardRating: '8.0 Superb',
        tourCardTitle: "The Tsunami Museum",
        tourCardDays: '1 Day',
        tourCardPax: '5+',
        tourCardDestination: 'Maldives',
        tourCardWishList: true,
        details: {
          images: [
            'https://cdn.virily.com/wp-content/uploads/2017/10/photo-41577764.jpg', 'https://thumbs.dreamstime.com/b/tsunami-memorandon-maldives-sunny-day-56916004.jpg', 'https://coralglass.sfo2.digitaloceanspaces.com/images/upload/1QMNcOXFrMOxNmOBEoPC0FPbxOwtwdLezsxAgEMS.jpeg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tNCeDbBB1FyuyZGjBM8tathFhwjDP10HaydRsGQrEaKyi0RyNxrBbPa9tnkA39g_7wc&usqp=CAU', 'https://www.whereismaldives.com/wp-content/uploads/2021/04/tsunami-monument2-1024x661.jpeg'
        ],
          overview: "The Tsunami Museum in Malé stands as a poignant tribute to the resilience of the Maldivian people in the face of adversity. Through immersive exhibits and personal stories, the museum commemorates the 2004 Indian Ocean tsunami, highlighting the nation's response, recovery efforts, and the importance of disaster preparedness. The museum's somber yet inspiring atmosphere serves as a reminder of the Maldives' strength and unity, making it a significant place of reflection and learning."
        }
      },
    ],
    itinerary: [
      {
        count: '01',
        title: 'Day 1: Arrival at Centara Ras Fushi Resort & Spa Maldives',
        time: '9:00 am to 10:00 am',
        description: 'Centara Ras Fushi Resort & Spa Maldives is a tranquil and luxurious adult-focused retreat, offering overwater bungalows and a range of indulgent spa and dining experiences in a stunning tropical setting.',
        inclusion: ['Free Drinks', 'Free Umbrella', 'Five Star Accomodation']
      },
      {
        count: '02',
        title: 'Day 2: Visit the Grand Friday Mosque.',
        time: '9:00 am to 6:00 pm',
        description: "Visiting the Grand Friday Mosque offers a glimpse into the Maldives' rich cultural heritage, showcasing intricate Islamic architecture and a serene atmosphere.",
        inclusion: ['Free Umbrella', 'Quoran', 'Free short sessions']
      },
      {
        count: '03',
        title: 'Day 3: Discover historical treasures at the National Museum.',
        time: '8:00 am to 6:00 pm',
        description: "Exploring the National Museum unveils a trove of historical treasures, providing insights into the Maldives' past and cultural evolution.",
        inclusion: ['Souvenirs', 'Historical Artifacts', 'Free Photoshoot']
      },
      {
        count: '04',
        title: "Day 4: Escape the hustle-bustle and spend time at Artificial Beach.",
        time: '5:00 am to 7:00 pm',
        description: "Indulge in tranquility by unwinding at Artificial Beach, a serene getaway offering a refreshing escape from the city's hustle and bustle.",
        inclusion: ['Free Meal', 'Free Sunscreen', 'Free Entrance Fee']
      },
      {
        count: '05',
        title: "Day 5: Visit the Tsunami Museum.",
        time: '5:00 am to 7:00 pm',
        description: "Gain poignant insights into the nation's resilience and history by visiting the Tsunami Museum, a testament to the Maldives' strength in the face of natural challenges.",
        inclusion: ['Free Meal', 'Free Sunscreen', 'Free Entrance Fee']
      },
      {
        count: '06',
        title: "Day 6: Go for a walk at lush Rasrani Bageecha.",
        time: '5:00 pm to 10:00 pm',
        description: "Immerse yourself in nature's beauty with a leisurely stroll through the lush Rasrani Bageecha, a verdant oasis perfect for a calming walk.",
        inclusion: ['Chaperone', 'Free Umbrella', 'Free Snacks']
      },
      {
        count: '07',
        title: "Day 7: Get your hands on souvenirs at Majeedhee Magu.",
        time: '1:00 pm to 5:00 pm',
        description: "Shop for memorable souvenirs and local finds at Majeedhee Magu, offering a vibrant and bustling market experience in the heart of the Maldives.",
        inclusion: ['Chaperone', 'Free Umbrella']
      },
      {
        count: '08',
        title: "Day 8: Departure",
        time: '1:00 pm to 3:00 pm',
        description: "Travelling to Velana International Airport",
        inclusion: ['Chaperone', 'Free Shuttle service']
      }


      
    ],
  },
  
]

module.exports = destinations
