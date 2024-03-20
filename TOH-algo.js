function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

let n = parseInt(prompt("Enter number of disks:"));
towerOfHanoi(n, 'A', 'C', 'B');

