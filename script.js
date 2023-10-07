let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let score = document.getElementById('score')
let option = document.getElementById('option')
let result = document.getElementById('result')
let reset=document.getElementById('reset')
rock.onclick =()=>
  {
   let value=0
    res(0)
    
  }
paper.onclick =()=>
  {
   let  value=1
    res(1)
    
  }
scissors.onclick =()=>
  {
   let  value =2
    res(2)
    
  }

const res =(val) =>
  {
    let temp =val
    let random = Math.floor(Math.random()*3)
    
    if(temp==0)
    {
      resPrint(0,random)
      if(random == 1)
      {
        fail()
      }
      else if (random == temp)
      {
        draw()
      }
      else{
        win()
      }
    }
    else if(temp==1)
    {
       resPrint(1,random)
      if(random == 2)
      {
        fail()
      }
      else if (random == temp)
      {
        draw()
      }
      else{
        win()
      }
    }
    else
    {
       resPrint(2,random)
      if(random == 0)
      {
        fail()
      }
      else if (random == temp)
      {
        draw()
      }
      else{
        win()
      }
    }
  }
const fail =() =>
  {
    score.innerHTML=0
    result.innerHTML='BETTER LUCK NEXT TIME😞!'
      
  }
const win =() =>
  {
    score.innerHTML=1
    result.innerHTML='HURRAYY🥳!'
      
  }
const draw =() =>
  {
    score.innerHTML=0
    result.innerHTML="OOPS 😞!"
      
  }
reset.onclick =() =>
{
  score.innerHTML=' '
    result.innerHTML=" "
    option.innerHTML=" "
  
}
const resPrint =(one,two) =>
  {
    let emoji1=printEmoji(one) 
    let emoji2=printEmoji(two)
    option.innerHTML=`👨 ${emoji1} vs 🤖 ${emoji2}`
  }
printEmoji =(num)=>
  {
    if(num==0)
    {
      return 'stone'
    }
    else if (num ==1)
    {
      return 'paper'
    }
    else
    {
      return'scissors'
    }
  }
