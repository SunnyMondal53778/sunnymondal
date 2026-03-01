export default function FeaturedOn() {
    const logos = ['Forbes India', 'Economic Times', 'YourStory', 'Inc42', 'BusinessLine', 'The Ken', 'Mint', 'NDTV Profit'];
    return (
        <section className="featured-on" id="featured">
            <div className="container">
                <p className="featured-label">AS FEATURED ON</p>
                <div className="logo-track-wrapper">
                    <div className="logo-track">
                        {logos.map(l => <div key={l} className="logo-item">{l}</div>)}
                        {logos.map(l => <div key={l + '-dup'} className="logo-item">{l}</div>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
