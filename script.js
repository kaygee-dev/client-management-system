const clients = [
    clientOne = {
        Name: "Joe",
        Surname: "Dlamini",
        Service: "Photography",
        Hours: 4,
        travelRequired: true,
    },

    clientTwo = {
        Name: "Mpho",
        Surname: "Nkosi",
        Service: "Videography",
        Hours: 2,
        travelRequired: false,
    },

    clientThree = {
        Name: "Ofentse",
        Surname: "Molefe",
        Service: "Both",
        Hours: 6,
        travelRequired: true,
    },

    clientFour = {
        Name: "Musa",
        Surname: "Khumalo",
        Service: "Photography",
        Hours: 3,
        travelRequired: false,
    },

    clientFive = {
        Name: "Kaybee",
        Surname: "Mokoena",
        Service: "Both",
        Hours: 5,
        travelRequired: true,
    },

    clientSix = {
        Name: "Neo",
        Surname: "Maseko",
        Service: "Videography",
        Hours: 8,
        travelRequired: false,
    },

    clientSeven = {
        Name: "Lerato",
        Surname: "Mthembu",
        Service: "Photography",
        Hours: 7,
        travelRequired: true,
    },

    clientEight = {
        Name: "Kabelo",
        Surname: "Sithole",
        Service: "Both",
        Hours: 4,
        travelRequired: false,
    },
];

const generateSubtotal = function (Service, Hours) {
    let rate;
    if (Service == "Photography") {
        rate = 500;
    } else if (Service == "Videography") {
        rate = 800;
    } else if (Service == "Both") {
        rate = 1200;
    }
    const subtotal = rate * Hours;
    return subtotal;
}

//onsole.log(`Subtotal: ${generateSubtotal(clients[0].Service, clients[0].Hours)}`);

const determineTravelFee = function (travelRequired) {
    let travelFee;
    if (travelRequired === true) {
        travelFee = 250;
    } else {
        travelFee = 0;
    }
    return travelFee;
}

//console.log(`Travel fee: ${determineTravelFee(clients[0].travelRequired)}`);

const determineDiscount = function (subtotal) {
    let discount;
    if (subtotal >= 3000) {
        discount = subtotal * 0.10;
    } else {
        discount = 0;
    }
    return discount;
}

//console.log(`Discount: ${determineDiscount(generateSubtotal(clients[0].Service, clients[0].Hours))}`);

const determineFinalTotal = function (subtotal, travelFee, discount) {
    const finalTotal = subtotal + travelFee - discount;
    return finalTotal;
}

//console.log(`Final Total: ${determineFinalTotal(generateSubtotal(clients[0].Service, clients[0].Hours), determineTravelFee(clients[0].travelRequired), determineDiscount(generateSubtotal(clients[0].Service, clients[0].Hours)))}`)

const generateQuotes = function (Name, Surname, Service, Hours, subtotal, travel, discount, finalTotal) {
    for (let i = 0; i <= clients.length - 1; i++) {
        console.log("========== R4MZ MEDIA ==========");
        console.log("============= QUOTE ============");
        console.log(`Client: ${clients[i].Name} ${clients[i].Surname}`);
        console.log(`Service: ${clients[i].Service}`);
        console.log(`Hours: ${clients[i].Hours}`);
        console.log(`Subtotal: ${generateSubtotal(clients[i].Service, clients[i].Hours)}`);
        console.log(`Travel: ${determineTravelFee(clients[i].travelRequired)}`);
        console.log(`Discount: ${determineDiscount(generateSubtotal(clients[i].Service, clients[i].Hours))}`);
        console.log(`Final Total: ${determineFinalTotal(generateSubtotal(clients[i].Service, clients[i].Hours), determineTravelFee(clients[i].travelRequired), determineDiscount(generateSubtotal(clients[i].Service, clients[i].Hours)))}`);
        console.log("======================");
    }
}

let photographyCounter = 0;
let videographyCounter = 0;
let bothCounter = 0;

const serviceCounter = function () {
    for (let i = 0; i <= clients.length - 1; i++) {
        if (clients[i].Service === "Photography") {
            photographyCounter = photographyCounter + 1
        } else if (clients[i].Service === "Videography") {
            videographyCounter = videographyCounter + 1
        } else if (clients[i].Service === "Both") {
            bothCounter = bothCounter + 1
        }
    }
}

serviceCounter();

let total = 0;
const revenueCounter = function () {
    for (let i = 0; i <= clients.length - 1; i++) {
        total = total + generateSubtotal(clients[i].Service, clients[i].Hours)
    }
    return total;
}

let highest = 0;

const determineHighestQuote = function () {
    for (let i = 0; i <= clients.length - 1; i++) {
        const subtotal = generateSubtotal(clients[i].Service, clients[i].Hours);
        const travel = determineTravelFee(clients[i].travelRequired);
        const discount = determineDiscount(subtotal);
        const finalTotal = determineFinalTotal(subtotal, travel, discount);
        if (finalTotal > highest) {
            highest = finalTotal;
        }
    }
    return highest;
};

let lowest = Infinity;

const determineLowestQuote = function () {
    for (let i = 0; i <= clients.length - 1; i++) {
        const subtotal = generateSubtotal(clients[i].Service, clients[i].Hours);
        const travel = determineTravelFee(clients[i].travelRequired);
        const discount = determineDiscount(subtotal);
        const finalTotal = determineFinalTotal(subtotal, travel, discount);
        if (finalTotal < lowest) {
            lowest = finalTotal;
        }
    }
    return lowest;
};

const determineAverageQuote = function () {
    const totalTwo = revenueCounter();
    const average = totalTwo / clients.length;
    return average;
}

const businessReport = function () {
    console.log("======================");
    console.log("Daily Business Report");
    console.log("======================");
    console.log(`Total Clients: ${clients.length}`);
    console.log(`Photography Bookings: ${photographyCounter}`);
    console.log(`Videography Bookings: ${videographyCounter}`);
    console.log(`Both Bookings: ${bothCounter}`);
    console.log(`Revenue: ${revenueCounter()}`);
    console.log(`Highest Quote: ${determineHighestQuote()}`);
    console.log(`Lowest Quote: ${determineLowestQuote()}`);
    console.log(`Average Quote: ${determineAverageQuote()}`);
};

businessReport();

// console.log(`${generateQuotes(clients[0].Name,
//     clients[0].Surname,
//     clients[0].Service,
//     clients[0].Hours,
//     generateSubtotal(clients[0].Service, clients[0].Hours),
//     determineTravelFee(clients[0].travelRequired),
//     determineDiscount(generateSubtotal(clients[0].Service, clients[0].Hours)),
//     determineFinalTotal(generateSubtotal(clients[0].Service, clients[0].Hours), determineTravelFee(clients[0].travelRequired), determineDiscount(generateSubtotal(clients[0].Service, clients[0].Hours)))
// )}`)

