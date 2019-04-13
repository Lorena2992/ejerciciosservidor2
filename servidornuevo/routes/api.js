const API_BASE ="/api"
import db from '../db';

export default function(app){

    app.get(`${API_BASE}/users`,(req,res)=>
    {
        const query = db.getUsers();
        res.json(query);
    }),
    app.get(`${API_BASE}/user/id)`,(req,res)=>{
        const query = db.getUserById(req.params.id);
        res.json(query);
    });
};