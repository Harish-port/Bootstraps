# Start container
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop container
docker-compose down

# Restart container
docker-compose restart

# Stop all containers
docker kill $(docker ps -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all Images
docker rmi $(docker images -q)

# Checking tail logs
docker-compose logs --tail=100 -f

