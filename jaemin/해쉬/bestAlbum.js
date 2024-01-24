//프로그래머스 베스트앨범
function solution(genres, plays) {
  var answer = [];

  const genreMap = new Map(); //음악 장르 : 총 재생시간
  const musicMap = new Map(); //음악 : {장르, 재생시간, index}
  genres.map((genre, i) => {
    if (genreMap.get(genre) === undefined) {
      genreMap.set(genre, plays[i]);
    } else genreMap.set(genre, genreMap.get(genre) + plays[i]);

    musicMap.set(i, {
      genre: genre,
      time: plays[i],
      index: i,
    });
  });

  //음악 장르 총 재생시간 내림차순 정렬
  const sortedGenreMap = new Map(
    [...genreMap.entries()].sort((a, b) => b[1] - a[1])
  );

  //총 재생시간이 높은 음악 순서로, 그 중에서도 재생시간이 높은 순으로 정렬
  const sortedMusicMap = new Map();
  sortedGenreMap.forEach((time, genre) => {
    const musics = [...musicMap.entries()]
      .filter(([index, song]) => song.genre === genre)
      .sort((a, b) =>
        b[1].time === a[1].time
          ? a[1].index - b[1].index
          : b[1].time - a[1].time
      );
    musics.forEach(([index, song], i) => {
      sortedMusicMap.set(index, song);
    });
  });

  //베스트 앨범 만들기
  let currentGenre = "";
  let count = 0;
  sortedMusicMap.forEach((val, index) => {
    if (val.genre !== currentGenre) {
      currentGenre = val.genre;
      count = 0;
    }
    if (count < 2) {
      answer.push(val.index);
    }
    if (val.genre === currentGenre) count += 1;
  });

  return answer;
}

const init = () => {
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  );
};

init();
