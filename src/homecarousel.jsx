import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialCarousel = ({ setZoomImage }) => {
  const testimonials = [
    person1, person2, person3, person4, person5, person6,
    person7, person8, person9, person10, person11, person12
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640, // sm
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="px-4 sm:px-6 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-lato font-bold text-gray-800 mb-3">
          SEE WHAT PEOPLE ARE SAYING
        </h2>
        <p className="text-gray-600 font-lato font-bold text-sm sm:text-base">
          Hear directly from some of our happy clients who got exactly what
          they imagined!
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((src, idx) => (
          <div key={idx} className="px-2">
            <div
              className="bg-white border shadow-sm rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setZoomImage(src)}
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={src}
                  alt={`testimonial-${idx + 1}`}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
