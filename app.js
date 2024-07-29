document.addEventListener('DOMContentLoaded', () => {
    // Dummy articles data
    const articles = [
        { title: 'Mental Wellness', content: 'Article on managing stress, dealing with anxiety, understanding depression, and tips for maintaining mental well-being.' },
        { title: 'The Power of Peer Support', content: 'The importance of building a support network, how to be a good friend, and the benefits of peer counseling.' },
        { title: 'Standing Up Against Bullying', content: 'Information on recognizing bullying and harassment, how to respond, and resources available for help.' },
        { title: 'Navigating Academic Challenges', content: 'Tips for studying effectively, managing time, and dealing with academic pressure.' }
    ];

    // Search function
    const searchArticles = (event) => {
        event.preventDefault();
        const query = document.getElementById('searchInput').value.toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = '';

        if (query) {
            const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(query));

            if (filteredArticles.length) {
                filteredArticles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('search-result');
                    articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
                    resultsContainer.appendChild(articleElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>No articles found.</p>';
            }
        }
    };

    document.getElementById('searchForm').addEventListener('submit', searchArticles);

    // Carousel functionality
    let currentIndex = 0;

    function changeSlide(n) {
        showSlide(currentIndex += n);
    }

    function currentSlide(n) {
        showSlide(currentIndex = n - 1);
    }

    function showSlide(n) {
        const items = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');
        if (n >= items.length) currentIndex = 0;
        if (n < 0) currentIndex = items.length - 1;
        items.forEach((item, index) => {
            item.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === Math.floor(currentIndex / 3));
        });
    }

    document.getElementById('searchForm').addEventListener('submit', searchArticles);
    showSlide(currentIndex);

    // Notification dropdown toggle
    const notificationBell = document.querySelector('.notification-bell');
    const notificationDropdown = document.querySelector('.dropdown-content');

    notificationBell.addEventListener('click', () => {
        notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Help Center dropdown toggle
    const helpCenter = document.querySelector('.help-center');
    const helpDropdown = document.querySelector('.help-dropdown-content');

    helpCenter.addEventListener('click', () => {
        helpDropdown.style.display = helpDropdown.style.display === 'block' ? 'none' : 'block';
    });
});
