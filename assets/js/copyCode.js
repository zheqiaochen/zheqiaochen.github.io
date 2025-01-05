document.addEventListener('DOMContentLoaded', function() {
    // 首先移除所有现有的复制按钮
    document.querySelectorAll('.copy-code-button').forEach(button => button.remove());
    
    // 然后只在 .highlight 层添加按钮
    const highlights = document.querySelectorAll('div.highlight');
    
    highlights.forEach((highlight) => {
        const copyCodeButton = document.createElement('button');
        copyCodeButton.classList.add('copy-code-button');
        copyCodeButton.innerText = 'Copy';
        
        highlight.insertBefore(copyCodeButton, highlight.firstChild);
        
        const codeElement = highlight.querySelector('code');
        const code = codeElement ? codeElement.innerText : '';
        
        copyCodeButton.addEventListener('click', () => {
            window.navigator.clipboard.writeText(code);
            
            const originalText = copyCodeButton.innerText;
            copyCodeButton.innerText = 'Copied!';
            
            setTimeout(() => {
                copyCodeButton.innerText = originalText;
            }, 2000);
        });
    });
});
