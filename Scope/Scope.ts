'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];  // Explicitly typed as an array of strings
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.trim().split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main(): void {
    const n: number = parseInt(readLine().trim(), 10);
    const arr: number[] = readLine().trim().split(' ').map(Number);  // Explicitly typed as an array of numbers

    const result: number = computeMaximumDifference(arr);
    console.log(result);
}

function computeMaximumDifference(elements: number[]): number {  // Explicit type declaration for elements
    let maxElement: number = Math.max(...elements);
    let minElement: number = Math.min(...elements);
    return maxElement - minElement;
}
