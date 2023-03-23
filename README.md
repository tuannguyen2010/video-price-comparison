# video-price-comparison

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