$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    const color = $("input#color").val(); 
    const food = $("input#food").val();
    const hobby = $("input#hobby").val();
    const city = $("input#city").val();

    let favorites = [color, food, hobby, city];
    console.log(favorites);
    console.log(favorites[0]);
    console.log(favorites[1]);
    console.log(favorites[2]);
    console.log(favorites[3]);
    let newFavorites = [];
    newFavorites.push(favorites[1], favorites[2], favorites[3]);
    console.log(newFavorites);

  $('#newFavorites').append('<li>' + newFavorites[0] + '</li>');
  $('#newFavorites').append('<li>' + newFavorites[1] + '</li>');
  $('#newFavorites').append('<li>' + newFavorites[2] + '</li>');
    console.log(newFavorites);
  });
});