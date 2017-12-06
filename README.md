# hackathon-fullstack-session

Hope everyone loved the sessions we had conducted on the fullstack using JS. Really hoping to see everyone creating an application with this tech stack and prepare for the Mega Hackaton coming up shortly.

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
