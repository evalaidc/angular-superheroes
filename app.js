let superheroes = [
  {name: "Batman" , phone_number: "1234132467" , affiliation: "DC Comics", image_url: "http://cartoonbros.com/wp-content/uploads/2016/05/Batman-12.jpg" },
  {name: "Superman", phone_number: "1234161763", affiliation: "DC Comics", image_url: "https://s-media-cache-ak0.pinimg.com/736x/60/b5/ed/60b5edc198b4862dbb5d430ef3f9ea07.jpg"},
  {name: "Green Arrow", phone_number: "1234175089", affiliation: "DC Comics", image_url: "http://www.mezcotoyz.com/mas_assets/cache/image/a/0/a/2570.Jpg" },
  {name: "Wonder Woman", phone_number: "6754832099", affiliation: "DC Comics", image_url: "https://s-media-cache-ak0.pinimg.com/originals/a2/ea/0a/a2ea0afbdc4c1d218c7dfdda9b78ba90.jpg"},
  {name: "Captain America", phone_number: "6574839023", affiliation: "Marvel", image_url: "http://www.drodd.com/images13/captain-america11.png"},
  {name: "Wolverine", phone_number: "6902342933", affiliation: "Marvel", image_url: "http://bakarenders.com/renders/albums/userpics/10459/normal_wolverine_28429.png"},
  {name: "Iron Man", phone_number: "5674238903", affiliation: "Marvel", image_url: "https://www.sideshowtoy.com/wp-content/uploads/2016/04/captain-america-civil-war-iron-man-xlvi-sixth-scale-marvel-silo-902708.png"},
  {name: "Spider-Man", phone_number: "2389579833", affiliation: "Marvel", image_url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-pz2tjc_b6af2a3c.png?region=0%2C0%2C400%2C400" },
  {name: "Hawkeye", phone_number: "1298531023", affiliation: "Marvel", image_url: "http://www.pngmart.com/files/2/Hawkeye-Transparent-PNG.png" },

]

angular
    .module("superHotlineApp", [])
    .controller("hotlineCtrl", [ hotlineController ])

function hotlineController () {
    this.superheroes = superheroes
    this.addSuperhero = function(){
      let superhero = {name: this.newSuperheroName, phone_number: this.newSuperheroNumber, affiliation: this.newSuperheroAffil, image_url: this.newSuperheroPhoto}
      this.superheroes.push(superhero)
    }

}
