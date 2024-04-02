import {Department, Employee, Object} from '../../utils/types'
import {useState} from 'react'
import classNames from "classnames/dedupe";

export default function POST(props){

    const [response,setResponse] = useState(false)

    const [state,setState] = useState()

    const handleSubmitDepartment = async (event) => {
        event.preventDefault()

        const department:Department = {
            name: String(event?.target?.name.value),
            description: String(event?.target?.description.value)

        }
        const response = await fetch('api/department',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(department)
        })

        const state = (await response).json()
        console.log(await state)
        setState((await state).msg)
        setResponse(true)
        return response
    }

    const handleSubmitEmployee = async (event) => {
        event.preventDefault()

        const employee:Employee = {
            name: String(event?.target?.name.value),
            access_level: String(event?.target.access_level.value),
            description: String(event?.target?.description.value),
            department: Number(event?.target?.department.value)

        }
        const response = await fetch('api/employee',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(employee)
        })

        const state = (await response).json()
        console.log(await state)
        setState((await state).msg)
        setResponse(true)
        return response
    }
    
    const handleSubmitObject = async (event) => {
        event.preventDefault()

        const employee:Object = {
            title: String(event?.target.title.value),
            number:Number(event?.target?.number.value),
            scp:String(event?.target.scp.value),
            description: String(event?.target?.description.value),
            author: String(event?.target?.author.value),
            employee: Number(event?.target?.employee.value),

        }
        const response = await fetch('api/object',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(employee)
        })

        const state = (await response).json()
        console.log(await state)
        setState((await state).msg)
        setResponse(true)
        return response
    }

    if(props.type == 'department'){
        return(<>
            <div className='flex  flex-col container mt-24 text-center mx-auto'>
                <div className=' bg-[#585A56]/[0.9] text-[#F2f3F2]  p-3 font-semibold'>postDepartment</div>
                <form className= {classNames(' grid grid-cols-2 mt-3 p-3 rounded-xl bg-[#585A56]/[0.9] text-[#F2f3F2]',[{'hidden':response}])} id='department' onSubmit={handleSubmitDepartment}>
                    <input className='bg-[#585A56]/[0.9] border border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='string' id='name' name='name' placeholder='name'></input>
                    <input className='bg-[#585A56]/[0.9] border-y border-r  border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='text' id='description' name='description' placeholder='description'></input>
                    <button className='col-span-2 p-3 border-b border-x border-[#F2f3F2] font-semibold' type='submit'>Отправить</button>
                </form>
                <div className={classNames('grid grid-cols-2 rounded-xl mt-3 p-3 text-center bg-[#585A56]/[0.9] text-[#F2f3F2]  border-[#F2f3F2] font-semibold',[{'hidden':!response}])}>
                    <div className='col-span-2 border-t p-3 border-x'>{state}</div>
                    <button className=' border col-span-2 border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' onClick={() => {setResponse(false)}}>
                        Добавить ещё
                    </button>
                    </div>
            </div>
       </>)
    }else if(props.type == 'employee'){
        return(
            <div className='flex  flex-col container mt-24 text-center mx-auto'>
                <div className=' bg-[#585A56]/[0.9] text-[#F2f3F2]  p-3 font-semibold'>postEmployee</div>
                <form className= {classNames(' grid grid-cols-4 mt-3 p-3 rounded-xl bg-[#585A56]/[0.9] text-[#F2f3F2]',[{'hidden':response}])} id='department' onSubmit={handleSubmitEmployee}>
                    <input className='bg-[#585A56]/[0.9] border border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='string' id='name' name='name' placeholder='name'></input>
                    <input className='bg-[#585A56]/[0.9] border-y border-r  border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='text' id='access_level' name='access_level' placeholder='access_level'></input>
                    <input className='bg-[#585A56]/[0.9] border border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='string' id='description' name='description' placeholder='description'></input>
                    <input className='bg-[#585A56]/[0.9] border-y border-r  border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='number' id='department' name='department' placeholder='department'></input>
                    <button className='col-span-4 p-3 border-b border-x border-[#F2f3F2] font-semibold' type='submit'>Отправить</button>
                </form>
                <div className={classNames('grid grid-cols-4 rounded-xl mt-3 p-3 text-center bg-[#585A56]/[0.9] text-[#F2f3F2]  border-[#F2f3F2] font-semibold',[{'hidden':!response}])}>
                    <div className='col-span-4 border-t p-3 border-x'>{state}</div>
                    <button className=' border col-span-4 border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' onClick={() => {setResponse(false)}}>
                        Добавить ещё
                    </button>
                    </div>
            </div>
        )
        
    }else if(props.type == 'object'){
        return(
            <div className='flex  flex-col container mt-24 text-center mx-auto'>
                <div className=' bg-[#585A56]/[0.9] text-[#F2f3F2]  p-3 font-semibold'>postObject</div>
                <form className= {classNames(' grid grid-cols-6 mt-3 p-3 rounded-xl bg-[#585A56]/[0.9] text-[#F2f3F2]',[{'hidden':response}])} id='department' onSubmit={handleSubmitObject}>
                    <input className='bg-[#585A56]/[0.9] border border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='string' id='title' name='title' placeholder='title'></input>
                    <input className='bg-[#585A56]/[0.9] border border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='number' id='number' name='number' placeholder='number'></input>
                    <input className='bg-[#585A56]/[0.9] border-y border-r  border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='text' id='scp' name='scp' placeholder='scp'></input>
                    <input className='bg-[#585A56]/[0.9] border border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='string' id='description' name='description' placeholder='description'></input>
                    <input className='bg-[#585A56]/[0.9] border-y border-r  border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='text' id='author' name='author' placeholder='author'></input>
                    <input className='bg-[#585A56]/[0.9] border-y border-r  border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' type='number' id='employee' name='employee' placeholder='employee'></input>
                    <button className='col-span-6 p-3 border-b border-x border-[#F2f3F2] font-semibold' type='submit'>Отправить</button>
                </form>
                <div className={classNames('grid grid-cols-5 rounded-xl mt-3 p-3 text-center bg-[#585A56]/[0.9] text-[#F2f3F2]  border-[#F2f3F2] font-semibold',[{'hidden':!response}])}>
                    <div className='col-span-5 border-t p-3 border-x'>{state}</div>
                    <button className=' border col-span-5 border-[#F2f3F2] text-[#F2f3F2]  p-3 font-semibold' onClick={() => {setResponse(false)}}>
                        Добавить ещё
                    </button>
                    </div>
            </div>
        )
            
    }

  
}