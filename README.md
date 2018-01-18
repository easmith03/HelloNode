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
docker build -t eric/hellonode .
- This should build an image with the node app inside.  The image name (eric/hellonode) should be the same as the one referenced in the docker-compose file.
- run:
docker-compose up -d
- This should start up two docker containers, one from the image created of the node app, and another of a mongodb, that the node app can access.
- Go to a web browser and enter.
http://192.168.99.100:3000/?echo=test
- the web page should display the response from Mongo.  The node app saves the value in the echo parameter to a mongo collection.
- docker-machine ip will give you the virtual machine ip.  It may be different than the example one above.
you can experiment with hitting the mongdb inside the virtual machine to read the data.
