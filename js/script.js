document.addEventListener("DOMContentLoaded", function () {
    // Button Hover and Click Animations using GSAP
    document.querySelectorAll('button').forEach(button => {
        // Hover effect (scale up)
        button.addEventListener('mouseenter', function () {
            gsap.to(button, { duration: 0.3, scale: 1.1 });
        });

        // Mouse leave effect (scale back)
        button.addEventListener('mouseleave', function () {
            gsap.to(button, { duration: 0.3, scale: 1 });
        });

        // Click effect (scale down)
        button.addEventListener('mousedown', function () {
            gsap.to(button, { duration: 0.2, scale: 0.9 });
        });

        // Release effect (scale back up slightly)
        button.addEventListener('mouseup', function () {
            gsap.to(button, { duration: 0.2, scale: 1.1 });
        });
    });
});












document.addEventListener('DOMContentLoaded', function () {
    const filter = document.getElementById('rating-filter');
    const reviewsContainer = document.getElementById('reviews');
    const form = document.getElementById('review-form');

    // Load reviews from localStorage
    const loadReviews = () => {
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        storedReviews.forEach(addReviewToDOM);
    };

    // Save reviews to localStorage
    const saveReview = (review) => {
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        storedReviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(storedReviews));
    };

    
    // Add a review to the DOM
    const addReviewToDOM = (review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.setAttribute('data-rating', review.rating);
        reviewDiv.innerHTML = `
            <p><strong>${review.name}</strong> - "${review.text}"</p>
            <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
        `;
        reviewsContainer.appendChild(reviewDiv);
    };

    // Filter reviews based on rating
    filter.addEventListener('change', () => {
        const rating = filter.value;
        const reviews = document.querySelectorAll('.review');
        reviews.forEach((review) => {
            review.style.display = rating === 'all' || review.dataset.rating === rating ? 'block' : 'none';
        });
    });

    // Submit a new review
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const text = document.getElementById('review-text').value;
        const rating = parseInt(document.getElementById('rating').value);

        const newReview = { name, text, rating };
        addReviewToDOM(newReview);
        saveReview(newReview);

        form.reset();
    });

    // Initialize reviews
    loadReviews();
});


