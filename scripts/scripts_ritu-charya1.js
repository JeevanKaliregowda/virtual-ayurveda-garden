// Ritu Charya JavaScript with authentic Charaka Samhita information
console.log("Ritu Charya JavaScript loaded successfully!");

// Wait for page to load completely
window.addEventListener('load', function() {
    console.log("Page loaded! Initializing Ritu Charya...");
    
    // Get all DOM elements
    const rituCards = document.querySelectorAll('.ritu-card');
    const rituDetails = document.getElementById('ritu-details');
    const rituSelection = document.getElementById('ritu-selection');
    const selectedRituTitle = document.getElementById('selected-ritu-title');
    const selectedRituDescription = document.getElementById('selected-ritu-description');
    const doBtn = document.getElementById('do-btn');
    const avoidBtn = document.getElementById('avoid-btn');
    const doContent = document.getElementById('do-content');
    const avoidContent = document.getElementById('avoid-content');
    const doList = document.getElementById('do-list');
    const avoidList = document.getElementById('avoid-list');
    const backBtn = document.getElementById('back-btn');
    
    console.log("Found " + rituCards.length + " ritu cards");
    
    let currentSeason = '';
    
    // Comprehensive Ritu Charya data based on Charaka Samhita Chapter 6
    const seasonData = {
        vasant: {
            title: "Vasant Ritu (Spring Season)",
            description: "Spring season is when accumulated Kapha from winter gets aggravated. This is the time for detoxification and light foods.",
            doList: ["Eat light foods", "Exercise regularly", "Wake up early"],
            avoidList: ["Heavy foods", "Day sleep", "Cold drinks"]
        },
        grishma: {
            title: "Grishma Ritu (Summer Season)",
            description: "Summer season aggravates Pitta dosha. Focus on cooling foods and practices.",
            doList: ["Drink cool water", "Eat sweet fruits", "Stay in shade"],
            avoidList: ["Spicy foods", "Hot sun", "Anger"]
        },
        varsha: {
            title: "Varsha Ritu (Monsoon Season)",
            description: "Monsoon season affects digestion. Focus on warm, dry foods.",
            doList: ["Eat warm food", "Stay dry", "Use ginger"],
            avoidList: ["Raw food", "Getting wet", "Heavy meals"]
        },
        sharad: {
            title: "Sharad Ritu (Autumn Season)",
            description: "Autumn season when Pitta is naturally high. Practice cooling methods.",
            doList: ["Eat sweet foods", "Practice calm activities", "Sleep well"],
            avoidList: ["Spicy food", "Stress", "Sun exposure"]
        },
        shishir: {
            title: "Shishir Ritu (Winter Season)",
            description: "Winter season strengthens digestion. Time for nourishing foods.",
            doList: ["Eat heavy foods", "Exercise vigorously", "Oil massage"],
            avoidList: ["Cold food", "Cold baths", "Light meals"]
        },
        sheet: {
            title: "Sheet Ritu (Late Winter)",
            description: "Late winter continues cold season characteristics.",
            doList: ["Continue warm foods", "Stay warm", "Build immunity"],
            avoidList: ["Cold exposure", "Light diet", "Insufficient clothing"]
        }
    };
    
    // Add click event listeners to all season cards
    rituCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const seasonName = this.getAttribute('data-ritu');
            console.log("Season card clicked:", seasonName);
            
            // Remove active class from all cards
            rituCards.forEach(function(c) {
                c.classList.remove('active');
            });
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Set current season
            currentSeason = seasonName;
            
            // Show details after short animation delay
            setTimeout(function() {
                showSeasonDetails(seasonName);
            }, 300);
        });
    });
    
    // Do button click event
    if (doBtn) {
        doBtn.addEventListener('click', function() {
            console.log("Do button clicked");
            showDoList();
        });
    }
    
    // Avoid button click event
    if (avoidBtn) {
        avoidBtn.addEventListener('click', function() {
            console.log("Avoid button clicked");
            showAvoidList();
        });
    }
    
    // Back button click event
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            console.log("Back button clicked");
            goBackToSelection();
        });
    }
    
    // Function to show season details
    function showSeasonDetails(seasonName) {
        const season = seasonData[seasonName];
        if (!season) {
            console.error("Season data not found for:", seasonName);
            return;
        }
        
        console.log("Showing details for:", seasonName);
        
        // Update title and description
        if (selectedRituTitle) {
            selectedRituTitle.textContent = season.title;
        }
        if (selectedRituDescription) {
            selectedRituDescription.textContent = season.description;
        }
        
        // Hide selection section and show details
        if (rituSelection) rituSelection.style.display = 'none';
        if (rituDetails) rituDetails.style.display = 'block';
        
        // Reset button states
        resetButtons();
        
        // Smooth scroll to details section
        if (rituDetails) {
            rituDetails.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Function to show do list
    function showDoList() {
        const season = seasonData[currentSeason];
        if (!season) {
            console.error("No season selected or season data not found");
            return;
        }
        
        console.log("Showing do list for:", currentSeason);
        
        // Reset button states
        resetButtons();
        
        // Activate do button
        if (doBtn) doBtn.classList.add('active');
        
        // Show do content with formatted list
        if (doContent && doList) {
            doContent.style.display = 'block';
            doList.innerHTML = '<ul>' + 
                season.doList.map(function(item) {
                    return '<li>' + item + '</li>';
                }).join('') + 
                '</ul>';
        }
    }
    
    // Function to show avoid list
    function showAvoidList() {
        const season = seasonData[currentSeason];
        if (!season) {
            console.error("No season selected or season data not found");
            return;
        }
        
        console.log("Showing avoid list for:", currentSeason);
        
        // Reset button states
        resetButtons();
        
        // Activate avoid button
        if (avoidBtn) avoidBtn.classList.add('active');
        
        // Show avoid content with formatted list
        if (avoidContent && avoidList) {
            avoidContent.style.display = 'block';
            avoidList.innerHTML = '<ul>' + 
                season.avoidList.map(function(item) {
                    return '<li>' + item + '</li>';
                }).join('') + 
                '</ul>';
        }
    }
    
    // Function to reset button states
    function resetButtons() {
        if (doBtn) doBtn.classList.remove('active');
        if (avoidBtn) avoidBtn.classList.remove('active');
        if (doContent) doContent.style.display = 'none';
        if (avoidContent) avoidContent.style.display = 'none';
    }
    
    // Function to go back to season selection
    function goBackToSelection() {
        console.log("Going back to season selection");
        
        // Remove active class from all cards
        rituCards.forEach(function(card) {
            card.classList.remove('active');
        });
        
        // Hide details and show selection
        if (rituDetails) rituDetails.style.display = 'none';
        if (rituSelection) rituSelection.style.display = 'block';
        
        // Reset all states
        resetButtons();
        currentSeason = '';
        
        // Smooth scroll to selection section
        if (rituSelection) {
            rituSelection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Add smooth animations for better user experience
    rituCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
    });
    
    console.log("Ritu Charya initialization completed successfully!");
});

// Additional utility functions for enhanced functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Error handling for missing elements
function checkRequiredElements() {
    const requiredElements = [
        'ritu-selection',
        'ritu-details', 
        'selected-ritu-title',
        'selected-ritu-description',
        'do-btn',
        'avoid-btn',
        'back-btn'
    ];
    
    let missingElements = [];
    
    requiredElements.forEach(function(elementId) {
        if (!document.getElementById(elementId)) {
            missingElements.push(elementId);
        }
    });
    
    if (missingElements.length > 0) {
        console.error("Missing required elements:", missingElements);
        return false;
    }
    
    return true;
}

// Initialize element check on load
document.addEventListener('DOMContentLoaded', function() {
    if (!checkRequiredElements()) {
        console.error("Ritu Charya page is missing required elements!");
    }
});

console.log("Ritu Charya script file loaded completely!");