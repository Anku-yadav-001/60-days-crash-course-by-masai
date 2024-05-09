

function FruitsList(){
    let arr=["apple","banana","mango"]
    return <>
    <div>
        <h2>Fouits component</h2>
        {arr.map((ele)=>(
            <p>{ele}</p>
        ))}
    </div>
    </>
}
export default FruitsList