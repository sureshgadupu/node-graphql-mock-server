 import express from 'express';
 import jsonGraphqlExpress from 'json-graphql-server';
 import cors from 'cors';

const HOST  = "localhost";
const PORT = 3000;
const app = express();
const data = {
   
     departments: [
        { id: 1, dept_name: "Lorem Ipsum" },
        { id: 2, dept_name: "Sic Dolor amet" },
      ],
      employees: [
        {
          id: 123,
          first_name: "John Doe",
          last_name: "Last",
          gender: "M",
          birth_date: new Date("2017-07-03"),
          hire_date: new Date("2017-09-03"),
          department_id: 1,
        },
        {
          id: 456,
          first_name: "John 456",
          last_name: "Last",
          gender: "M",
          birth_date: new Date("2017-07-03"),
          hire_date: new Date("2017-07-03"),
          department_id: 1,
        },
        {
          id: 789,
          first_name: "John 789",
          last_name: "Last",
          gender: "M",
          birth_date: new Date("2017-07-03"),
          hire_date: new Date("2017-07-03"),
          department_id: 2,
        },
      ],
};
app.use(cors());
app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(PORT,HOST);
let msg = `GraphQL server running with your data at http://${HOST}:${PORT}/`;
console.log(msg);