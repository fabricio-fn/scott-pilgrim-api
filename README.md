# Scott Pilgrim API

This project is a simple API based on the Netflix anime 'Scott Pilgrim Takes Off'.

## URL

    https://scott-pilgrim-api.vercel.app/character

## Endpoints

- **Endpoint:** `/character`
- **Method:** `GET`
- **Description:** Get a list of all characters.
- **Example Response:**

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "gender": "Male",
      "age": 30,
      "status": "Alive",
      "occupation": "Driver",
      "image": "https://example.com/image/1.jpg"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "gender": "Female",
      "age": 25,
      "status": "Alive",
      "occupation": "Drummer",
      "image": "https://example.com/image/2.jpg"
    }
  ]
  ```

- **Endpoint:** `/character/:id`
- **Method:** `GET`
- **Description:** Get details of a specific character by ID.
- **Example Response:**

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "gender": "Male",
    "age": 30,
    "status": "Alive",
    "occupation": "Driver",
    "image": "https://example.com/image/1.jpg"
  }
  ```

## Technologies Used

- [Node.js](https://nodejs.org/en) - Official Node.js website.
- [Fastify](https://fastify.dev/) - Official Fastify website.
