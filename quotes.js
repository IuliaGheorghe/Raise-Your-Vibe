
fetch("https://type.fit/api/quotes")
.then(function(response) {
  return response.json();
})
.then(function(data) {
    let randomQuote = Math.floor(Math.random() * data.length);
    document.querySelector("h1").innerText=data[randomQuote].text;
    document.querySelector("h3").innerText=data[randomQuote].author;

});
