import man from '../assets/images/ManDoingStuffs.jpg'
import Features from '../components/Features'
import '../assets/stylesheets/FindStock.css'

export default function FindStock() {
    return (
        <div className="find-stock">

            <div className="left">
                <img src={man} alt="Man looking a laptop" />

                <div className="quotes static">

                    <span className='content'>
                        “Successful traders prioritize smart trades over profits through calculated risk-taking and strategic decision-making.”
                    </span>

                    <span className='author'>
                        John Meek
                    </span>

                </div>

            </div>

            <div className="right">
                <h3>
                    Find Stocks According To Your Criteria
                </h3>
                <p>
                    Discover stocks that align with your investment goals using our customizable criteria search tool.
                </p>
                <div className="features-container">
                    <Features
                        name="Choose Your Stock"
                        content="Explore a wide range of stocks and pick the best for your portfolio with ease."
                        character="שׁ"
                        odd={true}
                    />
                    <Features
                        name="Detailed Comparison"
                        content="Compare stocks in-depth with our detailed analysis tool."
                        character="北"
                        odd={false}
                    />
                    <Features
                        name="Buy Your Shares"
                        content="Discover how easy it is to buy shares with our seamless platform and start building your portfolio today."
                        character="ﯔ"
                        odd={true}
                    />
                    <Features
                        name="Sell Anytime"
                        content="Discover how easy it is to sell shares with our seamless platform and start building your portfolio today."
                        character="﯆"
                        odd={false}
                    />
                </div>
            </div>
        </div>
    )
}