const Accueil = () =>{
    return (
      <section className="flex min-h-screen flex-wrap items-center mt-12">
        <div className="w-full md:w-1/2">
            <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                Mohamed Wadie Rezgui

            </h2> 
            <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                Hello there !!
            </p>
            <p className="mb-8 p-2 text-xl">
            I am a second-year Master's student in computer science, 
            specializing in software engineering and application integration 
            at ISIMA  with a strong interest in web development.
            I am currently looking for a 5-6 month end-of-study internship starting in April 2025, with a strong interest in web or mobile development roles, ideally with the possibility of pre-hiring.
           
            </p>
        </div>
        <div className="w-full md:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src="../src/assets/myImagee.png" alt="My image"
                width={550} height={550} className="rounded-3xl"/>
            </div>
        </div>

      </section>
    )
  }
  
  export default Accueil