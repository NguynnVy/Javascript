console.log(`Mảng`);
// int[] arr = new Integer...

// Khai báo mảng theo ES6
/*
    - let: phạm vi biến cục bộ
    - const: phục vụ cho cơ chế hoisting + không thể thay đổi
*/

// Khai báo mảng users
let users = ["Hải", "Vy", "Dũng", "Tin", "Nam", "Hải"];
console.log(users);
console.log(users[1]);

// Khai báo kiểu khác
// let users = new Array("Hải", "Vy", "Dũng", "Tin", "Nam");

console.log(`--------Kiểm tra mảng--------`);

// 1. Làm thế nào để kiểm tra 1 biến có phải là mảng hay không
// Tại sao khai báo mảng -> lại ra object
console.log(typeof users);
console.log(typeof null);
console.log(`----------------`);
// cách check mảng
if(Array.isArray(users)){
    console.log("Là mảng đó");
} else {
    console.log("Không phải mảng đâu");
    
}
// nếu đã là object => có  các phương thức cho sẵn


console.log(`--------Duyệt mảng--------`);// 2. Duyệt mảng
for(let index in users){
    console.log(users[index], index);
} // trả về index và user
console.log(`----------------`);
for(let user of users){
    console.log(user);
} // trả về mỗi user, không trả về được index



console.log(`--------Xóa mảng--------`);
// 3. Xóa mảng
// Xóa phần tử tên Vy
let indexDelete = 1;
let results = [];
for(let index in users){
    if(index == indexDelete) { // parse về number để dùng ===
        // +(value); Number(value); parseInt(value)
        continue; // bỏ qua lần lặp hiện tại, chạy tiếp
    }
    results[results.length] = users[index];
}
console.log(results);
// ví dụ cho hiểu tại sao dùng results.length
// users[11] = "hello"; // để đảm bảo length nó đúng
// console.log(users);

// phép so sánh == và ===
/*
    == : không quan tâm đến kiểu dữ liệu
    === : so sánh cả kiểu dữ liệu
*/ 

console.log(`----------------`);
// 3.1 splice (index count) xóa phần tử count phần tử từ index
    // ["Hải", "Vy", "Dũng", "Tin", "Nam"];
// users.splice(1,2, "Vy new", "Dũng new"); // xóa vị trí số 1 và xóa 2 cái
// console.log(users);


console.log(`--------Concat--------`);
// 4. concat(arr1, arr2,....) nối các mảng lại với nhau
console.log(users.concat([1,2,3,4], ["x","y","z"])); // ["Hải", "Vy", "Dũng", "Tin", "Nam", 1,2,3,4, "x"."y","z"]
// => trải mảng (thì sẽ có những giá trị trùng nhau => loại bỏ giá trị trùng nhau thì ????)

console.log(`--------Set loại bỏ giá trị trùng nhau--------`);
// 4.1 Set loại bỏ những giá trị trùng nhau
let setMang = users.concat([1,2,3,4], [1,2,5]);
let mangLoaiBo = [...new Set(setMang)] // O(n^2)
console.log(setMang);
console.log(mangLoaiBo); // tốc độ cao


console.log(`--------indexOf(value)--------`);
// 5. indexOf(value) tìm giá trị xuất hiện đầu tiên của phần tử trong mảng
console.log(users.indexOf("Hải")); //trả về -1 khi không tìm thấy, còn khác -1 là auto tìm thấy
if(users.indexOf("Hải" === -1)){
    console.log("Đéo có ai là hải chữ thường hết");
} else {
    console.log("Có đấy");
}


console.log(`--------lastIndexOf(value)--------`);
// 6. lastIndexOf(value) tìm vị trí xuất hiện cuối cùng của phần tử trong mảng
console.log(users.lastIndexOf("Hải")); 


console.log(`--------includes(value)--------`);
// 7. includes(value) tìm phẩn tử trong mảng
// => chỉ trả về true hoặc false
console.log(users.includes("Hải")); // áp dụng rất nhiều


console.log(`--------slice(start,end)--------`);
// 8. slice(start, end) => cắt mảng từ vị trí start -> <end // trả về 1 mảng
console.log(users.slice(0,3));
console.log(users.slice(1)); //lấy từ đầu
// giá trị âm
console.log(users.slice(-3)); //lấy từ đít


console.log(`--------join()--------`);
// 9. join() nối các phần tử trong mảng lại thành 1 chuỗi
console.log(users.join());
console.log(users.join(` `));
console.log(users.join(` - `));


console.log(`--------push()--------`);
// 10. push() thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, trả về số lượng phần tử sau khi thêm (return về number)
let count = users.push("vy 1", "vy 2", "vy 3");
console.log(count);
console.log(users);


console.log(`--------unshift()--------`);
// 11. unshift() thêm phần tử vào đầu mảng
let count2 = users.unshift("hello", "hello", "jello");
console.log(count2);
console.log(users);


console.log(`--------pop() - xóa phần tử cuối mảng--------`);
// 12. xóa phần tử cuối mảng, trả về giá trị phần tử vừa xóa
let value = users.pop();
console.log(value);
console.log(users);


console.log(`--------shift() - xóa phần tử đầu mảng--------`);
// 13. xóa phần tử đầu tiên, trả về giá trị phần tử vừa xóa
let value2 = users.shift();
console.log(value2);
console.log(users);

