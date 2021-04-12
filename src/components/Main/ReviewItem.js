import React from 'react';


export default function ReviewItem (item) {
    const name = item.item.name;
    const avatar = item.item.avatar;
    const text = item.item.text;
    return (
        <li className="reviews-item">
            <div className="reviews-item-avatar">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="reviews-item-info">
                <div className="reviews-item-name">{name}</div>
                <div className="reviews-item-blockquote">
                    <blockquote className="reviews-item-text">{text}</blockquote>
                </div>
            </div>
        </li>
    )

}