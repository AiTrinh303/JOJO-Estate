import './list.scss'
import Card from"../card/Card"

function List({posts}){
  return (
    <div className='list'>
      {/* {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))} */}
      {posts.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List