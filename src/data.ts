export const menu = [
  {
    id: 1,
    title: "principal", // Tradução de "main"
    listItems: [
      {
        id: 1,
        title: "Página Inicial", // Tradução de "Homepage"
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Perfil", // Tradução de "Profile"
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "listas", 
    listItems: [
      {
        id: 1,
        title: "Usuários", 
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Produtos", 
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Pedidos",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Postagens", 
        url: "/posts",
        icon: "post.svg",
      },
    ],
  },
  {
    id: 3,
    title: "geral", 
    listItems: [
      {
        id: 1,
        title: "Elementos", 
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notas", 
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Formulários", 
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendário", 
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "manutenção", 
    listItems: [
      {
        id: 1,
        title: "Configurações", 
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups", 
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "análises", 
    listItems: [
      {
        id: 1,
        title: "Gráficos", 
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Registros", 
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/8811728/pexels-photo-8811728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/8813081/pexels-photo-8813081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/9809412/pexels-photo-9809412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/9409823/pexels-photo-9409823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total de Usuários",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total de Produtos",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Receita Total",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Proporção Total",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Lucro Obtido",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total de Visitas",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/9294484/pexels-photo-9294484.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    lastName: "Silva",
    firstName: "Ana",
    email: "ana.silva@gmail.com",
    phone: "987 654 321",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3813055/pexels-photo-3813055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Oliveira",
    firstName: "Carlos",
    email: "carlos.oliveira@gmail.com",
    phone: "987 654 322",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4066014/pexels-photo-4066014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Pereira",
    firstName: "Mariana",
    email: "mariana.pereira@hotmail.com",
    phone: "987 654 323",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/9629995/pexels-photo-9629995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Costa",
    firstName: "João",
    email: "joao.costa@gmail.com",
    phone: "987 654 324",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/6014160/pexels-photo-6014160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Fernandes",
    firstName: "Lucas",
    email: "lucas.fernandes@yahoo.com",
    createdAt: "01/01/2023",
    phone: "987 654 325",
    verified: "01/01/2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/5732302/pexels-photo-5732302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Gomes",
    firstName: "Julia",
    email: "julia.gomes@mail.com",
    phone: "987 654 326",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Sousa",
    firstName: "Beatriz",
    email: "beatriz.sousa@gmail.com",
    phone: "987 654 327",
    createdAt: "01/01/2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/15855259/pexels-photo-15855259/free-photo-of-animal-bicho-cachorro-cao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Mendes",
    firstName: "Gabriel",
    email: "gabriel.mendes@mail.com",
    phone: "987 654 328",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Ribeiro",
    firstName: "Camila",
    email: "camila.ribeiro@gmail.com",
    phone: "987 654 329",
    createdAt: "01/01/2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Almeida",
    firstName: "Pedro",
    email: "pedro.almeida@gmail.com",
    phone: "987 654 330",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/2171583/pexels-photo-2171583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Martins",
    firstName: "Letícia",
    email: "leticia.martins@gmail.com",
    phone: "987 654 331",
    createdAt: "01/01/2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Rocha",
    firstName: "Felipe",
    email: "felipe.rocha@hotmail.com",
    phone: "987 654 332",
    createdAt: "01/01/2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/4061389/pexels-photo-4061389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Cardoso",
    firstName: "Laura",
    email: "laura.cardoso@gmail.com",
    phone: "987 654 333",
    createdAt: "01/01/2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/9203497/pexels-photo-9203497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Barbosa",
    firstName: "Sophia",
    email: "sophia.barbosa@hotmail.com",
    phone: "987 654 334",
    createdAt: "01/01/2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/2878735/pexels-photo-2878735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Teixeira",
    firstName: "Rafael",
    email: "rafael.teixeira@gmail.com",
    phone: "987 654 335",
    createdAt: "01/01/2023",
  },
];


export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "R$2.299,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "Edição Digital do Playstation 5 com design elegante e moderno. Ideal para quem busca uma experiência de jogos de última geração sem a necessidade de um leitor de disco.",
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "R$4.299,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "Laptop Dell KR211822 com desempenho robusto e design elegante, ideal para trabalho e entretenimento.",
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "R$5.499,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "Televisor Samsung 4K SmartTV com qualidade de imagem superior e recursos inteligentes para uma experiência de entretenimento imersiva.",
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "R$6.399,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "iPhone 14 Pro Max da Apple, com design sofisticado e recursos avançados, incluindo uma excelente câmera e desempenho de ponta.",
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "R$299,00",
    createdAt: "01/01/2023",
    description: "Faixa de luz Philips Hue Play Gradient para criar uma atmosfera vibrante e personalizada com cores que mudam dinamicamente.",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "R$399,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "Mouse Logitech MX Master 3 com design ergonômico e funcionalidades avançadas para produtividade e conforto.",
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "R$799,00",
    createdAt: "01/01/2023",
    description: "Microfone Rode Podcast para gravações de alta qualidade, ideal para podcasts e gravações profissionais.",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "R$2.299,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "Ar condicionado split Toshiba 2 toneladas com alta eficiência e tecnologia avançada para conforto térmico.",
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "R$4.499,00",
    createdAt: "01/01/2023",
    description: "Televisor Sony Bravia KDL-47W805A com excelente qualidade de imagem e recursos de smart TV.",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "R$3.299,00",
    createdAt: "01/01/2023",
    inStock: true,
    description: "Laptop Acer 16 KL-4804 com excelente desempenho e design moderno, ideal para uso profissional e pessoal.",
  },
];



export const singleUser = {
  id: 1,
  title: "Felipe Luiz",
  img: "https://images.pexels.com/photos/3117157/pexels-photo-3117157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  info: {
    usuario: "FelipeLuiz",
    nome: "Felipe Luiz",
    email: "felipeluiz@gmail.com",
    celular: "99 9999-9999",
    status: "verificado",
  },
  chart: {
    dataKeys: [
      { name: "visitados", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Dom",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Seg",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Ter",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Qua",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Qui",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Sex",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sáb",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe comprou o Playstation 5 Edição Digital",
      time: "há 3 dias",
    },
    {
      text: "Jane Doe adicionou o Playstation 5 Edição Digital à sua lista de desejos",
      time: "há 1 semana",
    },
    {
      text: "Mike Doe comprou o Playstation 5 Edição Digital",
      time: "há 2 semanas",
    },
    {
      text: "Anna Doe avaliou o produto",
      time: "há 1 mês",
    },
    {
      text: "Michael Doe adicionou o Playstation 5 Edição Digital à sua lista de desejos",
      time: "há 1 mês",
    },
    {
      text: "Helen Doe avaliou o produto",
      time: "há 2 meses",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visitas", color: "#82ca9d" }, 
      { name: "pedidos", color: "#8884d8" }, 
    ],
    data: [
      {
        name: "Dom", 
        visitas: 4000,
        pedidos: 2400,
      },
      {
        name: "Seg",
        visitas: 3000,
        pedidos: 1398,
      },
      {
        name: "Ter", 
        visitas: 2000,
        pedidos: 3800,
      },
      {
        name: "Qua", 
        visitas: 2780,
        pedidos: 3908,
      },
      {
        name: "Qui",
        visitas: 1890,
        pedidos: 4800,
      },
      {
        name: "Sex", 
        visitas: 2390,
        pedidos: 3800,
      },
      {
        name: "Sáb", 
        visitas: 3490,
        pedidos: 4300,
      },
    ],
  },
  
  activities: [
    {
      text: "John Doe comprou o Playstation 5 Edição Digital",
      time: "há 3 dias",
    },
    {
      text: "Jane Doe adicionou o Playstation 5 Edição Digital à sua lista de desejos",
      time: "há 1 semana",
    },
    {
      text: "Mike Doe comprou o Playstation 5 Edição Digital",
      time: "há 2 semanas",
    },
    {
      text: "Anna Doe avaliou o produto",
      time: "há 1 mês",
    },
    {
      text: "Michael Doe adicionou o Playstation 5 Edição Digital à sua lista de desejos",
      time: "há 1 mês",
    },
    {
      text: "Helen Doe avaliou o produto",
      time: "há 2 meses",
    },
  ],
  
};
