// suggestions.js
(function() {
  window.config = {
      suggestions: []
  };

  window.init = function(textarea) {
      textarea.addEventListener('input', function() {
          const input = textarea.value.toLowerCase();
          const suggestionsBox = document.createElement('div');
          suggestionsBox.classList.add('suggestions-box');
          const matchedSuggestions = config.suggestions.filter(suggestion => suggestion.toLowerCase().includes(input));
          
          // Clear any existing suggestions
          while (textarea.nextSibling) {
              textarea.parentNode.removeChild(textarea.nextSibling);
          }
          
          matchedSuggestions.forEach(suggestion => {
              const suggestionItem = document.createElement('div');
              suggestionItem.textContent = suggestion;
              suggestionItem.classList.add('suggestion-item');
              suggestionItem.addEventListener('click', () => {
                  textarea.value = suggestion;
                  // Clear suggestions after selection
                  while (textarea.nextSibling) {
                      textarea.parentNode.removeChild(textarea.nextSibling);
                  }
              });
              suggestionsBox.appendChild(suggestionItem);
          });

          textarea.parentNode.insertBefore(suggestionsBox, textarea.nextSibling);
      });
  };
})();
