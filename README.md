
# Motorway UI Test


Welcome to my returned Motorway UI technical test. In this test, I focused on user experience and using skills with HTML, CSS, a11y and leveraging browser APIs.


## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Tasks

### 1. UI development

> Create a responsive UI to display the images returned by the API.

I have achieved this by creating a x3 column layout, which maintains the aspect ratio of these images, and then using CSS transitional effects to create a fun UX.

> Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

I struggled to perform true 'optimisation' with the assets provided in the json file. In order to use better optimisation techniques, such as 'progressive loading', I would require a stream of images with different dimensions (like in the cars.json file), in order to serve these responsively and when needed. It is entirely possible to use NodeJS server side and even client side resizing, but attempting this leads to CORS issues due to the S3 access headers (this method takes the raw image object and converts it into a blob to then be manipulated and exported). I only leveraged lazy loading and bent the rules slightly by adding dimensions into the json file, in order to avoid content shifting. Fortunately, I could reuse all of the images from the thumnails (as these were now cached), to allow the fullscreen versions to not have to be requested again.

#### Some ideas to get you started:

Resizable thumbnails 

Modal to review full size images ✅

Image effects or filters ✅


### 2. Performance

> The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.

I removed the setTimeout function, which was adding a randomly calculated time between 0 and 1500ms to the response time being returned. This is monitored using perf_hooks.performance tools.


### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name ✅
- [ ] Email ✅
- [ ] Date of birth ✅
- [ ] Favourite colour ✅
- [ ] Salary (using a range input) ✅


## Time allowed

> We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks. 

I ended up spending over a day in development time.


## Notes

> Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.

Can this be tested in Chrome, please? This has been developed on 116.0.5845.110, with no experimental features.

The image list is at the top of the app. The form is underneath, so will require scrolling to.

Thanks,
Jake 🤠
