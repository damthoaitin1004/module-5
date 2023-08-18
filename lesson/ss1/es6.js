let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];	
// Yêu cầu 1
let hight = courses.filter(courses => courses.rating >=4)
console.log(hight);
// Yêu cầu 2

let lowRating = courses.filter(courses => courses.rating < 4)

 let arr = lowRating.map(element => element.id +"-"+ element.title +"-"+ element.rating);


 //  Yêu cầu 3
let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
 
  function concatArray(courses,addedCourses) {
  let combineArray = [...courses,...addedCourses];
  return combineArray;
}
let combineArray = concatArray(courses,addedCourses)
console.log(combineArray);

  
