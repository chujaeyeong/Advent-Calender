// 기능2: 공유하기 (원본 코드)
// Chrome 브라우저에서는 URL copy 방식으로 공유하도록 코드 수정 

document.getElementById('shareButton').addEventListener('click', () => {
    // Check if the navigator.share is available
    if (navigator.share) {
        navigator.share({
            title: 'Web Share Example',
            text: 'Check out this web share example!',
            url: window.location.href
        })
            .then(() => console.log('Data was shared successfully'))
            .catch((err) => console.error('Share failed:', err.message));
    } else {
        // Web Share API 지원하지 않는 브라우저에서는 shareURL 을 통해 URL 복사 붙여넣기 방식 활용 
        const shareURL = 'https://chujaeyeong.github.io/Advent-Calender/'; // github 배포 링크 추가
        const shareText = shareURL;

        // Create a temporary textarea element
        const shareDialog = document.createElement('textarea');
        shareDialog.value = shareText;
        document.body.appendChild(shareDialog);

        // Select the text in the textarea
        shareDialog.select();

        try {
            // Copy the selected text to the clipboard
            document.execCommand('copy');
            alert('링크가 복사되었습니다. 원하는 곳에 붙여넣기 하세요!');
        } catch (err) {
            console.error('Unable to copy to clipboard:', err);
        } finally {
            // Remove the temporary textarea element
            document.body.removeChild(shareDialog);
        }
    }
});
