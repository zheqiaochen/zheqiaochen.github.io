(function() {
  function addCopyButtons() {
    // Select all code blocks, adjusting the selector if necessary
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((codeBlock) => {
      if (!codeBlock.querySelector('.copy-code-button')) {
        const copyCodeButton = document.createElement('button');
        copyCodeButton.classList.add('copy-code-button');
        copyCodeButton.textContent = 'Copy';
        
        codeBlock.style.position = 'relative';
        copyCodeButton.style.position = 'absolute';
        copyCodeButton.style.top = '5px';
        copyCodeButton.style.right = '5px';
        
        codeBlock.appendChild(copyCodeButton);
        
        copyCodeButton.addEventListener('click', () => {
          const code = codeBlock.querySelector('code') ? codeBlock.querySelector('code').textContent : codeBlock.textContent;
          
          navigator.clipboard.writeText(code).then(() => {
            copyCodeButton.textContent = 'Copied!';
            setTimeout(() => {
              copyCodeButton.textContent = 'Copy';
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy: ', err);
          });
        });
      }
    });
  }

  // Try to run the function immediately
  addCopyButtons();

  // Also run it when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
  }

  // Run it again after a short delay to catch any dynamically loaded content
  setTimeout(addCopyButtons, 2000);
})();