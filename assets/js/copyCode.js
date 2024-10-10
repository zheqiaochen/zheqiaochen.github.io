(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Select all code blocks inside 'pre.highlight'
    const codeBlocks = document.querySelectorAll('pre.highlight');

    // Iterate over each code block and create a copy button
    codeBlocks.forEach((codeBlock) => {
      // Check if the button already exists to prevent duplication
      if (!codeBlock.querySelector('.copy-code-button')) {
        // Create the copy button
        const copyCodeButton = document.createElement('button');
        copyCodeButton.classList.add('copy-code-button');
        copyCodeButton.innerText = 'Copy';

        // Insert the button at the start of the code block
        codeBlock.insertBefore(copyCodeButton, codeBlock.firstChild);

        // Get the code text from inside the code block
        const code = codeBlock.innerText;

        // Add event listener to the button to copy the code
        copyCodeButton.addEventListener('click', () => {
          // Copy the code to the clipboard
          window.navigator.clipboard.writeText(code);

          // Update the button text temporarily
          const originalText = copyCodeButton.innerText;
          copyCodeButton.innerText = 'Copied!';

          // Reset the button text after 2 seconds
          setTimeout(() => {
            copyCodeButton.innerText = originalText;
          }, 2000);
        });
      }
    });
  });
})();
