//  importing express app
const app = require('./app');

//  Destructuring PORT from .env file
const {PORT} = process.env || 4001


//  setting up app to listen at PORT || 4001
app.listen(PORT, () => {
    console.log(`Server is up & running at Port ${PORT||4001}`);
})