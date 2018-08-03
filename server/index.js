const app = require('./app');
const port = parseInt(process.env.PORT || 9000);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})