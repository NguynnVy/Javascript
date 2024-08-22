
    let university = [
      {
        "id": "1",
        "name": "Metropolis University",
        "address": {
          "street": "123 College Ave",
          "city": "Metropolis",
          "zipcode": "54321"
        },
        "phone": "789-123-4567",
        "website": "metropolisuniversity.edu",
        "numberOfStudents": 20000,
        "ranking": 15
      },
      {
        "id": "2",
        "name": "Smallville University",
        "address": {
          "street": "456 University Street",
          "city": "Smallville",
          "zipcode": "98765"
        },
        "phone": "890-123-4567",
        "website": "smallvilleuniversity.edu",
        "numberOfStudents": 15000,
        "ranking": 30
      },
      {
        "id": "3",
        "name": "Lakeside College",
        "address": {
          "street": "789 Campus Blvd",
          "city": "Lakeside",
          "zipcode": "13579"
        },
        "phone": "901-234-5678",
        "website": "lakesidecollege.edu",
        "numberOfStudents": 10000,
        "ranking": 45
      },
      {
        "id": "4",
        "name": "Rivertown Institute of Technology",
        "address": {
          "street": "432 Tech Lane",
          "city": "Rivertown",
          "zipcode": "24680"
        },
        "phone": "012-345-6789",
        "website": "rivertowntech.edu",
        "numberOfStudents": 12000,
        "ranking": 25
      },
      {
        "id": "5",
        "name": "Westville University",
        "address": {
          "street": "567 Academic Way",
          "city": "Westville",
          "zipcode": "11223"
        },
        "phone": "123-456-7890",
        "website": "westvilleuniversity.edu",
        "numberOfStudents": 8000,
        "ranking": 50
      }
    ];

    let students = [
      {
        "id": "1",
        "name": "Alice Johnson",
        "age": 20,
        "email": "alice.johnson@university.com",
        "universityId": "1",
        "fullTime": true,
        "major": "Computer Science",
        "gpa": 3.8
      },
      {
        "id": "2",
        "name": "Bob Smith",
        "age": 22,
        "email": "bob.smith@university.com",
        "universityId": "2",
        "fullTime": false,
        "major": "Mechanical Engineering",
        "gpa": 3.5
      },
      {
        "id": "3",
        "name": "Charlie Brown",
        "age": 19,
        "email": "charlie.brown@university.com",
        "universityId": "3",
        "fullTime": true,
        "major": "Physics",
        "gpa": 3.7
      },
      {
        "id": "4",
        "name": "Daisy Miller",
        "age": 21,
        "email": "daisy.miller@university.com",
        "universityId": "4",
        "fullTime": false,
        "major": "Electrical Engineering",
        "gpa": 3.6
      },
      {
        "id": "5",
        "name": "Ethan Wilson",
        "age": 23,
        "email": "ethan.wilson@university.com",
        "universityId": "5",
        "fullTime": true,
        "major": "Chemistry",
        "gpa": 3.9
      },
      {
        "id": "6",
        "name": "Fiona White",
        "age": 20,
        "email": "fiona.white@university.com",
        "universityId": "1",
        "fullTime": false,
        "major": "Mathematics",
        "gpa": 3.4
      },
      {
        "id": "7",
        "name": "George Harris",
        "age": 22,
        "email": "george.harris@university.com",
        "universityId": "2",
        "fullTime": true,
        "major": "Biology",
        "gpa": 3.6
      },
      {
        "id": "8",
        "name": "Hannah Lee",
        "age": 19,
        "email": "hannah.lee@university.com",
        "universityId": "3",
        "fullTime": false,
        "major": "Environmental Science",
        "gpa": 3.7
      },
      {
        "id": "9",
        "name": "Isaac Young",
        "age": 21,
        "email": "isaac.young@university.com",
        "universityId": "4",
        "fullTime": true,
        "major": "History",
        "gpa": 3.5
      },
      {
        "id": "10",
        "name": "Jackie Chan",
        "age": 23,
        "email": "jackie.chan@university.com",
        "universityId": "5",
        "fullTime": true,
        "major": "Political Science",
        "gpa": 3.8
      }
    ];

// ?. (Option chaning) => if else => null => nó ko lỗi chống lại mọi error
// dựa theo bài tập về nhà buổi 1 , thay toàn bộ các trường học bằng tên 
// (bằng cách dùng hàm find) ....find(callback => return doituong)?.name


// let content = `

//     <table>
//         <thead>
//             <tr class="title">
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Email</th>
//                 <th>University</th>
//                 <th>Major</th>
//                 <th>GPA</th>
//                 <th>Full time</th>
//                 <th>Option</th>
//             </tr>
//         </thead>
        
//         <tbody>
//         ${students.map(function (info, index) {
//             let checktime = info.fullTime ? `fulltime` : `parttime`;
//             let school = university.find((uni) => uni.id == info.universityId)?.name || "Unknown";
//             return `<tr class="information">
//                 <td>${index + 1}</td>
//                 <td>${info.name}</td>
//                 <td>${info.age}</td>
//                 <td>${info.email}</td>
//                 <td>${school}</td>
//                 <td>${info.major}</td>
//                 <td>${info.gpa}</td>
//                 <td class="${checktime}">${info.fullTime ? `Full time` : `Part time`}</td>
//                 <td class="button">
//                     <button type="button" class="detail">Detail</button>
//                     <button type="button" class="update">Update</button>
//                     <button type="button" class="delete">Delete</button>
//                 </td>
//             </tr>`;
//           }).join(``)
//         }
//         </tbody>
//     </table>
//     `;
// document.write(content);

// viết lại hàm reduce
let content = `

    <table>
        <thead>
            <tr class="title">
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>University</th>
                <th>Major</th>
                <th>GPA</th>
                <th>Full time</th>
                <th>Option</th>
            </tr>
        </thead>
        
        <tbody>
        ${students.reduce((result ,student, index) => {
            let checktime = student.fullTime ? `fulltime` : `parttime`;
            let school = university.find((uni) => uni.id == student.universityId)?.name || "Unknown";
            let info = `<tr class="information">
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.email}</td>
                <td>${school}</td>
                <td>${student.major}</td>
                <td>${student.gpa}</td>
                <td class="${checktime}">${student.fullTime ? `Full time` : `Part time`}</td>
                <td class="button">
                    <button type="button" class="detail">Detail</button>
                    <button type="button" class="update">Update</button>
                    <button type="button" class="delete">Delete</button>
                </td>
            </tr>`;
            return result + info;
          }, [])}
        </tbody>
    </table>
    `;
document.write(content);

