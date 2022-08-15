let total = 0;
for (let i = 0; i < 10; i++) {
    console.log("No." + (i + 1) + ":");
    console.log(fibonacci(i));
    total += fibonacci(i);
}
console.log("Total:" + total)

function fibonacci(number: number): number {
    if (number == 0) return 0;
    if (number <= 2) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2)
}
