/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns
their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let studentResult = 97;

if ((studentResult > 90) && (studentResult <= 100)){
    console.log("A");
}else if ((studentResult > 80) && (studentResult <= 89)){
    console.log("B");
}else if ((studentResult > 70) && (studentResult <= 79)){
    console.log("C");
}else if ((studentResult > 60) && (studentResult <= 69)){
    console.log("D");
}else if ((studentResult > 0) && (studentResult <= 59)){
    console.log("F");
}else {
    console.log("Absent");
}




