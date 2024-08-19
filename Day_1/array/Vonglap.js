console.log(`Vòng lặp`);

let users = ["Hải", "Huy", "Minh", "Vy", "Hà"];
console.log(users);


console.log(`--------fill()--------`);
// 1.fill() cập nhật tất cả các phần tử của mảng thành 1 giá trị
console.log(users);
// users.fill("hello");
// console.log(users);


console.log(`--------forEach(callback)--------`);
// 2. forEach(callback) duyệt qua từng phần tử và trả về element, index trong callback
// không thể dừng được vòng lặp
// callback : tượng trưng cho 1 function giá trị trong 1 phương thức.

console.log(`--------forEach(callback) version ES5--------`);
// dùng callback trong ES5 => function ẩn danh
users.forEach(function(user, index){
    // console.log(user, index);
    if(index == 1) {
        return;
    }
    console.log(user,index);
    // xóa được Huy nhưng vì forEach không dừng nên vẫn ăn luôn Minh Vy Hà
})

console.log(`--------forEach(callback) version ES6--------`);
// dùng ES6 => chính là cú pháp của ReactJS
// arrow function (element, index)  => {} là 1 (callback)
users.forEach((user, index) => {
    console.log(user, index); 
})


console.log(`--------map(callback)--------`);
// 3. map(callback) duyệt qua từng phần tử trong mảng, trả về element, index, trong callback
/* 
    - trả về 1 mảng mới chính là return trong callback
    - số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đầu
    - sử dụng để giải quyết các bài toán về render dữ liệu lênt trên giao diện
*/
let newArray = users.map((user, index) => {
    console.log(user, index);
    // return 1;
    // return user;
    return `<h1>${user}</h1>` //render lên giao diện nè
})
// console.log(newArray);
document.write(newArray.join(``)) //render đấy


console.log(`--------some(callback)--------`);
// 4. some(callback)
/*
    - giá trị của hàm some => true hoặc false
    - trả về true nếu: có ít nhất 1 lần lặp return true
    - ví dụ: tìm trong hàm có số lẻ hay không
    {1,2,3,4,5,6} => true
    - vòng lặp sẽ chạy tới khi có return true
*/
let numbers = [1,2,3,4,5,6];
let check = numbers.some((num, index) => {
    if(num % 2 !== 0){
        console.log(num);
        return true;
    }
})
console.log(check);



console.log(`--------every(callback)--------`);
// 5. every(callback)
/*
    - trả về true / false
    - trả về true nếu tất cả đều true
    - trả về false nếu tất cả đều false
*/
let numbers1 = [1,7,3,3,11,5];
let check1 = numbers1.every((num, index1) => {
    if(num % 2 !== 0){
        console.log(num);
        return true;
    }
})
console.log(check1);
