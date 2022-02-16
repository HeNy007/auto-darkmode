      // Fall back if the browser doesn't support prefers-color-scheme
        if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
            // Hide content until CSS loads to prevent show unstyled code.
            document.documentElement.style.display = 'none';

            // Insert stylesheet with onload event to show page content.
            document.head.insertAdjacentHTML(
                'beforeend',
                '<link href="dark-theme.css" rel="stylesheet" onload="document.documentElement.style.display=\'\'" />'
            );
        }
    
