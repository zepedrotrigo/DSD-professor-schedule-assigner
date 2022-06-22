# DSD - a platform to plan the distribution of Professors across classes and curricular units.

The DSD is a platform that provides DSDers with a better way to plan and execute the distribution of Professors across classes and curricular units.<br>
This process is a very complex task and there is no standardized way to perform it, with many departments relying on excel spreadsheets to perform the job at hand.<br>
We aim to offer a better way to solve this complex task by building a practical and powerful platform that lets DSDers assign Professors to classes whilst being able to easily view all necessary information required to elaborate the work distribution.

http://pi-dsd.westeurope.cloudapp.azure.com/

![Image](/deliveries/dsd.png)


# Instructions
### `How to run`

```
cd work_schedule_assigner/project/backend/
sudo docker-compose up

Notes: 
website is hosted at http://localhost:3000
api is hosted at http://localhost:8080

Platform deployed at: http://pi-dsd.westeurope.cloudapp.azure.com/

Sometimes docker entrypoint doesn't import all .sql files so the sql-db folder must be deleted and re-imported
```

### `Changes needed for deployment`
```
cd work_schedule_assigner/project/frontend/

# substitute 'http//:localhost:8080/v1' with the ip:port where your API is running
nano .env
```
```
cd work_schedule_assigner/project/frontend/
nano docker-compose.yml

# Change these lines in the react service container like so:
services:
  react:
    (...)
    ports:
      - 3000:3000 # change to 80:3000
    (...)
```