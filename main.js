/*
PART ONE - Querying DOM Elements
*/

// 1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul>`). Since this function always does the same thing, it requires no parameters!

function strikeThrough(){
    // Selects first li in the HTML
    // let item = document.querySelector('li');

    // Selects first item in the #arguments li
    let item1 = document.querySelector('#arguments li');
    item1.style.textDecoration = 'line-through';
}


// 2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.

strikeThrough();


// 3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.

function setImage(id, url){
    let img = document.querySelector(`#${id}`);
    img.src = url;
    img.style.height = "250px"
}


// 4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

setImage("image-1", "https://i.pinimg.com/736x/92/b6/63/92b663bc2549b65ea12265be03dc3706.jpg");
setImage("image-2", "https://offroadium.com/wp-content/uploads/subaru-ascent-silver-6.jpg");
setImage("image-3", "https://cdn.shopify.com/s/files/1/1239/8296/articles/brandon_1024x1024.jpg?v=1539893163");


// 5. This next function also doesn't require any parameters: write a function that always removes the first `<li>` from the Arguments `<ul>`

function removal(){
    let item1 = document.querySelector('#arguments li');
    item1.remove();
}


// 6. Now use it to remove the first two items from that list. You'll need to call it twice!

removal();
removal();


// 7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.

function fontBoi(fontSize, id){
    let ident = document.querySelector(`${id}`);
    ident.style.fontSize = fontSize;
}


// 8. Try using it to change the size of any text on the page.

fontBoi('40px', '#heading')


/*
PART TWO - DOM Elements as Function Parameters
*/
// **These functions will take in DOM elements as parameters. They also don't need to `return` anything.**

// 1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.

function adder(element){
    let args = document.querySelector("#arguments");
    args.appendChild(element);
}


// 2. Let's use it! Create an image element in Javascript and pass it into your function.

let li3 = document.createElement("img");
li3.src = "https://offroadium.com/wp-content/uploads/vehicles/subaru/ascent/subaru-ascent-and-explore-09.jpg"
adder(li3);


// 3. Write a function that takes in an image element and modifies its height to be 30 pixels.

function picHeight(pic){
    pic.style.height = "30px";
}


// 4. Let's use it. Query an image element and then pass it into the function.

let image = document.querySelector("#image-3");
picHeight(image);


// 5. Write a function that takes in an element and gives it the class `invisible`.

function classy(el){
    el.className = "invisible";
}


// 6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)

let newClass = document.querySelector("#thing-2");
classy(newClass);


/*
PART THREE - Creating DOM Elements
*/
// **These functions will `return` new DOM elements.**

// 1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.

function newGuy(text){
    let newLi = document.createElement("li");
    newLi.innerText = text;
    return newLi;
}


// 2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

let testItem = newGuy("Hi Globe");
adder(testItem);


// 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.

function createHeader(hSize, text){
    // The short way / the right way:
        // this uses string interp to make it smooth and short
    let header = document.createElement(`h${hSize}`);
    header.innerText = text;
    return header;

    // The long way but it still works:
        // let header = ''
        // if (hSize === '1'){
        //    header = document.createElement("h1");
        // } else if (hSize === '2'){
        //    header = document.createElement("h2");
        // } else if (hSize === '3'){
        //    header = document.createElement("h3");
        // } else if (hSize === '4'){
        //    header = document.createElement("h4");
        // } else if (hSize === '5'){
        //    header = document.createElement("h5");
        // } else if (hSize === '6'){
        //    header = document.createElement("h6");
}




// 4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

let headerTest = createHeader('2', 'some text');
adder(headerTest);