# HelloNode

Test project using 
- Docker 
- Docker-Compose
- Virtual Box on Windows 10 Home
- Nodejs Express
- MongoDB

- Install Docker, and Virtual Box
- Node, and Mongo will be installed in Docker images

- Clone the Repo
- In the root directory run:
docker build -t <yourname>/HelloNode .
- This should build an image with the node app inside.
- run:
docker-compose up -d
- This should start up two docker containers, one from the image created of the node app, and another of a mongodb, that the node app can access.
- Go to a web browser and enter.
http://192.168.99.100:3000/?echo=test
- the web page should display the response from Mongo.
