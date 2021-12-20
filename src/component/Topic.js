import React,{ useState } from 'react';


function Topic(props) {
    const [comment, setComment] =useState([]);

    function onChangeHandler(e){
       setComment(e.target.value);
    }
    
    return (
        <div className="topic">
            <div className="topic_title">
                <div className="topic_title_subtitle">{props.title}</div>
                <div className="topic_title_age">{props.age}</div>
            </div>
            <div className="topic_date">
                <div className="topic_date_subject">모임 일자</div>
                <div className="topic_date_detail">{props.datedetail}</div>
            </div>
            <div className="topic_input">
               <input type="textarea" className="topic_input_text" placeholder="내용을 입력하세요. 30자~500자 등록 가능" onChange={console.log(comment)}></input>
            </div>
            <div className="topic_file">
                <div className="topic_file_area">
                    <input type="file"></input>
                </div> 
                <div className="topic_file_area">
                    <input type="file"></input>
                </div> 
                <div className="topic_file_area">    
                    <input type="file"></input>
                </div> 

            </div>
            <div className="secondTopic_btn">
                <button className="cancelBtn" onClick={()=>alert("Are you sure you want to cancel")}>취소</button>
                <button className="uploadBtn" onClick={()=>console.log(`제목: ${props.title}, 내용 :${setComment} `)}>등록하기</button>
            </div>
        </div>
    )
}

export default Topic

