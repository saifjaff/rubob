exports.handler = async (event) => {
    try {
        // Parse the form data from the request body
        const data = JSON.parse(event.body);
        
        // Do something with the form data, like saving it to a database
        
        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form data submitted successfully" })
        };
    } catch (error) {
        // Return an error response if something goes wrong
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to submit form data" })
        };
    }
};
