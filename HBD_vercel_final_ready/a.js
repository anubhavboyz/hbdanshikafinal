const linkmp3 = document.getElementById("linkmp3");
const kadoIn = document.getElementById("kadoIn");
const wallpaper = document.getElementById("wallpaper");
const ket = document.getElementById("ket");
const Content = document.getElementById("Content");
const halo = document.getElementById("halo");
const bq = document.getElementById("bq");
const kalimat = document.getElementById("kalimat");
const pesan1 = document.getElementById("pesan1");
const pesan2 = document.getElementById("pesan2");
const pesan3 = document.getElementById("pesan3");
const pesan4 = document.getElementById("pesan4");
const pesan5 = document.getElementById("pesan5");
const pesan6 = document.getElementById("pesan6");
const opsL = document.getElementById("opsL");
const Tombol = document.getElementById("Tombol");
const By = document.getElementById("By");
const pesanditolak = document.getElementById("pesanditolak");

// Sticker elements
const fotostiker = document.getElementById("fotostiker");
const fotostiker1 = document.getElementById("fotostiker1");
const fotostiker2 = document.getElementById("fotostiker2");
const fotostiker3 = document.getElementById("fotostiker3");
const fotostiker4 = document.getElementById("fotostiker4");
const fotostiker5 = document.getElementById("fotostiker5");

// Level elements
const lv1 = document.getElementById("lv1");
const lv2 = document.getElementById("lv2");
const lv3 = document.getElementById("lv3");
const lv4 = document.getElementById("lv4");

let fungsiAwal = 0;
let audio = new Audio();
let clickCount = 0;

// Audio setup with error handling
if(linkmp3 && linkmp3.src) {
    audio.src = linkmp3.src;
} else {
    console.log("Audio file not found");
}

