
const { generateRandomString, folderCreator } = require('./utils'); // Import the 'generateRandomString' function


// console.log(randomString);
folderCreator(`${__dirname}/folders`);

const folderLength = 100;

Array.from({ length: folderLength }).forEach(async () => {
  const randomString1 = await generateRandomString(20);
  await folderCreator(`${__dirname}/folders/${randomString1}`);

  Array.from({ length: folderLength }).forEach(async () => {
    const randomString2 = await generateRandomString(20);
    await folderCreator(`${__dirname}/folders/${randomString1}/${randomString2}`);

    Array.from({ length: folderLength }).forEach(async () => {
      const randomString3 = await generateRandomString(20);
      await folderCreator(`${__dirname}/folders/${randomString1}/${randomString2}/${randomString3}`);

      Array.from({ length: folderLength }).forEach(async () => {
        const randomString4 = await generateRandomString(20);
        await folderCreator(`${__dirname}/folders/${randomString1}/${randomString2}/${randomString3}/${randomString4}`);

        Array.from({ length: folderLength }).forEach(async () => {
          const randomString5 = await generateRandomString(20);
          await folderCreator(`${__dirname}/folders/${randomString1}/${randomString2}/${randomString3}/${randomString4}/${randomString5}`);

        });
      });
    });
  });
});

// To get the directory name
// console.log(`Directory name is ${__dirname}`);


