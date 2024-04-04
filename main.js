// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const like = document.getElementById('like');
  const errorModal = document.getElementById('errorModal');

  heartIcon.addEventListener('click', () => {
    
    if (like-glyph.classList.contains('EMPTY_HEART')) {
      
      mimicServerCall()
        .then(() => {
          
          like-glyph.classList.remove('EMPTY_HEART');
          like-glyph.classList.add('FULL_HEART');
          
          like-glyph.classList.add('activated-heart');
        })
        .catch(() => {
          
          errorModal.classList.remove('hidden');
          
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 2000);
        });
    } else {
      
      like-glyph.classList.remove('FULL_HEART');
      like-glyph.remove('activated-heart');
      like-glyph.classList.add('EMPTY_HEART');
    }
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
