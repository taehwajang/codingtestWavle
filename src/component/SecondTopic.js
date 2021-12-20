import React from 'react'

function SecondTopic(props){
    return (
        <div className="topic">
            <div className="topic_title">
                <div className="topic_title_subtitle">{props.title}</div>
                <div className="topic_title_age">{props.age}</div>
            </div>
            <div className="secondTopic_date">
                <div className="topic_date_subject">모임 일자</div>
                <div className="topic_date_detail">{props.datedetail}</div>
            </div>
            <div className="topic_review">
                <p className="topic_review_text">
                    후기를 작성해주세요 <br />
                    소정의 포인트가 지급됩니다.
                </p>
            </div>
            <div className="topic_btn">
                <button className="reviewBtn">후기 보기</button>
                <button className="retouchBtn">후기 수정</button>
            </div>
      </div>
    )
}

export default SecondTopic