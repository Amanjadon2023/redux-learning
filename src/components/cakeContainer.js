/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import BuyCake from '../redux/index'
const CakeContainer = (props) => {
    const data = useSelector((state) => { console.log(state); return state.numOfCakes })
    const dispatch = useDispatch();
    console.log(data)
    return (
        <div>
            {/* <p>Cake container-{props.numOfCakes}{data}</p>
      <button onClick={()=>{props.buyCake()}}>Buy A Cake</button> */}
            <p>Cake container={props.numOfCakes}{data}</p>
            <button onClick={() => { dispatch(BuyCake()) }}>Buy A Cake</button>
        </div >
    )
}
// const mapToStateProps=(state)=>{
//     console.log('1')
//   return {
//       numOfCakes:state.numOfCakes
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//     console.log('2')
//     return {
//         buyCake:()=>{dispatch(BuyCake())}
//     }
// }

// export default connect(mapToStateProps,mapDispatchToProps)(CakeContainer)
export default CakeContainer
