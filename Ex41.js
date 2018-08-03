function main() {
    var grade = prompt("What is your grade?");
//Asks the user to enter a grade and then tests the case and prints if the case matches.
    switch (grade) {
        case 'A':
            document.write("Grade 100 -90");
            break;
        case 'B':
            document.write("Grade 90 - 80");
            break;
        case 'C':
            document.write("Grade 80 - 70");
            break;
        case 'D':
            document.write("Grade 70 - 60");
            break;
        case 'F':
            document.write("Grade 60 - 0");
            break;
        default:
            document.write("Not a grade");

    }
}

main();