const allShowsData = [];

const featuredShowsImages = [
  "Dune64_cffee900bad552e8dcda76",
  "Pirates of the Caribbean: The Legend of Jack Sparrow_64cffeee00bad552e8dce9fc",
  "shrek",
  "The Burnt Orange Heresy_64cffeee00bad552e8dce8d4",
];

const data = async () => {
  // for (let i = 1; i < 11; i++) {
  //   (async () => {
  //     const response = await fetch(
  //       `https://academics.newtonschool.co/api/v1/ott/show?projectId=f104bi07c490&page=${i}&limit=10`
  //     );
  //     const data = await response.json();
  //     allShowsData.push(...data);
  //   })();
  // }
  const response = await fetch(
    `https://academics.newtonschool.co/api/v1/ott/show?page=${1}&limit=10000`,
    {
      method: "GET",
      headers: {
        projectId: "f104bi07c490",
      },
    }
  );
  //97990 93060

  const data = await response.json();

  const shows = data?.data.filter((show) =>
    featuredShowsImages.includes(show.title)
  );

  console.log(shows);

  console.log(
    "hi",
    data?.data.reduce(
      (acc, show) =>
        !acc.includes(show.title) ? acc.push(show.title) && acc : acc,
      []
    )
  );

  console.log(data);
};
data();
const ShowsData = {
  status: "success",
  results: 100,
  data: [
    {
      _id: "64cffee700bad552e8dcd509",
      title: "Contagion",
      description:
        "In the heart of the jungle, lies a secret that's waiting to be uncovered.",
      keywords: ["romance", "mystery", "drama"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt8614884.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.503Z",
      __v: 1,
      cast: ["John Moore", "Emma Davis", "Ella Jones"],
      director: "Chris Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd509.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd50b",
      title: "Love in the Time of Fentanyl",
      description:
        "A timeless story of dreams, ambition, and the challenges of a big city.",
      keywords: ["fantasy", "heroic", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt20236978.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.574Z",
      __v: 1,
      cast: ["Emma Miller", "Chris Wilson", "Ella Davis"],
      director: "Ryan Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd50b.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd50d",
      title: "In Time with You",
      description:
        "A timeless story of dreams, ambition, and the challenges of a big city.",
      keywords: ["suspense", "drama"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt2473942.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.589Z",
      __v: 1,
      cast: ["Ella Jones", "John Brown", "Sarah Williams"],
      director: "Ava Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd50d.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd50f",
      title: "Love in Time of Violence",
      description:
        "Two strangers, one fateful night, and a series of events that would change their lives forever.",
      keywords: ["epic", "magic", "comedy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5162202.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.594Z",
      __v: 1,
      cast: ["John Moore", "Emma Miller", "John Brown"],
      director: "John Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd50f.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd507",
      title: "At a Place, in a Time",
      description:
        "A timeless story of dreams, ambition, and the challenges of a big city.",
      keywords: ["romance", "suspense", "heroic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt4730060.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.501Z",
      __v: 1,
      cast: ["Ella Davis", "Jane Williams", "Michael Miller"],
      director: "Michael Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd507.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd513",
      title: "Scooby-Doo, Where Are You Now!",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["thriller", "betrayal", "romance"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt15554066.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.598Z",
      __v: 1,
      cast: ["Ava Taylor", "Ella Williams", "John Williams"],
      director: "Chris Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd513.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd515",
      title: "Butterfly Effect: The Creative Process",
      description:
        "In the aftermath of a great war, a kingdom finds hope in the most unlikely of heroes.",
      keywords: ["heroic", "thriller", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0464794.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.604Z",
      __v: 1,
      cast: ["Jane Jones", "Emma Wilson", "Jane Wilson"],
      director: "Emma Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd515.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd505",
      title: "In Good Time",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["thriller", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt8727262.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.494Z",
      __v: 1,
      cast: ["Emma Brown", "Jane Davis", "Chris Williams"],
      director: "Emma Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd505.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd51b",
      title: "Frankenweenie",
      description:
        "A sci-fi adventure that challenges our very understanding of reality.",
      keywords: ["mystery", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1142977.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.609Z",
      __v: 1,
      cast: ["Alex Smith", "Alex Wilson", "Sarah Smith"],
      director: "Jane Taylor",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd51b.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd519",
      title: "Everything Must Go",
      description:
        "A timeless story of dreams, ambition, and the challenges of a big city.",
      keywords: ["magic", "survival", "sci-fi"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5752788.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.607Z",
      __v: 1,
      cast: ["Sarah Brown", "Michael Taylor", "Ryan Smith"],
      director: "Emma Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd519.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd51d",
      title: "Morvern Callar",
      description: "Magic, mischief, and a battle between light and darkness.",
      keywords: ["survival", "action", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0300214.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.610Z",
      __v: 1,
      cast: ["Sarah Moore", "Ella Wilson", "Ryan Taylor"],
      director: "John Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd51d.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd51f",
      title: "All the Time in the World",
      description:
        "In a world where nothing is as it seems, a lone hero rises against the odds.",
      keywords: ["revenge", "action"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt4695498.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.611Z",
      __v: 1,
      cast: ["Jane Wilson", "Emma Smith", "Chris Wilson"],
      director: "Ella Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd51f.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd521",
      title: "Once Upon a Time in China V",
      description:
        "An exploration of family, traditions, and the ties that bind us together.",
      keywords: ["revenge", "action"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0110073.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.613Z",
      __v: 1,
      cast: ["Emma Miller", "Ryan Miller", "Jane Davis"],
      director: "John Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd521.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd523",
      title: "The Great Fire: In Real Time",
      description:
        "A young prodigy challenges the boundaries of her society and embarks on a quest for the truth.",
      keywords: ["betrayal", "drama", "mystery"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt6948230.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.614Z",
      __v: 1,
      cast: ["Ella Wilson", "Jane Williams", "Alex Moore"],
      director: "Chris Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd523.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd525",
      title: "Ratchet & Clank Future: A Crack in Time",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["darkness", "sci-fi", "romance"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1430111.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.615Z",
      __v: 1,
      cast: ["Emma Davis", "John Johnson", "Michael Wilson"],
      director: "Chris Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd525.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd529",
      title: "Once Upon a Time in the Apocalypse",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["thriller", "epic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt10939474.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.625Z",
      __v: 1,
      cast: ["Chris Williams", "Sarah Taylor", "Chris Williams"],
      director: "Alex Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd529.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd527",
      title: "Harry Potter and the Chamber of Secrets",
      description:
        "Journey through galaxies, as a crew faces challenges that test their limits and their bond.",
      keywords: ["sci-fi", "action", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0295297.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.621Z",
      __v: 1,
      cast: ["Ella Wilson", "Sarah Moore", "Ella Brown"],
      director: "Ava Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd527.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd52b",
      title: "Lost in Time",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["adventure", "epic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0390272.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.626Z",
      __v: 1,
      cast: ["Ella Jones", "Emma Smith", "Alex Davis"],
      director: "Jane Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd52b.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd52f",
      title: "In Search of Lost Time",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["adventure", "revenge", "drama"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt18673234.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.628Z",
      __v: 1,
      cast: ["John Jones", "Jane Brown", "Chris Wilson"],
      director: "Ella Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd52f.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd52d",
      title: "Black Book",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["love", "romance", "heroic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0389557.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.627Z",
      __v: 1,
      cast: ["John Brown", "Emma Miller", "Alex Davis"],
      director: "Ryan Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd52d.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd531",
      title: "Running Out of Time in Hollywood",
      description:
        "In the aftermath of a great war, a kingdom finds hope in the most unlikely of heroes.",
      keywords: ["love", "revenge", "adventure"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0451271.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.631Z",
      __v: 1,
      cast: ["Michael Jones", "Emma Jones", "John Davis"],
      director: "Sarah Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd531.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd533",
      title: "The Legend of the Lone Ranger",
      description:
        "A riveting tale of survival, hope, and the indomitable human spirit.",
      keywords: ["love", "betrayal", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0242593.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.632Z",
      __v: 1,
      cast: ["Ella Miller", "Jane Johnson", "Ella Moore"],
      director: "Chris Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd533.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd535",
      title: "Scooby-Doo! The Sword and the Scoob",
      description:
        "In the aftermath of a great war, a kingdom finds hope in the most unlikely of heroes.",
      keywords: ["drama", "mystery", "love"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt13676256.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.633Z",
      __v: 1,
      cast: ["Ella Davis", "Ella Johnson", "Sarah Davis"],
      director: "Ava Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd535.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd537",
      title: "Frozen in Time",
      description:
        "A young prodigy challenges the boundaries of her society and embarks on a quest for the truth.",
      keywords: ["journey", "survival", "drama"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt4150316.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.635Z",
      __v: 1,
      cast: ["Emma Miller", "Michael Williams", "Alex Miller"],
      director: "Sarah Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd537.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd539",
      title: "I Am Sam",
      description:
        "A thrilling chase, a deadly mystery, and a protagonist who won't give up.",
      keywords: ["thriller", "magic", "betrayal"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0277027.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.637Z",
      __v: 1,
      cast: ["Michael Johnson", "Michael Wilson", "Alex Wilson"],
      director: "Sarah Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd539.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd53d",
      title: "Contagion",
      description:
        "A timeless story of dreams, ambition, and the challenges of a big city.",
      keywords: ["epic", "romance", "revenge"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0272557.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.639Z",
      __v: 1,
      cast: ["John Johnson", "Emma Smith", "Jane Smith"],
      director: "Jane Taylor",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd53d.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd53b",
      title: "Once Upon a Time in the Hood",
      description:
        "A sci-fi adventure that challenges our very understanding of reality.",
      keywords: ["drama", "love", "romance"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0399445.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.638Z",
      __v: 1,
      cast: ["Jane Wilson", "John Moore", "Ava Jones"],
      director: "Ryan Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd53b.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd541",
      title: "In Our Time",
      description:
        "In the heart of the jungle, lies a secret that's waiting to be uncovered.",
      keywords: ["action", "suspense", "epic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0036952.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.661Z",
      __v: 1,
      cast: ["John Moore", "Jane Wilson", "Alex Wilson"],
      director: "Jane Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd541.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd543",
      title: "The Butterfly Effect",
      description:
        "In the heart of the jungle, lies a secret that's waiting to be uncovered.",
      keywords: ["romance", "darkness", "sci-fi"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0289879.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.664Z",
      __v: 1,
      cast: ["Jane Davis", "Ella Wilson", "Alex Taylor"],
      director: "Sarah Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd543.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd517",
      title: "Nine Inch Nails Live: Beside You in Time",
      description:
        "When dark forces threaten the realm, a band of misfits come together to save their world.",
      keywords: ["survival", "drama", "comedy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0899161.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.606Z",
      __v: 1,
      cast: ["Alex Wilson", "Sarah Taylor", "Chris Williams"],
      director: "Alex Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd517.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd545",
      title: "Further Back in Time for Dinner",
      description:
        "In the heart of the jungle, lies a secret that's waiting to be uncovered.",
      keywords: ["revenge", "survival"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt6567660.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.670Z",
      __v: 1,
      cast: ["Michael Johnson", "Alex Smith", "Chris Davis"],
      director: "Alex Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd545.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd511",
      title: "Castle of Contagion: The Series",
      description:
        "A love story that transcends time and space, bound by destiny.",
      keywords: ["drama", "mystery", "comedy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5174124.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.596Z",
      __v: 1,
      cast: ["Ella Brown", "Emma Moore", "John Williams"],
      director: "Sarah Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd511.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd549",
      title: "Just in Time [Max Mara]",
      description:
        "A thrilling chase, a deadly mystery, and a protagonist who won't give up.",
      keywords: ["darkness", "adventure", "survival"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt14750034.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.681Z",
      __v: 1,
      cast: ["Emma Smith", "Ryan Williams", "Michael Jones"],
      director: "Sarah Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd549.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd54b",
      title: "A Time in the Sun",
      description:
        "An exploration of family, traditions, and the ties that bind us together.",
      keywords: ["survival", "sci-fi"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0060859.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.687Z",
      __v: 1,
      cast: ["Sarah Miller", "Ella Davis", "Sarah Brown"],
      director: "John Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd54b.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd551",
      title: "Eises Kälte - Frozen in Time",
      description:
        "When dark forces threaten the realm, a band of misfits come together to save their world.",
      keywords: ["romance", "horror", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt10047356.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.699Z",
      __v: 1,
      cast: ["Emma Brown", "Ella Jones", "Michael Moore"],
      director: "Jane Taylor",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd551.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd54f",
      title: "Ford Models New Faces with Jack Page/Julia Covert",
      description:
        "A musical journey that will make you laugh, cry, and sing along.",
      keywords: ["betrayal", "mystery"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt7371632.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.698Z",
      __v: 1,
      cast: ["Emma Davis", "Ryan Taylor", "John Johnson"],
      director: "John Taylor",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd54f.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd54d",
      title: "Once Upon a Time in Little Tokyo",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["sci-fi", "adventure"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt8779410.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.692Z",
      __v: 1,
      cast: ["Ava Brown", "Emma Jones", "Ella Brown"],
      director: "Ava Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd54d.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd57e",
      title: "Young Gun in the Time",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["thriller", "mystery"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt2677710.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.715Z",
      __v: 1,
      cast: ["Emma Davis", "Ella Jones", "Ava Moore"],
      director: "Ryan Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd57e.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd57c",
      title: "An Ideal Husband",
      description:
        "A musical journey that will make you laugh, cry, and sing along.",
      keywords: ["love", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0160395.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.714Z",
      __v: 1,
      cast: ["Ella Smith", "Ryan Miller", "Ava Brown"],
      director: "Sarah Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd57c.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd57a",
      title: "Once Upon a Time in Abadan",
      description: "Magic, mischief, and a battle between light and darkness.",
      keywords: ["fantasy", "journey", "suspense"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt13933904.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.713Z",
      __v: 1,
      cast: ["John Smith", "Jane Williams", "Alex Johnson"],
      director: "Alex Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd57a.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd584",
      title: "Julia & Cupid",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["action", "horror", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt9241868.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.729Z",
      __v: 1,
      cast: ["Alex Johnson", "Chris Moore", "Ryan Miller"],
      director: "Emma Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd584.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd580",
      title: "I am Sam",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["journey", "horror"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt6289532.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.716Z",
      __v: 1,
      cast: ["Ella Smith", "Ryan Miller", "Chris Williams"],
      director: "Ava Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd580.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd582",
      title: "Once Upon a Time in Venice",
      description:
        "Facing insurmountable odds, a group of friends discover the true meaning of sacrifice.",
      keywords: ["sci-fi", "horror"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt4694544.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.724Z",
      __v: 1,
      cast: ["Ella Smith", "Jane Johnson", "Emma Jones"],
      director: "Ella Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd582.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd586",
      title: "Love in Our Time",
      description:
        "In a city full of mysteries, one detective finds clues that could change everything.",
      keywords: ["action", "comedy", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0063245.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.731Z",
      __v: 1,
      cast: ["Ella Smith", "John Brown", "John Davis"],
      director: "Ella Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd586.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd58a",
      title: "The Fog",
      description:
        "A riveting tale of survival, hope, and the indomitable human spirit.",
      keywords: ["love", "survival", "adventure"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0080749.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.733Z",
      __v: 1,
      cast: ["Ella Smith", "Ella Davis", "Jane Moore"],
      director: "Jane Taylor",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd58a.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd588",
      title: "Peace in Our Time",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["horror", "love"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1142571.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.732Z",
      __v: 1,
      cast: ["Jane Smith", "Ava Johnson", "Ava Smith"],
      director: "John Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd588.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd58c",
      title: "Spectral Transmission: In My Time of Dying",
      description:
        "A musical journey that will make you laugh, cry, and sing along.",
      keywords: ["heroic", "love", "romance"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt4372452.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.738Z",
      __v: 1,
      cast: ["Jane Johnson", "John Davis", "Sarah Johnson"],
      director: "Ava Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd58c.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd590",
      title: "8 Days: To the Moon and Back",
      description:
        "An exploration of family, traditions, and the ties that bind us together.",
      keywords: ["love", "heroic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt9769254.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.745Z",
      __v: 1,
      cast: ["Michael Wilson", "Alex Davis", "Jane Johnson"],
      director: "Emma Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd590.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd58e",
      title: "The Girl in the Lemon Factory",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["fantasy", "epic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt2846638.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.739Z",
      __v: 1,
      cast: ["Emma Wilson", "Jane Moore", "Ella Smith"],
      director: "Emma Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd58e.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd592",
      title: "American Pie: Beneath the Crust Vol. 2",
      description:
        "A young prodigy challenges the boundaries of her society and embarks on a quest for the truth.",
      keywords: ["romance", "adventure", "sci-fi"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0471564.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.746Z",
      __v: 1,
      cast: ["Emma Wilson", "Michael Johnson", "Emma Smith"],
      director: "Ava Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd592.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd598",
      title: "The Fog",
      description:
        "A thrilling chase, a deadly mystery, and a protagonist who won't give up.",
      keywords: ["betrayal", "darkness"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0432291.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.758Z",
      __v: 1,
      cast: ["Michael Jones", "Sarah Brown", "Emma Davis"],
      director: "Ella Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd598.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd594",
      title: "American Pie Presents: The Book of Love",
      description:
        "Facing insurmountable odds, a group of friends discover the true meaning of sacrifice.",
      keywords: ["suspense", "magic", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1407050.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.747Z",
      __v: 1,
      cast: ["Ella Williams", "Jane Williams", "Ella Davis"],
      director: "Ava Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd594.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd596",
      title: "Julia",
      description:
        "Two strangers, one fateful night, and a series of events that would change their lives forever.",
      keywords: ["betrayal", "action", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt7696446.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.755Z",
      __v: 1,
      cast: ["Ella Jones", "Ava Miller", "Jane Williams"],
      director: "Jane Smith",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd596.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd59a",
      title: "The Mystery of the Black Book",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["horror", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt11529596.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.759Z",
      __v: 1,
      cast: ["Jane Davis", "Jane Moore", "Ryan Johnson"],
      director: "Michael Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd59a.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd59c",
      title: "28 Weeks Later",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["survival", "drama", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0463854.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.760Z",
      __v: 1,
      cast: ["Sarah Miller", "Ryan Miller", "Chris Williams"],
      director: "Alex Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd59c.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd59e",
      title: "Everything Must Go",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["mystery", "adventure", "action"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1531663.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.761Z",
      __v: 1,
      cast: ["Jane Johnson", "Emma Davis", "Jane Johnson"],
      director: "Jane Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd59e.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd53f",
      title: "On Her Majesty's Secret Service: Swiss Movement",
      description:
        "A musical journey that will make you laugh, cry, and sing along.",
      keywords: ["adventure", "darkness"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0924503.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.640Z",
      __v: 1,
      cast: ["Ava Brown", "Michael Miller", "Sarah Williams"],
      director: "John Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd53f.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5a2",
      title: "Scooby-Doo! Ghastly Goals",
      description:
        "A young prodigy challenges the boundaries of her society and embarks on a quest for the truth.",
      keywords: ["fantasy", "suspense"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt3807092.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.768Z",
      __v: 1,
      cast: ["Ava Moore", "Alex Davis", "Jane Johnson"],
      director: "Ryan Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5a2.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5a4",
      title: "Footsteps in the Fog",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["heroic", "betrayal"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0048087.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.769Z",
      __v: 1,
      cast: ["Ella Smith", "Sarah Johnson", "Chris Miller"],
      director: "John Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5a4.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5aa",
      title: "Scooby-Doo and Guess Who?",
      description:
        "An exploration of family, traditions, and the ties that bind us together.",
      keywords: ["sci-fi", "heroic", "betrayal"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt8456094.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.782Z",
      __v: 1,
      cast: ["Jane Davis", "Chris Wilson", "John Moore"],
      director: "Ava Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5aa.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5a6",
      title: "Oblivious 5: Back in Time",
      description:
        "Two strangers, one fateful night, and a series of events that would change their lives forever.",
      keywords: ["romance", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5040554.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.770Z",
      __v: 1,
      cast: ["Jane Wilson", "Michael Wilson", "John Brown"],
      director: "Emma Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5a6.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ac",
      title: "Once Upon a Time in Tibet",
      description:
        "A riveting tale of survival, hope, and the indomitable human spirit.",
      keywords: ["fantasy", "sci-fi", "horror"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1774514.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.795Z",
      __v: 1,
      cast: ["Jane Wilson", "Ella Wilson", "Jane Smith"],
      director: "Alex Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ac.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ae",
      title: "Once Upon a Time in Paradise",
      description:
        "Journey through galaxies, as a crew faces challenges that test their limits and their bond.",
      keywords: ["darkness", "fantasy", "heroic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5317228.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.796Z",
      __v: 1,
      cast: ["John Brown", "Ryan Brown", "Alex Taylor"],
      director: "John Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ae.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5b0",
      title: "I, Julia",
      description:
        "A love story that transcends time and space, bound by destiny.",
      keywords: ["heroic", "epic", "fantasy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt12981890.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.797Z",
      __v: 1,
      cast: ["Sarah Miller", "Ryan Taylor", "Jane Johnson"],
      director: "John Smith",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5b0.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5b2",
      title: "Castle of Contagion: Sea of Correction",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["journey", "revenge"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt6539562.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.815Z",
      __v: 1,
      cast: ["Ella Brown", "Ava Brown", "Ella Smith"],
      director: "Chris Smith",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5b2.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5b4",
      title: "The Fog of Courage",
      description: "Magic, mischief, and a battle between light and darkness.",
      keywords: ["epic", "sci-fi", "suspense"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt3278662.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.817Z",
      __v: 1,
      cast: ["Chris Williams", "Alex Moore", "Michael Smith"],
      director: "Michael Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5b4.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5b6",
      title: "Julia",
      description:
        "Two strangers, one fateful night, and a series of events that would change their lives forever.",
      keywords: ["comedy", "epic", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0071754.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.818Z",
      __v: 1,
      cast: ["Emma Taylor", "Ella Jones", "Jane Moore"],
      director: "Alex Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5b6.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5b8",
      title: "Scooby-Doo and the Cyber Chase",
      description:
        "A sci-fi adventure that challenges our very understanding of reality.",
      keywords: ["horror", "heroic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0290057.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.819Z",
      __v: 1,
      cast: ["Ava Smith", "Michael Taylor", "John Brown"],
      director: "Michael Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5b8.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd547",
      title: "A Good Year",
      description:
        "In a world where nothing is as it seems, a lone hero rises against the odds.",
      keywords: ["darkness", "adventure", "comedy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0401445.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.680Z",
      __v: 1,
      cast: ["Chris Miller", "Alex Wilson", "Ava Taylor"],
      director: "Ryan Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd547.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5bc",
      title: "Back in Time for Dinner",
      description: "Magic, mischief, and a battle between light and darkness.",
      keywords: ["magic", "revenge"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt8544864.jpg",
      type: "tv show",
      createdAt: "2023-08-06T20:13:27.824Z",
      __v: 1,
      cast: ["Chris Johnson", "Jane Johnson", "Alex Johnson"],
      director: "Jane Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5bc.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5be",
      title: "Scooby-Doo! Camp Scare",
      description:
        "Journey through galaxies, as a crew faces challenges that test their limits and their bond.",
      keywords: ["fantasy", "love"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1731767.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.827Z",
      __v: 1,
      cast: ["Alex Brown", "Chris Williams", "Ella Davis"],
      director: "John Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5be.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5c0",
      title: "The Legend of the Lone Ranger (1981)",
      description:
        "Facing insurmountable odds, a group of friends discover the true meaning of sacrifice.",
      keywords: ["action", "survival"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt15451526.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.829Z",
      __v: 1,
      cast: ["Ella Williams", "Michael Johnson", "Emma Williams"],
      director: "Michael Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5c0.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5c2",
      title: "Just in Time",
      description:
        "In the aftermath of a great war, a kingdom finds hope in the most unlikely of heroes.",
      keywords: ["sci-fi", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt14243986.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.830Z",
      __v: 1,
      cast: ["Michael Smith", "John Brown", "Jane Moore"],
      director: "John Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5c2.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5c4",
      title: "Sam I Am",
      description:
        "Journey through galaxies, as a crew faces challenges that test their limits and their bond.",
      keywords: ["adventure", "epic", "darkness"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt12343938.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.832Z",
      __v: 1,
      cast: ["Sarah Williams", "Ella Miller", "John Smith"],
      director: "Ava Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5c4.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5c6",
      title: "Marathon Beyond: The Mummy Returns (2001) & Adventure Classics",
      description:
        "In a world where nothing is as it seems, a lone hero rises against the odds.",
      keywords: ["sci-fi", "mystery", "heroic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt15337956.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.835Z",
      __v: 1,
      cast: ["Emma Williams", "Ava Smith", "Ella Wilson"],
      director: "John Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5c6.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ca",
      title: "Once Upon a Time in the Desert",
      description:
        "A thrilling chase, a deadly mystery, and a protagonist who won't give up.",
      keywords: ["suspense", "action", "adventure"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0758770.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.847Z",
      __v: 1,
      cast: ["Michael Miller", "Ava Wilson", "Michael Jones"],
      director: "Emma Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ca.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5c8",
      title: "A Catch in Time: Chapter One",
      description:
        "Two strangers, one fateful night, and a series of events that would change their lives forever.",
      keywords: ["horror", "journey", "survival"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt7766484.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.844Z",
      __v: 1,
      cast: ["Jane Johnson", "Emma Taylor", "Michael Jones"],
      director: "John Taylor",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5c8.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5a8",
      title: "Lost in Time",
      description:
        "A love story that transcends time and space, bound by destiny.",
      keywords: ["sci-fi", "romance", "suspense"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt25965068.jpg",
      type: "documentary",
      createdAt: "2023-08-06T20:13:27.770Z",
      __v: 1,
      cast: ["Sarah Brown", "Chris Williams", "Emma Jones"],
      director: "Ella Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5a8.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5cc",
      title: "The Fog in Myself",
      description:
        "An exploration of family, traditions, and the ties that bind us together.",
      keywords: ["survival", "epic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt11058364.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.852Z",
      __v: 1,
      cast: ["Michael Moore", "Chris Brown", "Michael Jones"],
      director: "Alex Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5cc.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ce",
      title: "RiffTrax: When a Stranger Calls Back",
      description:
        "A riveting tale of survival, hope, and the indomitable human spirit.",
      keywords: ["fantasy", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt21650980.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.861Z",
      __v: 1,
      cast: ["Michael Jones", "Emma Davis", "Emma Miller"],
      director: "Ava Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ce.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5d0",
      title: "Everything Must Go",
      description:
        "A young prodigy challenges the boundaries of her society and embarks on a quest for the truth.",
      keywords: ["suspense", "darkness", "betrayal"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0131278.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.863Z",
      __v: 1,
      cast: ["Ella Moore", "Ella Brown", "Emma Jones"],
      director: "Michael Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5d0.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5d4",
      title: "Addicted to Halloween",
      description:
        "Facing insurmountable odds, a group of friends discover the true meaning of sacrifice.",
      keywords: ["revenge", "fantasy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5577700.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.872Z",
      __v: 1,
      cast: ["Ella Johnson", "Ava Moore", "Michael Wilson"],
      director: "Jane Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5d4.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5d6",
      title: "Heimat is a Space in Time",
      description:
        "Journey through galaxies, as a crew faces challenges that test their limits and their bond.",
      keywords: ["revenge", "romance", "adventure"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt9749570.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.877Z",
      __v: 1,
      cast: ["Sarah Smith", "John Brown", "John Williams"],
      director: "Ella Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5d6.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5d2",
      title: "The Legend of the Lone Ranger",
      description:
        "In the heart of the jungle, lies a secret that's waiting to be uncovered.",
      keywords: ["suspense", "darkness", "comedy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0082648.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.866Z",
      __v: 1,
      cast: ["Ava Smith", "Alex Wilson", "John Moore"],
      director: "Ella Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5d2.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5d8",
      title: "Love in the Time of Antidepressants",
      description:
        "A musical journey that will make you laugh, cry, and sing along.",
      keywords: ["betrayal", "survival", "epic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt7690644.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.894Z",
      __v: 1,
      cast: ["Alex Wilson", "Chris Moore", "Ryan Williams"],
      director: "Michael Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5d8.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5e0",
      title: "Arizona Sunshine: Contagion Z",
      description:
        "In a city full of mysteries, one detective finds clues that could change everything.",
      keywords: ["betrayal", "darkness", "adventure"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt9837912.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.908Z",
      __v: 1,
      cast: ["Jane Williams", "Ryan Smith", "Jane Moore"],
      director: "Ella Wilson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5e0.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5da",
      title: "Covered in Time and History: The Films of Ana Mendieta",
      description:
        "A journey of love, laughter, and friendship; a tale that celebrates the spirit of humanity.",
      keywords: ["mystery", "magic"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt7740300.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.897Z",
      __v: 1,
      cast: ["Emma Smith", "Jane Brown", "Michael Wilson"],
      director: "John Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5da.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5dc",
      title: "Julia & I",
      description:
        "A sci-fi adventure that challenges our very understanding of reality.",
      keywords: ["action", "romance", "sci-fi"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt14552724.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.903Z",
      __v: 1,
      cast: ["Ava Moore", "Emma Jones", "Emma Davis"],
      director: "Ava Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5dc.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5de",
      title: "The Scooby-Doo/Dynomutt Hour",
      description:
        "A timeless story of dreams, ambition, and the challenges of a big city.",
      keywords: ["romance", "action"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0074053.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.904Z",
      __v: 1,
      cast: ["John Johnson", "Jane Williams", "Ella Davis"],
      director: "Michael Williams",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5de.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5e2",
      title: "Once Upon a Time in Poland",
      description:
        "In a city full of mysteries, one detective finds clues that could change everything.",
      keywords: ["epic", "thriller", "horror"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt13002982.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.920Z",
      __v: 1,
      cast: ["Alex Smith", "Ella Williams", "Sarah Smith"],
      director: "Jane Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5e2.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5e8",
      title: "Back in Time",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["survival", "drama", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt15127848.jpg",
      type: "trailer",
      createdAt: "2023-08-06T20:13:27.926Z",
      __v: 1,
      cast: ["Michael Wilson", "Ella Wilson", "Sarah Johnson"],
      director: "Emma Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5e8.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5e6",
      title: "In Time",
      description:
        "In a world where nothing is as it seems, a lone hero rises against the odds.",
      keywords: ["love", "betrayal"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt14042070.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.924Z",
      __v: 1,
      cast: ["John Davis", "John Williams", "Ella Wilson"],
      director: "Jane Smith",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5e6.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5e4",
      title: "Hi, I am Sam...",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["comedy", "horror", "love"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt6536392.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.922Z",
      __v: 1,
      cast: ["Ryan Brown", "Ella Williams", "John Brown"],
      director: "John Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5e4.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ea",
      title: "Nomads: Addicted to Love",
      description:
        "In the aftermath of a great war, a kingdom finds hope in the most unlikely of heroes.",
      keywords: ["suspense", "comedy"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt5640590.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.937Z",
      __v: 1,
      cast: ["Ella Miller", "Ella Jones", "Alex Brown"],
      director: "Ava Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ea.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ec",
      title: "Love in the Time of Corona",
      description:
        "A musical journey that will make you laugh, cry, and sing along.",
      keywords: ["heroic", "horror"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt13315032.jpg",
      type: "video song",
      createdAt: "2023-08-06T20:13:27.940Z",
      __v: 1,
      cast: ["Ella Jones", "Alex Davis", "Ella Brown"],
      director: "Chris Miller",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ec.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5f0",
      title: "Caddyshack: The 19th Hole",
      description:
        "In a world where nothing is as it seems, a lone hero rises against the odds.",
      keywords: ["comedy", "thriller"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0354351.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.946Z",
      __v: 1,
      cast: ["Jane Davis", "Jane Johnson", "Ryan Brown"],
      director: "Ella Brown",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5f0.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5f2",
      title: "Popcorn Porn: Watching 'Zack and Miri Make a Porno'",
      description:
        "A love story that transcends time and space, bound by destiny.",
      keywords: ["mystery", "survival"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt1258985.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.948Z",
      __v: 1,
      cast: ["Emma Davis", "Emma Smith", "Ava Moore"],
      director: "Jane Johnson",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5f2.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5ee",
      title: "Scooby-Doo Meets the Boo Brothers",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["thriller", "magic", "drama"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0189070.jpg",
      type: "web series",
      createdAt: "2023-08-06T20:13:27.944Z",
      __v: 1,
      cast: ["Jane Moore", "Ryan Brown", "Ryan Brown"],
      director: "Ava Moore",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5ee.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5fa",
      title: "On Her Majesty's Secret Service",
      description:
        "Dark secrets, forbidden love, and a fight for justice in a society torn apart by its past.",
      keywords: ["magic", "mystery", "journey"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt0064757.jpg",
      type: "movie",
      createdAt: "2023-08-06T20:13:27.955Z",
      __v: 1,
      cast: ["Ella Wilson", "John Moore", "Michael Miller"],
      director: "Ava Jones",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5fa.mp4",
    },
    {
      _id: "64cffee700bad552e8dcd5f4",
      title: "Lost in Time",
      description:
        "A comedy that explores the ups and downs of life, relationships, and finding oneself.",
      keywords: ["suspense", "darkness"],
      thumbnail:
        "https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/posters/tt7750508.jpg",
      type: "short film",
      createdAt: "2023-08-06T20:13:27.949Z",
      __v: 1,
      cast: ["Emma Smith", "Jane Davis", "Emma Williams"],
      director: "Jane Davis",
      video_url:
        "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd5f4.mp4",
    },
  ],
};

export default ShowsData;