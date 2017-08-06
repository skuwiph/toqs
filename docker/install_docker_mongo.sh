
# Remember to share E: using the docker settings dialog
#
docker run --name toq-mongo -d mongo --auth
docker exec -it toq-mongo mongo admin

# Supposed to work, but doesn't!
db.createUser({ user: 'admin', pwd: 'sG7LrL', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
