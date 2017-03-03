let superheroes = [
  {name: "Batman" , phone_number: "1234132467" , affiliation: "DC Comics", image_url: },
  {name: "Superman", phone_number: "1234161763", affiliation: "DC Comics", image_url: },
  {name: "Green Arrow", phone_number: "1234175089", affiliation: "DC Comics", image_url: },
  {name: "Wonder Woman", phone_number: "6754832099", affiliation: "DC Comics", image_url: },
  {name: "Captain America", phone_number: "6574839023", affiliation: "Marvel", image_url: },
  {name: "Wolverine", phone_number: "6902342933", affiliation: "Marvel", image_url: },
  {name: "Iron Man", phone_number: "5674238903", affiliation: "Marvel", image_url: },
  {name: "Spider-Man", phone_number: "2389579833", affiliation: "Marvel", image_url: },
  {name: "Hawkeye", phone_number: "1298531023", affiliation: "Marvel", image_url: },

]

angular
    .module("superHotlineApp", [])
    .controller("hotlineCtrl", [ hotlineController ])

function hotlineController () {
    this.superheroes = superheroes


}
