// Virtual Herbal Garden Quiz System with 50 Questions and Enhanced Protection
console.log("Enhanced Quiz system with 50 questions and click protection initializing...");

// Comprehensive quiz database with 50 questions based on website content
const allQuizQuestions = [
    // Medicinal Plants Questions (20 questions)
    {
        question: "Which plant is known as 'Holy Basil' and has anti-inflammatory, anti-viral, and antioxidant properties?",
        options: ["Ashwagandha", "Tulsi", "Turmeric", "Cardamom"],
        correct: 1,
        category: "plants",
        explanation: "Tulsi (Ocimum sanctum) is known as Holy Basil and is renowned for its anti-inflammatory, anti-viral, and antioxidant properties."
    },
    {
        question: "What is the scientific name of Ashwagandha featured in our herbal garden?",
        options: ["Ocimum sanctum", "Withania somnifera", "Curcuma longa", "Elettaria cardamomum"],
        correct: 1,
        category: "plants",
        explanation: "Ashwagandha's scientific name is Withania somnifera, also known as Indian Ginseng and Winter Cherry."
    },
    {
        question: "Which spice is known as 'Indian Saffron' and has powerful anti-inflammatory properties?",
        options: ["Cinnamon", "Clove", "Turmeric", "Cardamom"],
        correct: 2,
        category: "plants",
        explanation: "Turmeric (Curcuma longa) is known as Indian Saffron or Haldi and is famous for its anti-inflammatory and antioxidant properties."
    },
    {
        question: "Cinnamon (Cinnamomum verum) is native to which country?",
        options: ["India", "Indonesia", "Sri Lanka", "Thailand"],
        correct: 2,
        category: "plants",
        explanation: "Cinnamon (Cinnamomum verum) is native to Sri Lanka and is also known as Ceylon Cinnamon or True Cinnamon."
    },
    {
        question: "Which plant is known as 'True Cardamom' and supports digestive health?",
        options: ["Elettaria cardamomum", "Syzygium aromaticum", "Cinnamomum verum", "Curcuma longa"],
        correct: 0,
        category: "plants",
        explanation: "Elettaria cardamomum is known as True Cardamom and is excellent for supporting digestive health and has antimicrobial properties."
    },
    {
        question: "Clove (Syzygium aromaticum) is native to which region?",
        options: ["India", "Indonesia", "Sri Lanka", "China"],
        correct: 1,
        category: "plants",
        explanation: "Clove (Syzygium aromaticum) is native to Indonesia and is known for pain relief, antibacterial and antioxidant properties."
    },
    {
        question: "What type of climate does Turmeric prefer for cultivation?",
        options: ["Cold and dry", "Warm and humid", "Desert climate", "Arctic climate"],
        correct: 1,
        category: "plants",
        explanation: "Turmeric requires a warm, humid climate and grows well in rich, well-drained soil with ample rainfall."
    },
    {
        question: "Which plant is known as 'Indian Ginseng' and helps reduce stress?",
        options: ["Tulsi", "Ashwagandha", "Turmeric", "Cinnamon"],
        correct: 1,
        category: "plants",
        explanation: "Ashwagandha is known as Indian Ginseng and is an adaptogen that helps reduce stress and anxiety while boosting immunity."
    },
    {
        question: "What is the common habitat for Tulsi plants?",
        options: ["Desert regions", "Arctic regions", "Gardens and homes in India", "Ocean floors"],
        correct: 2,
        category: "plants",
        explanation: "Tulsi is native to India and is commonly found in gardens and homes, often grown in pots or garden beds."
    },
    {
        question: "Which plant mentioned in our garden is used for pain relief and has antibacterial properties?",
        options: ["Cardamom", "Clove", "Turmeric", "Cinnamon"],
        correct: 1,
        category: "plants",
        explanation: "Clove is used for pain relief and has antibacterial and antioxidant properties, often used in dental care."
    },
    {
        question: "What type of soil does Ashwagandha prefer for optimal growth?",
        options: ["Waterlogged soil", "Dry, well-drained soil", "Clay soil only", "Sandy beaches"],
        correct: 1,
        category: "plants",
        explanation: "Ashwagandha prefers dry, well-drained soil and full sunlight, thriving in arid regions."
    },
    {
        question: "Which plant helps regulate blood sugar levels according to our garden information?",
        options: ["Tulsi", "Cinnamon", "Cardamom", "Clove"],
        correct: 1,
        category: "plants",
        explanation: "Cinnamon helps regulate blood sugar levels and has anti-inflammatory properties."
    },
    {
        question: "What is the primary medicinal use of Cardamom mentioned in our garden?",
        options: ["Pain relief", "Blood sugar control", "Digestive health", "Skin care"],
        correct: 2,
        category: "plants",
        explanation: "Cardamom supports digestive health and has antimicrobial properties, making it excellent for digestion."
    },
    {
        question: "Which plant in our garden is described as an 'adaptogen'?",
        options: ["Turmeric", "Ashwagandha", "Clove", "Cardamom"],
        correct: 1,
        category: "plants",
        explanation: "Ashwagandha is described as an adaptogen, helping the body adapt to stress and maintain balance."
    },
    {
        question: "What growing condition is mentioned for Cardamom cultivation?",
        options: ["Desert climate", "Moist, tropical climate", "Arctic conditions", "High altitude only"],
        correct: 1,
        category: "plants",
        explanation: "Cardamom requires a moist, tropical climate and well-drained soil for optimal growth."
    },
    {
        question: "Which plant is specifically mentioned to boost immunity in our garden?",
        options: ["Cinnamon", "Ashwagandha", "Cardamom", "All of the above"],
        correct: 1,
        category: "plants",
        explanation: "Ashwagandha is specifically mentioned to boost immunity along with its stress-reducing properties."
    },
    {
        question: "What is the primary habitat requirement for Clove cultivation?",
        options: ["Cold climate", "Tropical climate", "Desert climate", "Temperate climate"],
        correct: 1,
        category: "plants",
        explanation: "Clove thrives in tropical climates with warm, humid conditions and rich, well-drained soil."
    },
    {
        question: "Which plant mentioned in our garden has antioxidant properties and is used in digestive health?",
        options: ["Turmeric", "Cinnamon", "Cardamom", "All of the above"],
        correct: 3,
        category: "plants",
        explanation: "Turmeric, Cinnamon, and Cardamom all have antioxidant properties and support digestive health."
    },
    {
        question: "What makes Tulsi special in traditional Indian households?",
        options: ["It's expensive", "It's considered sacred", "It's rare", "It's imported"],
        correct: 1,
        category: "plants",
        explanation: "Tulsi is considered sacred in Indian culture and is often grown in homes for its spiritual and medicinal significance."
    },
    {
        question: "Which cultivation method is mentioned for Tulsi in our garden?",
        options: ["Only in forests", "In pots or garden beds", "Only in greenhouses", "Only wild growth"],
        correct: 1,
        category: "plants",
        explanation: "Tulsi grows well in pots or garden beds, making it suitable for home cultivation."
    },

    // Ritu Charya Questions (25 questions)
    {
        question: "According to Charaka Samhita, which season is best for detoxification and light foods?",
        options: ["Grishma Ritu (Summer)", "Vasant Ritu (Spring)", "Varsha Ritu (Monsoon)", "Shishir Ritu (Winter)"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Vasant Ritu (Spring) is when accumulated Kapha gets aggravated, making it the ideal time for detoxification and consuming light foods."
    },
    {
        question: "During Grishma Ritu (Summer), which breathing technique is recommended?",
        options: ["Bhastrika Pranayama", "Sheetali Pranayama", "Ujjayi Pranayama", "Kapalbhati Pranayama"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Sheetali Pranayama is a cooling breathing technique recommended during summer to reduce Pitta dosha."
    },
    {
        question: "What type of foods should be avoided during Varsha Ritu (Monsoon)?",
        options: ["Warm, cooked foods", "Fresh, seasonal vegetables", "Raw vegetables and street food", "Digestive spices"],
        correct: 2,
        category: "ritu_charya",
        explanation: "During monsoon, raw vegetables and street food should be avoided as they can cause infections due to weakened Agni."
    },
    {
        question: "Which season requires the most nourishing and heavy foods according to Ritu Charya?",
        options: ["Spring (Vasant)", "Summer (Grishma)", "Monsoon (Varsha)", "Winter (Shishir)"],
        correct: 3,
        category: "ritu_charya",
        explanation: "Winter (Shishir Ritu) requires nourishing, heavy foods as digestive fire is strongest and body needs warmth."
    },
    {
        question: "What is the main principle behind Ritu Charya?",
        options: ["Eating only seasonal fruits", "Following lunar calendar", "Living in harmony with seasonal cycles", "Avoiding all spices"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Ritu Charya is about living in harmony with nature's seasonal cycles through specific lifestyle and dietary guidelines."
    },
    {
        question: "Which dosha gets aggravated during Vasant Ritu (Spring)?",
        options: ["Vata", "Pitta", "Kapha", "All doshas"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Kapha dosha gets aggravated during spring due to accumulated Kapha from winter and increasing sun's heat."
    },
    {
        question: "What should be the primary taste in diet during summer according to Ayurveda?",
        options: ["Pungent and hot", "Sweet, bitter and astringent", "Sour and salty", "Only bitter"],
        correct: 1,
        category: "ritu_charya",
        explanation: "During summer, sweet, bitter, and astringent tastes help cool the body and balance Pitta dosha."
    },
    {
        question: "During which season is Panchakarma therapy most recommended?",
        options: ["Summer", "Spring", "Monsoon", "Winter"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Spring is the ideal time for Panchakarma therapies, especially detoxification treatments like Vamana."
    },
    {
        question: "What type of exercise is recommended during Shishir Ritu (Winter)?",
        options: ["Light exercise only", "No exercise", "Vigorous exercise", "Only breathing exercises"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Vigorous exercise is recommended during winter to generate internal heat and maintain strength."
    },
    {
        question: "Which season naturally increases digestive fire (Agni)?",
        options: ["Spring", "Summer", "Monsoon", "Winter"],
        correct: 3,
        category: "ritu_charya",
        explanation: "Winter naturally increases digestive fire, making it the best time for nourishing and strengthening therapies."
    },
    {
        question: "What should be avoided during Sharad Ritu (Autumn)?",
        options: ["Cool foods", "Hot and spicy foods", "Sweet foods", "Bitter foods"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Hot and spicy foods should be avoided during autumn as accumulated Pitta gets aggravated after monsoon."
    },
    {
        question: "During monsoon, which spices are particularly recommended for digestion?",
        options: ["Cooling spices", "Ginger, cumin, and asafoetida", "No spices", "Only sweet spices"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Digestive spices like ginger, cumin, and asafoetida help maintain digestive fire during monsoon."
    },
    {
        question: "What time is recommended for waking up during Vasant Ritu?",
        options: ["Late morning", "Before sunrise (Brahma Muhurta)", "Afternoon", "Evening"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Waking up before sunrise during Brahma Muhurta (4-6 AM) is recommended during spring for optimal health."
    },
    {
        question: "Which therapy is particularly beneficial during summer heat?",
        options: ["Hot oil massage", "Cooling oil massage", "Steam therapy", "Heating treatments"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Cooling oil massage with coconut or other cooling oils is beneficial during summer heat."
    },
    {
        question: "What should be the focus during Sheet Ritu (Late Winter)?",
        options: ["Light foods", "Cooling practices", "Continued nourishment and warmth", "Fasting"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Late winter requires continued nourishment and warmth while gradually preparing for spring transition."
    },
    {
        question: "During which season is day sleep (Divaswapna) most harmful?",
        options: ["Winter", "Summer", "Spring", "Autumn"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Day sleep is particularly harmful during spring as it can further aggravate Kapha dosha."
    },
    {
        question: "What type of water is recommended during Varsha Ritu?",
        options: ["Cold water", "River water", "Boiled and cooled water", "Ice water"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Boiled and cooled water is recommended during monsoon to avoid infections and maintain digestive health."
    },
    {
        question: "Which Pranayama is specifically mentioned for winter season?",
        options: ["Sheetali", "Bhastrika", "Sheetkari", "Anulom Vilom"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Bhastrika Pranayama is recommended for winter as it generates internal heat and energy."
    },
    {
        question: "During summer, what type of clothing is recommended?",
        options: ["Dark, tight clothes", "Heavy woolen clothes", "Light-colored, loose cotton clothes", "No preference"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Light-colored, loose cotton clothes are recommended during summer for maximum comfort and cooling."
    },
    {
        question: "What is the ideal timing for oil massage during winter?",
        options: ["Evening only", "Morning with warm oil", "Not recommended", "Cold oil anytime"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Morning oil massage with warm sesame oil is ideal during winter for nourishment and warmth."
    },
    {
        question: "Which season requires special attention to maintain hygiene?",
        options: ["Spring", "Summer", "Monsoon", "Winter"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Monsoon requires special attention to hygiene due to increased humidity and risk of infections."
    },
    {
        question: "During autumn, what practice is specifically mentioned for cooling?",
        options: ["Sun bathing", "Hot baths", "Moonlight exposure", "Fire gazing"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Moonlight exposure (Chandrama Snan) is specifically mentioned for cooling during autumn season."
    },
    {
        question: "What should be increased in diet during Shishir Ritu?",
        options: ["Cold foods", "Raw foods", "Ghee and warm foods", "Fruits only"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Ghee and warm, nourishing foods should be increased during winter for strength and warmth."
    },
    {
        question: "Which season is associated with weakened Agni (digestive fire)?",
        options: ["Spring", "Summer", "Monsoon", "Winter"],
        correct: 2,
        category: "ritu_charya",
        explanation: "Monsoon season is associated with weakened Agni due to humidity and atmospheric changes."
    },
    {
        question: "What is the primary concern during Grishma Ritu according to Ayurveda?",
        options: ["Kapha aggravation", "Pitta aggravation", "Vata aggravation", "No concerns"],
        correct: 1,
        category: "ritu_charya",
        explanation: "Pitta aggravation due to intense heat is the primary concern during summer season."
    },

    // Ayurvedic Principles and General Knowledge (5 questions)
    {
        question: "In which chapter of Charaka Samhita is Ritu Charya described?",
        options: ["Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7"],
        correct: 2,
        category: "ayurveda",
        explanation: "Ritu Charya is described in Chapter 6 of Charaka Samhita, detailing seasonal lifestyle practices."
    },
    {
        question: "What does 'Pathya' mean in Ayurvedic context?",
        options: ["Things to avoid", "Recommended practices", "Neutral actions", "Emergency treatments"],
        correct: 1,
        category: "ayurveda",
        explanation: "Pathya refers to recommended practices, foods, and lifestyle choices that promote health."
    },
    {
        question: "What does 'Apathya' mean in Ayurvedic terminology?",
        options: ["Recommended practices", "Things to avoid", "Neutral foods", "Seasonal fruits"],
        correct: 1,
        category: "ayurveda",
        explanation: "Apathya refers to things to avoid - foods, activities, or practices that can harm health."
    },
    {
        question: "According to Ayurveda, how many main seasons (Ritus) are there?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        category: "ayurveda",
        explanation: "According to Ayurveda, there are 6 main seasons (Ritus): Vasant, Grishma, Varsha, Sharad, Shishir, and Sheet."
    },
    {
        question: "What is the primary goal of following Ritu Charya?",
        options: ["Weight loss", "Maintaining optimal health", "Social acceptance", "Economic benefits"],
        correct: 1,
        category: "ayurveda",
        explanation: "The primary goal of Ritu Charya is maintaining optimal health and preventing diseases throughout the year."
    }
];

// Quiz state management with enhanced protection
let currentQuizQuestions = []; // Will store 10 random questions for current quiz
let currentQuestion = 0;
let score = 0;
let userName = "";
let selectedAnswers = [];
let quizStartTime = null;

// Enhanced protection flags
let isProcessingNext = false; // Flag to prevent multiple clicks
let answerRevealed = false; // Flag to track if answer is being shown
let quizLocked = false; // General quiz lock

// DOM elements
const welcomeSection = document.getElementById('quiz-welcome');
const nameInputSection = document.getElementById('name-input');
const questionsSection = document.getElementById('quiz-questions');
const resultsSection = document.getElementById('quiz-results');

const startQuizBtn = document.getElementById('start-quiz-btn');
const userNameInput = document.getElementById('user-name');
const submitNameBtn = document.getElementById('submit-name-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
let nextBtn = document.getElementById('next-btn'); // Let instead of const for replacement
const progressFill = document.getElementById('progress-fill');
const questionCounter = document.getElementById('question-counter');
const displayName = document.getElementById('display-name');

// Results elements
const resultName = document.getElementById('result-name');
const finalScore = document.getElementById('final-score');
const scorePercentage = document.getElementById('score-percentage');
const performanceTitle = document.getElementById('performance-title');
const performanceDescription = document.getElementById('performance-description');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const accuracyPercentage = document.getElementById('accuracy-percentage');

// Action buttons
const retakeQuizBtn = document.getElementById('retake-quiz-btn');
const exploreMoreBtn = document.getElementById('explore-more-btn');
const shareResultBtn = document.getElementById('share-result-btn');

// Function to randomly select 10 questions from the pool of 50
function selectRandomQuestions() {
    console.log(`🎲 Selecting 10 random questions from ${allQuizQuestions.length} available questions`);
    
    // Create a copy of the questions array and shuffle it
    const shuffledQuestions = [...allQuizQuestions];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    
    // Take first 10 questions
    currentQuizQuestions = shuffledQuestions.slice(0, 10);
    
    // Log selected question categories for debugging
    const categories = currentQuizQuestions.map(q => q.category);
    const categoryCount = {
        plants: categories.filter(c => c === 'plants').length,
        ritu_charya: categories.filter(c => c === 'ritu_charya').length,
        ayurveda: categories.filter(c => c === 'ayurveda').length
    };
    
    console.log('📊 Selected questions by category:', categoryCount);
    console.log('✅ Quiz questions prepared successfully!');
    
    return currentQuizQuestions;
}

// Function to get question statistics
function getQuestionStats() {
    const total = allQuizQuestions.length;
    const categories = {
        plants: allQuizQuestions.filter(q => q.category === 'plants').length,
        ritu_charya: allQuizQuestions.filter(q => q.category === 'ritu_charya').length,
        ayurveda: allQuizQuestions.filter(q => q.category === 'ayurveda').length
    };
    
    console.log(`📚 Question Database Statistics:
    Total Questions: ${total}
    🌿 Plants: ${categories.plants}
    🗓️ Ritu Charya: ${categories.ritu_charya}
    🕉️ Ayurveda: ${categories.ayurveda}`);
    
    return { total, categories };
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Enhanced Quiz page loaded successfully!");
    getQuestionStats(); // Display question statistics
    initializeQuiz();
});

function initializeQuiz() {
    console.log("⚙️ Initializing enhanced quiz with click protection...");
    
    // Start quiz button
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', function() {
            console.log("▶️ Start quiz button clicked");
            showNameInput();
        });
    }
    
    // Name input handling
    if (userNameInput) {
        userNameInput.addEventListener('input', function() {
            const name = this.value.trim();
            if (submitNameBtn) {
                submitNameBtn.disabled = name.length < 2;
            }
        });
        
        userNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim().length >= 2) {
                submitName();
            }
        });
    }
    
    if (submitNameBtn) {
        submitNameBtn.addEventListener('click', submitName);
    }
    
    // Initialize next button with enhanced protection
    setupNextButtonProtection();
    
    // Result action buttons
    if (retakeQuizBtn) {
        retakeQuizBtn.addEventListener('click', function() {
            console.log("🔄 Retake quiz clicked");
            resetQuiz();
        });
    }
    
    if (exploreMoreBtn) {
        exploreMoreBtn.addEventListener('click', function() {
            console.log("🌿 Explore more clicked");
            window.location.href = 'index.html#plants';
        });
    }
    
    if (shareResultBtn) {
        shareResultBtn.addEventListener('click', function() {
            console.log("📤 Share result clicked");
            shareResult();
        });
    }
    
    console.log("✅ Quiz initialization complete with enhanced protections!");
}

// Enhanced next button setup with multiple protection layers
function setupNextButtonProtection() {
    if (!nextBtn) {
        console.warn("⚠️ Next button not found!");
        return;
    }
    
    // Remove any existing listeners by cloning the button
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    nextBtn = newNextBtn;
    
    // Add protected event listener
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Multiple protection layers
        if (isProcessingNext) {
            console.log("🚫 Click ignored - already processing");
            return false;
        }
        
        if (this.disabled) {
            console.log("🚫 Click ignored - button disabled");
            return false;
        }
        
        if (answerRevealed) {
            console.log("🚫 Click ignored - answer being revealed");
            return false;
        }
        
        if (quizLocked) {
            console.log("🚫 Click ignored - quiz locked");
            return false;
        }
        
        console.log("✅ Next button clicked - processing...");
        nextQuestion();
        return false;
    }, { once: false });
    
    // Prevent double-click
    nextBtn.addEventListener('dblclick', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("🚫 Double-click prevented");
        return false;
    });
    
    console.log("🛡️ Next button protection enabled");
}

function showNameInput() {
    welcomeSection.style.display = 'none';
    nameInputSection.style.display = 'block';
    
    // Focus on name input
    setTimeout(() => {
        if (userNameInput) {
            userNameInput.focus();
        }
    }, 300);
}

function submitName() {
    const name = userNameInput.value.trim();
    
    if (name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    userName = name;
    console.log("👤 User name submitted:", userName);
    
    // Update display name
    if (displayName) {
        displayName.textContent = userName;
    }
    
    // Start the quiz
    startQuiz();
}

function startQuiz() {
    quizStartTime = new Date();
    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];
    
    // Reset all protection flags
    isProcessingNext = false;
    answerRevealed = false;
    quizLocked = false;
    
    // Select 10 random questions for this quiz attempt
    selectRandomQuestions();
    
    nameInputSection.style.display = 'none';
    questionsSection.style.display = 'block';
    
    displayQuestion();
}

// Enhanced displayQuestion function with better state management
function displayQuestion() {
    // Reset processing state when displaying new question
    isProcessingNext = false;
    answerRevealed = false;
    quizLocked = false;
    
    const question = currentQuizQuestions[currentQuestion];
    
    console.log(`📋 Displaying question ${currentQuestion + 1}/${currentQuizQuestions.length}`);
    console.log(`❓ Question: ${question.question.substring(0, 50)}...`);
    console.log(`📂 Category: ${question.category}`);
    
    // Update progress
    const progress = ((currentQuestion + 1) / currentQuizQuestions.length) * 100;
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    // Update question counter
    if (questionCounter) {
        questionCounter.textContent = `Question ${currentQuestion + 1} of ${currentQuizQuestions.length}`;
    }
    
    // Display question
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Display options with enhanced visibility
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
            `;
            
            optionBtn.addEventListener('click', function() {
                if (!answerRevealed && !isProcessingNext && !quizLocked) {
                    selectOption(index, optionBtn);
                }
            });
            
            // Add keyboard support
            optionBtn.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (!answerRevealed && !isProcessingNext && !quizLocked) {
                        selectOption(index, optionBtn);
                    }
                }
            });
            
            optionsContainer.appendChild(optionBtn);
        });
    }
    
    // Reset next button
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.classList.remove('processing');
        nextBtn.textContent = currentQuestion === currentQuizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
    }
}

function selectOption(selectedIndex, optionBtn) {
    // Prevent selection during answer reveal or processing
    if (answerRevealed || isProcessingNext || quizLocked) {
        console.log("🚫 Cannot select option while processing or revealing answer");
        return;
    }
    
    console.log(`👆 User selecting option ${selectedIndex + 1}: ${currentQuizQuestions[currentQuestion].options[selectedIndex]}`);
    
    // Remove previous selections
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Mark selected option
    optionBtn.classList.add('selected');
    
    // Store answer
    selectedAnswers[currentQuestion] = selectedIndex;
    
    // Enable next button
    if (nextBtn) {
        nextBtn.disabled = false;
    }
    
    console.log(`✅ Option ${selectedIndex + 1} selected successfully`);
}

// Enhanced next button functionality with comprehensive click protection
function nextQuestion() {
    // Prevent multiple clicks with comprehensive checks
    if (isProcessingNext) {
        console.log("🚫 Next button already processing, ignoring click");
        return;
    }
    
    if (!nextBtn || nextBtn.disabled) {
        console.log("🚫 Next button is disabled or not available");
        return;
    }
    
    if (answerRevealed) {
        console.log("🚫 Answer is being revealed, ignoring click");
        return;
    }
    
    if (quizLocked) {
        console.log("🚫 Quiz is locked, ignoring click");
        return;
    }
    
    // Set processing state immediately
    isProcessingNext = true;
    quizLocked = true;
    nextBtn.classList.add('processing');
    nextBtn.disabled = true;
    nextBtn.textContent = 'Processing...';
    
    console.log(`⏳ Processing question ${currentQuestion + 1}`);
    
    const question = currentQuizQuestions[currentQuestion];
    const selectedAnswer = selectedAnswers[currentQuestion];
    
    // Check if answer is correct
    if (selectedAnswer === question.correct) {
        score++;
        console.log("✅ Correct answer! Current score:", score);
    } else {
        console.log(`❌ Incorrect answer. Correct was option ${question.correct + 1}: ${question.options[question.correct]}`);
    }
    
    // Show correct answer briefly
    showCorrectAnswer(() => {
        currentQuestion++;
        
        if (currentQuestion < currentQuizQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
        
        // Reset processing state
        isProcessingNext = false;
        quizLocked = false;
    });
}

function showCorrectAnswer(callback) {
    const question = currentQuizQuestions[currentQuestion];
    const allOptions = document.querySelectorAll('.option-btn');
    
    console.log("💡 Revealing correct answer...");
    answerRevealed = true;
    
    // Disable all option interactions
    allOptions.forEach((btn, index) => {
        btn.style.pointerEvents = 'none';
        btn.classList.add('disabled');
        
        if (index === question.correct) {
            btn.classList.add('correct');
            console.log(`✅ Correct answer was option ${index + 1}: ${question.options[index]}`);
        } else if (index === selectedAnswers[currentQuestion] && index !== question.correct) {
            btn.classList.add('incorrect');
            console.log(`❌ User selected option ${index + 1}: ${question.options[index]}`);
        }
    });
    
    // Show explanation in console
    console.log("📖 Explanation:", question.explanation);
    
    // Update next button text during wait
    if (nextBtn) {
        const waitTime = 2;
        let countdown = waitTime;
        
        const countdownInterval = setInterval(() => {
            if (nextBtn) {
                if (currentQuestion === currentQuizQuestions.length - 1) {
                    nextBtn.textContent = `Finishing Quiz... ${countdown}s`;
                } else {
                    nextBtn.textContent = `Next Question... ${countdown}s`;
                }
            }
            
            countdown--;
            
            if (countdown < 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
        
        // Execute callback after delay
        setTimeout(() => {
            clearInterval(countdownInterval);
            answerRevealed = false;
            callback();
        }, waitTime * 1000);
    } else {
        setTimeout(() => {
            answerRevealed = false;
            callback();
        }, 2000);
    }
}

function showResults() {
    questionsSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    const percentage = Math.round((score / currentQuizQuestions.length) * 100);
    const incorrectAnswers = currentQuizQuestions.length - score;
    
    // Update result display
    if (resultName) resultName.textContent = userName;
    if (finalScore) finalScore.textContent = score;
    if (scorePercentage) scorePercentage.textContent = percentage + '%';
    if (correctCount) correctCount.textContent = score;
    if (incorrectCount) incorrectCount.textContent = incorrectAnswers;
    if (accuracyPercentage) accuracyPercentage.textContent = percentage + '%';
    
    // Performance message based on score
    let title, description;
    
    if (percentage >= 90) {
        title = "🏆 Outstanding! Ayurveda Master!";
        description = "Exceptional knowledge! You have mastered the principles of Ayurveda and medicinal plants. You're a true wellness expert!";
    } else if (percentage >= 80) {
        title = "🌟 Excellent! Ayurveda Expert!";
        description = "Impressive! You have excellent knowledge of medicinal plants and Ayurvedic principles. Keep up the great work!";
    } else if (percentage >= 70) {
        title = "🌿 Very Good! Well Done!";
        description = "Great job! You have a solid understanding of Ayurveda and herbal medicine. Continue your learning journey!";
    } else if (percentage >= 60) {
        title = "📚 Good Effort! Keep Learning!";
        description = "Good work! You're building a nice foundation. Explore more sections of our garden to enhance your knowledge!";
    } else if (percentage >= 40) {
        title = "🌱 Making Progress! Keep Going!";
        description = "You're on the right path! Spend more time with our medicinal plants and Ritu Charya sections.";
    } else {
        title = "🌿 Starting Your Journey!";
        description = "Every expert was once a beginner! Explore our Virtual Herbal Garden to discover the amazing world of Ayurveda.";
    }
    
    if (performanceTitle) performanceTitle.textContent = title;
    if (performanceDescription) performanceDescription.textContent = description;
    
    // Track completion
    trackQuizCompletion();
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    console.log(`🎉 Quiz completed! ${userName} scored ${score}/${currentQuizQuestions.length} (${percentage}%)`);
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userName = "";
    selectedAnswers = [];
    currentQuizQuestions = [];
    quizStartTime = null;
    
    // Reset all protection flags
    isProcessingNext = false;
    answerRevealed = false;
    quizLocked = false;
    
    // Clear name input
    if (userNameInput) {
        userNameInput.value = "";
    }
    
    // Reset display
    resultsSection.style.display = 'none';
    welcomeSection.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log("🔄 Quiz reset successfully - new random questions will be selected");
}

function shareResult() {
    const percentage = Math.round((score / currentQuizQuestions.length) * 100);
    const shareText = `🌿 I just completed the Virtual Herbal Garden Knowledge Quiz!\n\n` +
                     `👤 Name: ${userName}\n` +
                     `📊 Score: ${score}/${currentQuizQuestions.length} (${percentage}%)\n` +
                     `🎯 Questions from: Medicinal Plants, Ritu Charya & Ayurveda\n\n` +
                     `Test your knowledge of traditional medicine!\n\n` +
                     `#Ayurveda #MedicinalPlants #VirtualHerbalGarden #RituCharya #Quiz`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Virtual Herbal Garden Quiz Result',
            text: shareText,
            url: window.location.href
        }).then(() => {
            console.log('📤 Result shared successfully');
        }).catch((error) => {
            console.log('❌ Error sharing:', error);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('📋 Your quiz result has been copied to clipboard! You can now paste it anywhere to share.');
        }).catch(() => {
            showShareModal(text);
        });
    } else {
        showShareModal(text);
    }
}

function showShareModal(text) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    content.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #2c3e50;">📤 Share Your Result</h3>
        <textarea style="width: 100%; height: 150px; margin: 15px 0; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-family: inherit; resize: vertical;" readonly>${text}</textarea>
        <div>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: bold; margin: 0 5px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">✅ Close</button>
        </div>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Utility functions
function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`;
    } else {
        return `${remainingSeconds}s`;
    }
}

// Enhanced analytics and tracking
function trackQuizCompletion() {
    const completionTime = new Date() - quizStartTime;
    const accuracy = (score / currentQuizQuestions.length) * 100;
    
    // Analyze question categories in current quiz
    const categoryBreakdown = currentQuizQuestions.reduce((acc, question) => {
        acc[question.category] = (acc[question.category] || 0) + 1;
        return acc;
    }, {});
    
    console.log('📊 Enhanced Quiz Analytics:', {
        user: userName,
        score: `${score}/${currentQuizQuestions.length}`,
        accuracy: accuracy.toFixed(1) + '%',
        completionTime: formatTime(completionTime),
        questionCategories: categoryBreakdown,
        timestamp: new Date().toISOString(),
        totalQuestionsAvailable: allQuizQuestions.length,
        questionsUsed: currentQuizQuestions.length,
        userAgent: navigator.userAgent,
        sessionDuration: formatTime(completionTime)
    });
}

// Function to get random questions by category (useful for testing)
function getQuestionsByCategory(category, count = 5) {
    const categoryQuestions = allQuizQuestions.filter(q => q.category === category);
    return categoryQuestions.slice(0, count);
}

// Function to validate question database
function validateQuestions() {
    let valid = true;
    const issues = [];
    
    allQuizQuestions.forEach((question, index) => {
        // Check required fields
        if (!question.question || !question.options || !question.explanation) {
            issues.push(`Question ${index + 1}: Missing required fields`);
            valid = false;
        }
        
        // Check options array
        if (!Array.isArray(question.options) || question.options.length !== 4) {
            issues.push(`Question ${index + 1}: Should have exactly 4 options`);
            valid = false;
        }
        
        // Check correct answer index
        if (question.correct < 0 || question.correct > 3) {
            issues.push(`Question ${index + 1}: Correct answer index should be 0-3`);
            valid = false;
        }
        
        // Check category
        if (!['plants', 'ritu_charya', 'ayurveda'].includes(question.category)) {
            issues.push(`Question ${index + 1}: Invalid category`);
            valid = false;
        }
    });
    
    if (valid) {
        console.log('✅ Question database validation passed!');
    } else {
        console.warn('⚠️ Question database validation issues:', issues);
    }
    
    return { valid, issues };
}

// Additional utility functions for enhanced functionality
function resetQuizStates() {
    isProcessingNext = false;
    answerRevealed = false;
    quizLocked = false;
    
    if (nextBtn) {
        nextBtn.classList.remove('processing');
        nextBtn.disabled = selectedAnswers[currentQuestion] === undefined;
    }
    
    console.log("🔄 Quiz states reset");
}

// Enhanced error handling
function handleQuizError(error, context) {
    console.error(`❌ Quiz Error in ${context}:`, error);
    
    // Reset states on error
    resetQuizStates();
    
    // Show user-friendly error message
    alert('⚠️ An error occurred in the quiz. Please try again or refresh the page.');
}

// Initialize validation and setup on load
document.addEventListener('DOMContentLoaded', function() {
    try {
        validateQuestions();
        console.log("🎯 Enhanced Quiz system ready!");
    } catch (error) {
        handleQuizError(error, 'initialization');
    }
});

console.log("🚀 Enhanced Quiz system with 50 questions and comprehensive click protection loaded successfully!");
console.log(`📚 Question Database: ${allQuizQuestions.length} questions available`);
console.log("🎯 Each quiz will randomly select 10 questions for a unique experience!");
console.log("🛡️ Enhanced click protection and visibility improvements active!");