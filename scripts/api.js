const date = moment();

// call for games result
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: "https://api-hockey.p.rapidapi.com/games/?date=" + $(date) + "&league=57&season=2020" + $(".dropdown-item"),
//     method: "GET",
//     headers: {
// 		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
// 		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
// 	},
//     data: {
//         team: "",
//     },
// };

// $(document).ready(function () {
// 	$(".dropdown-item").click(function (event) {
// 		data.team = $(this).attr("team");
// 		postGame();
// 		$(".dropdown-item").html($(this).html());
// 	});
// });

// function postGame() {
// 	$.ajax(settings).done(function (response) {
// 		console.log(response);

// 		var nextGame = response.data[0].nextGame;

// 		$(".nhlGame").text(nextGame);
// 	});
// }
