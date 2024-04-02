import { NextRequest, NextResponse } from "next/server";
import conn from "../../conn/db"

export type Department = {
    name: String | undefined,
    description: String | undefined
}


export async function GET(req: NextRequest, {params}: {params: {id:string}}){
    const query = `select number,title,scp,object.description,photo,author,employee.name as employee from object,employee where object.employee = employee.id  where object.id = ${params.id};`;
    const {rows} = await conn.query(query)
    try{
        return NextResponse.json({department:rows})
    }
    catch(e){
        return NextResponse.json({error:e})
    }
    

}

export async function DELETE(req:NextRequest, {params}: {params:{id:string}}){
    const query = `delete from object where id=${params.id}`
    
    try{
        const {rows} = await conn.query(query)
        return NextResponse.json({message:'Успешно удалено'})

    }
    catch(e){
        return NextResponse.json({message:'Ошибка', error:e})
    }
}
