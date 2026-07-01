require('dotenv').config();
const app = require('./src/app.js');
const PORT = process.env.PORT || 5000;
const connectDB = require('./src/config/database.js');

connectDB();

app.listen(PORT, () => {
    console.log(`[Clickly Backend] Active on port ${PORT}`);
});