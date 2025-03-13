const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
            label: "Values",
            data: [10, 20, 30, 40],
            backgroundColor: ["red", "blue", "green", "purple"]
        }]
    }
});
