/* 
 * KahluaSoft Portal Core Logic Engine (Vity Engine v1.0)
 * High-performance Canvas Steam Particles, Interactive Forms & Dynamic KO/EN/JA Translations
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Dynamic KO/EN/JA Translations Dictionary ---
  const i18n = {
    ko: {
      statusText: '정상 작동 중',
      heroTitle: '재미와 편리함을 담은<br><span class="gold-gradient-text">좋은 소프트웨어</span>를 만듭니다.',
      heroDesc: '우리는 기본에 충실한 기술력과 즐거운 상상력을 결합합니다. 쓰기 편한 웹과 앱 서비스부터 몰입감 있는 게임까지, 일상에 작은 편리함과 즐거움을 줄 수 있도록 정성을 담아 소프트웨어를 만듭니다.',
      teaserTag: '주요 프로젝트',
      teaserTitle: 'SeenOnly (본만큼)',
      teaserMainCopy: '본 만큼만 보이고, 본 사람끼리 마음껏 말해요.',
      teaserSubCopy: '제목은 안전하게, 본문은 스포일러천국.',
      teaserLangInfo: '', // Keep empty for Korean users
      teaserDesc: '드라마, 웹툰, 영화, OTT 시리즈의 회차별 토론 커뮤니티입니다. 제목엔 절대 스포 금지! 본문엔 마음 놓고 스포하는 작품 감상 토론 공간으로, 다른 사람들의 감상을 보고 싶어도 스포일러 때문에 게시판 들어가기가 힘들었던 분들을 위한 곳입니다. 안심하고 작품을 즐기고 나누어 보세요.',
      formTitle: '생각 나누기',
      formSubtitle: '더 편리한 일상, 새로운 재미에 대한 어떤 제안이든 환영합니다.',
      labelName: '성함 또는 단체명',
      labelEmail: '이메일 주소',
      labelCategory: '문의 및 제안 유형',
      optIdea: '새로운 앱/서비스 아이디어 제안',
      optGame: '게임 피드백 & 협업',
      optBusiness: '일반 문의',
      optOther: '기타 자유 제안',
      labelMessage: '당신의 소중한 의견이나 문의 사항을 자유롭게 남겨주세요.',
      submitBtn: '생각 전송하기',
      submitLoading: '보내는 중...',
      toastSuccess: '☕ 의견을 보내주셔서 감사합니다. 소중히 검토하겠습니다!',
      toastValidationError: '⚠️ 모든 필수 항목을 정확하게 입력해 주세요.',
      footerText: '© 2026 KahluaSoft. All rights reserved.',
      metaDesc: '깔루아소프트(KahluaSoft) - 일상에 도움이 되는 편리한 앱과 즐거움을 주는 게임을 만듭니다.',
      docTitle: '깔루아소프트 | KahluaSoft'
    },
    en: {
      statusText: 'Systems Brewing',
      heroTitle: 'Blending robust engineering with<br>imagination for <span class="gold-gradient-text">seamless digital craft</span>.',
      heroDesc: 'We merge rock-solid technology with immersive creative storytelling. From highly intuitive web applications to gripping games, we brew premium digital products that deliver smooth, refined value to your daily life.',
      teaserTag: 'Featured Project',
      teaserTitle: 'SeenOnly',
      teaserMainCopy: 'See only what you\'ve watched. Speak freely with those who know.',
      teaserSubCopy: 'Safe titles, absolute spoiler heaven.',
      teaserLangInfo: '* Currently available in Korean only (Global language support coming soon)',
      teaserDesc: 'An episode-by-episode discussion community for dramas, webtoons, movies, and OTT series. Zero spoilers in titles—absolute spoiler freedom in descriptions! Designed for those who want to read others\' thoughts but dreaded opening forums due to spoilers. Discuss and enjoy your favorite works with peace of mind.',
      formTitle: 'Let\'s Brew Together',
      formSubtitle: 'We welcome any ideas, feedback, or custom software inquiries.',
      labelName: 'Your Name / Organization',
      labelEmail: 'Email Address',
      labelCategory: 'Inquiry & Suggestion Category',
      optIdea: 'New App or Web Service Idea',
      optGame: 'Game Feedback & Collaboration',
      optBusiness: 'General Business Inquiry',
      optOther: 'Other Creative Proposals',
      labelMessage: 'Leave your thoughts or inquiries freely.',
      submitBtn: 'Brew Software Recipe',
      submitLoading: 'Brewing Recipe...',
      toastSuccess: '☕ Your suggestion has been successfully blended into KahluaSoft\'s recipe!',
      toastValidationError: '⚠️ Please fill out all required fields correctly.',
      footerText: '© 2026 KahluaSoft. All rights reserved. Crafted Smoothly.',
      metaDesc: 'KahluaSoft - We blend robust engineering with playful imagination to craft seamless digital experiences.',
      docTitle: 'KahluaSoft | Software Craftsmanship House'
    },
    ja: {
      statusText: '正常稼働中',
      heroTitle: '楽しさと便利さを込めた、<br><span class="gold-gradient-text">質の高いソフトウェア</span>を制作します。',
      heroDesc: '私たちは確かな技術力と豊かな創造力を融合させ、使いやすいウェブやアプリサービスから没頭できるゲームまで、日常に便利さと楽しさを届けるために、一つひとつ丁寧にソフトウェアを創り上げています。',
      teaserTag: '主要プロジェクト',
      teaserTitle: 'SeenOnly (見た分だけ)',
      teaserMainCopy: '見た分だけ見えて、見た人同士で心置きなく語り合おう。',
      teaserSubCopy: 'タイトルは安全に、本文はネタバレ天国。',
      teaserLangInfo: '※ 現在、韓国語サービスのみ提供中（他言語は順次対応予定）',
      teaserDesc: 'ドラマ、ウェブトゥーン、映画、OTTシリーズの回別討論コミュニティです。タイトルには絶対ネタバレ禁止！本文には思う存分ネタバレして語り合える作品鑑賞討論スペースで、他の人の感想を見たくてもネタバレが怖くて掲示板に入りにくかった方のための場所です。安心して作品を楽しんで共有しましょう。',
      formTitle: 'ご提案と意見',
      formSubtitle: 'より便利な日常、新しい楽しさに関するご提案をいつでも歓迎します。',
      labelName: 'お名前または団体名',
      labelEmail: 'メールアドレス',
      labelCategory: 'お問い合わせ・ご提案の種類',
      optIdea: '新しいアプリ・ウェブサービスのアイデア提案',
      optGame: 'ゲームのフィードバックおよびコラボレーション',
      optBusiness: '一般お問い合わせ',
      optOther: 'その他の自由な提案',
      labelMessage: '大切なご意見やお問い合わせ内容を自由にご記入ください。',
      submitBtn: '送信する',
      submitLoading: '送信中...',
      toastSuccess: '☕ ご意見をお寄せいただきありがとうございます。大切に検討させていただきます。',
      toastValidationError: '⚠️ すべての必須項目を正しく入力してください。',
      footerText: '© 2026 KahluaSoft. All rights reserved.',
      metaDesc: 'カルアソフト(KahluaSoft) - 日主に役立つ便利なアプリや、楽しさを届けるゲームを制作しています。',
      docTitle: 'カルアソフト | KahluaSoft'
    }
  };

  let currentLang = localStorage.getItem('kahlua_lang') || 'ko';

  // Make the language switcher container display state adapt to lang notice existence
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('kahlua_lang', lang);
    
    // Toggle active state on buttons
    document.getElementById('lang-ko').classList.toggle('active', lang === 'ko');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-ja').classList.toggle('active', lang === 'ja');

    // Update document head attributes
    document.documentElement.lang = lang;
    document.title = i18n[lang].docTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', i18n[lang].metaDesc);
    }

    // Update DOM text contents dynamically with smooth transitions
    const elementsToTranslate = [
      { id: 'status-text', text: i18n[lang].statusText },
      { id: 'hero-title', text: i18n[lang].heroTitle, isHTML: true },
      { id: 'hero-desc', text: i18n[lang].heroDesc },
      { id: 'teaser-tag', text: i18n[lang].teaserTag },
      { id: 'teaser-title', text: i18n[lang].teaserTitle },
      { id: 'teaser-main-copy', text: i18n[lang].teaserMainCopy },
      { id: 'teaser-sub-copy', text: i18n[lang].teaserSubCopy },
      { id: 'teaser-lang-info', text: i18n[lang].teaserLangInfo },
      { id: 'teaser-desc', text: i18n[lang].teaserDesc },
      { id: 'form-title', text: i18n[lang].formTitle },
      { id: 'form-subtitle', text: i18n[lang].formSubtitle },
      { id: 'label-name', text: i18n[lang].labelName },
      { id: 'label-email', text: i18n[lang].labelEmail },
      { id: 'label-category', text: i18n[lang].labelCategory },
      { id: 'opt-idea', text: i18n[lang].optIdea },
      { id: 'opt-game', text: i18n[lang].optGame },
      { id: 'opt-business', text: i18n[lang].optBusiness },
      { id: 'opt-other', text: i18n[lang].optOther },
      { id: 'label-message', text: i18n[lang].labelMessage },
      { id: 'submit-button', text: i18n[lang].submitBtn },
      { id: 'footer-text', text: i18n[lang].footerText }
    ];

    elementsToTranslate.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        if (item.isHTML) {
          el.innerHTML = item.text;
        } else {
          el.innerText = item.text;
        }
        
        // Hide lang info if empty to prevent empty margins
        if (item.id === 'teaser-lang-info') {
          el.style.display = item.text ? 'block' : 'none';
        }
      }
    });
  }

  // Bind Language Switcher Click Handlers
  document.getElementById('lang-ko').addEventListener('click', () => updateLanguage('ko'));
  document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  document.getElementById('lang-ja').addEventListener('click', () => updateLanguage('ja'));

  // Initialize language on load
  updateLanguage(currentLang);


  // --- 2. Canvas Steam/Ember Particle Generator ---
  const canvas = document.getElementById('steam-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 40; // Balanced for CPU/GPU efficiency
    
    // Set Canvas Dimensions
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle Class
    class Particle {
      constructor() {
        this.reset();
        // Stagger initial vertical placements to avoid sudden burst
        this.y = Math.random() * canvas.height;
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 4 + 1; // Subtle small particles
        this.speedY = -(Math.random() * 0.6 + 0.2); // Slow upward drift
        this.speedX = Math.random() * 0.4 - 0.2; // Slight sway
        this.opacity = Math.random() * 0.3 + 0.1; // Soft transparent glow
        this.fadeRate = Math.random() * 0.0015 + 0.0005;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fadeRate;
        
        // Sway naturally
        this.speedX += Math.sin(this.y * 0.01) * 0.005;
        
        if (this.y < 0 || this.opacity <= 0) {
          this.reset();
        }
      }
      
      draw() {
        ctx.beginPath();
        // Amber/Gold glow color matching --accent-amber / --accent-gold
        ctx.fillStyle = `rgba(229, 169, 59, ${this.opacity})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = 'rgba(217, 119, 6, 0.4)';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next render
      }
    }
    
    // Initialize Particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }
    
    // Render Loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }

  // --- 3. Interactive Input Focus Effects ---
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });

  // --- 4. Suggestion & Contact Form Handler ---
  const form = document.getElementById('suggest-form');
  const toast = document.getElementById('success-toast');
  const toastMsg = document.getElementById('toast-message');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Select Input Elements
      const nameInput = document.getElementById('user-name');
      const emailInput = document.getElementById('user-email');
      const categoryInput = document.getElementById('suggest-category');
      const messageInput = document.getElementById('user-message');
      const submitBtn = document.getElementById('submit-button');
      
      // Basic validation check
      let isValid = true;
      
      // Reset custom invalid visual states
      [nameInput, emailInput, categoryInput, messageInput].forEach(el => {
        el.style.borderColor = 'rgba(229, 169, 59, 0.15)';
      });
      
      if (!nameInput.value.trim()) {
        nameInput.style.borderColor = '#ef4444';
        isValid = false;
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = '#ef4444';
        isValid = false;
      }
      
      if (!categoryInput.value) {
        categoryInput.style.borderColor = '#ef4444';
        isValid = false;
      }
      
      if (!messageInput.value.trim()) {
        messageInput.style.borderColor = '#ef4444';
        isValid = false;
      }
      
      if (!isValid) {
        showToast(i18n[currentLang].toastValidationError);
        // Subtle shake animation on the form
        form.style.animation = 'shakeForm 0.4s ease';
        setTimeout(() => {
          form.style.animation = '';
        }, 400);
        return;
      }
      
      // Prevent double submissions & show visual loader
      submitBtn.disabled = true;
      const originalText = submitBtn.innerText;
      submitBtn.innerText = i18n[currentLang].submitLoading;
      submitBtn.style.opacity = '0.75';
      
      // Simulate network request
      setTimeout(() => {
        // Success Toast Notification
        showToast(i18n[currentLang].toastSuccess);
        
        // Reset state and clear inputs
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
        submitBtn.style.opacity = '1';
      }, 1800);
    });
  }
  
  // Custom Toast Notification Trigger
  function showToast(message) {
    if (toast && toastMsg) {
      toastMsg.innerText = message;
      toast.classList.add('show');
      
      // Auto-hide after 4.5 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4500);
    }
  }
});

// CSS Injection for Shake Form animation dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes shakeForm {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-6px); }
    40%, 80% { transform: translateX(6px); }
  }
`;
document.head.appendChild(styleSheet);
