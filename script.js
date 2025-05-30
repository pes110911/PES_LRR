document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.getElementById('username');
    const errorMessage = document.getElementById('error-message'); // Display error message
    let username = usernameInput.value.trim(); // Trim spaces

    // Define username-to-folder mapping
    const userFolderMap = {
        "https://drive.google.com/drive/folders/1xMjgyCikE3Zl9x7exdVMyDW9kXUhRExW?usp=sharing": ["kinder", "kinder1", "kinder2"],
        "https://drive.google.com/drive/folders/1GP99_AlOF4UEh2JTzC3NLwQUrYuGTspD?usp=sharing": ["grade1a", "grade1b", "grade1c"],
        "https://drive.google.com/drive/folders/1IpazalbLT0c-sbjaeageOZ-a8mNJImxe?usp=sharing": ["grade2a", "grade2b", "grade2c"],
        "https://drive.google.com/drive/folders/1cOaT4Ai_AABA9VZ_Q-Pxs1zFLK195Gcy?usp=sharing": ["grade3a", "grade3b", "grade3c"],
        "https://drive.google.com/drive/folders/1w9e0KgSFI3K9HWjhTvRByzD5m391OHQq?usp=sharing": ["grade4a", "grade4b", "grade4c"],
        "https://drive.google.com/drive/folders/1ilg6wpfug9hPjz4TDPUGG29uZ40Iq7bA?usp=sharing": ["grade5a", "grade5b", "grade5c"],
        "https://drive.google.com/drive/folders/1-O4SHwTlOlGK_RKadol6lKDa_46yaxqE?usp=sharing": ["grade6a", "grade6b", "grade6c"],
    };

    // Check if the input is empty
    if (username === '') {
        errorMessage.textContent = 'Username is required!';
        usernameInput.focus();
        return;
    }

    console.log(`Entered username: "${username}"`); // Debugging log

    // Find the folder URL that contains the entered username (case-insensitive)
    let folderURL = null;

    Object.entries(userFolderMap).forEach(([url, users]) => {
        if (users.some(user => user.toLowerCase() === username.toLowerCase())) {
            folderURL = url;
        }
    });

    if (folderURL) {
        errorMessage.textContent = ''; // Clear error message
        alert('Login successful! Redirecting to Drive Folders...');

        // Redirect to the assigned folder
        setTimeout(() => {
            window.location.href = folderURL;
        }, 1000);
    } else {
        errorMessage.textContent = 'Invalid LRN! Contact your Class Adviser.';
    }
});