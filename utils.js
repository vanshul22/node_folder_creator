const fs = require('fs'); // Import the 'fs' module

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}


function folderCreator(path) {
    // Create the folder
    fs.mkdir(path, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                // console.error(`Folder '${path}' already exists.`);
            } else {
                console.error(`Error creating folder: ${err}`);
            }
        } else {
            // console.log(`Folder '${path}' created successfully.`);
        }
    });
}

module.exports = { generateRandomString, folderCreator }