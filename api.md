# Notion Blog Post API

This API provides endpoints for fetching blog posts stored in a Notion database. It includes endpoints for retrieving all published posts and fetching a single post by its ID.

## Base URL
http://localhost:5000/api


## Endpoints

### 1. Fetch All Posts

**Endpoint:** `/posts`

**Method:** `GET`

**Description:** Retrieves all published blog posts from the Notion database, sorted by date in descending order.

**Response:**

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

**Schema for Posts:**

| Field              | Description                                              |
|--------------------|----------------------------------------------------------|
| `id`               | Unique ID of the blog post (Notion page ID)              |
| `title`            | Title of the blog post (from Title field)                |
| `date`             | Date of the post (from Date field)                       |
| `typeOfContent`    | Type of content (from Select Type of Content field)      |
| `designation`      | Designation of the writer (from Designation field)       |
| `status`           | Status of the post (should be "Published")               |
| `tags`             | Tags associated with the post (from Tags field)          |
| `writerName`       | Name of the writer (from Writer's Name field)            |
| `writerProfilePhoto`| URL of the writer's profile photo                       |
| `headerImage`      | URL of the header image                                  |

**Sample Response:**
```json
[
  {
    "id": "6713ab38-ce84-427e-b172-cc29881d5f24",
    "title": "Article Title (Article Template)",
    "date": "2024-08-27",
    "typeOfContent": "Articles",
    "designation": "none",
    "status": "Published",
    "tags": [
      "Technical"
    ],
    "writerName": "Anonymous",
    "writerProfilePhoto": {
      "type": "array",
      "array": [
        {
          "type": "files",
          "files": []
        }
      ],
      "function": "show_original"
    },
    "headerImage": "https://prod-files-secure.s3.us-west-2.amazonaws.com/77083266-6762-4eed-9886-08b6ee67cf25/2472b945-b6b6-4b5c-a536-78b210120ac1/Screenshot_%2851%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240827T173549Z&X-Amz-Expires=3600&X-Amz-Signature=f9ded0d933179ec6e9ed7fe0bea803f7b80068f653da8ccc586bf2154e69b77c&X-Amz-SignedHeaders=host&x-id=GetObject"
  },
  {
    "id": "df8fd9c6-3ac8-4818-9aef-f8688f7a3443",
    "title": "Article Title (Article Template)",
    "date": "No Date",
    "typeOfContent": "Articles",
    "designation": "none",
    "status": "Published",
    "tags": [],
    "writerName": "Anonymous",
    "writerProfilePhoto": {
      "type": "array",
      "array": [
        {
          "type": "files",
          "files": []
        }
      ],
      "function": "show_original"
    },
    "headerImage": ""
  }
]
```

## Error Handling

The API provides meaningful error messages and appropriate HTTP status codes for different error conditions:

- **400 Bad Request:** The request could not be understood by the server due to malformed syntax.
- **404 Not Found:** The requested resource could not be found.
- **500 Internal Server Error:** The server encountered an unexpected condition which prevented it from fulfilling the request.

### Example Error Response

**Status Code:** 500 Internal Server Error

**Content-Type:** application/json

```json
{
    "error": "Failed to fetch post"
}
```
## Middleware


- **Error Handler:** Handles errors and sends appropriate responses to the client.

## Environment Variables

- `NOTION_API_KEY`: Your Notion API key.
- `NOTION_DATABASE_ID`: The ID of the Notion database.
- `PORT`: The port on which the server will run.

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up your `.env` file with the necessary environment variables.
4. Start the server: `npm start`
5. The API will be available at `http://localhost:5000/api`.
