const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..');

const keywordMap = {
    'flights.html': "online flight booking india, cheap flight tickets, book flight tickets online, best flight offers from kolkata, domestic flights offer, last-minute flight deals kolkata, travel agency for flight booking, international flight booking agent, flight tickets under 5000, student flight discounts, round trip flight booking, ",
    'trains.html': "irctc train ticket booking, online train ticket booking, rail ticket booking kolkata, tatkal train ticket booking service, authorised irctc travel agent in kolkata, check train seat availability online, train booking for group travel, best railway ticket booking agent near me, ",
    'hotels.html': "best hotel booking deals, luxury resort packages, budget hotels near me, kid-friendly luxury resorts, budget-friendly boutique hotels, book hotels with free cancellation, hotel booking travel agency in kolkata, eco-friendly stays, best hotel booking services, "
};

// Blended keywords for index.html
keywordMap['index.html'] = keywordMap['flights.html'] + keywordMap['trains.html'] + keywordMap['hotels.html'];

Object.keys(keywordMap).forEach(filename => {
    const filePath = path.join(directoryPath, filename);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const keywordsToInject = keywordMap[filename];
        
        // Find the meta keywords tag and prepend
        if (content.includes('<meta name="keywords" content="')) {
            // Ensure we don't inject multiple times if the script runs twice
            if (!content.includes(keywordsToInject.split(',')[0])) {
                content = content.replace('<meta name="keywords" content="', '<meta name="keywords" content="' + keywordsToInject);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Injected advanced keywords into: ' + filename);
            } else {
                console.log('Keywords already exist in: ' + filename);
            }
        } else {
            console.log('No meta keywords tag found in: ' + filename);
        }
    }
});
