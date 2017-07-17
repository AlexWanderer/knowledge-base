'use strict';

function get_featured_pages (pages) {
  var result = [];
  
  pages.forEach(function(page) {
      page.files.forEach(function(file) {
          if (file.feature === 'true') {
              result.unshift(file);
          }
      }, this);
  }, this);

  return result;
}

// Exports
module.exports = get_featured_pages;