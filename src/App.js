
import { useState } from 'react';
import './App.css';
import cross from './images/cross.png';
import zero from './images/zero.png';


function App() {
  function reload(){
          window.location.reload();
  }
  const [sq1,setsq1] = useState(false);
  const [sq2,setsq2] = useState(false);
  const [sq3,setsq3] = useState(false);
  const [sq4,setsq4] = useState(false);
  const [sq5,setsq5] = useState(false);
  const [sq6,setsq6] = useState(false);
  const [sq7,setsq7] = useState(false);
  const [sq8,setsq8] = useState(false);
  const [sq9,setsq9] = useState(false);
  const [visib1,setvisib1] = useState(false);
  const [visib2,setvisib2] = useState(false);
  const [visib3,setvisib3] = useState(false);
  const [visib4,setvisib4] = useState(false);
  const [visib5,setvisib5] = useState(false);
  const [visib6,setvisib6] = useState(false);
  const [visib7,setvisib7] = useState(false);
  const [visib8,setvisib8] = useState(false);
  const [visib9,setvisib9] = useState(false);
  const [imgarr1,setimg1]= useState(null);
  const [imgarr2,setimg2]= useState(null);
  const [imgarr3,setimg3]= useState(null);
  const [imgarr4,setimg4]= useState(null);
  const [imgarr5,setimg5]= useState(null);
  const [imgarr6,setimg6]= useState(null);
  const [imgarr7,setimg7]= useState(null);
  const [imgarr8,setimg8]= useState(null);
  const [imgarr9,setimg9]= useState(null);
  let temp=0;
  let winner;
  if((imgarr1==imgarr2)&&(imgarr2==imgarr3) && (imgarr1!=null) ||imgarr4==imgarr5&&imgarr5==imgarr6&& imgarr4!=null
     ||imgarr7==imgarr8&&imgarr8==imgarr9&& imgarr7!=null ||imgarr1==imgarr4&&imgarr4==imgarr7&& imgarr1!=null
     ||imgarr2==imgarr5&&imgarr5==imgarr8&& imgarr2!=null ||imgarr3==imgarr6&&imgarr6==imgarr9&& imgarr3!=null
     ||imgarr1==imgarr5&&imgarr5==imgarr9&& imgarr1!=null ||imgarr3==imgarr5&&imgarr5==imgarr7&& imgarr3!=null
    )
    {
       temp=1;
    
    }

  const [count,setcount] =useState(0); 
  if(temp==1)
  {
    if(count%2==0)
    winner= "Zero";
    else
    winner = "Cross";
  }

    function addimg1()
    {     
      
        if(visib1!=true)
        { 
          if(count%2==0)
          {
            setimg1(cross);
          }
          else
          {
            setimg1(zero);
          }
            setcount(count+1);
            setsq1(1);
            setvisib1(true);
        }
      
       
    }
    function addimg2()
    {    
      
        if(visib2!=true)
        {
          if(count%2==0)
          setimg2(cross);
          else
          setimg2(zero);
          setcount(count+1);
          setsq2(1);
          setvisib2(true);
        } 
      
     
    }
    function addimg3()
    {     

      
        if(visib3!=true)
        {
          if(count%2==0)
          setimg3(cross);
          else
          setimg3(zero);
          setcount(count+1);
          setsq3(1);
          setvisib3(true);
        } 
      
     
    }
    function addimg4()
    {     
      if(visib4!=true)
      {
        if(count%2==0)
        setimg4(cross);
        else
        setimg4(zero);
        setcount(count+1);
        setsq4(1);
        setvisib4(true);
      } 
    }
    function addimg5()
    {     
      if(visib5!=true)
      {
        if(count%2==0)
        setimg5(cross);
        else
        setimg5(zero);
        setcount(count+1);
        setsq5(1);
        setvisib5(true);
      } 
    }
    function addimg6()
    {     
      if(visib6!=true)
      {
        if(count%2==0)
        setimg6(cross);
        else
        setimg6(zero);
        setcount(count+1);
        setsq6(1);
        setvisib6(true);
      } 
    }
    function addimg7()
    {    
      if(visib7!=true)
      {
        if(count%2==0)
        setimg7(cross);
        else
        setimg7(zero);
        setcount(count+1);
        setsq7(1);
        setvisib7(true);
      } 
    }
    function addimg8()
    {     
      if(visib8!=true)
      {
        if(count%2==0)
        setimg8(cross);
        else
        setimg8(zero);
        setcount(count+1);
        setsq8(1);
        setvisib8(true);
      } 
        
    }
    function addimg9()
    {    
      if(visib9!=true)
      {
        if(count%2==0)
        setimg9(cross);
        else
        setimg9(zero);
        setcount(count+1);
        setsq9(1);
        setvisib9(true);
      } 
    
  
      
  }
  return (
    <div className="App">
      
             <div className='div1'>{temp==0?count!=9?`Total Moves ${count}`:"Draw":`Winner is ${winner} `}</div>
         <div className='main_box'>
            <div className='small_box' onClick={temp==0?addimg1:null}>
                   <div className={sq1==0?'none':''}>
                        <img src={imgarr1} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg2:null}>
                   <div className={sq2==0?'none':''}>
                        <img src={imgarr2} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg3:null}>
                   <div className={sq3==0?'none':''}>
                        <img src={imgarr3} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg4:null}>
                   <div className={sq4==0?'none':''}>
                        <img src={imgarr4} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg5:null}>
                   <div className={sq5==0?'none':''}>
                        <img src={imgarr5} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg6:null}>
                   <div className={sq6==0?'none':''}>
                        <img src={imgarr6} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg7:null}>
                   <div className={sq7==0?'none':''}>
                        <img src={imgarr7} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg8:null}>
                   <div className={sq8==0?'none':''}>
                        <img src={imgarr8} alt="err" />
                    </div>
            </div>
            <div className='small_box' onClick={temp==0?addimg9:null}>
                   <div className={sq9==0?'none':''}>
                        <img src={imgarr9} alt="err" />
                    </div>
            </div>
      </div>
           <button onClick={reload}>restart</button>
    </div>
  );
}

export default App;
