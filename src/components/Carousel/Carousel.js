import React from 'react';
import './Carousel.css';

export default function Carousel({carouselDetails}) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carouselDetails.paintingProducts[1]} className="d-block" alt='painting products' style={{width: '50%', height: 'auto', }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{carouselDetails.paintingProducts[0]}</h5>
                        <p>{carouselDetails.paintingProducts[2]}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carouselDetails.stainingProducts[1]} className="d-block" alt="staining products" style={{width: '50%', height: 'auto', }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{carouselDetails.stainingProducts[0]}</h5>
                        <p>{carouselDetails.stainingProducts[2]}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carouselDetails.concreteProducts[1]} className="d-block" alt="concrete products" style={{width: '50%', height: 'auto', }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{carouselDetails.concreteProducts[0]}</h5>
                        <p>{carouselDetails.concreteProducts[2]}</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
