import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/global.css'


// import required modules
import { Pagination, Navigation, Autoplay,  } from "swiper";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Event() {

  return (
    <>
      <Header /> 

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-100 items-center justify-center"
        autoplay={{ delay: 3000, }}
      >
        <SwiperSlide className="flex items-center justify-center gap-2">
          <Link to="/lesson/aula-2">
            <img src="https://avatars.githubusercontent.com/u/71560756?v=4" alt="" className="h-full bg-contain"/>
            <h1>Promoção 1</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://avatars.githubusercontent.com/u/71560756?v=4" alt="" className=" h-full bg-contain"/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://avatars.githubusercontent.com/u/71560756?v=4" alt="" className=" h-full bg-contain"/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://avatars.githubusercontent.com/u/71560756?v=4" alt="" className=" h-full bg-contain"/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://avatars.githubusercontent.com/u/71560756?v=4" alt="" className=" h-full bg-contain"/>
        </SwiperSlide>
      </Swiper>

      <div 
        className="m-4"
      >
        <h2 className="font-semibold text-3xl">Front-End</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-60 items-center justify-center p-2 "
        >
          
          <SwiperSlide className="flex items-center justify-center gap-2 bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2" >
              <h1>Imagem 1</h1>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 2</h1>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 3</h1>
            </Link>        
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 4</h1>
            </Link>        
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 5</h1>
            </Link>        
          </SwiperSlide>
        </Swiper>
      </div>

      <div 
        className="p-4"
      >
        <h2 className="font-semibold text-3xl">
          Back-End
        </h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-60 items-center justify-center p-8 "
        >
          
          <SwiperSlide className="flex items-center justify-center gap-2 bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2" >
              <h1>Imagem 1</h1>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 2</h1>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 3</h1>
            </Link>        
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 4</h1>
            </Link>        
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 5</h1>
            </Link>        
          </SwiperSlide>
        </Swiper>
      </div>

      <div 
        className="p-4"
      >
        <h2 className="font-semibold text-3xl ">
          Professores
        </h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-80 items-center justify-center p-8 "
        >
          
          <SwiperSlide className="flex items-center justify-center gap-2 p-4 bg-gray-700 hover:bg-gray-800 hover:scale-110 transition-all duration-200 rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2 flex-col" >
              <img 
                src="https://avatars.githubusercontent.com/u/71560756?v=4" 
                alt="" 
                className="h-24 bg-contain rounded-[50%]"
              />
              <div
                className="flex items-center flex-col"
              >
                <p 
                  className="text-lg font-semibold mb-1"
                >
                  Nathan Nascimento
                </p>
                <span
                  className="text-xs text-center"
                >
                  Descrição do professor 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus nulla 
                  veritatis laudantium ipsa, possimus labore 
                </span>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 2</h1>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 3</h1>
            </Link>        
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 4</h1>
            </Link>        
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-slate-500 hover:scale-110 transition-all rounded-xl">
            <Link to="/lesson/aula-2" className="w-full h-full flex items-center justify-center gap-2">
              <h1>Imagem 5</h1>
            </Link>        
          </SwiperSlide>
        </Swiper>
      </div>
      
    </>
  );
}
