document.getElementById('viewCitationBtn').addEventListener('click', function() {
    var citationSection = document.getElementById('citations');
    if (citationSection.style.maxHeight === '0px' || citationSection.style.maxHeight === '') {
        citationSection.style.display = 'block';  
        citationSection.style.maxHeight = citationSection.scrollHeight + "px"; 
        citationSection.style.opacity = 1;
    } else {
        citationSection.style.maxHeight = '0';
        citationSection.style.opacity = 0;
        setTimeout(function() {
            citationSection.style.display = 'none';
        }, 500); 
    }
});
