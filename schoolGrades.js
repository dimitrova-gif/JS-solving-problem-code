function processGrades(input) {
    let studentMap = new Map();

    for (let line of input) {
        let parts = line.split(' ');
        let name = parts[0];
        let grades = parts.slice(1).map(Number);

        if (studentMap.has(name)) {
            studentMap.set(name, studentMap.get(name).concat(grades));
        } else {
            studentMap.set(name, grades);
        }
    }

    // Convert the Map to an array and sort it by student name
    let sortedStudents = Array.from(studentMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    // Print the name and average grade
    for (let [name, grades] of sortedStudents) {
        let average = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

processGrades(['Lilly 4 6 6 5',
'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])