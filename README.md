# Mega Hackathon - Fullstack session

Hope everyone liked the sessions we had conducted on the fullstack using JS. Really hoping to see everyone creating an application with this tech stack and prepare for the Mega Hackaton coming up shortly.

This application was mainly built for this knowledge sharing sessions. Rather than teaching about each technology we considered as the techstack, we focused on the conceptual topics which would help you in thinking or rather your perspective on Fullstack in JS.

We mainly focused on the following aspects, when writing a Fullstack application.

1. **Setup** - This should always and usually be a one time activity for any project. Because we personally believe in the notion that a developer should only focus on the functionality that he / she would build and not get stuck in the project setup for the entire day (which is what the Stanc project is currently stuck with). As part the architecture principle, one core area that an architecture should look into is the Developer Experience, if you have taken care of this you are sure have a production ready code to shipped.

2. **Guidelines** - On this topic we were mostly focusing on configuration. How you would configure an application like dynamically determine the DB URL based on the environment like

As simple as, `NODE_ENV=prd`, would configure the proper MongoDB URL.

3. **Project Organization** - This topic focused on structuring your project. We stuck to Module based pattern / Pods is mostly called, instead of their behavior like pushing all the controllers to controllers folder. The reason we stuck to Pods pattern was simply that this allows to test them individually.

4. **Deploying** - As with the **Setup**, this also would involve architectural decision. As this the principle or the work taken by architect of the application.

One of our demoed his own npm module, which enables you deploy your application with your own build instructions.

NPM module can be found here [ci-server](https://www.npmjs.com/package/ci-server)


## Resources

As you can see from the project, we had used ES6 on the server. This is possible with Node version 8 onwards, but for the sake of compatiblity of running this project independent of Node versions. We added our configurations to use ES6 concepts regardless of the Node version which is currently running in the host system.

We are dependent on babel-core npm package, to allow us code on ES6 based environment. 

The reason why we used ES6, because it lets us write minimial code and more importantly understandable code. The main motivate of ES6 was mainly for this purpose achieve more with less amount of code and make your code more understandable for peers.

One beautiful and awesome concept in ES6 and pre ES7, which completely brought us to embrace and love ES6 was **async-await**. Personally working with Async Javascript was a pain because of the callbacks and Promises. Promises are really a awesome concepts but they did not solve the problem of nesting async code, which made the code not so readable (especially for Junior developers).

You will see this a lot in our project. If you want to learn more about async-await, checkout the below articles.

[ASYNC/AWAIT WILL MAKE YOUR CODE SIMPLER](https://blog.patricktriest.com/what-is-async-await-why-should-you-care/)
[6 Reasons Why JavaScript’s Async/Await Blows Promises Away (Tutorial)](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)

Resource on building nodejs applications

[How I build Node.js Applications](https://blog.ragingflame.co.za/2015/4/1/how-i-build-nodejs-applications)


A beautiful course on frontend-master for Designing API' on nodeJS, please checkout [here](https://frontendmasters.com/courses/api-design-nodejs/)

Slides are our sessions can be found here.

1. [Fullstack Journey](http://slides.com/santhoshnagaraj/deck#/)
