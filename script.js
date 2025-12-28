const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // animate once
            }
        });
    },
    {
        threshold: 0
    }
);

reveals.forEach(el => observer.observe(el));


// Device & browser infoF
document.getElementById("device").value =
    /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop";

document.getElementById("browser").value = navigator.userAgent;


document.getElementById("os").value = navigator.platform;

document.getElementById("timezone").value =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("screen").value =
    `${window.screen.width}x${window.screen.height}`;

