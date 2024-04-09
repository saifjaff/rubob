// netlify/functions/responses.js

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
      // Store the response
      const requestBody = JSON.parse(event.body);
      const response = requestBody.response;
  
      // Example: Store the response in an array (in-memory storage, not recommended for production)
      const storedResponses = [];
  
      storedResponses.push(response);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Response stored successfully' }),
      };
    } else if (event.httpMethod === 'GET') {
      // Retrieve responses
      // Example: Retrieve responses from the array
      const storedResponses = [];
  
      return {
        statusCode: 200,
        body: JSON.stringify(storedResponses),
      };
    }
  
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid request' }),
    };
  };
  