/**
 * Bento Grid Portfolio Web Application Logic
 * Trần Đức Nguyên - UET
 */

// ==========================================
// EXERCISE DATABASE
// ==========================================
const EXERCISES_DATA = {
  1: {
    title: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
    objective: "Thực hành làm quen hệ thống tệp tin, thiết lập cấu trúc cây thư mục và thực hành các thao tác quản trị tệp tin cơ bản trên hệ điều hành Windows để rèn luyện thói quen tổ chức dữ liệu khoa học.",
    process: `1. <strong>Tạo thư mục làm việc:</strong> Tạo thư mục gốc với cấu trúc tên chuẩn không dấu: <code>ThucHanh_TranDucNguyen</code> trên ổ đĩa của máy tính.<br>
              2. <strong>Thao tác quản lý tệp:</strong> Thực hiện tạo mới tệp <code>GhiChu.txt</code>, đổi tên thành <code>GhiChuQuanTrong.txt</code>, và tạo thư mục con <code>TaiLieu</code> để phân loại.<br>
              3. <strong>Di chuyển và sao chép:</strong> Áp dụng các lệnh Copy/Paste và Cut/Paste để điều phối các tệp tin (bao gồm tệp <code>DiChuyen.txt</code>) vào thư mục con.<br>
              4. <strong>Quản lý thùng rác:</strong> Thực hành xóa tạm thời, xóa vĩnh viễn tệp tin bằng phím Shift + Delete và khôi phục (Restore) tệp tin từ Recycle Bin về vị trí ban đầu.`,
    pdfPath: "Baitap/Bai1.pdf"
  },
  2: {
    title: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
    objective: "Lựa chọn chủ đề nghiên cứu học thuật và thực hành kỹ năng tìm kiếm thông tin bằng toán tử nâng cao, kết hợp đánh giá độ tin cậy của tài nguyên dựa trên mô hình chuẩn CRAAP.",
    process: `1. <strong>Chủ đề nghiên cứu:</strong> Lựa chọn đề tài liên quan đến chuyên ngành: <em>"Tác động của Trí tuệ Nhân tạo (AI) đến hành vi và quyết định mua sắm trực tuyến của thế hệ Z (Gen Z) tại Việt Nam"</em>.<br>
              2. <strong>Khai thác đa dạng nguồn:</strong> Tìm kiếm tài liệu từ 5 loại nguồn khác nhau (cơ sở dữ liệu học thuật Google Scholar, tạp chí khoa học chuyên ngành, sách chuyên khảo, báo cáo ngành McKinsey/Statista, và các nguồn tin tức mở). Thu thập tổng cộng 11 tài liệu tham khảo chất lượng.<br>
              3. <strong>Đánh giá tài liệu (CRAAP):</strong> Phân tích độ tin cậy của từng nguồn dựa trên 5 khía cạnh: Currency (Cập nhật), Relevance (Phù hợp), Authority (Thẩm quyền), Accuracy (Chính xác), và Purpose (Mục đích).<br>
              4. <strong>Lập danh mục:</strong> Xuất bảng ma trận đánh giá ưu/nhược điểm và lập danh mục tài liệu tham khảo theo định dạng chuẩn Harvard.`,
    pdfPath: "Baitap/Bai2.pdf"
  },
  3: {
    title: "Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    objective: "Làm chủ kỹ nghệ viết câu lệnh (Prompt Engineering) với mô hình ngôn ngữ lớn để tối ưu hóa hiệu quả học tập và giải quyết các tác vụ tư duy phức tạp.",
    process: `1. <strong>Lựa chọn 3 tác vụ học tập:</strong> Thiết lập thử nghiệm cho 3 bài toán: Tóm tắt tài liệu học thuật về AI; Giải thích khái niệm phức tạp (Thuyết tương đối rộng); Thiết lập bộ câu hỏi ôn tập Lịch sử Thế chiến 2.<br>
              2. <strong>Thử nghiệm các phiên bản Prompt:</strong> Đối chiếu kết quả trả về từ mô hình ChatGPT-4o giữa các cấp độ câu lệnh: Cơ bản (thô), Cải tiến (có cấu trúc ngắn), và Nâng cao (sử dụng kỹ thuật đóng vai Role-playing, chuỗi suy nghĩ Chain-of-Thought (CoT), phép ẩn dụ so sánh, và phân loại theo thang Bloom).<br>
              3. <strong>Xây dựng bộ nguyên tắc C.R.E.A.T.E:</strong> Tổng hợp quy trình viết Prompt tối ưu gồm 6 chữ vàng: Context (Bối cảnh), Role (Vai trò), Evidence/Examples (Ví dụ), Action (Hành động), Target (Đối tượng), và Evaluation (Đánh giá).`,
    pdfPath: "Baitap/Bai3.pdf"
  },
  4: {
    title: "Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    objective: "Ứng dụng các công cụ đám mây và phần mềm quản lý công việc để tổ chức luồng làm việc nhóm trực tuyến đồng bộ, tối ưu hóa giao tiếp và kiểm soát tiến độ dự án.",
    process: `1. <strong>Chủ đề dự án nhóm:</strong> Phối hợp thực hiện dự án thiết kế website du lịch: <em>"Lên kế hoạch và thiết kế Website giới thiệu Du lịch Hà Nội"</em>. Đóng vai trò thành viên phụ trách nội dung và thu thập tài nguyên.<br>
              2. <strong>Quản lý công việc qua Trello:</strong> Sử dụng bảng Kanban để phân rã nhiệm vụ và gán trạng thái (To-do, Doing, Done). Tối ưu hóa phân loại bằng hệ thống nhãn màu (Label) ưu tiên và thiết lập Due Date.<br>
              3. <strong>Soạn thảo cộng tác Google Workspace:</strong> Sử dụng Google Docs/Sheets ở chế độ "Đề xuất" (Suggesting mode) và quản lý lịch sử phiên bản để tránh xung đột nội dung. Đồng bộ tài nguyên dùng chung trên Google Drive.<br>
              4. <strong>Tương tác nhóm qua Zalo:</strong> Thiết lập kênh trao đổi thông tin khẩn cấp, sử dụng tính năng ghim tin nhắn và liên kết trực tiếp với thẻ Trello để theo dõi công việc không bị trôi thông báo.`,
    pdfPath: "Baitap/Bai4.pdf"
  },
  5: {
    title: "Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    objective: "Kết hợp sức mạnh sáng tạo từ nhiều công cụ AI tạo sinh khác nhau để hoàn thành bài viết truyền thông số chất lượng, tối ưu hóa quy trình sản xuất nội dung chuyên nghiệp.",
    process: `1. <strong>Xây dựng bài viết với Google Gemini:</strong> Lên ý tưởng, dàn ý và viết bản nháp cho bài viết blog: <em>"TỪ 'GÕ GOOGLE' ĐẾN 'HỎI AI': GEN Z ĐANG HỌC NHƯ THẾ NÀO?"</em>. Can thiệp sửa viết lại hơn 60% văn bản để tăng tính cá nhân hóa và loại bỏ lỗi ảo giác của AI.<br>
              2. <strong>Sinh ảnh minh họa với Copilot DALL-E 3:</strong> Viết prompt mô tả chi tiết để sinh ảnh hoạt hình 3D về một sinh viên Việt Nam học tập bên cạnh một robot phát sáng thân thiện. Sử dụng Canva để xử lý hậu kỳ và chèn chữ.<br>
              3. <strong>Dàn trang hoàn chỉnh trên Canva:</strong> Thiết kế bố cục bài blog bằng cách sử dụng các khối màu phủ mờ (Gradient overlay), chèn font Montserrat & Lora hiện đại, tạo nên ấn phẩm hoàn thiện bắt mắt.<br>
              4. <strong>Phân tích vai trò AI:</strong> Đánh giá ưu nhược điểm của chuỗi công cụ khép kín: Gemini làm "não bộ", Copilot làm "họa sĩ" và Canva làm "nhà xuất bản".`,
    pdfPath: "Baitap/Bai5.pdf"
  },
  6: {
    title: "Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    objective: "Nghiên cứu các quy chế học thuật về AI tạo sinh tại các trường đại học lớn, từ đó xây dựng ý thức liêm chính khoa học và thiết lập bộ nguyên tắc sử dụng công nghệ có trách nhiệm.",
    process: `1. <strong>Nghiên cứu chính sách học đường:</strong> Tìm hiểu chính sách quản lý Generative AI tại các trường Đại học lớn ở Việt Nam (ĐHQGHN, Bách Khoa, FPT), phân biệt rõ ranh giới giữa việc dùng AI làm trợ lý học tập hợp lệ và hành vi gian lận học thuật.<br>
              2. <strong>Thực hành bài luận mẫu có kiểm soát:</strong> Lập dàn ý bài luận Xã hội học chủ đề: <em>"Tác động của xu hướng Thời trang nhanh (Fast Fashion) đối với Gen Z tại Việt Nam"</em>. Sử dụng AI hỗ trợ khung và chủ động viết lại, bổ sung ví dụ TikTok Shop/Shopee thực tế, trích dẫn rõ nguồn gốc theo chuẩn APA.<br>
              3. <strong>Xây dựng Bộ 7 nguyên tắc đạo đức cá nhân:</strong> Thiết lập hệ nguyên tắc ứng xử với AI (bao gồm: Tư duy trước AI sau, Bảo mật thông tin, Trích dẫn 100%, v.v.).<br>
              4. <strong>Thiết kế Infographic tuyên truyền:</strong> Sử dụng Canva vẽ infographic chủ đề: <em>"Sử dụng AI trong học thuật: Ranh giới giữa Trợ thủ và Kẻ gian lận"</em> để làm rõ các điều Nên làm (DOs) và Không nên làm (DON'Ts).`,
    pdfPath: "Baitap/Bai6.pdf"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // SYNC PROFILE DETAILS
  // ==========================================
  if (typeof PROFILE_CONFIG !== 'undefined') {
    const elName = document.querySelector('.hero-name');
    const elTag = document.querySelector('.hero-subtext');
    const elMsv = document.querySelector('.metric-card:nth-of-type(2) .metric-value');
    const elLop = document.querySelector('.metric-card:nth-of-type(3) .metric-value');
    const elFooterCopyright = document.getElementById('footer-author-name');
    const elEmailBtn = document.getElementById('copy-email-btn');
    const elSocialEmail = document.querySelector('.email-social-link');

    if (elName) elName.textContent = PROFILE_CONFIG.fullName;
    if (elTag) elTag.textContent = PROFILE_CONFIG.titleTag + " - " + PROFILE_CONFIG.major;
    if (elMsv) elMsv.textContent = PROFILE_CONFIG.studentId;
    if (elLop) elLop.textContent = PROFILE_CONFIG.classBadge;
    if (elFooterCopyright) elFooterCopyright.textContent = PROFILE_CONFIG.fullNameFooter;
    
    if (elSocialEmail) {
      elSocialEmail.setAttribute('href', `mailto:${PROFILE_CONFIG.email}`);
    }

    if (elEmailBtn) {
      elEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(PROFILE_CONFIG.email).then(() => {
          elEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Đã sao chép!';
          setTimeout(() => {
            elEmailBtn.innerHTML = '<i class="fa-solid fa-envelope"></i> Gửi Email';
          }, 2000);
        }).catch(err => {
          // Fallback if clipboard API is blocked
          window.location.href = `mailto:${PROFILE_CONFIG.email}`;
        });
      });
    }
  }

  // ==========================================
  // TAB CONTROLS (SPA ROUTING)
  // ==========================================
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabSections = document.querySelectorAll('.tab-content');
  const navLinksWrapper = document.querySelector('.nav-links-wrapper');
  const mobileToggle = document.getElementById('mobile-toggle');

  function switchTab(targetTabId) {
    // Reset all tabs
    tabLinks.forEach(link => link.classList.remove('active'));
    tabSections.forEach(section => section.classList.remove('active'));

    // Activate corresponding section
    const activeSection = document.getElementById(targetTabId);
    if (activeSection) {
      activeSection.classList.add('active');
      
      const correspondingLink = document.querySelector(`.tab-link[data-tab="${targetTabId}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }

      // Special action for Reflection tab: Animate skill bars
      if (targetTabId === 'reflection-section') {
        animateSkills();
      } else {
        resetSkills();
      }

      // Close mobile dropdown if active
      if (navLinksWrapper) {
        navLinksWrapper.classList.remove('active');
        if (mobileToggle) mobileToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
      }

      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-tab');
      switchTab(targetId);
      history.pushState(null, null, link.getAttribute('href'));
    });
  });

  // Hash Navigation support
  function handleHash() {
    const hash = window.location.hash;
    if (hash === '#projects') {
      switchTab('projects-section');
    } else if (hash === '#reflection') {
      switchTab('reflection-section');
    } else {
      switchTab('dashboard-section');
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash(); // Run on initial load

  // ==========================================
  // MOBILE NAVIGATION MENU
  // ==========================================
  if (mobileToggle && navLinksWrapper) {
    mobileToggle.addEventListener('click', () => {
      navLinksWrapper.classList.toggle('active');
      if (navLinksWrapper.classList.contains('active')) {
        mobileToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
      }
    });
  }

  // ==========================================
  // LIGHT & DARK THEME TOGGLE
  // ==========================================
  const themeBtn = document.getElementById('theme-btn');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.body.getAttribute('data-theme');
      const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }

  // ==========================================
  // SLIDE-OUT DRAWER PANEL LOGIC
  // ==========================================
  const drawer = document.getElementById('project-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer');
  
  const drawerExId = document.getElementById('drawer-exercise-id');
  const drawerTitle = document.getElementById('drawer-exercise-title');
  const drawerObjective = document.getElementById('drawer-exercise-objective');
  const drawerProcess = document.getElementById('drawer-exercise-process');
  const drawerPdfPath = document.getElementById('drawer-pdf-path');
  const drawerPdfFrame = document.getElementById('drawer-pdf-frame');
  const drawerPdfFallback = document.getElementById('drawer-pdf-fallback');
  const drawerPdfDownload = document.getElementById('drawer-pdf-download');
  const fallbackStatusTitle = document.getElementById('fallback-status-title');

  function openDrawer(exerciseId) {
    const data = EXERCISES_DATA[exerciseId];
    if (!data) return;

    // Fill content
    drawerExId.textContent = `Bài tập ${exerciseId}`;
    drawerTitle.textContent = data.title;
    drawerObjective.innerHTML = data.objective;
    drawerProcess.innerHTML = data.process;
    drawerPdfPath.textContent = data.pdfPath;
    drawerPdfDownload.setAttribute('href', data.pdfPath);

    // Apply active class to drawer
    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Disable scroll on body

    // Loading states for PDF
    drawerPdfFrame.style.display = 'none';
    drawerPdfFallback.style.display = 'flex';
    fallbackStatusTitle.textContent = 'Đang mở tài liệu PDF...';

    // Load PDF source
    drawerPdfFrame.setAttribute('src', data.pdfPath);

    // Delay showing the iframe to simulate smooth asset transition
    setTimeout(() => {
      drawerPdfFrame.style.display = 'block';
      drawerPdfFallback.style.display = 'none';
    }, 600);
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Re-enable body scroll
    drawerPdfFrame.setAttribute('src', ''); // Clear source
  }

  // Bind drawer trigger buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-drawer-btn') || e.target.closest('.project-board-card');
    if (trigger) {
      const exId = trigger.getAttribute('data-id');
      if (exId) {
        openDrawer(exId);
      }
    }
  });

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // ==========================================
  // SKILLS ANIMATIONS HELPERS
  // ==========================================
  function animateSkills() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
      const widthVal = fill.parentElement.previousElementSibling.querySelector('.skill-num').textContent;
      fill.style.width = widthVal;
    });
  }

  function resetSkills() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
      fill.style.width = '0%';
    });
  }

});
