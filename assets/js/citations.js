/* ==========================================================================
   Citation Tabs Functionality
   ========================================================================== */

$(document).ready(function() {
  // Initialize citation tabs
  initCitationTabs();
});

function initCitationTabs() {
  // Handle tab switching
  $('.citation-tab').on('click', function() {
    const targetTab = $(this).data('target');
    const tabContainer = $(this).closest('.citation-tabs');
    
    // Update active tab
    tabContainer.find('.citation-tab').removeClass('active');
    $(this).addClass('active');
    
    // Update active content
    tabContainer.find('.citation-tab-content').removeClass('active');
    tabContainer.find(`[data-tab="${targetTab}"]`).addClass('active');
  });
  
  // Handle copy button clicks
  $('.copy-button').on('click', function() {
    const contentElement = $(this).siblings('.citation-text');
    const textToCopy = contentElement.text();
    
    copyToClipboard(textToCopy, $(this));
  });
}

function copyToClipboard(text, button) {
  // Try using the modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() {
      showCopySuccess(button);
    }).catch(function(err) {
      console.error('Failed to copy: ', err);
      fallbackCopyToClipboard(text, button);
    });
  } else {
    // Fallback for older browsers
    fallbackCopyToClipboard(text, button);
  }
}

function fallbackCopyToClipboard(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopySuccess(button);
    } else {
      showCopyError(button);
    }
  } catch (err) {
    console.error('Fallback copy failed: ', err);
    showCopyError(button);
  }
  
  document.body.removeChild(textArea);
}

function showCopySuccess(button) {
  const originalText = button.html();
  button.html('<i class="fa fa-check"></i>');
  button.css('background-color', '#27ae60');
  
  setTimeout(function() {
    button.html(originalText);
    button.css('background-color', '#2c3e50');
  }, 2000);
}

function showCopyError(button) {
  const originalText = button.html();
  button.html('<i class="fa fa-times"></i>');
  button.css('background-color', '#e74c3c');
  
  setTimeout(function() {
    button.html(originalText);
    button.css('background-color', '#2c3e50');
  }, 2000);
}
