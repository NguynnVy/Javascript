// console.log(document); // sẽ ra 1 cái object

// khai báo theo kiểu ES5
// var root = document.getElementById("root");
// console.log([root]);

// đổ dữ liệu vào trong root
var content = `<h1>Hello các bạn</h1>`;
document.write(content); //write chỉ dành cho document

// đổ dữ liệu vào body
// root.innerHTML = content;

// document.getElementByClassName
// hay dùng, 100% dùng, document.querySelector
// document.querySelectorAll thì lấy hết cả 2 cái bên HTML
var root = document.querySelector("#root"); // lấy element đầu tiên
console.log([root]);
