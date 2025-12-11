let resultDiv = document.getElementById("result");

//  Search API simulation
function searchAPI(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Results for "${query}"`);
    }, 600);
  });
}

//  Debouncing 
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttling 
function throttle(func, interval) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// Actual search request (common function)
async function handleSearch(e) {
  let query = e.target.value;
  if (!query.trim()) {
    resultDiv.innerText = "";
    return;
  }
  let data = await searchAPI(query);
  resultDiv.innerText = data;
}


let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", debounce(handleSearch, 600));


searchInput.addEventListener("input", throttle(handleSearch, 1000));
