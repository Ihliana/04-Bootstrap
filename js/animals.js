

// template function
function showTemplate(template, data){
	let html = template(data);
	$('#content').html(html);
}

let current_album = animals_data.category[0];
let current_photo = current_album.animals[0];



// descriptions for classes
let Reptile = "<span class='red'>Reptiles</span> are a group (Reptilia) of tetrapod animals comprising today's turtles, crocodilians, snakes, lizards, tuatara, and their extinct relatives. The study of these traditional reptile groups, historically combined with that of modern amphibians, is called herpetology. Birds are also often included as a sub-group of reptiles by modern scientists.";
let Mammals = "<span class='red'>Mammals</span> (class Mammalia from Latin mamma 'breast') are any members of a clade of endothermic amniotes distinguished from reptiles and birds by the possession of hair, three middle ear bones, mammary glands, and a neocortex (a region of the brain). The mammalian brain regulates body temperature and the circulatory system, including the four-chambered heart.";
let Birds = "<span class='red'>Birds</span> (class Aves) are a group of endothermic vertebrates, characterised by feathers, a beak with no teeth, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a lightweight but strong skeleton. Birds live worldwide and range in size from the 5 cm (2 in) bee hummingbird to the 2.75 m (9 ft) ostrich. They rank as the class of tetrapods with the most living species, at approximately ten thousand, with more than half of these being passerines, sometimes known as perching birds or, less accurately, as songbirds.";

// jQuery content function
$(document).ready(function(){


	//categories Handlebars template compiling
	let source = $("#categories").html();
	let template = Handlebars.compile(source);

	//animals template compiling
	source = $("#animal-template").html();
	let photos_template = Handlebars.compile(source);

	//breadcrumb template compiling
	source = $("#breadcrumb-template").html()
	let breadcrumb_template = Handlebars.compile(source);

	//single photo template
	source = $("#photoTemplate").html();
	let photo_template = Handlebars.compile(source);


	//categories content
	$("#categories_tab").click(function(){

		showTemplate(template, animals_data);

			$(".main-thumbnail").click(function(){
				let index = $(this).data("id");
				current_album = animals_data.category[index];

				showTemplate(photos_template, current_album);

				//choosing the animal class according to used index
					if(index == 0){
							$("#main_head").html("Reptiles");
							$("#main_text").html(Reptile);

							//navigation change class active
							$(".navbar-nav .active").removeClass("active");
							$("#reptiles_tab").addClass("active");
						}

					else if (index == 1){
							$("#main_head").html("Mammals");
							$("#main_text").html(Mammals);

							//navigation change class active
						$(".navbar-nav .active").removeClass("active");
						$("#mammals_tab").addClass("active");
						}

					else {
							$("#main_head").html("Birds");
							$("#main_text").html(Birds);

							//navigation change class active
						$(".navbar-nav .active").removeClass("active");
						$("#birds_tab").addClass("active");
						}


				//Breadcrumb
				$(".breadcrumb").append( breadcrumb_template({
	        type: "category",
	        name: current_album.name
	         }));

				$("#category-crumb").click(function () {
	        $(".breadcrumb").children().filter(":gt(1)").remove();
					showTemplate(photos_template, current_album);
	       });


				//single photos
				 $(".class-image").click(function(){
					 $("#main_text").hide();
					 let index = $(this).data("id");

					 let current_photo = current_album.animals[index];
					 showTemplate(photo_template,current_photo);

					$(".breadcrumb").append(breadcrumb_template({
					 type: "category",
					 name: current_photo.name
					}));
				 });

			}); //end of .main-thumbnail
	});  // end of categories_tab


	/* navigation bar - reptiles tab */
	$("#reptiles_tab").click(function(){

		$("#main_head").html("Reptiles");
		$("#main_text").show().html(Reptile);

		var current_album = animals_data.category[0];
		showTemplate(photos_template,current_album);

		//navigation change class active
		$(".navbar-nav .active").removeClass("active");
		$("#reptiles_tab").addClass("active");


		//breadcrumb change for reptiles
			$(".breadcrumb").children().filter(":gt(1)").remove();

			$(".breadcrumb").append(breadcrumb_template({
								type: "category",
								name: current_album.name
						}));

			 $("#category-crumb").click(function () {
					$(".breadcrumb").children().filter(":gt(1)").remove();
					showTemplate(photos_template, current_album);
								return false;
						});

		$(".class-image").click(function(){
				$("#main_text").hide();
				let index = $(this).data("id");
				let current_photo = current_album.animals[index];
				showTemplate(photo_template,current_photo);

				$(".breadcrumb").append(breadcrumb_template({
						type: "category",
						name: current_photo.name
					}));
			});

	});


	/* navigation bar - mammals tab */
	$("#mammals_tab").click(function(){
		$("#main_head").html("Mammals");
		$("#main_text").show().html(Mammals);

		let current_album = animals_data.category[1];
		showTemplate(photos_template,current_album);

			//navigation change class active
		$(".navbar-nav .active").removeClass("active");
		$("#mammals_tab").addClass("active");


		//breadcrumb change for mammals
		$(".breadcrumb").children().filter(":gt(1)").remove();
		$(".breadcrumb").append(breadcrumb_template({
			type: "category",
			name: current_album.name
				}));

		$("#category-crumb").click(function () {
			$(".breadcrumb").children().filter(":gt(1)").remove();
			showTemplate(photos_template, current_album);
			return false;
			});


			//specific images display
		$(".class-image").click(function(){
				$("#main_text").hide();
				let index = $(this).data("id");
				let current_photo = current_album.animals[index];
				showTemplate(photo_template,current_photo);

			$(".breadcrumb").append(breadcrumb_template({
						type: "category",
						name: current_photo.name
					}));
			});
	});


	/* navigation bar - birds tab */
	$("#birds_tab").click(function(){
		$("#main_head").html("Birds");
		$("#main_text").show().html(Birds);

		var current_album = animals_data.category[2];
		showTemplate(photos_template,current_album);

		//navigation change class active
		$(".navbar-nav .active").removeClass("active");
		$("#birds_tab").addClass("active");


		//breadcrumb change for birds
		$(".breadcrumb").children().filter(":gt(1)").remove();
		$(".breadcrumb").append(breadcrumb_template({
							type: "category",
							name: current_album.name
					}));
	 $("#category-crumb").click(function () {
								$(".breadcrumb").children().filter(":gt(1)").remove();
				showTemplate(photos_template, current_album);
							return false;
					});

		//specific images display
		$(".class-image").click(function(){
				$("#main_text").hide();
				var index = $(this).data("id");
				var current_photo = current_album.animals[index];
				showTemplate(photo_template,current_photo);


		//breadcrumb for specific image
			$(".breadcrumb").append(breadcrumb_template({
						type: "category",
						name: current_photo.name
					}));
			});
	});



	//calling function to display content
	$("#categories_tab").click();

});
