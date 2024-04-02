import { NextRequest, NextResponse } from "next/server";
import conn from "../../conn/db"

export type Department = {
    name: String | undefined,
    description: String | undefined
}


export async function GET(req: NextRequest, {params}: {params: {id:string}}){
    const query = `select employee.name,access_level,employee.description,department.name as department from employee join department on department.id = employee.department where employee.id = ${params.id};`;
    const {rows} = await conn.query(query)
    try{
        return NextResponse.json({department:rows})
    }
    catch(e){
        return NextResponse.json({error:e})
    }
    

}

export async function DELETE(req:NextRequest, {params}: {params:{id:string}}){
    const query = `delete from employee where id=${params.id}`
    
    try{
        const {rows} = await conn.query(query)
        return NextResponse.json({message:'Успешно удалено'})

    }
    catch(e){
        return NextResponse.json({message:'Ошибка', error:e})
    }
}
