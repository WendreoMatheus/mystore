# Boilerplate expressjs

## Steps
1. docker-compose up -d --build
2. docker-compose run server npx prisma migrage dev
3. docker-compose run server npm prisma db seed
4. verify http://localhost:3000/users to see John Doe

## TODO
[] Add product schema
[] Add react frontend 
[] Configure nginx
