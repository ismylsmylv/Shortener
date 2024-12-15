# URL Shortener  

A modern URL shortener application built with **Next.js**, **TypeScript**, **MongoDB**, and **Next.js API routes**.  

## Features  

- **Shorten URLs**: Create short, shareable links for any valid URL.  
- **Custom Short Links**: Optionally define custom aliases for your links.

## Tech Stack  

- **Frontend**: Next.js with TypeScript.  
- **Backend**: Next.js API routes.  
- **Database**: MongoDB (via Mongoose or native MongoDB driver).  
- **Styling**: TailwindCSS or your preferred CSS framework.  

## Getting Started  

### Prerequisites  

Make sure you have the following installed on your system:  
- Node.js (>=16.x)  
- MongoDB (local or cloud instance)  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/ismylsmylv/Shortener
   cd Shortener
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Set up environment variables:  

   Create a `.env.local` file in the root directory with the following keys:  
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/url-shortener
   NEXT_PUBLIC_BASE_URI=http://localhost:3000
   ```  

   Replace `<username>` and `<password>` with your MongoDB credentials and adjust `BASE_URL` for production.  

4. Start the development server:  
   ```bash
   npm run dev
   ```  

5. Open your browser and navigate to:  
   ```
   http://localhost:3000
   ```  

### Build for Production  

To build the application for production:  
```bash
npm run build
npm start
```  


## API Endpoints  

### POST `/api`  

**Request Body:**  
```json
{
  "long": "https://example.com",
  "short": "NEXT_PUBLIC_BASE_URI + id" // (optional)
}
```  

**Response:**  
```json
{
  "shortUrl": "http://localhost:3000/my-custom-link"
}
```  

### GET `/api?id=alias`  

Redirects the user to the original URL based on the provided alias.  

## Future Enhancements  

- Add user authentication for managing links.  
- Implement link expiration or password protection.  
- Enhance analytics with charts and detailed reports.  

## License  

This project is licensed under the MIT License.  

---  

Feel free to customize this README based on your specific implementation or project requirements.
