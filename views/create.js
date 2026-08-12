document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    e.target.reset();
    alert("Post created successfully!");
    window.location.href = "/"; // redirect back to home
  } catch (error) {
    console.error("Error creating post:", error);
    alert("Failed to create post");
  }
});
