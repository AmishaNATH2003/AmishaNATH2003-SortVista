
const n = 20;
const array = [];

// Initialize the array
init();

// Function to initialize array
function init() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showlines();
}

// Play function to start sorting animation
function play() {
    const copy = [...array];
    const swaps = bubbleSort(copy);
    animate(swaps);
}

// Animate function to visualize sorting process
function animate(swaps) {
    if (swaps.length == 0) {
        return;
    }
    showlines();
    const [i, j] = swaps.shift();
    [array[i], array[j]] = [array[j], array[i]];
    showlines([i, j]);
    setTimeout(function () {
        animate(swaps);
    }, 200); // Adjust the delay here
}
    


// Sorting: bubble sort
function bubbleSort(array) {
    const swaps = [];
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                swapped = true;
                swaps.push([i - 1, i]);
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
    } while (swapped);
    return swaps;
}

// Showlines function to display bars representing array elements
function showlines(indices) {
    const container = document.getElementById("container");
    container.innerHTML ="";
    for (let i = 0; i < array.length; i++) {
        const line = document.createElement("div");
        line.style.height = array[i] * 100 + "%";
        line.style.width = "10px";
        line.style.backgroundColor = "purple";
        line.style.margin = "1px";
        if (indices && indices.includes(i)) {
            line.style.backgroundColor = "pink";
        }
        container.appendChild(line);
    }
}
