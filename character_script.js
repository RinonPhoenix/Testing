characters = ["albedo", "aloy","amber","arataki_itto","barbara","beidou","bennett","candace","chongyun","collei","cyno","diluc","diona","dori","eula","faruzan","fischl","ganyu","gorou","hu_tao","jean","kaedehara_kazuha","kaeya","kamisato_ayaka","kamisato_ayato","keqing","klee","kujou_sara","kuki_shinobu","layla","lisa","mona","nahida","nilou","ningguang","noelle","qiqi","raiden_shogun","razor","rosaria","sangonomiya_kokomi","sayu","shenhe","shikanoin_heizou","sucrose","tartaglia","thoma","tighnari","traveler_anemo","traveler_dendro","traveler_electro","traveler_geo","venti","wanderer","xiangling","xiao","xingqiu","xinyan","yae_miko","yanfei","yelan","yoimiya","yun_jin","zhongli"];

var dict = [
  {name: "albedo", fancy_name:"Albedo", element:"geo",star_count: 5},
  {name: "aloy", fancy_name:"Aloy", element:"cryo",star_count: 5},
  {name: "amber", fancy_name:"Amber", element:"pyro",star_count: 4},
  {name: "arataki_itto", fancy_name:"Arataki Itto", element:"geo",star_count: 5},
  {name: "barbara", fancy_name:"Barbara", element:"hydro",star_count: 4},
  {name: "beidou", fancy_name:"Beidou", element:"electro",star_count: 4},
  {name: "bennett", fancy_name:"Bennett", element:"pyro",star_count: 4},
  {name: "candace", fancy_name:"Candace", element:"hydro",star_count: 4},
  {name: "chongyun", fancy_name:"Chongyun", element:"cryo",star_count: 4},
  {name: "collei", fancy_name:"Collei", element:"dendro",star_count: 4},
  {name: "cyno", fancy_name:"Cyno", element:"electro",star_count: 5},
  {name: "diluc", fancy_name:"Diluc", element:"pyro",star_count: 5},
  {name: "diona", fancy_name:"Diona", element:"cryo",star_count: 4},
  {name: "dori", fancy_name:"Dori", element:"electro",star_count: 4},
  {name: "eula", fancy_name:"Eula", element:"cryo",star_count: 5},
  {name: "faruzan", fancy_name:"Faruzan", element:"anemo",star_count: 4},
  {name: "fischl", fancy_name:"Fischl", element:"electro",star_count: 4},
  {name: "ganyu", fancy_name:"Ganyu", element:"cryo",star_count: 5},
  {name: "gorou", fancy_name:"Gorou", element:"geo",star_count: 4},
  {name: "hu_tao", fancy_name:"Hu Tao", element:"pyro",star_count: 5},
  {name: "jean", fancy_name:"Jean", element:"anemo",star_count: 5},
  {name: "kaedehara_kazuha", fancy_name:"Kaedehara Kazuha", element:"anemo",star_count: 5},
  {name: "kaeya", fancy_name:"Kaeya", element:"cryo",star_count: 4},
  {name: "kamisato_ayaka", fancy_name:"Kamisato Ayaka", element:"cryo",star_count: 5},
  {name: "kamisato_ayato", fancy_name:"Kamisato Ayato", element:"hydro",star_count: 5},
  {name: "keqing", fancy_name:"Keqing", element:"electro",star_count: 5},
  {name: "klee", fancy_name:"Klee", element:"pyro",star_count: 5},
  {name: "kujou_sara", fancy_name:"Kujou Sara", element:"electro",star_count: 4},
  {name: "kuki_shinobu", fancy_name:"Kuki Shinobu", element:"electro",star_count: 4},
  {name: "layla", fancy_name:"Layla", element:"cryo",star_count: 4},
  {name: "lisa", fancy_name:"Lisa", element:"electro",star_count: 4},
  {name: "mona", fancy_name:"Mona", element:"hydro",star_count: 5},
  {name: "nahida", fancy_name:"Nahida", element:"dendro",star_count: 5},
  {name: "nilou", fancy_name:"Nilou", element:"hydro",star_count: 5},
  {name: "ningguang", fancy_name:"Ningguang", element:"geo",star_count: 4},
  {name: "noelle", fancy_name:"Noelle", element:"geo",star_count: 4},
  {name: "qiqi", fancy_name:"Qiqi", element:"cryo",star_count: 5},
  {name: "raiden_shogun", fancy_name:"Raiden Shogun", element:"electro",star_count: 5},
  {name: "razor", fancy_name:"Razor", element:"electro",star_count: 4},
  {name: "rosaria", fancy_name:"Rosaria", element:"cryo",star_count: 4},
  {name: "sangonomiya_kokomi", fancy_name:"Sangonomiya Kokomi", element:"hydro",star_count: 5},
  {name: "sayu", fancy_name:"Sayu", element:"anemo",star_count: 4},
  {name: "shenhe", fancy_name:"Shenhe", element:"cryo",star_count: 5},
  {name: "shikanoin_heizou", fancy_name:"Shikanoin Heizou", element:"anemo",star_count: 4},
  {name: "sucrose", fancy_name:"Sucrose", element:"anemo",star_count: 4},
  {name: "tartaglia", fancy_name:"Tartaglia", element:"hydro",star_count: 5},
  {name: "thoma", fancy_name:"Thoma", element:"pyro",star_count: 4},
  {name: "tighnari", fancy_name:"Tighnari", element:"dendro",star_count: 5},
  {name: "traveler_anemo", fancy_name:"Anemo Traveler", element:"anemo",star_count: 5},
  {name: "traveler_dendro", fancy_name:"Dendro Traveler", element:"dendro",star_count: 5},
  {name: "traveler_electro", fancy_name:"Electro Traveler", element:"electro",star_count: 5},
  {name: "traveler_geo", fancy_name:"Geo Traveler", element:"geo",star_count: 5},
  {name: "venti", fancy_name:"Venti", element:"anemo",star_count: 5},
  {name: "wanderer", fancy_name:"Wanderer", element:"anemo",star_count: 5},
  {name: "xiangling", fancy_name:"Xiangling", element:"pyro",star_count: 4},
  {name: "xiao", fancy_name:"Xiao", element:"anemo",star_count: 5},
  {name: "xingqiu", fancy_name:"Xingqiu", element:"hydro",star_count: 4},
  {name: "xinyan", fancy_name:"Xinyan", element:"pyro",star_count: 4},
  {name: "yae_miko", fancy_name:"Yae Miko", element:"electro",star_count: 5},
  {name: "yanfei", fancy_name:"Yanfei", element:"pyro",star_count: 4},
  {name: "yelan", fancy_name:"Yelan", element:"hydro",star_count: 5},
  {name: "yoimiya", fancy_name:"Yoimiya", element:"pyro",star_count: 5},
  {name: "yun_jin", fancy_name:"Yun Jin", element:"geo",star_count: 4},
  {name: "zhongli", fancy_name:"Zhongli", element:"geo",star_count: 5}
];

let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let data = params.get("data");
let selected_element = JSON.parse(atob(data));

var stars = document.getElementById("stars-count");
var star_svg = '<svg viewBox="0 0 24 24" style=" width:1.5rem; height:1.5rem; fill:#ffb43c;" class=" svelte-1mzwbk9"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>';



window.onload = function refresh() {
  //#region
  var hp1 = document.getElementById("hp1");
  var hp2 = document.getElementById("hp2");
  var hp3 = document.getElementById("hp3");
  var hp4 = document.getElementById("hp4");
  var hp5 = document.getElementById("hp5");
  var hp6 = document.getElementById("hp6");
  var hp7 = document.getElementById("hp7");
  var hp8 = document.getElementById("hp8");
  var hp9 = document.getElementById("hp9");
  var hp10 = document.getElementById("hp10");
  var hp11 = document.getElementById("hp11");
  var hp12 = document.getElementById("hp12");
  var hp13 = document.getElementById("hp13");
  var hp14 = document.getElementById("hp14");

  var atk1 = document.getElementById("atk1");
  var atk2 = document.getElementById("atk2");
  var atk3 = document.getElementById("atk3");
  var atk4 = document.getElementById("atk4");
  var atk5 = document.getElementById("atk5");
  var atk6 = document.getElementById("atk6");
  var atk7 = document.getElementById("atk7");
  var atk8 = document.getElementById("atk8");
  var atk9 = document.getElementById("atk9");
  var atk10 = document.getElementById("atk10");
  var atk11 = document.getElementById("atk11");
  var atk12 = document.getElementById("atk12");
  var atk13 = document.getElementById("atk13");
  var atk14 = document.getElementById("atk14");

  var def1 = document.getElementById("def1");
  var def2 = document.getElementById("def2");
  var def3 = document.getElementById("def3");
  var def4 = document.getElementById("def4");
  var def5 = document.getElementById("def5");
  var def6 = document.getElementById("def6");
  var def7 = document.getElementById("def7");
  var def8 = document.getElementById("def8");
  var def9 = document.getElementById("def9");
  var def10 = document.getElementById("def10");
  var def11 = document.getElementById("def11");
  var def12 = document.getElementById("def12");
  var def13 = document.getElementById("def13");
  var def14 = document.getElementById("def14");

  var critrate1 = document.getElementById("critrate1");
  var critrate2 = document.getElementById("critrate2");
  var critrate3 = document.getElementById("critrate3");
  var critrate4 = document.getElementById("critrate4");
  var critrate5 = document.getElementById("critrate5");
  var critrate6 = document.getElementById("critrate6");
  var critrate7 = document.getElementById("critrate7");

  var critdmg1 = document.getElementById("critdmg1");
  var critdmg2 = document.getElementById("critdmg2");
  var critdmg3 = document.getElementById("critdmg3");
  var critdmg4 = document.getElementById("critdmg4");
  var critdmg5 = document.getElementById("critdmg5");
  var critdmg6 = document.getElementById("critdmg6");
  var critdmg7 = document.getElementById("critdmg7");

  var materials1 = document.getElementById("materials1");
  var materials2 = document.getElementById("materials2");
  var materials3 = document.getElementById("materials3");
  var materials4 = document.getElementById("materials4");
  var materials5 = document.getElementById("materials5");
  var materials6 = document.getElementById("materials6");
  var materials7 = document.getElementById("materials7");
  //#endregion



  var character_name = document.getElementById("character_name");
  var character_description = document.getElementById("description");
  var character_element = document.getElementById("character_element");
  var character_weapon = document.getElementById("character_weapon");
  var portrait = document.getElementById("portrait");








  //changeName("Beidou");
  //changeStars(stars, star_svg, 4);
  //portrait.src = "images/characters/beidou"
  //changeHP([1, 2]);
  for (let i = 0; i < characters.length; i++) {
    if (selected_element === "all") {
      changeData(i);
      break;
      
    }
    else if (dict[i].element === selected_element) {
      changeData(i);
      break;
    }
  }
}

// string ->
function changeName(new_name){
  character_name.innerHTML = new_name;
}

// path ->
function changePortrait(new_portrait){
  portrait.src = new_portrait;
}

// string ->
function changeDescription(new_description){
  character_description.innerHTML = new_description;
}

// path ->
function changeElement(new_element){
  character_element.src = new_element;
}

// string ->
function changeWeapon(new_weapon){
  character_weapon = new_weapon;
}

// static + count ->
function changeStars(stars, star_svg, count) {
  var repeatedSvg = "";
  for (var i = 0; i < count; i++) {
    repeatedSvg += star_svg;
  }
  stars.innerHTML = repeatedSvg;
}


//#region 
// list ->
function changeHP(list) {
  hp1.innerHTML = list[0];
  hp2.innerHTML = list[1];
  hp3.innerHTML = list[2];
  hp4.innerHTML = list[3];
  hp5.innerHTML = list[4];
  hp6.innerHTML = list[5];
  hp7.innerHTML = list[6];
  hp8.innerHTML = list[7];
  hp9.innerHTML = list[8];
  hp10.innerHTML = list[9];
  hp11.innerHTML = list[10];
  hp12.innerHTML = list[11];
  hp13.innerHTML = list[12];
  hp14.innerHTML = list[13];
}

// list ->
function changeATK(list) {
  atk1.innerHTML = list[0];
  atk2.innerHTML = list[1];
  atk3.innerHTML = list[2];
  atk4.innerHTML = list[3];
  atk5.innerHTML = list[4];
  atk6.innerHTML = list[5];
  atk7.innerHTML = list[6];
  atk8.innerHTML = list[7];
  atk9.innerHTML = list[8];
  atk10.innerHTML = list[9];
  atk11.innerHTML = list[10];
  atk12.innerHTML = list[11];
  atk13.innerHTML = list[12];
  atk14.innerHTML = list[13];
}

