
import React, { ReactNode, useState } from "react";
import classNames from "classnames/dedupe";


export default function GET(props){

    const [response,setResponse] = useState<ReactNode>(<></>)

    const [head, setHead] = useState<ReactNode>(<></>)
    
    const [table,setTable] = useState(false)
    
    async function getResponse(url:string){
        
            const response = fetch(url);
            return (await response).json()
        
    }

    function getRowPiece(value:string){
        return <th className=" border border-[#F2f3F2] p-3">{value}</th>
    }

    function getFullRow(values:string[]){
        const row:ReactNode[] = [];
        values.forEach((value) => {
            row.push(<>{getRowPiece(value)}</>)
        })
        return row;
    }
    
    return(
            <div className="container mx-auto mt-24 flex flex-col ">
                <button onClick={async () => {
                    if(!table){
                        console.log(props)
                        const responseTable:ReactNode[] = [];
                        const headTable:ReactNode[] = [];
                        const responseList:Array<Object>= (await getResponse(props.url))[props.type];
                        Object.values(await responseList).forEach((response:Object) => {
                            responseTable.push(<tr >{getFullRow(Object.values(response))}</tr>)
                        })
                        Object.keys((await responseList)[0]).forEach((key) => {
                            headTable.push(<th className=" border border-[#F2f3F2]">{key}</th>)
                        })
                        setHead(headTable)
                        setResponse(responseTable)
                    }
                    setTable(!table)
                    

                }} className=" bg-[#585A56]/[0.9] text-[#F2f3F2]  p-3 font-semibold">{`get${props.type}`}</button>
                <div className={classNames("bg-[#585A56]/[0.9] rounded-xl p-3 container mt-3",[{'hidden':!table}])}>
                    <table id="department-table" className="table-auto text-[#F2f3F2] border border-[#F2f3F2] w-[100%]">
                        <thead>
                            <tr className="h-[50px]">
                                {head}
                            </tr>
                        </thead>
                        <tbody>
                            {response}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}