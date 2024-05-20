(function() {
    // Create a script element
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BFP82C12P'; // Replace with your GA4 Measurement ID
  
    // Insert the script element into the head
    document.head.appendChild(script);
  
    // Initialize GA4
    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-3BFP82C12P');
    };
  })();
  