import about from '../assets/about-section.jpeg'
import logo from '../../public/assets/images/logo.jpeg'
import { useInView } from '../hooks/useInView'


const OurStory = () => {
//   const storyRef = React.useRef(null)
  const { ref: imgRef, isInView: imgInView } = useInView();
   const { ref: storyRef, isInView: storyIn } = useInView();
  return (
    
         <section className="py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-grid opacity-10" />
           <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
   
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Text */}
               <div
                 ref={storyRef}
                 className={`transition-all duration-1000 ${
                   storyIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                 }`}
               >
                
   
                 <h2 className="font-montserrat  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
                   IT ALL STARTED
                   <br />
                   WITH <span className="text-gradient-red">PASSION</span>
                 </h2>
   
                 <div className="space-y-6">
                   <p className="text-muted-foreground text-lg leading-relaxed">
                     At Novella, we believe that a kitchen is not just a place to prepare food — it's a
                     home. It's where families gather, where creativity flourishes, and where memories are
                     crafted over the warmth of a shared meal.
                   </p>
                   <p className="text-muted-foreground leading-relaxed">
                     Our story is one of relentless pursuit: to preserve the heritage of Italian
                     craftsmanship while embracing the latest in induction technology. Every piece that
                     bears the Novella name has been designed with a clear purpose — to bring the art of
                     Italian living into your home.
                   </p>
                   <p className="text-muted-foreground leading-relaxed">
                     From our first sketch to the final product, Novella has been driven by an unwavering
                     ambition: to merge beauty with precision, tradition with innovation, and elegance
                     with everyday function.
                   </p>
                 </div>
   
                 <div className="mt-10 flex items-center gap-6">
                    <div className="mt-10 flex items-center gap-6">
                                 
                                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-primary/30 animate-glow-pulse">
                                  
                                    <img src={logo} alt="Novella" className="w-full h-full object-cover" />
                                    
                                  </div>
                                  <div>
                                    <div className="font-montserrat  text-2xl text-foreground tracking-tight">
                                      NOVÉLLA
                                    </div>
                                    <div className="text-primary text-xs tracking-[0.3em] uppercase font-light">
                                      wave of innovation
                                    </div>
                                  </div>
                                </div>
        
                   
                 </div>
               </div>
   
                        {/* Product image */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-1000 ${
              imgInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all duration-500" />
              <div className="relative border border-border  overflow-hidden product-img-container">
                <img
                  src={about}
                  alt="Novella NV-410 Smart 4-Burner Induction Hub"
                  className="w-full h-auto object-cover animate-float"
                />
              </div>
              {/* Model badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary/50 text-primary-foreground px-6 py-3 rounded-xl font-montserrat font-black text-2xl ">
                NV-410
              </div>
            </div>
          </div>
             </div>
           </div>
         </section>
  )
}

export default OurStory
