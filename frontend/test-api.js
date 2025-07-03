const axios = require('axios');

async function testApi() {
  try {
    console.log('Testing API connection...');
    const response = await axios.get('https://devi-market-zero-ypueen.2ky31l-1.deu-c1.eu1.cloudhub.io/api/products');
    console.log(`API connection successful! Got ${response.data.length} products.`);
    console.log(`First product: ${JSON.stringify(response.data[0], null, 2)}`);
    return response.data;
  } catch (error) {
    console.error('API connection failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received');
    }
  }
}

testApi(); 