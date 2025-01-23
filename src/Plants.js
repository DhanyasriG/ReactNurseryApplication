

function Plants({ item, handleClick }) {
    const { title, img, price, des } = item;
    
    return (
            <div className="c1">
                <h3>{title}</h3><br/>
                <img src={img} alt={title}/><br/>
                <p>RS:{price}</p><br/>
                <p>{des}</p><br></br>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        
        
    );
}

export default Plants;
