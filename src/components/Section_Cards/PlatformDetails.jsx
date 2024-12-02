import '/src/styles/PlatformDetails.css'

const PlatformDetails = (props) =>{
    return(
        <div>
            <div className='Card2'>
                <div className='Image-Section'>
                    <section>
                        <img src="/src/images/Woman.png" alt="" />
                    </section>
                    <div className='Floating-Card' >
                        <div style={{backgroundImage: `url(${props.profile})`}}></div>
                        <h3>Train Tearcher's</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia!
                        </p>
                    </div>
                </div>
                <div className='Text-Section'>
                    <h1>Best Education</h1>
                    <h1>platform</h1>
                    <p>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet obcaecati, dicta minima ipsam inventore dolore reiciendis sit sapiente impedit vero maxime illo neque modi."
                    </p>
                    <button>Read more</button>
                </div>
            </div>
            <div className='Card2'>
                <div className='Text-Section'>
                    <h1>Best Academics</h1>
                    <h1>Center</h1>
                    <p>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet obcaecati, dicta minima ipsam inventore dolore reiciendis sit sapiente impedit vero maxime illo neque modi."
                    </p>
                    <button>Read more</button>
                </div>
                <div className='Image-Section'>
                    <section>
                        <img src="/src/images/man.png" alt="" />
                    </section>
                    <div className='Floating-Card' >
                        <div style={{backgroundImage: `url(${props.profile})`}}></div>
                        <h3>Train Tearcher's</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformDetails;