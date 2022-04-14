
let $searchinput = $("input")
let $button  = $('#submit')

$button.on('click', ()  => {
let text =$searchinput.val().toLowerCase()
$.ajax(`https://pokeapi.co/api/v2/pokemon/${text}/`).then(
(data) => {

    console.log(data)

    const $img = $('<img id="#imagebox">');

$img.attr("src",data.sprites.other["official-artwork"].front_default
)

$img.appendTo(".imageholder");

$button.on('click', ()  => {

    $(".imageholder").children().remove()})
    // removes image from image holder to add the next image
    
     

 $('#title').text(data.title);
 $('#name').text(data.name);
 $('#weight').text(data.weight);
 $('#id').text(data.id);

 })

 });
 


