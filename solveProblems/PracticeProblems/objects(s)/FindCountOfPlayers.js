const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null,
                },
            },
        },
    },
};

function accumulatePlayerCounts(data, counts = {}) {
    if (!data) {
        return counts;
    }
    for (let player of data.name) {
        counts[player] = (counts[player] || 0) + 1;
    }
    return accumulatePlayerCounts(data.next, counts)
}

const countPlayer = accumulatePlayerCounts(data);

console.log(countPlayer); // {P1: 2, P4: 3, P3: 3, P5: 2, P2: 2}
