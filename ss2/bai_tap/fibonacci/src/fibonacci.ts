let total = 0;
for (let i = 0; i < 10; i++) {
    console.log("No." + (i + 1) + ":");
    console.log(fibonacci(i));
    total += fibonacci(i);
}
console.log("Total:" + total)

function fibonacci(n: number): number {
    if (n == 0 || n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
