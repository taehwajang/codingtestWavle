import React ,{ useState }from 'react';


function Topic(props) {
    const [comment, setComment] =useState([]); 
    const fileList = [];

    function onChangeHandler(e){
        const commentIndex = e.target.value;
        setComment(commentIndex);
    }
    function onChangeFile(e){
        fileList.push(e.target.files[0].name);
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
               <input type="textarea" id ="inputComment" className="topic_input_text" placeholder="내용을 입력하세요. &#13;&#10; 30자~500자 등록 가능" onChange={(e)=>onChangeHandler(e)}></input>
            </div>
            <div className="topic_file">
                <div className="topic_file_area">
                    <input type="file" onChange={(e) => onChangeFile(e)}></input>
                    <div className="topic_file_photo">
                        <p className="topic_file_plus">+</p>
                        <p className="topic_file_text">사진첨부</p>
                    </div>
                </div> 
                <div className="topic_file_area">
                    <div className="topic_file_photo">
                        <p className="topic_file_plus">+</p>
                        <p className="topic_file_text">사진첨부</p>
                    </div>
                    <input type="file" onChange={(e) => onChangeFile(e)}></input>
                </div> 
                <div className="topic_file_area">    
                    <div className="topic_file_photo">
                        <p className="topic_file_plus">+</p>
                        <p className="topic_file_text">사진첨부</p>
                    </div>
                    <input type="file" onChange={(e) => onChangeFile(e)}></input>
                </div> 

            </div>
            <div className="secondTopic_btn">
                <button className="cancelBtn">취소</button>
                <button className="uploadBtn" onClick={()=>console.log(`제목: ${props.title}, 내용 : ${comment}, 파일 개수 : ${fileList.length}, 파일 원본 이름 :[ ${fileList} ] `)}>등록하기</button>
            </div>
        </div>
    )
}

export default Topic

