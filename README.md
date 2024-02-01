# Simple Formulir Back-end App!
This repository is intended as a resource for the `BootCamp CC#1 GDSC Telkom University` 
> GDSC Telkom University Core Team

## General
This APIs was developed using:
- Node.Js v18.13.0
- Express v4.18.2
- Supabase PostgresSQL

### How to run this APIs
- Clone this project to your GCP project’s repository
```bash
git clone https://github.com/hiskandaryps/formulir_backend_cc
``` 
- Install all the required depedencies
```bash
npm install
``` 
- Provide the required data for the `.env` file, that consist of : `SUPABASE_URL`, `SUPABASE_KEY`, `PORT`
- Run the back-end application
```bash
npm run start
``` 
## APIs Documentation
<details>
<summary>getAllData</summary>
Request:

- Method: `GET`
- Endpoint: `/formulir`
- Body: `none`

Response:
```json
{
    "status": 200,
    "data": [],
    "message": "Data fetched successfully"
}
```
</details>
<details>
<summary>getDataById</summary>
Request:

- Method: `GET`
- Endpoint: `/formulir/:student_id`
- Body: `none`

Response:
```json
{
    "status": 200,
    "data": [],
    "message": "Data fetched successfully"
}
```
</details>
<details>
<summary>postData</summary>
Request:

- Method: `POST`
- Endpoint: `/formulir`
- Body:
```json
{
    "name": "your name in varchar",
    "student_id": "your student id in varchar",
    "student_class": "your class in varchar"
}
```

Response:
```json
{
    "status": 201,
    "data": [],
    "message": "Student data inserted successfully"
}
```
</details>
<details>
<summary>putDataById</summary>
Request:

- Method: `PUT`
- Endpoint: `/formulir/:student_id`
- Body:
```json
{
    "name": "your new name in varchar",
    "student_id": "your new student id in varchar",
    "student_class": "your new class in varchar"
}
```

Response:
```json
{
    "status": 201,
    "data": [],
    "message": "Student data updated successfully"
}
```
</details>
<details>
<summary>deleteDataById</summary>
Request:

- Method: `DELETE`
- Endpoint: `/formulir/:student_id`
- Body: `none`

Response:
```json
{
    "status": 201,
    "data": [],
    "message": "Student data deleted successfully"
}
```
</details>
