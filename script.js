// Sample video data
const videos = [
    { title: 'Video Title 1', src: 'video/video1.mp4', description: 'This is the description for video 1.', duration: '4:20' },
    { title: 'Video Title 2', src: 'video2.mp4', description: 'This is the description for video 2.', duration: '3:50' },
    { title: 'Video Title 3', src: 'video3.mp4', description: 'This is the description for video 3.', duration: '5:10' }
];

// Function to render video grid
function renderVideos(filteredVideos) {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = ''; // Clear the current grid
    filteredVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.onclick = () => playVideo(video.src);

        const videoImage = document.createElement('img');
        videoImage.src = 'https://via.placeholder.com/400x225';
        videoImage.alt = video.title;

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = video.title;

        const videoDesc = document.createElement('p');
        videoDesc.textContent = video.description;

        const videoDuration = document.createElement('span');
        videoDuration.classList.add('video-duration');
        videoDuration.textContent = video.duration;

        const videoActions = document.createElement('div');
        videoActions.classList.add('video-actions');
        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.onclick = (e) => { e.stopPropagation(); likeVideo(e); };

        const dislikeButton = document.createElement('button');
        dislikeButton.textContent = 'Dislike';
        dislikeButton.onclick = (e) => { e.stopPropagation(); dislikeVideo(e); };

        videoActions.appendChild(likeButton);
        videoActions.appendChild(dislikeButton);

        videoCard.appendChild(videoImage);
        videoCard.appendChild(videoTitle);
        videoCard.appendChild(videoDesc);
        videoCard.appendChild(videoDuration);
        videoCard.appendChild(videoActions);

        videoGrid.appendChild(videoCard);
    });
}

// Render all videos initially
renderVideos(videos);

// Function to filter videos based on search input
document.getElementById('search').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery)
    );
    renderVideos(filteredVideos);
});

// Function to play video when clicking on a thumbnail
function playVideo(videoFile) {
    const videoSource = document.getElementById('video-source');
    const videoPlayer = document.getElementById('video-player');
    const overlay = document.createElement('div');
    overlay.classList.add('video-player-overlay');
    document.body.appendChild(overlay);

    videoSource.src = videoFile;
    videoPlayer.style.display = 'block';  // Show the player
    document.getElementById('video').load();
    document.getElementById('video').play();

    overlay.onclick = function () {
        videoPlayer.style.display = 'none';
        overlay.remove();
    };
}

// Like/Dislike buttons functionality
function likeVideo(event) {
    alert('Liked!');
    event.stopPropagation(); // Prevent triggering video click
}

function dislikeVideo(event) {
    alert('Disliked!');
    event.stopPropagation(); // Prevent triggering video click
}
