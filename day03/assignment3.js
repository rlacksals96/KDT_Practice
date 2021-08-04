class Music {
	constructor(id, genre, play) {
		this.id = id;
		this.genre = genre;
		this.play = play;
	}
}

function solution(genres, plays) {
	let answer=[];
	const musics = genres.map((genre, id) => {
		return { id, genre, play: plays[id] };
	});
	// console.log(musics);

	let musicSum = {};
	for(let i=0;i<genres.length;i++){
		musicSum[genres[i]]=(musicSum[genres[i]]||0)+plays[i];
	}
	
	
	let bestGenre=Object.keys(musicSum).sort((a,b)=>musicSum[b]-musicSum[a]);
	// console.log(bestGenre);
	bestGenre.forEach((g)=>{
		let tmp=musics.filter(song=>song.genre==g)
		tmp.sort((a,b)=>b.play-a.play);
		if(tmp.length>1){
			answer.push(tmp[0].id);
			answer.push(tmp[1].id);
		}else{
			answer.push(tmp[0].id);
		}
	})
	return answer;

}

genres = ["classic", "pop", "classic", "classic", "pop"];
plays = [500, 600, 150, 800, 2500];
solution(genres, plays);
