function main() {
    var number = parseInt(prompt("Please enter a number 1-5"));
// The code tests the number variable and prints the right case if it matches the variable.
    switch (number) {
        case 1:
            document.write(1);
            break;
        case 2:
            document.write(2);
            break;
        case 3:
            document.write(3);
            break;
        case 4:
            document.write(4);
            break;
        case 5:
            document.write(5);
            break;
        default:
            document.write("What are you doing?");
            break;
    }
}
main();