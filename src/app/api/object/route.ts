import { NextRequest, NextResponse } from "next/server";
import conn from "../conn/db"

export type Department = {
    name: String | undefined,
    description: String | undefined
}


export async function GET(){
    const query = 'select title,number,scp,object.description,photo,author,employee.name from object,employee where object.employee = employee.id';
    const {rows} = await conn.query(query)
    return NextResponse.json({objects: rows})
}

export async function POST(request: Request){
    const {title,number,scp,description,author,employee} = await request.json()
    const query = `insert into object(title,number,scp,description,author,employee) values('${title}',${number},'${scp}','${description}','${author}',${employee});`
    try{
        
        
        await conn.query(query);
        return NextResponse.json({msg:'Успешно добавлено'})
    }
    catch(e){
        return NextResponse.json({msg: 'Ошибка',err: e, query: query, request: request, name: title, description:description})
    }
}
