# video-price-comparison

## Project Solution

Because of unreliable of GET VIDEOS API, server will store the value in cache which use node-cache, and data in cache will update interval every 100 minutes, may be shorter in real project. And if any problem with the VIDEOS API, server will get data from cache.

In real project, it is more safety if we use Redis or any database use for cache to store cache data.

## TOTAL WORK HOUR

1. Understand requirement, come up with solution: 2 hours
2. Implement back end: 2 hours
3. Implement front end: 1.5 hours
4. Add unit test: 2 hour
TOTAL WORK: 7.5 hours

## APPLICATION SETUP

1. Back end package install
   
   ```
   cd back-end
   npm install
    ```
2. Run back-end
   ```
   npm run start
    ```

3. Open different terminal
       
4. Front end package install
   ```
   cd front-end
   npm install
   ```

5. Run front-end
    ```
   npm run start
    ```

6. From browser, access:
   ```
   localhost:3000
    ```

## APPLICATION SETUP FOR DEPLOYMENT
Repeat from Step1 to Step4 on APPLICATION SETUP session.

5. Create .env file in backend

6. Add environment value key-value pairs in .env: NODE_ENV=production

7. Create build folder from front-end, save in backend
    ```
   cd front-end
   npm run build: production
    ``` 

8. In the back-end, run server

    ```
    cd back-end
    npm run start
    ```

9. At the browser, access:
 
    ```
   localhost:8080
    ```

## TEST

Coverage more than 80% video controller

1. Run test

    ```
    cd back-end
    npm run test
    ```

2. Run test with coverage report

    ```
    cd back-end
    npm run test:coverage
    ```