// Initially hide all elements
function hideAllElements() {
    const elementsToHide = [
        kalimat, pesan1, pesan2, pesan3, pesan4, pesan5, pesan6,
        opsL, Tombol, pesanditolak, fotostiker, fotostiker1, 
        fotostiker2, fotostiker3, fotostiker4, fotostiker5
    ];
    
    elementsToHide.forEach(element => {
        if(element) element.style.display = "none";
    });
    
    // Reset level backgrounds
    [lv1, lv2, lv3, lv4].forEach(level => {
        if(level) level.style.backgroundColor = "transparent";
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    hideAllElements();
});

// Gift box click handler
if(kadoIn) {
    kadoIn.addEventListener('click', async function() {
        if (fungsiAwal === 0) {
            // Try to play audio
            try {
                await audio.play();
            } catch(e) {
                console.log("Audio playback failed:", e);
            }
            
            fungsiAwal = 1;
            kadoIn.style.cssText = "transition:all .8s ease;transform:scale(10);opacity:0";
            if(wallpaper) wallpaper.style.cssText = "transform: scale(1.5);";
            if(ket) ket.style.display = "none";
            
            setTimeout(() => {
                Swal.fire({
                    title: "What's your beautiful name?",
                    input: "text",
                    inputValidator: (value) => {
                        if (!value || value.length > 12) return "Please enter a short name!";
                    },
                    allowOutsideClick: false,
                    showCancelButton: false
                }).then(result => {
                    if (result.value) {
                        if(halo) halo.innerText = "Happy Birthday, " + result.value + "!";
                        
                        // Show initial elements
                        if(kalimat) kalimat.style.display = "block";
                        if(Tombol) Tombol.style.display = "block";
                        if(fotostiker) fotostiker.style.display = "block";
                        
                        console.log("Initial setup complete, clickCount:", clickCount);
                    }
                });
            }, 500);
        }
    });
}

// Next button click handler - FIXED VERSION
if(By) {
    By.addEventListener('click', function(e) {
        e.preventDefault();
        handleNextClick();
    });
}

// Level emoji click handlers - NEW FEATURE
function setupEmojiClickHandlers() {
    if(lv1) {
        lv1.addEventListener('click', function() {
            if(clickCount === 0) handleNextClick(); // Only if it's the current level
        });
    }
    
    if(lv2) {
        lv2.addEventListener('click', function() {
            if(clickCount === 1) handleNextClick(); // Only if it's the current level
        });
    }
    
    if(lv3) {
        lv3.addEventListener('click', function() {
            if(clickCount === 2) handleNextClick(); // Only if it's the current level
        });
    }
    
    if(lv4) {
        lv4.addEventListener('click', function() {
            if(clickCount === 5) handleNextClick(); // Only if it's the current level
        });
    }
}

// Initialize emoji click handlers
window.addEventListener('DOMContentLoaded', function() {
    hideAllElements();
    setupEmojiClickHandlers();
});

// Main function to handle progression - extracted for reuse
function handleNextClick() {
    console.log("Next action triggered! Current clickCount:", clickCount);
    
    clickCount++;
    
    switch(clickCount) {
            case 1:
                console.log("Case 1 executed");
                if(kalimat) kalimat.style.display = "none";
                if(pesan1) pesan1.style.display = "block";
                // Level 1 highlight - 🎂 (make it current)
                if(lv1) {
                    lv1.classList.add('current');
                    lv1.classList.remove('completed');
                }
                if(fotostiker) fotostiker.style.display = "none";
                if(fotostiker1) fotostiker1.style.display = "block";
                break;
                
            case 2:
                console.log("Case 2 executed");
                if(pesan1) pesan1.style.display = "none";
                if(pesan2) pesan2.style.display = "block";
                // Level 1 completed, Level 2 current
                if(lv1) {
                    lv1.classList.remove('current');
                    lv1.classList.add('completed');
                }
                if(lv2) {
                    lv2.classList.add('current');
                    lv2.classList.remove('completed');
                }
                if(fotostiker1) fotostiker1.style.display = "none";
                if(fotostiker2) fotostiker2.style.display = "block";
                break;
                
            case 3:
                console.log("Case 3 executed");
                if(pesan2) pesan2.style.display = "none";
                if(pesan3) pesan3.style.display = "block";
                // Level 2 completed, Level 3 current
                if(lv2) {
                    lv2.classList.remove('current');
                    lv2.classList.add('completed');
                }
                if(lv3) {
                    lv3.classList.add('current');
                    lv3.classList.remove('completed');
                }
                if(fotostiker2) fotostiker2.style.display = "none";
                if(fotostiker3) fotostiker3.style.display = "block";
                break;
                
            case 4:
                console.log("Case 4 executed");
                if(pesan3) pesan3.style.display = "none";
                if(pesan4) {
                    pesan4.innerText = "It's because it's your special day, filled with joy!";
                    pesan4.style.display = "block";
                }
                if(fotostiker3) fotostiker3.style.display = "none";
                if(fotostiker4) fotostiker4.style.display = "block";
                break;
                
            case 5:
                console.log("Case 5 executed");
                if(pesan4) pesan4.style.display = "none";
                if(pesan5) {
                    pesan5.innerText = "May your day be as beautiful as you are, darling!";
                    pesan5.style.display = "block";
                }
                if(fotostiker4) fotostiker4.style.display = "none";
                if(fotostiker5) fotostiker5.style.display = "block";
                break;
                
            case 6:
                console.log("Case 6 executed");
                if(pesan5) pesan5.style.display = "none";
                if(pesan6) {
                    pesan6.innerText = "Wishing you endless happiness and success! ❤️";
                    pesan6.style.display = "block";
                }
                // Level 3 completed, Level 4 current
                if(lv3) {
                    lv3.classList.remove('current');
                    lv3.classList.add('completed');
                }
                if(lv4) {
                    lv4.classList.add('current');
                    lv4.classList.remove('completed');
                }
                if(fotostiker5) fotostiker5.style.display = "none";
                break;
                
            case 7:
                console.log("Case 7 executed");
                if(pesan6) pesan6.style.display = "none";
                if(opsL) opsL.style.display = "block";
                if(By) By.innerText = "🎉Open it bubuu🎉";
                // All levels completed
                if(lv4) {
                    lv4.classList.remove('current');
                    lv4.classList.add('completed');
                }
                break;
                
            case 8:
                console.log("Case 8 executed - Redirecting");
                window.location.href = "https://anubhavboyz.github.io/forpic/index.html";
                break;
                
            default:
                console.log("Default case - no action");
                break;
        }
    }