var customers = [
    "Nguyễn Văn Tiến Hải",
    "Nguyễn Minh Nhật Dương",
    "Phạm Tiến Manh",
    "Phan Văn Hải",
    "Phạm Xuân Yến",
    "Nguyễn An A"
];

// Xắp xếp danh sách khách hàng theo tứ tự dăng dần( theo tên ) 
// => lấy trữ đầu tiên thôi (hải, mạnh, dương)
/*
[
    "Nguyễn An A",
    "Nguyễn Minh Nhật Dương",
    "Phan Văn Hải",
    "Nguyễn Văn Tiến Hải",
    "Phạm Tiến Manh",
    "Phạm Xuân Yến"
]
*/

let sorting = customers.sort((a,b) => {
    return a.split(" ").pop().localeCompare(b.split(" ").pop());
})
console.log(sorting);
