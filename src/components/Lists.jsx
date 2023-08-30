import ListItem from "./ListItem";
/* 
props = {
    lists = [
        {id:number,
        text:string,
        icon:<components/>,
        active:true,
    }]
}
*/

function Lists (props) {
    return (
        <ul className="list">
            {props.data.map((item)=> (
                <ListItem key={item.id} {...item}/>
            ))}
        </ul>
    )
}

export default Lists;