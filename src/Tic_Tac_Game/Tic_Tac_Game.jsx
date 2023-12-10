import React,{useReducer, useState} from 'react'
import './Tic_Tac_Game.css'
import Cross_Icon from '../Assert/Cross2.jpg'
import Circle_Icon from '../Assert/Circle2.jpg'


function Tic_Tac_Game() {

  const[Count,setCount]=useState(0)
  const [Lock,setLock]=useState({
    l1:true,
    l2:true,
    l3:true,
    l4:true,
    l5:true,
    l6:true,
    l7:true,
    l8:true,
    l9:true,
  })
  const[ICon,setICon]=useState({
    Icon1:'ab', 
    Icon2:'cd', 
    Icon3:'ef',
    Icon4:'gh',
    Icon5:'ij',
    Icon6:'lk',
    Icon7:'mn',
    Icon8:'pq',
    Icon9:'rs',

})
const[Reset,setReset]=useState("") 


const ImgChek= async()=>{
  if((ICon.Icon1==ICon.Icon2  && ICon.Icon2=== ICon.Icon3) ||(ICon.Icon4===ICon.Icon5 && ICon.Icon5===ICon.Icon6)
  ||(ICon.Icon7==ICon.Icon8 && ICon.Icon8===ICon.Icon9)) {
          if((ICon.Icon1==Cross_Icon)||(ICon.Icon3==Cross_Icon)||(ICon.Icon8==Cross_Icon)){
             await setWon('Mr/Ms Crosser You Won The Match ')   
          }
          else{
           await setWon('Mr/Ms Cicle You Won The Match ')
          }
         await setReset('Please Reset And Start The Game')
         await setLock({
          l1:true,
          l2:true,
          l3:true,
          l4:true,
          l5:true,
          l6:true,
          l7:true,
          l8:true,
          l9:true,
        })   

  }
  else if((ICon.Icon1==ICon.Icon4  && ICon.Icon4=== ICon.Icon7) ||(ICon.Icon2===ICon.Icon5 && ICon.Icon5===ICon.Icon8)
  ||(ICon.Icon3==ICon.Icon6 && ICon.Icon6===ICon.Icon9)) {
          if((ICon.Icon3==Cross_Icon)||(ICon.Icon2==Cross_Icon)||(ICon.Icon1==Cross_Icon)){
             await setWon('Mr/Ms Crosser You Won The Match ')   
          }
          else{
           await setWon('Mr/Ms Cicle You Won The Match ')
          }
         await setReset('Please Reset And Start The Game')
         await setLock({
          l1:false,
          l2:false,
          l3:false,
          l4:false,
          l5:false,
          l6:false,
          l7:false,
          l8:false,
          l9:false,
        })   
  }
  else if((ICon.Icon1==ICon.Icon5  && ICon.Icon5=== ICon.Icon9) ||(ICon.Icon3===ICon.Icon5 && ICon.Icon5===ICon.Icon7)) {
          if((ICon.Icon3==Cross_Icon)||(ICon.Icon2==Cross_Icon)||(ICon.Icon1==Cross_Icon)){
             await setWon('Mr/Ms Crosser You Won The Match ')   
          }
          else{
          await setWon('Mr/Ms Cicle You Won The Match ')
          }
          await setReset('Please Reset And Start The Game')
          await setLock({
            l1:false,
            l2:false,
            l3:false,
            l4:false,
            l5:false,
            l6:false,
            l7:false,
            l8:false,
            l9:false,
          })   
  }
} 


const[Won,setWon]=useState('')


   const ICON= async (state,action)=>{
       switch (action.type){
           case 'img1':
              if(Lock.l1){
                if(Count%2==0){
                  await setICon({...ICon,Icon1:Cross_Icon})   
                }
                else{
                  await setICon({...ICon,Icon1:Circle_Icon})
                }
                await setCount(Count+1)
                await setLock({...Lock,l1:false})
              }
              await ImgChek()
              return
            case 'img2':
                if(Lock.l2){
                  if(Count%2==0){
                    await setICon({...ICon,Icon2:Cross_Icon})   
                  }
                  else{
                    await setICon({...ICon,Icon2:Circle_Icon})
                  }
                  await setCount(Count+1)
                  await setLock({...Lock,l2:false})
                }
                await ImgChek()
                return
            case 'img3':
                  if(Lock.l3){
                    if(Count%2==0){
                      await setICon({...ICon,Icon3:Cross_Icon})   
                    }
                    else{
                      await setICon({...ICon,Icon3:Circle_Icon})
                    }
                    await setCount(Count+1)
                    await setLock({...Lock,l3:false})
                  }
                  await ImgChek()
                  return
            case 'img4':
                    if(Lock.l4){
                      if(Count%2==0){
                        await setICon({...ICon,Icon4:Cross_Icon})   
                      }
                      else{
                        await setICon({...ICon,Icon4:Circle_Icon})
                      }
                      await setCount(Count+1)
                      await setLock({...Lock,l4:false})
                    }
                    await ImgChek()
                    return
              case 'img5':
                      if(Lock.l5){
                        if(Count%2==0){
                          await setICon({...ICon,Icon5:Cross_Icon})   
                        }
                        else{
                          await setICon({...ICon,Icon5:Circle_Icon})
                        }
                        await setCount(Count+1)
                        await setLock({...Lock,l5:false})
                      }
                      await  ImgChek()
                      return
               case 'img6':
                        if(Lock.l6){
                          if(Count%2==0){
                            await setICon({...ICon,Icon6:Cross_Icon})   
                          }
                          else{
                            await setICon({...ICon,Icon6:Circle_Icon})
                          }
                          await setCount(Count+1)
                          await setLock({...Lock,l6:false})
                        }
                        await ImgChek()
                        return
                case 'img7':
                          if(Lock.l7){
                            if(Count%2==0){
                              await setICon({...ICon,Icon7:Cross_Icon})   
                            }
                            else{
                              await setICon({...ICon,Icon7:Circle_Icon})
                            }
                            await setCount(Count+1)
                            await setLock({...Lock,l7:false})
                          }
                          await ImgChek()
                          return
                case 'img8':
                            if(Lock.l8){
                              if(Count%2==0){
                                await setICon({...ICon,Icon8:Cross_Icon})   
                              }
                              else{
                                await setICon({...ICon,Icon8:Circle_Icon})
                              }
                              await setCount(Count+1)
                              await setLock({...Lock,l8:false})
                            }
                            await  ImgChek()
                            return
                case 'img9':
                              if(Lock.l9){
                                if(Count%2==0){
                                  await setICon({...ICon,Icon9:Cross_Icon})   
                                }
                                else{
                                  await setICon({...ICon,Icon9:Circle_Icon})
                                }
                                await setCount(Count+1)
                                await setLock({...Lock,l9:false})
                              }
                              await ImgChek()
                              return
             
             
           
       }
   }
   
 const[icon,Dipatch]=useReducer(ICON,0)
  
 
  const ResetBtn= async ()=>{
     await  setICon({
      Icon1:'ab', 
      Icon2:'cd', 
      Icon3:'ef',
      Icon4:'gh',
      Icon5:'ij',
      Icon6:'lk',
      Icon7:'mn',
      Icon8:'pq',
      Icon9:'rs',
       })  
    await setLock({
      l1:true,
      l2:true,
      l3:true,
      l4:true,
      l5:true,
      l6:true,
      l7:true,
      l8:true,
      l9:true,
    })   
    await setCount(0)
    await setReset("")
    await setWon("")
  }

  return (
    <>
       <div className="container">
          <h1 className="title">Tic Tac Toe Game In<span>React</span></h1>
           <h5 className="won">{Won}</h5>
          <div className="board">
               
           <div className="row1">
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img1'})}} ><img src={ICon.Icon1} alt=""/></div>
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img2'})}}><img src={ICon.Icon2} alt="" /></div>
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img3'})}}><img src={ICon.Icon3}alt="" /></div> 
           </div>
           <div className="row2">
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img4'}) }} ><img src={ICon.Icon4} alt=""/></div>
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img5'})}} ><img src={ICon.Icon5} alt=""/></div>
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img6'})}} ><img src={ICon.Icon6} alt=""/></div>  
           </div>
           <div className="row3">
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img7'})}}><img src={ICon.Icon7} alt=""/></div>
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img8'}) }}><img src={ICon.Icon8} alt=""/></div>
             <div className="boxes" onClick={ async ()=>{await Dipatch({type:'img9'})}} ><img src={ICon.Icon9} alt=""/></div>  
           </div>
             
          </div>
          <h5 className='Reset'>{Reset}</h5>
          <button className="reset" onClick={()=>{ResetBtn()}}>Reset</button>
       </div>
    </>
  )
}

export default Tic_Tac_Game