# GalaxyEyeConsole
Welcome to the GalaxEye Satellite Image Console! 

Explore and visualize satellite image data effortlessly. Select an Area of Interest (AOI) on the map, and we'll provide you with all the relevant satellite image tiles intersecting with your chosen AOI.

Instructions: 
- To create an AOI, choose the Polygon Icon on the map and place points on the map.
- Once the polygon is created, you will visualize the tiles that intersect with it.
- If you initiate a new polygon, the current results will be cleared.
- To remove the results, you can utilize the delete icon.
- If you wish to modify the polygon, you can do so using the Edit icon. 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (for local development)
- npm or yarn installed (for local development)
- Docker installed (for running the project in a Docker container)

## Getting Started

To get this project up and running, follow these steps:

### Local Development

1. Clone the repository to your local machine:

   ```
    git clone git@github.com:RuchaRK/GalaxyEyeConsole.git
   ```

3. Navigate to the project directory:

   ```
   cd GalaxyEyeConsole
   ```

4. Install project dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   npm run start
   ```

   Your React application should now be running at `http://localhost:3000`.

### Using Docker-compose

1. Clone the repository to your local machine:

   ```
   git clone git@github.com:RuchaRK/GalaxyEyeConsole.git
   ```

2. Navigate to the project directory:

   ```
   cd GalaxyEyeConsole
   ```

3. Run the project using Docker Compose:
   ```
   docker-compose up
   ```

4. Stop the project

   ```
   docker-compose down
   ```

   Your React application should now be running in a Docker container, accessible at `http://localhost:3000`.
