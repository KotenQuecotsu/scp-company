'use client'

import { ReactNode, useMemo, useState } from "react";
import GET from "../_components/GET/GET";
import POST from "../_components/POST/POST";
import classNames from "classnames";

export type Department = {
    name:string,
    description:string,
}

export default function Admin(){

   
    
    return (
        <>
            
            <GET url='/api/department' type='departments'></GET>
            <GET url='/api/employee'type='employees'></GET>
            <GET url='/api/object'type='objects'></GET>
            
            <POST type='department'></POST>
            <POST type='employee'></POST>
            <POST type='object'></POST>
            
        </>
    );
}