document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const filterInput = document.querySelector('.filter-input');
    const productGrid = document.querySelector('.book-grid');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navMenu.classList.remove('active');
        }
    });

    const products = [
        { id: 1, title: "Launch", author: "Jeff Walker", price: "29,900₮", image: "/picture/Publishing/launch.png", category: "Business" },
        { id: 2, title: "Урагшаа", author: "Howard Schultz", price: "39,900₮", image: "/picture/Publishing/uragshaa.png", category: "Business" },
        { id: 3, title: "Патагониа", author: "Иван Шүйнард", price: "49,900₮", image: "/picture/Publishing/screen1.png", category: "Biography" },
        { id: 4, title: "Үүсгэн байгуулагчид", author: "Жимми Сони", price: "39,900₮", image: "/picture/Publishing/Founders (1).png", category: "Business" },
        { id: 5, title: "Headspace", author: "Эмди Паддиком", price: "29,900₮", image: "/picture/Publishing/headspace.png", category: "Self-Help" },
        { id: 6, title: "Аналог", author: "Дэвид Сакс", price: "39,900₮", image: "/picture/Publishing/analog.png", category: "Technology" },
        { id: 7, title: "Анна", author: "Эми Одел", price: "39,900₮", image: "/picture/Publishing/anna.png", category: "Biography" },
        { id: 8, title: "Цаг төлөвлөгч дэвтэр", author: "Кел Ньюпорт", price: "34,900₮", image: "/picture/Publishing/timeplanner.png", category: "Productivity" },
        { id: 9, title: "Бизнесийг энгийнээр", author: "Доналд Миллер", price: "29,900₮", image: "/picture/Publishing/biznes.png", category: "Business" },
        { id: 10, title: "Буу Нян Ган", author: "Жаред Даймонд", price: "49,900₮", image: "/picture/Publishing/BuuNyanGan.png", category: "History" },
        { id: 11, title: "Бүтээ", author: "Тони Фаделл", price: "49,900₮", image: "/picture/Publishing/butee.png", category: "Business" },
        { id: 12, title: "Стори Бренд Бүтээх Нь", author: "Доналд Миллер", price: "29,900₮", image: "/picture/Publishing/storybrand.png", category: "Marketing" }
    ];

    function renderProducts(productList) {
        productGrid.innerHTML = ''; 

        if (productList.length === 0) {
            productGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        productList.forEach(product => {
            const productCard = document.createElement('a');
            productCard.classList.add('book-card');
            productCard.href = "#";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.author}</p>
                <p class="price">${product.price}</p>
            `;

            productGrid.appendChild(productCard);
        });
    }

    function filterProductsByInput(inputValue) {
        return products.filter(product => {
            const keyword = inputValue.toLowerCase();
            return (
                product.title.toLowerCase().includes(keyword) ||
                product.author.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword)
            );
        });
    }

    filterInput.addEventListener('input', (e) => {
        const inputValue = e.target.value.trim();
        const filteredProducts = filterProductsByInput(inputValue);
        renderProducts(filteredProducts);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam) {
        const filteredByCategory = products.filter(product =>
            product.category.toLowerCase() === categoryParam.toLowerCase()
        );
        renderProducts(filteredByCategory);
    } else {
        renderProducts(products);
    }
});
