//resume modal
let resumeModal = document.querySelector('#resume-modal');
let resumeIcon = document.querySelector('#resumeButton');
let modalContent = document.querySelector('#resume');
let captionText = document.querySelector('#resumeCaption');

resumeIcon.onclick = () => {
    resumeModal.style.display="block";
    modalContent.src = 'assets/Resume.pdf';
    captionText.innerHTML = "My Resume";
}

let close = document.querySelector('#close');

close.onclick = () => {
    resumeModal.style.display = 'none';
}