import {Component} from "react";


class MovieCard extends Component{
    constructor (){
        super();
        this.state = {
            title: "The Avengers",
            plot:"Super Natural movie with super hero",
            price:"199",
            rating:"8.9",
        }
        // this.addStars=this.addStars.bind(this);
    }
    addStars = () =>{
        console.log("this:",this);
    }
    render(){
        const{title,plot,price,rating} = this.state;
        return(
            <div className="main">

                <div className="movie-card">

                    
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{this.state.title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">8.5</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                 onClick={this.addStars}/>
                                <span className="starCount">0</span>
                            </div>

                            {/**Favourite and add to cart buttons */}
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
       

}

export  default MovieCard;