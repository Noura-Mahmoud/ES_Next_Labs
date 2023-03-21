function generateCourseInfo(obj){
    for(item in obj){
        if( item != "courseName" && item != "courseDuration" && item != "courseOwner")
        {
            throw "Not valid properties";
        }
    }
    var defaultCourse = {courseName:"ES6" ,courseDuration:"3days", courseOwner:"JavaScript"}
    var Cousre = Object.assign({}, defaultCourse, obj)
    console.log(`courseName = ${Cousre.courseName} ,courseDuration = ${Cousre.courseDuration} , courseOwner = ${Cousre.courseOwner}`)
}