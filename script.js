// AOS 초기화
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 50
});

// 헤더 스크롤 효과
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// 모바일 메뉴 토글
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

// 히어로 섹션 슬라이더
const heroSwiper = new Swiper('.hero-slider', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 리뷰 슬라이더
const reviewSwiper = new Swiper('.review-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// 메뉴 필터링
const menuCategories = document.querySelectorAll('.menu-category');
const menuItems = document.querySelectorAll('.menu-item');

menuCategories.forEach(category => {
    category.addEventListener('click', () => {
        // 활성 버튼 업데이트
        menuCategories.forEach(cat => cat.classList.remove('active'));
        category.classList.add('active');
        
        // 메뉴 아이템 필터링
        const selectedCategory = category.dataset.category;
        
        menuItems.forEach(item => {
            if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        });
    });
});

// 메뉴 상세 정보 토글
document.querySelectorAll('.detail-btn').forEach(button => {
    button.addEventListener('click', () => {
        // 현재 활성화된 다른 상세 정보 닫기
        const activeButton = document.querySelector('.detail-btn.active');
        const activeDetails = document.querySelector('.menu-details.active');
        
        if (activeButton && activeButton !== button) {
            activeButton.classList.remove('active');
            activeDetails.classList.remove('active');
        }

        // 현재 버튼의 상세 정보 토글
        const details = button.nextElementSibling;
        const detailsText = details.querySelector('.details-text');
        
        button.classList.toggle('active');
        details.classList.toggle('active');
        
        // 상세 정보 텍스트 설정
        if (details.classList.contains('active')) {
            detailsText.textContent = button.dataset.menuDetails;
            button.textContent = '접기';
        } else {
            button.textContent = '더보기';
        }
    });
});

// FAQ 토글
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // 다른 모든 FAQ 항목 닫기
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 클릭한 항목 토글
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// 뉴스레터 폼 제출
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // 여기에 실제 뉴스레터 구독 API 호출 추가
        alert('뉴스레터 구독이 완료되었습니다!');
        newsletterForm.reset();
    });
}

// 주문하기 버튼 클릭 이벤트
const orderButtons = document.querySelectorAll('.order-now-btn');
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 여기에 주문 처리 로직 추가
        alert('주문 시스템 준비 중입니다.');
    });
});

// 페이지 로드 시 초기화
window.addEventListener('load', () => {
    // 페이지 로드 애니메이션
    document.body.classList.add('loaded');
}); 