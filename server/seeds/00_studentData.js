
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
          first_name: "R.J.",
          last_name: "Kirkhope",
          animal_photo: "https://cf.ltkcdn.net/small-pets/images/orig/200801-2121x1414-goldfish2.jpg",
          lat: 32.715738,
          long: -117.161084,
          prior_occupation: "Stuntman"
        },
        {
          first_name: "Josh",
          last_name: "Bardlsey",
          animal_photo: "http://www.yourpurebredpuppy.com/dogbreeds/animal_photos-RS/sheltiesf2.jpg",
          lat: 39.548079,
          long: -104.973933,
          prior_occupation: "Valet"
        },
        {
          first_name: "Mark",
          last_name: "Newcomb",
          animal_photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12194915/French-Bulldog-on-White-14.jpg",
          lat: 38.879178,
          long: -99.326770,
          prior_occupation: "Developer"
        },
        {
          first_name: "Matthew",
          last_name: "Riach",
          animal_photo: "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-19.jpg",
          lat: 53.408371,
          long: -2.991573,
          prior_occupation: "Road map salesman"
        },
        {
          first_name: "Levi",
          last_name: "Boenish",
          animal_photo: "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-4.jpg",
          lat: 40.014986,
          long: -105.270546,
          prior_occupation: "Manager"
        },
        {
          first_name: "Tom",
          last_name: "Clukies",
          animal_photo: "https://i.ytimg.com/vi/dwO06H-IF80/hqdefault.jpg",
          lat: 39.548079,
          long: -104.973933,
          prior_occupation: "Outdoorsman"
        },
        {
          first_name: "William",
          last_name: "Kirkhope",
          animal_photo: "https://i.pinimg.com/736x/21/25/c0/2125c0d98eb7b290e5903355ac0f8e6b--christmas-trees-christmas-cats.jpg",
          lat: 32.715738,
          long: -117.161084,
          prior_occupation: "Personal Trainer"
        },
        {
          first_name: "Josh",
          last_name: "Levy",
          animal_photo: "https://westiegifts.com/11472-large_default/bandana-westie-greetings-card.jpg",
          lat: -26.204103,
          long: 28.047305,
          prior_occupation: "Lesser Developer"
        },
        {
          first_name: "Ben",
          last_name: "Austin",
          animal_photo: "http://www.sheepadoodles.org/uploads/8/2/1/7/82172392/3675770.jpg?603",
          lat: 39.739236,
          long: -104.990251,
          prior_occupation: "Social Work"
        },
        {
          first_name: "Natalie",
          last_name: "Todd",
          animal_photo: "https://laughingsquid.com/wp-content/uploads/2016/01/cat-banana.png",
          lat: 61.218056,
          long: -149.900278,
          prior_occupation: "Technical Recruiter"
        },
        {
          first_name: "Eldon",
          last_name: "Dahlin",
          animal_photo: "http://www.dogwallpapers.net/wallpapers/cute-rottweiler-dog-animal_photo.jpg",
          lat: 37.404094,
          long: -120.850474,
          prior_occupation: "Customer Service Rep"
        },
        {
          first_name: "Tiffany",
          last_name: "Ricks",
          animal_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj4X16RkoIqAFunD36VIldA-y8qr3GH13oe7i_Ao88zE6R_u3Aw",
          lat: 33.4942,
          long: 111.9261,
          prior_occupation: "CNA"
        },
        {
          first_name: "George",
          last_name: "Chios",
          animal_photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224425/Shiba-Inu-Care.jpg",
          lat: 39.522455,
          long: -76.444740,
          prior_occupation: "Audio Engineer"
        },
        {
          first_name: "Danny",
          last_name: "Pifer",
          animal_photo: "https://i.kym-cdn.com/animal_photos/images/original/000/823/256/8f5.jpg",
          lat: 37.7749,
          long: 122.4194,
          prior_occupation: "QA Tester"
        },
        {
          first_name: "Kimberly",
          last_name: "Hermosillo",
          animal_photo: "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-22.jpg",
          lat: 39.739236,
          long: -104.990251,
          prior_occupation: "Student"
        },
        {
          first_name: "Austin",
          last_name: "Loveless",
          animal_photo: "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg",
          lat: 30.367420,
          long: -89.092816,
          prior_occupation: "Navy"
        },
        {
          first_name: "Jeff",
          last_name: "Strunk",
          animal_photo: "https://i.pinimg.com/originals/fc/ea/9a/fcea9a5369ebbdca95dca1c0aa1e1a51.jpg",
          lat: 39.122562,
          long: -84.135768,
          prior_occupation: "Financial Consultant"
        },
        {
          first_name: "Ciaran",
          last_name: "Guha-Gilford",
          animal_photo: "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-5.jpg",
          lat: 38.9876,
          long: 76.8205,
          prior_occupation: "Lab Rat"
        },
        {
          first_name: "Michael",
          last_name: "Coons",
          animal_photo: "https://i.huffpost.com/gen/3754046/original.jpg",
          lat: 41.079273,
          long: 85.139351,
          prior_occupation: "Director of Information Technology"
        },
        {
          first_name: "Josh",
          last_name: "Robbs",
          animal_photo: "https://images.pexels.com/animal_photos/137049/pexels-animal_photo-137049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
          lat: 37.122366,
          long: -76.345777,
          prior_occupation: "Editorial Assistant"
        },
        {
          first_name: "Belinda",
          last_name: "Galiano",
          animal_photo: "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-14.jpg",
          lat: 8.569824,
          long: -71.180499,
          prior_occupation: "Classical Pianist"
        },
        {
          first_name: "Thomas",
          last_name: "Lee",
          animal_photo: "https://i.ytimg.com/vi/OqQPv78AMw0/maxresdefault.jpg",
          lat: 38.878487,
          long: -104.869766,
          prior_occupation: "Manager of Strange People"
        },
        {
          first_name: "Ryan",
          last_name: "McCrory",
          animal_photo: "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-1.jpg",
          lat: 39.739236,
          long: -104.990251,
          prior_occupation: "US Army"
        },
        {
          first_name: "Matthew",
          last_name: "Huston",
          animal_photo: "https://buzzsharer.com/wp-content/uploads/2015/11/cute-bengal-cat-lying1.jpg",
          lat: 39.613319,
          long: -105.016647,
          prior_occupation: "Valet"
        }
      ]);
    });
};
