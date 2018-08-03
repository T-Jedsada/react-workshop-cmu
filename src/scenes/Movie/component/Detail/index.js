import React from 'react'
import './index.css'
import '../../../../components/Card'
import Paper from '../../../../components/Paper';
import Rating from '../../../../components/Rating';
import Button from '../../../../components/Button';
import ItemDtail from '../../../../components/ItemDetail';

function Detail(props) {
    let item = props.item
    return (
        <div className='movie-detail-container'>
            <Paper type="detail">
                <div className='movie-detail'>
                    <div className='header-header'>
                            <h1>{item.name}</h1>
                            <div className="image-container">
                                <img src={item.image}/>
                            </div>
                            <div className='rating-container'>
                                <Rating rate={item.rated}/>
                            </div>
                    </div>
                    <div className='detail-container'>
                        <ItemDtail label="Released on" value ={item.released}/>
                        <ItemDtail label="Director" value ={item.director}/>
                        <ItemDtail label="Stars" value ={item.stars && item.stars.join(", ")}/>
                        <ItemDtail label="Reviewer" value ={item.reviewers + " users"}/>
                    </div>
                    <div className='button-container'>
                        <span>
                            <Button text="View Detail" primary onClick={props.onShowDialog}/>
                        </span>
                        <Button text="Back" onClick={props.onBackPressed}/>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Detail