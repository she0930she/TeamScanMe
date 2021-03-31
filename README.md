# TeamScanMe
Welcome to the Scan Me app! The app is designed to target the United Nations Health and Well-being Sustainable Development Goal. 

### 1. The problems we are looking to solve:

While brainstorming the idea for our app, we related to three problems that we believe any buyer faces while going shopping. The problems are as follows:

1. When we are buying groceries, skincare items, food products in our favorite stores, we do not identify which products are healthy or include ingredients that are good for our well-being. 

2. Making decision based on reading or googling the ingredients list on every item is too time consuming and can be too confusing for the buyer.

3. Many products look the same to us and subtle differences in the chemicals/preservatives used can be difficult to understand immediately.

### 2. How do we solve the problems?

With this idea implemented, we want to analyze ingredients from food or any items with material lists. Helping shoppers make the healthier decision every time they use our app.

ScanMe has a total of three screens: 

1. Score Screen: This screen has the calculated scores displayed as a number and a detailed explanation of the reasons which were used to generate the score results.

2. Camera Screen: This screen has the functionality to scan the products and capture all the elements in the ingredients list. Usually the outside label includes all the materials used to make a certain product. In the future iteration of the Scan Me App, all the text objects detected using Google Cloud Vision API will be stored in an array within firebase and retrieved on the score screen. 

3. History Screen: This screen comprises of all the records that includes all the scanned items sorted by descending dates and the respective scores. The scores are computed and stored within Google Firebase Firestore Database within JSON components. The history contains not only the scores but also the one main reason why the score was assigned and corresponding star rating of the product.

### 3. What does the app look like?

Here is the detailed description of how to use the app:

First, we grab the item. We have a Doritos here. Take a picture! You get an alert says “score Calculated”. 
You click view, then this will direct us to the ScoreScreen. You would see the picture you took on the top, 
then our system analyze the nutrition facts from the picture you just took.
The system will generate the score for you. 

And if you are interested to know why you get the score lower or higher than you expect.
You would want to click the blue button. The button here will tell you one critical reason why you receive this score for this item. 
The whole idea is we want to simplify the information for users. 
We found that if you care about your health, the professional terms from ingredients lists usually overwhelms public.
And the thing is we don’t have time to type each ingredient individually on the internet just for this one item.

After we have the current score. We might want to see the previous scores. Click history on the bottom navigation bar here. 
Simply refresh the page. Then, you get the picture you just took! If you want to know the detail.
Simply click the picture or the score. This will bring you back to the score screen to see detail information.
This app is easy to use, and a reliable partner when you are of two minds.
