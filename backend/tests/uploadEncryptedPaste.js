const fetch = require('node-fetch');

async function uploadPaste(input_content, key) {
  try {
    const response = await fetch(`http://localhost:3000/encryptedPaste`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: input_content, key: key }),
    });

    if (!response.ok) {
      throw new Error(`Error saving paste: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Paste saved successfully:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

uploadPaste("testing, I need a Supra or Scatpack/Hellcat", "testingCode1234");