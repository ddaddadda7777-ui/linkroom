document.addEventListener('DOMContentLoaded', () => {
  // Common: Logo home button
  const logo = document.querySelector('.header__logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/';
    });
  }

  // Free Board Functionality
  if (window.location.pathname === '/freeboard.html') {
    const postListSection = document.querySelector('.freeboard-list-section');
    const postDetailSection = document.querySelector('.freeboard-detail-section');
    const postFormSection = document.querySelector('.freeboard-form-section');

    const writePostBtn = document.getElementById('write-post-btn');
    const postListBody = document.getElementById('post-list-body');
    const paginationDiv = document.querySelector('.pagination');

    const detailTitle = document.getElementById('detail-title');
    const detailAuthor = document.getElementById('detail-author');
    const detailDate = document.getElementById('detail-date');
    const detailViews = document.getElementById('detail-views');
    const detailContent = document.getElementById('detail-content');
    const editPostBtn = document.getElementById('edit-post-btn');
    const deletePostBtn = document.getElementById('delete-post-btn');
    const listPostBtn = document.getElementById('list-post-btn');

    const postForm = document.getElementById('post-form');
    const postIdInput = document.getElementById('post-id');
    const formTitleInput = document.getElementById('form-title');
    const formAuthorInput = document.getElementById('form-author');
    const formPasswordInput = document.getElementById('form-password');
    const formContentInput = document.getElementById('form-content');
    const formAttachmentsInput = document.getElementById('form-attachments');
    const cancelFormBtn = document.getElementById('cancel-form-btn');

    let posts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
    let currentPostId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) : 0;
    const postsPerPage = 10;
    let currentPage = 1;

    // Save posts to localStorage
    const savePosts = () => {
      localStorage.setItem('freeboardPosts', JSON.stringify(posts));
    };

    // Render post list
    const renderPostList = () => {
      postListBody.innerHTML = '';
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = posts.slice().reverse().slice(startIndex, endIndex); // Display newest first

      if (paginatedPosts.length === 0) {
        postListBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">게시글이 없습니다.</td></tr>';
      }

      paginatedPosts.forEach(post => {
        const row = postListBody.insertRow();
        row.innerHTML = `
          <td>${post.id}</td>
          <td><a href="#" class="post-link" data-id="${post.id}">${post.title}</a></td>
          <td>${post.author}</td>
          <td>${post.date}</td>
          <td>${post.views}</td>
        `;
      });
      renderPagination();
    };

    // Render pagination
    const renderPagination = () => {
      paginationDiv.innerHTML = '';
      const totalPages = Math.ceil(posts.length / postsPerPage);

      if (totalPages <= 1) return;

      let paginationHtml = `<a href="#" data-page="prev">&laquo;</a>`;
      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
      }
      paginationHtml += `<a href="#" data-page="next">&raquo;</a>`;
      paginationDiv.innerHTML = paginationHtml;

      paginationDiv.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = e.target.dataset.page;
          if (page === 'prev' && currentPage > 1) {
            currentPage--;
          } else if (page === 'next' && currentPage < totalPages) {
            currentPage++;
          } else if (!isNaN(page)) {
            currentPage = parseInt(page);
          }
          renderPostList();
        });
      });
    };

    // Show List View
    const showListView = () => {
      postListSection.style.display = 'block';
      postDetailSection.style.display = 'none';
      postFormSection.style.display = 'none';
      renderPostList();
    };

    // Show Detail View
    const showDetailView = (postId) => {
      const post = posts.find(p => p.id === postId);
      if (!post) {
        alert('게시글을 찾을 수 없습니다.');
        showListView();
        return;
      }

      post.views++; // Increment views
      savePosts(); // Save updated views
      renderPostList(); // Update list with new view count

      detailTitle.textContent = post.title;
      detailAuthor.textContent = post.author;
      detailDate.textContent = post.date;
      detailViews.textContent = post.views;
      detailContent.innerHTML = post.content.replace(/\n/g, '<br>') + (post.attachments ? `<br><br><strong>첨부:</strong> ${post.attachments}` : '');

      editPostBtn.dataset.id = postId;
      deletePostBtn.dataset.id = postId;

      postListSection.style.display = 'none';
      postDetailSection.style.display = 'block';
      postFormSection.style.display = 'none';
    };

    // Show Form View (for create or edit)
    const showFormView = (postId = null) => {
      postListSection.style.display = 'none';
      postDetailSection.style.display = 'none';
      postFormSection.style.display = 'block';

      if (postId) {
        // Edit mode
        const post = posts.find(p => p.id === postId);
        if (post) {
          postIdInput.value = post.id;
          formTitleInput.value = post.title;
          formAuthorInput.value = post.author;
          formContentInput.value = post.content;
          formAttachmentsInput.value = post.attachments || '';
          formPasswordInput.value = ''; // Password not pre-filled for security
          document.querySelector('.freeboard-form-section__title').textContent = '게시글 수정';
        }
      } else {
        // Create mode
        postIdInput.value = '';
        postForm.reset();
        document.querySelector('.freeboard-form-section__title').textContent = '게시글 작성';
      }
    };

    // Event Listeners

    // Click on "Write Post" button
    writePostBtn.addEventListener('click', () => showFormView());

    // Click on post title in list
    postListBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('post-link')) {
        const postId = parseInt(e.target.dataset.id);
        showDetailView(postId);
      }
    });

    // Click on "Edit" button in detail view
    editPostBtn.addEventListener('click', () => {
      const postId = parseInt(editPostBtn.dataset.id);
      const post = posts.find(p => p.id === postId);
      if (post) {
        const password = prompt('게시글 수정 비밀번호를 입력하세요:');
        if (password === post.password) {
          showFormView(postId);
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      }
    });

    // Click on "Delete" button in detail view
    deletePostBtn.addEventListener('click', () => {
      const postId = parseInt(deletePostBtn.dataset.id);
      const postIndex = posts.findIndex(p => p.id === postId);
      if (postIndex > -1) {
        const post = posts[postIndex];
        const password = prompt('게시글 삭제 비밀번호를 입력하세요:');
        if (password === post.password) {
          if (confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
            posts.splice(postIndex, 1);
            savePosts();
            showListView();
            alert('게시글이 삭제되었습니다.');
          }
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      }
    });

    // Click on "List" button in detail view
    listPostBtn.addEventListener('click', () => showListView());

    // Submit post form
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const id = postIdInput.value ? parseInt(postIdInput.value) : null;
      const title = formTitleInput.value.trim();
      const author = formAuthorInput.value.trim();
      const password = formPasswordInput.value;
      const content = formContentInput.value.trim();
      const attachments = formAttachmentsInput.value.trim();

      if (!title || !author || !password || !content) {
        alert('모든 필수 필드를 채워주세요.');
        return;
      }

      const now = new Date();
      const date = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

      if (id) {
        // Update existing post
        const postIndex = posts.findIndex(p => p.id === id);
        if (postIndex > -1) {
          posts[postIndex] = {
            ...posts[postIndex],
            title,
            author,
            password, // Password updated, but not securely
            content,
            attachments,
            date, // Update date on edit too
          };
          alert('게시글이 수정되었습니다.');
        }
      } else {
        // Create new post
        currentPostId++;
        const newPost = {
          id: currentPostId,
          title,
          author,
          password,
          content,
          attachments,
          date,
          views: 0,
        };
        posts.push(newPost);
        alert('게시글이 작성되었습니다.');
      }
      savePosts();
      showListView();
    });

    // Click on "Cancel" button in form view
    cancelFormBtn.addEventListener('click', () => {
      showListView();
    });

    // Initial render
    showListView();
  }
});