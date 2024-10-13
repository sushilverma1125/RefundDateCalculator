const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let uniqueVisitors = new Set();

app.use(cors());
app.use(bodyParser.json());

// Endpoint to increment visitor count
app.post('/increment-visitor-count', (req, res) => {
    const deviceId = req.body.deviceId;

    if (!deviceId || uniqueVisitors.has(deviceId)) {
        return res.json({ count: uniqueVisitors.size });
    }

    uniqueVisitors.add(deviceId);
    res.json({ count: uniqueVisitors.size });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public')); // Assuming your HTML, CSS, JS are in a folder named 'public'

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
