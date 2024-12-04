let points = 0;
console.log(points);

//$("#ending1").hide(); 
//$("#ending2").hide();

$("#button1").on("click", scene1);
$("#button1").on("click", addpoint);

$("#button2").on("click", scene1);
$("#button2").on("click", addTwoPoints);

$("#button3").on("click", scene1);
$("#button3").on("click", addThreePoints);

$("#button4").on("click", scene1);
$("#button4").on("click", addFourPoints);

function addpoint(){
    points++;
    console.log(points);
}
function addTwoPoints(){
    points+=2;
    console.log(points);
}
function addThreePoints(){
    points+=3;
    console.log(points);
}
function addFourPoints(){
    points+=4;
    console.log(points);
}


function scene1() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 2");
    $("#heading3").hide();
    $("#heading4").text("Which music genre do you like the most?");
    $("#catImage1").attr("src", "https://www.masslive.com/resizer/v2/ID5PACJIQRGT7DYUKYHSFICLDY.jpg?auth=2bdcfba5606b7f0c521caf9bad8d43d9a217c580f149c38e46974abca3d6f130&width=500&quality=90");
    $("#dogImage1").attr("src", "https://hips.hearstapps.com/hmg-prod/images/lucas-taemin-taeyong-kai-mark-of-superm-attend-the-press-news-photo-1639425329.jpg");
    $("#fishImage1").attr("src", "https://ca-times.brightspotcdn.com/dims4/default/cc61b39/2147483647/strip/true/crop/2160x1440+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2Fe8%2Feed1cbb643eb86a54dc60b2e2b26%2F1204-top10latinmoments.jpg");
    $("#birdImage1").attr("src", "https://www.rollingstone.com/wp-content/uploads/2022/12/hiphop-misogyny.jpg?w=1581&h=1054&crop=1");

    
    $("#button1").on("click", scene2);
    $("#button2").on("click", scene2);
    $("#button3").on("click", scene2);
    $("#button4").on("click", scene2);


    //$("#clicker").attr("href", "https://en.wikipedia.org/wiki/Cat");
    //$("#catImage1").attr("src", "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg");
    //$("#heading").css("color", "green");
    //$("#heading").addClass("newStyle");
    //$("#div1").hide();
    //$("#div2").fadeIn(900);
    //$("#button1").on("click", scene2);
    //$("#button2").on("click", scene2);
}

function scene2() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 3");
    $("#heading3").hide();
    $("#heading4").text("What food do you prefer?");
    $("#catImage1").attr("src", "https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce2.jpg");
    $("#dogImage1").attr("src", "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg");
    $("#fishImage1").attr("src", "https://www.allrecipes.com/thmb/KB88-LMFTRZo9-jlwOmRsLmnslw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-fluffy-yogurt-4x3-df4a7b83abc948d3bc23eaeb361e5713.jpg");
    $("#birdImage1").attr("src", "https://th-thumbnailer.cdn-si-edu.com/LUFI5DvvB6dzHwjreXfab6hXwo0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b3/57/b35709d6-a2a4-4abc-933f-aa43cce98513/froot-loops-cereal-bowl.jpg");

    
    $("#button1").on("click", scene3);
    $("#button2").on("click", scene3);
    $("#button3").on("click", scene3);
    $("#button4").on("click", scene3);
}

function scene3() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 4");
    $("#heading3").hide();
    $("#heading4").text("Which season do you prefer?");
    $("#catImage1").attr("src", "https://digital-photography-school.com/wp-content/uploads/2017/11/Knuten-sunrise-winter-e1511472557708.jpg");
    $("#dogImage1").attr("src", "https://wealthyhabits.org/wp-content/uploads/2021/07/Summer-1170x650-1.jpg");
    $("#fishImage1").attr("src", "https://media.cnn.com/api/v1/images/stellar/prod/210316134817-03-wisdom-project-autumn.jpg?q=w_4000,h_2250,x_0,y_0,c_fill");
    $("#birdImage1").attr("src", "https://kfor.com/wp-content/uploads/sites/3/2022/03/GettyImages-1130636356.jpg?w=2560&h=1440&crop=1");

    
   $("#button1").on("click", scene4);
    $("#button2").on("click", scene4);
    $("#button3").on("click", scene4);
    $("#button4").on("click", scene4);
}

