async function loadPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  try {
    const response = await fetch("/api/posts");
    const posts = await response.json();

    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.className = "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl p-6 transition transform hover:scale-105 hover:shadow-2xl";
      postElement.innerHTML = `
        <h3 class="text-lg font-bold">${post.title}</h3>
        <p class="text-gray-500">${post.content}</p>
        <span class="text-sm text-gray-500">By ${post.author}</span>
        ${post.image ? `<img src="/uploads/${post.image}" class="mt-2 rounded">` : ""}
      `;
      
      // Handle multiple images here
      if (post.images && post.images.length > 0) {
        const gallery = document.createElement("div");
        gallery.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4";
        post.images.forEach(img => {
          const imgElement = document.createElement("img");
          imgElement.src = `/uploads/${img}`;
          imgElement.className = "w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform";
          gallery.appendChild(imgElement);
        });
        postElement.appendChild(gallery);
      }

      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    postsContainer.innerHTML = `<p class="text-red-500">Failed to load posts.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadPosts);

// Mulpitple file upload
// if (post.images && post.images.length > 0) {
//   post.images.forEach(img => {
//     postElement.innerHTML += `<img src="/uploads/${img}" class="mt-2 rounded">`;
//   });
// }



// document.getElementById("postForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);

//   try {
//     const response = await fetch("/api/posts", {
//       method: "POST",
//       body: formData,
//     });

//     const newPost = await response.json();
//     alert("Post created successfully!");

//     e.target.reset();

//     // reload posts after submission
//     loadPosts();
//   } catch (error) {
//     alert("Failed to create post");
//     console.error(error);
//   }
// });

// async function loadPosts() {
//   const postsContainer = document.getElementById("posts");
//   postsContainer.innerHTML = "";

//   try {
//     const response = await fetch("/api/posts");
//     const posts = await response.json();

//     posts.forEach(post => {
//       const postElement = document.createElement("div");
//       postElement.className = "bg-white p-4 rounded shadow";
//       postElement.innerHTML = `
//         <h3 class="text-lg font-bold">${post.title}</h3>
//         <p class="text-gray-700">${post.content}</p>
//         <span class="text-sm text-gray-500">By ${post.author}</span>
//         ${post.image ? `<img src="/uploads/${post.image}" class="mt-2 rounded">` : ""}
//       `;
//       postsContainer.appendChild(postElement);
//     });
//   } catch (error) {
//     postsContainer.innerHTML = `<p class="text-red-500">Failed to load posts.</p>`;
//   }
// }

// // Load posts on page load
// document.addEventListener("DOMContentLoaded", loadPosts);


// document.addEventListener("DOMContentLoaded", async () => {
//   const postsContainer = document.getElementById("posts");

//   try {
//     const response = await fetch("/api/posts");
//     const posts = await response.json();

//     posts.forEach(post => {
//       const postElement = document.createElement("div");
//       postElement.className = "bg-white p-4 rounded shadow";
//       postElement.innerHTML = `
//         <h3 class="text-lg font-bold">${post.title}</h3>
//         <p class="text-gray-700">${post.content}</p>
//         <span class="text-sm text-gray-500">By ${post.author}</span>
//         ${post.image ? `<img src="/uploads/${post.image}" class="mt-2 rounded">` : ""}
//       `;
//       postsContainer.appendChild(postElement);
//     });
//   } catch (error) {
//     postsContainer.innerHTML = `<p class="text-red-500">Failed to load posts.</p>`;
//   }
// });
