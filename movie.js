var moviePromise = d3.json("https://ghibliapi.herokuapp.com/films");

var setBanner = function(message)
{
    d3.select(".banner").text(message);
}

var printTitles = function(movieData)
{
    d3.select(".titles")
    .append("ul")
    .selectAll("li")
    .data(movieData)
    .enter()
    .append("li")
    .text(function(d) { return d.title })
    .on("click", function(d) { printData(d) });
}

var printData = function(movie)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(movie.title);
    d3.select(".infoList").append("li").text(movie.description);
}

moviePromise.then(
function(movieData)
{
    setBanner("Movies");
    printTitles(movieData);
    console.log("movieData", movieData);
},
function(err)
{
    setBanner("Loading Failed");
    console.log(err);
});