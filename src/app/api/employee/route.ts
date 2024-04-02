import { NextRequest, NextResponse } from "next/server";
import conn from "../conn/db"

export type Department = {
    name: String | undefined,
    description: String | undefined
}


export async function GET(){
    const query = 'select employee.name,access_level,employee.description,department.name as department from employee join department on department.id = employee.department;';
    const {rows} = await conn.query(query)
    return NextResponse.json({employees: rows})
}

export async function POST(request: Request){
    const {name,access_level,description,department} = await request.json()
    const query = `insert into employee(name,access_level,description,department) values('${name}','${access_level}','${description}',${department});`
    try{
        
        
        await conn.query(query);
        return NextResponse.json({msg:'Успешно добавлено'})
    }
    catch(e){
        return NextResponse.json({msg: 'Ошибка',err: e, query: query, request: request, name: name, description:description})
    }
}
