function overload(v1:any , v2?:any):void
{
    console.log(v1)
    
    if(v2)
        console.log(v2)
}

overload("abc")
overload(30)
overload("abc",10)
