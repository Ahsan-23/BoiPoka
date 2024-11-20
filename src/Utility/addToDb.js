const getStoredReadlist=()=>{
    const storedList=localStorage.getItem('read-list');
    if(storedList){
        const storedList=JSON.parse(storedList);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoredReadList=(id)=>{
    const storedList=getStoredReadlist();
    if(storedList.includes(id)){
        console.log(id,'already exist');
    }
    else{
        storedList.push(id);
        const storedList=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedList);
    }
}
export {addToStoredReadList,getStoredReadlist}