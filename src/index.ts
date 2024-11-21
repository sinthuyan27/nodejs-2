import express, {Request, Response} from 'express'

const app = express();

const studentInfo =[
    {
        "id":"1",
        "name":"sinthu",
        "age":"20",
        "address":"kodikamam"
    },
    {
        "id":"2",
        "name":"abishan",
        "age":"21",
        "address":"nochi",
    },
    {
        "id":"3",
        "name":"kugan",
        "age":"21",
        "address":"jaffna"
    },
    {
        "id":"4",
        "name":"dinu",
        "age":"21",
        "address":"killi"
    },

]
app.get('/student/:Id', (req:Request, res:Response) => {
    const studentDetails = studentInfo.find((detial) =>{
        return detial.id === req.params.Id
    })
    console.log(studentDetails);
    res.send(studentDetails);
})
 
app.get('/student', (req:Request, res:Response) => {
    res.send(studentInfo);
})

app.listen(8000, () => {
    console.log('server is running on port 8000');
})




