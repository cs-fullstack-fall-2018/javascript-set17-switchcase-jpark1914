function main()
{
    var number = parseInt(prompt("Please enter a 3 digit binary number"));
    // The code tests the number variable and prints the right case if it matches the variable.

    switch (number) {
        case 1:
            document.write(1);
            break;
        case 10:
            document.write(2);
            break;
        case 11:
            document.write(3);
            break;
        case 100:
            document.write(4);
            break;
        case 101:
            document.write(5);
            break;
        default:
            document.write("Not a binary number");
            break;
    }
}
main();