function scene4() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 5");
    $("#heading3").hide();
    $("#heading4").text("Which hobby do you prefer?");
     $("#catImage1").attr("src","https://www.rockstaracademy.com/lib/images/news/type%20of%20dance.jpeg");
   $("#dogImage1").attr("src","https://content.prod.lovecrafts.co/lovecrafts/a893d653fee61776deacf9754d00ed452da9ac10_circular-knitting.jpg?auto=compress,format");
    $("#fishImage1").attr("src", "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQjMicaSXyjDoA9dhONKRyJKy8vaA7Wl-RTmLWV5pRFmPBEWR9lMk3c1YA7DAabdB-i");
    $("#birdImage1").attr("src", "https://images.squarespace-cdn.com/content/v1/5c6e2dad94d71a1ea569fca0/1624344400741-2VUMN1MRI6UD50VFLYXG/Painting");

    
     $("#button1").on("click", scene5);
    $("#button2").on("click", scene5);
    $("#button3").on("click", scene5);
    $("#button4").on("click", scene5);
}
function scene5() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 6");
    $("#heading3").hide();
    $("#heading4").text("What superpower would you choose?");
    $("#catImage1").attr("src", "https://static.wikia.nocookie.net/marveldatabase/images/c/c2/Ares_%28Earth-616%29_from_Dark_Wolverine_Vol_1_77_0001.png/revision/latest/scale-to-width-down/300?cb=20120219115132");
    $("#dogImage1").attr("src", "https://media.wired.com/photos/59271c6caf95806129f51a3b/master/pass/Earth2AXRayvision1.jpg");
    $("#fishImage1").attr("src", "https://insightcoaching.com/site/wp-content/uploads/Superpower-Guy.jpg");
    $("#birdImage1").attr("src", "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/10/jay-garrick.jpeg");

    
   $("#button1").on("click", scene6);
    $("#button2").on("click", scene6);
    $("#button3").on("click", scene6);
    $("#button4").on("click", scene6);
}
function scene6() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 7");
    $("#heading3").hide();
    $("#heading4").text("What favorite show?");
    $("#catImage1").attr("src", "https://m.media-amazon.com/images/M/MV5BMDA0NDBkMzMtOWQ0Zi00NjE1LTkxNWYtYzI0MTE0NGJjZTQ1XkEyXkFqcGc@._V1_.jpg");
    $("#dogImage1").attr("src", "https://m.media-amazon.com/images/M/MV5BZDVkNDYzYWYtMTE3Yi00YTk1LWIwYjMtZTU0MmQ4OWFmZDI5XkEyXkFqcGc@._V1_.jpg");
    $("#fishImage1").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg");
    $("#birdImage1").attr("src", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ37JZh1IVbQBMtkzLnniqOnvj5HsFbhjHis_JibOUQy9p7bHk50-cD4lj4C6Z8QcK-usyLdg");

    
    $("#button1").on("click", scene7);
    $("#button2").on("click", scene7);
    $("#button3").on("click", scene7);
    $("#button4").on("click", scene7);
}
function scene7() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 8");
    $("#heading3").hide();
    $("#heading4").text("Whats your sport do you prefer?");
    $("#catImage1").attr("src", "https://operations.nfl.com/media/2948/the-ball-football.jpg?mode=max&width=995");
    $("#dogImage1").attr("src", "https://d36m266ykvepgv.cloudfront.net/uploads/media/Bt2jQaty96/c-301-200/csc-soccer.jpg");
    $("#fishImage1").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9s7Zsas3Ee0grv_PPcI4yznWl4TduWjCe8w&s");
    $("#birdImage1").attr("src", "https://taketimetogether.wordpress.com/wp-content/uploads/2015/02/nosports.jpg");

    
  $("#button1").on("click", scene8);
    $("#button2").on("click", scene8);
    $("#button3").on("click", scene8);
    $("#button4").on("click", scene8);
}

function scene8() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 9");
    $("#heading3").hide();
    $("#heading4").text("What city do you prefer?");
    $("#catImage1").attr("src", "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg");
    $("#dogImage1").attr("src", "https://drexel.edu/~/media/Drexel/Core-Site-Group/Core/Images/life-at-drexel/philadelphia/philly-3200x1600/philly-3200x1600_16x9.jpg");
    $("#fishImage1").attr("src", "https://www.civitatis.com/blog/wp-content/uploads/2022/08/portada-washington-1280x854.jpg");
    $("#birdImage1").attr("src", "https://content.r9cdn.net/rimg/dimg/17/74/0ca6e469-city-30651-1632b88f203.jpg?width=1366&height=768&xhint=2635&yhint=1507&crop=true");

    
     $("#button1").on("click", scene9);
    $("#button2").on("click", scene9);
    $("#button3").on("click", scene9);
    $("#button4").on("click", scene9);
}

function scene9() {
    console.log("The button has been clicked");
    $("#heading1").hide();
    $("#heading2").text("Question 10");
    $("#heading3").hide();
    $("#heading4").text("What phone do you use?");
    $("#catImage1").attr("src", "https://istyle.bg/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_16_pro_white_titanium_pdp_image_position_1__wwen_t_2_1.jpg");
    $("#dogImage1").attr("src", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=640;maxWidth=550;format=webp");
    $("#fishImage1").attr("src", "https://m.media-amazon.com/images/I/61omq7WKOzL._AC_UF894,1000_QL80_.jpg");
    $("#birdImage1").attr("src", "https://www.razmobility.com/wp-content/uploads/MV2_En-Main_EN.png");

    
   $("#button1").on("click", finalScene);
    $("#button2").on("click", finalScene);
    $("#button3").on("click", finalScene);
    $("#button4").on("click", finalScene);
}



function finalScene() {
    // Hide all elements by default
    $(".ending").hide();
    $("#heading1, #heading2, #heading3, #heading4").hide();
    $("#button1, #button2, #button3, #button4").hide();
    $("img, div").hide();
    $("#heading").text("You've reached the end");

    // Display the correct ending based on points
    if (points >= 0 && points <= 10) {
        $("#ending1").show();
    } else if (points > 10 && points <= 20) {
        $("#ending2").show();
    } else if (points > 20 && points <= 30) {
        $("#ending3").show();
    } else if (points > 30 && points <= 40) {
        $("#ending4").show();
    } else {
        console.error("Points value is out of range.");
    }
}










