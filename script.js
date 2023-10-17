const main = document.querySelector('.main .row');
const clothes = [{
        model: 'JORDAN',
        title: 'Jordan Nu Retro 1 Low "Field Purple"',
        price: 105.00,
        image: './images/air.webp',
        image1: './images/air2.webp'
    },
    {
        model: 'HONOR THE GIFT',
        price: 276.00,
        title: 'Honor The Gift H Wire Quilt Jacket',
        image: './images/jacket.webp',
        image1: './images/jacket-hover.webp'
    },
    {
        model: 'HONOR THE GIFT',
        price: 169,
        title: "Honor The Gift Amp'd Chore Jacket",
        image: './images/jacket2.webp',
        image1: './images/jacket2-hover.webp'
    },
    {
        model: 'HONOR THE GIFT',
        price: 65,
        title: "Honor The Gift Mystery Of Pain Tee",
        image: './images/jacket3.webp',
        image1: './images/jacket3-hover.webp'
    },
    {
        model: 'HONOR THE GIFT',
        price: 130,
        title: "Honor The Gift Amp'd Chore Pant",
        image: './images/pant.webp',
        image1: './images/pant-hover.webp'

    },
    {
        model: 'NIKE',
        price: 140,
        title: `Women's Nike Air Max 1 "White Black"`,
        image: './images/nike.webp',
        image1: './images/nike-hover.webp'
    }
]

for (let wear of clothes) {
    main.innerHTML += `
    <div class="col-lg-4 card-wrapper">
    <div class="card" style="width: 20rem;">
    <div class="image-container">
        <img src="${wear.image}" class="default-image card-img-top" alt="${wear.model}">
        <img src="${wear.image1}" class="hover-image card-img-top" alt="${wear.model}">
    </div>
        <div class="card-body">
            <h5 class="card-title">${wear.model}</h5>
            <h6>${wear.title}</h6>
            <span>$${wear.price}</span>
        </div>
    </div>
</div>
    `
}

const cardWrappers = document.querySelectorAll('.card-wrapper');

cardWrappers.forEach((cardWrapper) => {
    const defaultImage = cardWrapper.querySelector('.default-image');
    const hoverImage = cardWrapper.querySelector('.hover-image');

    cardWrapper.addEventListener('mouseenter', () => {
        defaultImage.style.display = 'none';
        hoverImage.style.display = 'block';
    });

    cardWrapper.addEventListener('mouseleave', () => {
        defaultImage.style.display = 'block';
        hoverImage.style.display = 'none';
    });
});