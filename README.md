```markdown
✨Large Language Model Evaluation App!✨

This application was made as an assesment and it facilitates a chatbot by leveraging Next.js as the frontend and FastAPI as the backend, utilizing the power of LangChain for dynamic web interactions. It incorporates BeautifulSoup for web scraping to extract contextual information from provided URLs.

 Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

Technologies Used

 Frontend
- React: A JavaScript library for building user interfaces.
- Next.js: A React framework for server-side rendering and building static websites.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Zod: A TypeScript-first schema declaration and validation library.
- React Hook Form: A library for managing form state and validation in React.
- Axios: A promise-based HTTP client for the browser and Node.js.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.

 Backend
- FastAPI: A modern, fast (high-performance), web framework for building APIs with Python.
- LangChain: A framework for developing applications powered by language models.
- Chroma: A vector Database for storing and querying embeddings efficiently.
- OpenAI API: An API for accessing OpenAI's GPT-3 and GPT-4 models.
- Replicate API: An API for running machine learning models from different providers.
- BeautifulSoup: A Python library for web scraping purposes to pull the data out of HTML and XML files.

 Models Used for Comparison

The application compares responses from the following four models to provide the best answer:

1. GPT-3.5-turbo
2. GPT-4
3. Replicate Meta/LLaMA-2-70B-chat
4. Replicate joehoover/Falcon-40B-instruct

These models are evaluated based on the context extracted from the provided URLs, and the best response is selected for the user.

 Other Tools
- SSE (Server-Sent Events): A server push technology enabling a client to receive automatic updates from a server via HTTP connection.
- dotenv: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

 Getting Started

 Prerequisites

- Node.js and npm (Node Package Manager)
- Python 3.7+

 Setup

1. Clone the repository
    ```sh
    git clone https://github.com/yourusername/interactive-chatbot.git
    cd interactive-chatbot
    ```

2. Frontend Setup
    ```sh
    cd frontend
    npm install
    npm run dev
    ```

3. Backend Setup
    ```sh
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    uvicorn main:app --reload
    ```

4. Environment Variables
    Create a `.env` file in the root directory and configure the following environment variables:
    ```
    OPENAI_API_KEY=your_openai_api_key
    REPLICATE_API_TOKEN=your_replicate_api_token
    ```

 Usage

1. Access the application
    Open your browser and navigate to `http://localhost:3000` to access the frontend interface.

2. Scrape a URL
    Enter a URL in the provided input field and click "Scrape URL" to process the URL.

3. Chat Interaction
    Type your message in the input field and click "Send Message" to start the conversation. The chatbot will provide responses based on the contextual information obtained from the scraped URL.

 API Endpoints

 Scrape URL
- Endpoint: `/api/scrape`
- Method: POST
- Description: Processes the provided URL and extracts contextual information for the chatbot using BeautifulSoup for web scraping.
- Request Body:
    ```json
    {
        "url": "https://example.com"
    }
    ```

 Chat Stream
- Endpoint: `/api/chat/stream`
- Method: GET
- Description: Streams chat responses using Server-Sent Events (SSE).
- Query Parameter:
    - `message`: The user message to start the conversation.
    
    Example: `/api/chat/stream?message=Hello`

Pictures from application
```
<p align="center">
  <img width="1252" alt="image" src="https://github.com/Farahzalsaf/Farahs-PwC-Assesment/assets/74122145/40ee3274-8f54-4148-bfc7-d4efce99fc50">

  <img width="496" alt="image2" src="https://github.com/Farahzalsaf/Farahs-PwC-Assesment/assets/74122145/4a3af7fe-2b69-47b4-99ed-7798349bb524">

</p>

### Summary

This README file provides an overview of the project, the technologies used, setup instructions, and usage guidelines. It also includes details on the API endpoints for interacting with the backend services.
