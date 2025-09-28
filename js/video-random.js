const videoList = [
  "https://motionbgs.com/media/1057/itachi-shillouette-in-front-of-the-red-moon.960x540.mp4",
  "https://motionbgs.com/media/1397/goku-ultra-instinct_2.960x540.mp4",
  "https://motionbgs.com/media/1194/vegeta-ultra-ego.960x540.mp4"
];

document.addEventListener("DOMContentLoaded", () => {
  const bgVideo = document.getElementById("bg-video");
  const bgSource = document.getElementById("bg-source");

  if (bgVideo && bgSource) {
    const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
    bgSource.src = randomVideo;
    bgVideo.load();
  }
});
