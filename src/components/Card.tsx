
const GlassCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
            <div className="relative max-w-sm rounded-2xl  overflow-hidden  ">
                <img
                    className="w-full h-60 object-cover"
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
                    alt="Card Image"
                />
                <div className=" absolute bottom-0 max-w-sm rounded-2xl m-2 p-2 overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                    <h2 className="text-xl text-white font-semibold mb-2">
                        Beautiful Destination
                    </h2>
                    <p className="text-sm text-gray-200">
                        Explore the world’s most stunning places and experience
                        nature like never before.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlassCard;
