$(".img2").hide();
$(".gameover").hide();
$(".skimask").hide();
$(".start").hide();
$(".robber1").hide();
$(".bank").hide();
$(".jewels").hide();
$(".continue").hide();
$(".jewelsimg").hide();
$(".jewelsimg2").hide();
$(".upset").hide();
$(".reddiamond").hide();
$(".jail").hide();
$(".jailcell").hide();
$(".bankimg").hide();
$(".money").hide();

$(".button1").click(function() {
    $(".img1").hide();
    $(".button1").hide();
    $(".button2").hide();
    $(".img2").show();
    $(".text1").text("yayyy let's get started");
    $(".start").show();
});


$(".button2").click(function() {
    $(".button2").hide();
    $(".button1").hide();
    $(".img1").hide();
    $(".img2").hide();
    $(".text1").text("ohh noo:/ ");
    $(".gameover").show();
});

$(".start").click(function() {
    $(".img2").hide();
    $(".start").hide();
    $(".skimask").show();
    $(".text1").text("double click the ski mask to put it on");
});

$(".skimask").dblclick(function() {
    $(".skimask").hide();
    $(".robber1").fadeIn();
    $(".text1").text("now you're prepared for your heist");
    $(".continue").show();
});

$(".continue").click(function() {
    $(".continue").hide();
    $(".bank").show();
    $(".jewels").show();
    $(".text1").text("what place would you like to rob?");
});

$(".jewels").click(function() {
    $(".robber1").hide();
    $(".jewels").hide();
    $(".bank").hide();
    $(".jewelsimg").show();
    $(".text1").text("click the treasure chest to steal a pretty jewel:)");
});

$(".jewelsimg").click(function() {
    $(".jewelsimg").hide();
    $(".jewelsimg2").fadeIn();
    $(".text1").text("what a pretty gem....but oh no you've made someone upset");
    $(".upset").show();
});

$(".upset").click(function() {
    $(".upset").hide();
    $(".jewelsimg2").hide();
    $(".reddiamond").fadeIn();
    $(".text1").text("you've made the one and only Red Diamond upset and you shall prepare yourself for the consequences,click the button below to get your sentencing");
    $(".jail").show();
});

$(".jail").click(function() {
    $(".jail").hide();
    $(".jailcell").show();
    $(".reddiamond").hide();
    $(".text1").text("Off To Jail: you've been sentence to life in prison on Neptune with Rick Sanchez a mad scienctist on multiple accounts of looting");
});

$(".bank").click(function() {
    $(".bankimg").show();
    $(".text1").text("click the bank to rob it Yayyyy:)");
    $(".robber1").hide();
    $(".jewels").hide();
    $(".bank").hide();
});

$(".bankimg").click(function() {
    $(".bankimg").hide();
    $(".money").show();
    $(".text1").text("you've successfully  robbed the bank and you are now filthy rich :)");
});