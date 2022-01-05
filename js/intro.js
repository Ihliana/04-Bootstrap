
// grab our template code from the DOM
let source = $("#intro_template").html()

// compile the template so we can use it
let introTemplate = Handlebars.compile(source);

// generate HTML from the data
let html = introTemplate(data);


// add the HTML to the content div
$("#content").html(html);
