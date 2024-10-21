// Handle Post Button Click
document.getElementById("postButton").addEventListener("click", function () {
    const postText = document.getElementById("postInput").value;
    const imageInput = document.getElementById("imageInput").files[0];
  
    if (postText.trim() !== "" || imageInput) {
      addPost(postText, imageInput);
      document.getElementById("postInput").value = ""; // Clear the textarea
      document.getElementById("imageInput").value = ""; // Clear the file input
    }
  });
  
  // Function to Add Post with Image to the Page
  function addPost(text, image) {
    const postContainer = document.getElementById("postsContainer");
  
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    // Add text to the post
    if (text.trim() !== "") {
      const postText = document.createElement("p");
      postText.textContent = text;
      postElement.appendChild(postText);
    }
  
    // Add image to the post
    if (image) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const postImage = document.createElement("img");
        postImage.src = e.target.result;
        postElement.appendChild(postImage);
      };
      reader.readAsDataURL(image);
    }
  
    postContainer.prepend(postElement); // Add post at the top
  }
  