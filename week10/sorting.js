// sorting.js
const hikes = [
    {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description:
        "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
    },
    {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
    },
    {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
    },
    {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Easy"],
    description:
        "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
        "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
    },
    {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description:
        "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
        "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
    }
];
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

function compareFn(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

const anotherSort = simpleList.sort(compareFn);

function sortArray() {
  const sortedList = [...simpleList].sort(); // ascending
    const container = document.getElementById("arrayContainer");
    container.innerHTML = `<ul>${sortedList.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function searchSimpleList(list, query) {
    return list.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

/* removed duplicate hikes declaration */

function searchHikes(list, q) {
    const filtered = list.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase()) ||
    item.description.toLowerCase().includes(q.toLowerCase()) ||
    item.tags.find(tag => tag.toLowerCase().includes(q.toLowerCase()))
    );

    const sorted = filtered.sort(
        (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
    );

    return sorted;
}

console.log(searchSimpleList(simpleList, "b"));
console.log(searchSimpleList(simpleList, "an"));
console.log(searchHikes(hikes, "yellowstone"));
console.log(searchHikes(hikes, "moderate"));
console.log(searchHikes(hikes, "al"));


function handleHikeSearch() {
    const query = document.getElementById("hikeSearchInput").value;
    const results = searchHikes(hikes, query);

    const container = document.getElementById("hikeResults");
    if (results.length === 0) {
    container.innerHTML = "<p>No hikes found.</p>";
    return;
    }

    container.innerHTML = results.map(hike => `
    <div class="hike-card">
        <h3>${hike.name}</h3>
        <img src="${hike.imgSrc}" alt="${hike.imgAlt}" width="200">
        <p><strong>Distance:</strong> ${hike.distance}</p>
        <p><strong>Description:</strong> ${hike.description}</p>
        <p><strong>Tags:</strong> ${hike.tags.join(", ")}</p>
    </div>
    `).join("");
}