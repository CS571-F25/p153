const initialRecipes = [
    {
        id: 1,
        title: "Chocolate Chip Cookies",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
        description: "Classic chewy cookies with gooey chocolate chips.",
        likes: 0
    },
    {
        id: 2,
        title: "Banana Bread",
        img: "https://images.unsplash.com/photo-1596241913027-34358037e159?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Moist banana bread perfect for breakfast or dessert.",
        likes: 0
    },
    {
        id: 3,
        title: "Lemon Tart",
        img: "https://images.unsplash.com/photo-1630151317982-42427bad4303?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A bright, tangy tart with a buttery crust.",
        likes: 0
    },
    {
        id: 4,
        title: "Cinnamon Rolls",
        img: "https://images.unsplash.com/photo-1645995575875-ea6511c9d127?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Soft rolls swirled with cinnamon and sugar.",
        likes: 0
    },
    {
        id: 5,
        title: "Blueberry Muffins",
        img: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fluffy muffins packed with blueberries.",
        likes: 0
    },
    {
        id: 6,
        title: "Sourdough Bread",
        img: "https://plus.unsplash.com/premium_photo-1700767181915-8a1bc379cae7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Crusty artisan bread with a tangy flavor.",
        likes: 0
    },
    {
        id: 7,
        title: "Apple Pie",
        img: "https://plus.unsplash.com/premium_photo-1694336203192-c9e7f2891b95?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Classic apple pie with a flaky crust.",
        likes: 0
    },
    {
        id: 8,
        title: "Vanilla Cupcakes",
        img: "https://images.unsplash.com/photo-1555420460-5551f716b44c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Light vanilla cupcakes topped with buttercream.",
        likes: 0
    },
    {
        id: 9,
        title: "Brownies",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
        description: "Rich, fudgy chocolate brownies.",
        likes: 0
    },
    {
        id: 10,
        title: "Cheesecake",
        img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800",
        description: "Creamy cheesecake with a graham cracker crust.",
        likes: 0
    },
    {
        id: 11,
        title: "Croissants",
        img: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Flaky, buttery French croissants.",
        likes: 0
    },
    {
        id: 12,
        title: "Pumpkin Bread",
        img: "https://images.unsplash.com/photo-1690085617616-bb89c1148397?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Spiced pumpkin bread perfect for fall.",
        likes: 0
    },
    {
        id: 13,
        title: "Macarons",
        img: "https://plus.unsplash.com/premium_photo-1675806021714-8f33e130a28a?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Colorful almond cookies with creamy filling.",
        likes: 0
    },
    {
        id: 14,
        title: "Strawberry Shortcake",
        img: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Layers of cake, cream, and fresh strawberries.",
        likes: 0
    },
    {
        id: 15,
        title: "Chocolate Cake",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
        description: "Rich chocolate cake with smooth frosting.",
        likes: 0
    }
];

export default initialRecipes;
