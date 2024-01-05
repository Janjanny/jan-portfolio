import "boxicons";

const Footer = () => {
  return (
    <>
      <div className=" w-full bg-black text-off-white pt-28 pb-12 justify-center items-center overflow-hidden">
        <div className="footer-container w-11/12 mx-auto flex flex-col justify-center items-center">
          <ul className="social-links text-black flex mb-8 gap-[12px] md:gap-[24px]">
            <li>
              <a
                href="https://www.facebook.com/chrisjanbeboso"
                className=" bg-off-white border-2 border-black p-[8px] rounded-full flex justify-center items-center hover:bg-black hover:border-off-white hover:text-off-white transition-all  "
                target="blank"
              >
                <box-icon
                  name="facebook-circle"
                  type="logo"
                  color="currentColor"
                  size="md"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/jaaannyyy_/"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-black hover:border-off-white hover:text-off-white transition-all border-2 border-black "
                target="blank"
              >
                <box-icon
                  name="instagram-alt"
                  type="logo"
                  color="currentColor"
                  size="md"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/chris-jan-beboso-3325b115a/"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-black hover:border-off-white hover:text-off-white transition-all border-2 border-black "
                target="blank"
              >
                <box-icon
                  name="linkedin-square"
                  type="logo"
                  color="currentColor"
                  size="md"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Janjanny"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-black hover:border-off-white hover:text-off-white transition-all border-2 border-black "
                target="blank"
              >
                <box-icon
                  name="github"
                  type="logo"
                  color="currentColor"
                  size="md"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://dribbble.com/ChrisJanBeboso"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-black hover:border-off-white hover:text-off-white transition-all border-2 border-black "
                target="blank"
              >
                <box-icon
                  name="dribbble"
                  type="logo"
                  color="currentColor"
                  size="md"
                ></box-icon>
              </a>
            </li>
          </ul>

          <ul className="footer-nav-links text-white font-body flex justify-center items-center gap-6 md:gap-[3rem] text-sm md:text-base">
            <li>
              <a href="/" className="hover:font-bold transition-all ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:font-bold transition-all ">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:font-bold transition-all ">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:font-bold transition-all ">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights w-full bg-[#101010] text-off-white p-4 flex justify-center items-center font-body text-[12px] sm:text-sm font-light cursor-default">
        Copyright @2024. Designed by Chris Jan Beboso
      </div>
    </>
  );
};
export default Footer;
