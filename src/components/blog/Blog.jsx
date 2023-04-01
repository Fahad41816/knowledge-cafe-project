import React, { useState } from 'react';
import fakedata from '../../data/fakedata.json'
import style from './Blog.module.css'
 

const Blog = () => {

    const [book, setbook] = useState([]);
    const [readtime, setreadtime] = useState([]);
    
   function addbookmark(title){

        const booklist = [...book, title]
        setbook(booklist)
        
    }

    function addreadtime(time){
       
        const totalTime = parseFloat(readtime) + time
        console.log
        setreadtime(totalTime)
    }

    return (
    <>
        <div className={style.fullblogbody}>
           <div>
           {
                fakedata.map(data=>(
                    <div className={style.Blog}>
                        <div>
                        <div><img src={data.backgroundImage} alt="" /></div>
                        </div>
                        <div className={style.autordetails}>
                            <div className={style.authorimg}>
                                <img  className={style.image} src={data.Image} alt="" />
                                <p className={style.authorname}>{data.name}</p>
                            
                            </div>
                            <div className={style.readtime}>
                                {data.readTime} read time 
                            <div onClick={()=> addbookmark(data.title)} className={style.bookmark}> <i className={style.icon} class="fa fa-bookmark"></i></div>
                            </div>
                        </div>
                        <div className={style.title}><h1>{data.title}</h1></div>
                        <p className={style.tag}>#begginer #programming </p>
                        <a onClick={()=>addreadtime(data.readTime)} className={style.linkid}>mark as read</a>
                </div>
                ))
            }
           </div>
           <div className={style.bookmarkarea}>
             <div className={style.spendTime}>spnt time  on read : {readtime} min</div>
             <div className={style.addbookmarkdiv}>
               {
                book.map(booklist => (
                    <div className={style.addbook}>
                     <p className={style.bookmarktitle}>{booklist}</p>
                </div>
                ))
               }
             </div>
           </div>
        </div>
    </>  
    );
};

export default Blog;