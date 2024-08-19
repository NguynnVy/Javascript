let arrContent = [
  {
    name: "Alice Johnson",
    age: "20",
    mail: "alice.johnson@university.com",
    university: "Metropolis University",
    major: "Computer Science",
    gpa: "3.8",
    fulltime: "Full time",
  },
  {
    name: "Bob Smith",
    age: "22",
    mail: "bob.smith@university.com",
    university: "Smallville University",
    major: "Mechanical Engineering",
    gpa: "3.5",
    fulltime: "Part time",
  },
  {
    name: "Charlie Brown",
    age: "19",
    mail: "charlie.brown@university.com",
    university: "Lakeside College",
    major: "Physics",
    gpa: "3.7",
    fulltime: "Full time",
  },
  {
    name: "Daisy Miller",
    age: "21",
    mail: "daisy.miller@university.com",
    university: "Rivertown Institude of Technology",
    major: "Electrical Engineering",
    gpa: "3.6",
    fulltime: "Part time",
  },
  {
    name: "Ethan Wilson",
    age: "23",
    mail: "ethan.wilson@university.com",
    university: "Westville University",
    major: "Chemistry",
    gpa: "3.9",
    fulltime: "Full time",
  },
  {
    name: "Fiona White",
    age: "20",
    mail: "fiona.white@university.com",
    university: "Metropolish University",
    major: "Mathematics",
    gpa: "3.4",
    fulltime: "Part time",
  },
  {
    name: "George Harris",
    age: "22",
    mail: "george.harris@university.com",
    university: "Smallville University",
    major: "Biology",
    gpa: "3.6",
    fulltime: "Full time",
  },
  {
    name: "Hannah Lee",
    age: "19",
    mail: "hannah.lee@university.com",
    university: "Lakeside College",
    major: "Environmental Science",
    gpa: "3.7",
    fulltime: "Part time",
  },
  {
    name: "Isaac Young",
    age: "21",
    mail: "isaac.young@university.com",
    university: "Rivertown Institude of Technology",
    major: "History",
    gpa: "3.5",
    fulltime: "Full time",
  },
  {
    name: "Jackie Chan",
    age: "23",
    mail: "jackie.chan@university.com",
    university: "Westville University",
    major: "Political Science",
    gpa: "3.8",
    fulltime: "Full time",
  },
];

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
        ${arrContent.map(function (info, index) {
          let checktime = info.fulltime == "Full time" ? `fulltime` : `parttime`;
            return `<tr class="information">
                <td>${index + 1}</td>
                <td>${info.name}</td>
                <td>${info.age}</td>
                <td>${info.mail}</td>
                <td>${info.university}</td>
                <td>${info.major}</td>
                <td>${info.gpa}</td>
                <td class="${checktime}">${info.fulltime}</td>
                <td class="button">
                    <button type="button" class="detail">Detail</button>
                    <button type="button" class="update">Update</button>
                    <button type="button" class="delete">Delete</button>
                </td>
            </tr>`;
          }).join(``)
        }
        </tbody>
    </table>
    `;
document.write(content);
