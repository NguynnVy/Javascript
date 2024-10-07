
let arrContent = [
    {
        imgSRC: "https://picsum.photos/200",
        title: "Topic 1",
        content:
            "React lets you build user interfaces out of individual pieces called components.",
    },
    {
        imgSRC: "https://picsum.photos/200",
        title: "Topic 2",
        content:
            " Create your own React components like Thumbnail, LikeButton, and Video.",
    },
    {
        imgSRC: "https://picsum.photos/200",
        title: "Topic 1",
        content: "Then combine them into entire screens, pages, and apps.",
    },
];

// let content = `<div class="content">
//         <div>
//             <img src="https://picsum.photos/200" alt="ảnh đẹp" />
//         </div>
//         <div>
//             <h1>Topic 1</h1>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem
//                 gravida odio viverra ornare sed in velit. Pellentesque placerat diam
//                 quis orci pretium, ac consectetur dolor sodales. Aenean ac imperdiet
//                 velit, quis malesuada quam. Interdum et malesuada fames ac ante ipsum
//                 primis in faucibus. Proin sit amet libero lectus.
//             </p>
//         </div>
//     </div>
// `;

// render nè
let content = `
    ${
    // callback, element + index
    // không có chữ function là viết vô {} là return rồi
    arrContent.map(function (noidung, index) {
        return `<div class="content ${(index + 1) % 2 === 0 ? `right-content` : ``}">
        <div>
            <img src=${noidung.imgSRC} alt="ảnh đẹp" />
        </div>
        <div>
            <h1>${noidung.title}</h1>
            <p>
                ${noidung.content}
            </p>
        </div>
    </div>`;
    }).join(``)
    }
`;
document.write(content);
