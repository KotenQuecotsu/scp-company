import { NextRequest, NextResponse } from "next/server";
import conn from "../conn/db"

export type Department = {
    name: String | undefined,
    description: String | undefined
}


export async function GET(){
    const query = 'select name,description from department';
    const {rows} = await conn.query(query)
    return NextResponse.json({departments: rows})
}

export async function POST(request: Request){
    const {name,description} = await request.json()
    const query = `insert into department(name,description) values('${name}','${description}');`
    try{
        
        
        await conn.query(query);
        return NextResponse.json({msg:'Успешно добавлено'})
    }
    catch(e){
        return NextResponse.json({msg: 'Ошибка',err: e, query: query, request: request, name: name, description:description})
    }
}
