console.log("Ritu Charya JavaScript loaded successfully!");

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded, initializing Ritu Charya...");
    
    // Get all elements
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
    
    let currentRitu = null;
    
    console.log("Found " + rituCards.length + " ritu cards");
    
    // Sample data for testing
    const rituData = {
        vasant: {
            title: "Vasant Ritu (Spring Season)",
            description: "Spring season is when accumulated Kapha from winter gets aggravated. This is the time for detoxification and light foods.",
            do: ["Eat light foods", "Exercise regularly", "Wake up early"],
            avoid: ["Heavy foods", "Day sleep", "Cold drinks"]
        },
        grishma: {
            title: "Grishma Ritu (Summer Season)",
            description: "Summer season aggravates Pitta dosha. Focus on cooling foods and practices.",
            do: ["Drink cool water", "Eat sweet fruits", "Stay in shade"],
            avoid: ["Spicy foods", "Hot sun", "Anger"]
        },
        varsha: {
            title: "Varsha Ritu (Monsoon Season)",
            description: "Monsoon season affects digestion. Focus on warm, dry foods.",
            do: ["Eat warm food", "Stay dry", "Use ginger"],
            avoid: ["Raw food", "Getting wet", "Heavy meals"]
        },
        sharad: {
            title: "Sharad Ritu (Autumn Season)",
            description: "Autumn season when Pitta is naturally high. Practice cooling methods.",
            do: ["Eat sweet foods", "Practice calm activities", "Sleep well"],
            avoid: ["Spicy food", "Stress", "Sun exposure"]
        },
        shishir: {
            title: "Shishir Ritu (Winter Season)",
            description: "Winter season strengthens digestion. Time for nourishing foods.",
            do: ["Eat heavy foods", "Exercise vigorously", "Oil massage"],
            avoid: ["Cold food", "Cold baths", "Light meals"]
        },
        sheet: {
            title: "Sheet Ritu (Late Winter)",
            description: "Late winter continues cold season characteristics.",
            do: ["Continue warm foods", "Stay warm", "Build immunity"],
            avoid: ["Cold exposure", "Light diet", "Insufficient clothing"]
        }
    };
    
    // Add click listeners to cards
    rituCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const rituName = this.getAttribute('data-ritu');
            console.log("Card clicked:", rituName);
            
            // Remove active class from all cards
            rituCards.forEach(function(c) {
                c.classList.remove('active');
            });
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Show details after a short delay
            setTimeout(function() {
                showRituDetails(rituName);
            }, 300);
        });
    });
    
    // Add click listeners to action buttons
    if (doBtn) {
        doBtn.addEventListener('click', function() {
            console.log("Do button clicked");
            showGuidelines('do');
        });
    }
    
    if (avoidBtn) {
        avoidBtn.addEventListener('click', function() {
            console.log("Avoid button clicked");
            showGuidelines('avoid');
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            console.log("Back button clicked");
            goBackToSelection();
        });
    }
    
    function showRituDetails(rituName) {
        console.log("Showing details for:", rituName);
        currentRitu = rituName;
        const ritu = rituData[rituName];
        
        if (selectedRituTitle && selectedRituDescription) {
            selectedRituTitle.textContent = ritu.title;
            selectedRituDescription.textContent = ritu.description;
        }
        
        // Hide selection and show details
        if (rituSelection) rituSelection.style.display = 'none';
        if (rituDetails) rituDetails.style.display = 'block';
        
        // Reset button states
        if (doBtn) doBtn.classList.remove('active');
        if (avoidBtn) avoidBtn.classList.remove('active');
        if (doContent) doContent.style.display = 'none';
        if (avoidContent) avoidContent.style.display = 'none';
        
        // Scroll to details
        if (rituDetails) {
            rituDetails.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    function showGuidelines(type) {
        console.log("Showing guidelines:", type);
        
        // Reset states
        if (doBtn) doBtn.classList.remove('active');
        if (avoidBtn) avoidBtn.classList.remove('active');
        if (doContent) doContent.style.display = 'none';
        if (avoidContent) avoidContent.style.display = 'none';
        
        const ritu = rituData[currentRitu];
        
        if (type === 'do') {
            if (doBtn) doBtn.classList.add('active');
            if (doContent) doContent.style.display = 'block';
            if (doList) populateSimpleList(doList, ritu.do);
        } else {
            if (avoidBtn) avoidBtn.classList.add('active');
            if (avoidContent) avoidContent.style.display = 'block';
            if (avoidList) populateSimpleList(avoidList, ritu.avoid);
        }
    }
    
    function populateSimpleList(container, items) {
        container.innerHTML = '<ul class="simple-list"></ul>';
        const list = container.querySelector('.simple-list');
        
        items.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
    
    function goBackToSelection() {
        console.log("Going back to selection");
        
        // Remove active from all cards
        rituCards.forEach(function(card) {
            card.classList.remove('active');
        });
        
        if (rituDetails) rituDetails.style.display = 'none';
        if (rituSelection) rituSelection.style.display = 'block';
        
        if (rituSelection) {
            rituSelection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    console.log("Ritu Charya initialization complete!");
});