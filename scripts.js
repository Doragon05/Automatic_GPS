function toggleMenu() {
        document.querySelector('.menu-container').classList.toggle('active');
    }
function setupMenuLinks() {
    document.getElementById('calendar-link').href = 'https://doragon05.github.io/kalendarz_gmin/';
    document.getElementById('schedule-link').href = 'https://greenmax2020.sharepoint.com/:x:/s/dzial-terenowych-sil-sprzedazy/ETzLx_rPRsFNt1ooG8RK0_4BLarL4zLC5eYuqq9gZu1Lgw'; 
    document.getElementById('report-link').href = 'https://doragon05.github.io/kalendarz_gmin/raporty.html'; 
    document.getElementById('range-link').href = 'https://doragon05.github.io/kalendarz_gmin/zasieg/zasieg.html'; 
}
document.addEventListener('DOMContentLoaded', setupMenuLinks);