// list ->
function changeDEF(list) {
  def1.innerHTML = list[0];
  def2.innerHTML = list[1];
  def3.innerHTML = list[2];
  def4.innerHTML = list[3];
  def5.innerHTML = list[4];
  def6.innerHTML = list[5];
  def7.innerHTML = list[6];
  def8.innerHTML = list[7];
  def9.innerHTML = list[8];
  def10.innerHTML = list[9];
  def11.innerHTML = list[10];
  def12.innerHTML = list[11];
  def13.innerHTML = list[12];
  def14.innerHTML = list[13];
}

// list ->
function changeCritRate(list) {
  critrate1.innerHTML = list[0];
  critrate2.innerHTML = list[1];
  critrate3.innerHTML = list[2];
  critrate4.innerHTML = list[3];
  critrate5.innerHTML = list[4];
  critrate6.innerHTML = list[5];
  critrate7.innerHTML = list[6];
}

// list ->
function changeCritDMG(list) {
  critdmg1.innerHTML = list[0];
  critdmg2.innerHTML = list[1];
  critdmg3.innerHTML = list[2];
  critdmg4.innerHTML = list[3];
  critdmg5.innerHTML = list[4];
  critdmg6.innerHTML = list[5];
  critdmg7.innerHTML = list[6];
}
// list of src's ->
function changeMaterials(list) {
  ascension_gem1.innerHTML = list[0];
  ascension_gem2.innerHTML = list[1];
  ascension_gem3.innerHTML = list[2];
  ascension_gem4.innerHTML = list[3];
  ascension_resource.innerHTML = list[4];
  ascension_mobdrop1.innerHTML = list[5];
  ascension_mobdrop2.innerHTML = list[6];
  ascension_mobdrop3.innerHTML = list[7];
  ascension_epicdrop.innerHTML = list[8];
}
//#endregion




function previousChar(){
  var index = getIndexOfSelected()
  for (let i = (index-1); i > -1; i--) {
    if (selected_element === "all") {
      changeData(i);
      break;
    }
    else if (dict[i].element === selected_element) {
      changeData(i);
      break;
    }
  }
}

function nextChar(){
  var index = getIndexOfSelected()
  for (let i = index+1; i < characters.length; i++) {
    if (selected_element === "all") {
      changeData(i);
      break;
      
    }
    else if (dict[i].element === selected_element) {
      changeData(i);
      break;
    }
  }
}

function changeData(index){
  changePortrait("/images/characters/" + dict[index].name);
  changeElement("/images/Element_" + dict[index].element.charAt(0).toUpperCase() + dict[index].element.slice(1));
  changeName(dict[index].fancy_name);
  changeStars(stars,star_svg, dict[index].star_count);
}

function getIndexOfSelected(){
  var names = dict.filter(function(item){
    return item.fancy_name === character_name.innerHTML;
  }).map(function(item) {
    return item.name;
  });
  return characters.indexOf(names[0]);
}


function openMenu(){
  var menu = document.getElementById("menu");
  menu.addEventListener("mouseleave", function(){
    this.style.opacity = 0;
  });
  menu.style.opacity = 1;
}

function openElements(){
  window.location = 
            "index.html";
}

function openCharacters(){
  window.location = 
  "character.html?data=" + btoa(JSON.stringify("all"));
}

function openMissing(){
  window.location = 
  "404missing.html";
}