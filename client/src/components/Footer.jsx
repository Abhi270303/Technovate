import MailIcon from '../img/mail_icon.png'
import PhoneIcon from '../img/phone_icon.png'
import GPSIcon from '../img/location.png'
import InstagramIcon from '../img/instagram_icon.png'
import GithubIcon from '../img/github_icon.png'
import TwitterIcon from '../img/twitter_icon.png'
import LinkedInIcon from '../img/linkedin_icon.png'
import SubcribeComponent from './SubcribeComponent'


const Footer = () => {
  return (
    <div className='mt-15 '>
      {/* For Desktops */}
      <div className='hidden md:flex flex-col #070707 mt-14'>
        <SubcribeComponent />
        <div className=' md:mt-40 p-16'>
          <div className="flex flex-col items-center justify-center">
            <div className="text-yellow md:text-2xl">
              Relief DAO
            </div>
            <div className="text-yellow font-extralight md:text-xl">
              Building Bridges in Times of Crisis
            </div>
          </div>
          <div className="border border-yellow border-t-[0.1px] border-b-[0.1px] border-l-0 border-r-0 py-16 mt-9 flex items-center justify-center gap-36 text-xl font-medium text-lightCard">
            <div className='flex flex-col items-center justify-center gap-2 text-yellow'>
              <img src={MailIcon} alt="mail_icon" className='w-7' />
              <div>Mail</div>
              <div className='text-sm font-thin'>
                reliefdao@support.com
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 text-yellow'>
              <img src={PhoneIcon} alt="mail_icon" className='w-7' />
              <div>Call</div>
              <div className='text-sm font-thin'>
                +91 123457896
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 text-yellow'>
              <img src={GPSIcon} alt="mail_icon" className='w-7' />
              <div>Find Us</div>
              <div className='text-sm font-thin'>
                Thane(west)
              </div>
            </div>
          </div>
          <div className='mt-9 flex justify-between text-yellow'>
            <div>Copyright © 2023 ReliefDAO. All rights reserved.</div>
            <div className='flex gap-2'>
              <img src={GithubIcon} alt="github_icon" className='w-10' />
              <img src={InstagramIcon} alt="instagram_icon" className='w-10' />
              <img src={LinkedInIcon} alt="linkedin_icon" className='w-10' />
              <img src={TwitterIcon} alt="twitter_icon" className='w-10' />
              </div>
          </div>
        </div>
      </div>


      {/* For Mobiles */}
      
      <div className='md:hidden bg-darkbg p-8'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-yellow text-xl'>Relief DAO</p>
          <p className='text-yellow font-extralight text-sm'>Building Bridges in Times of Crisis</p>
        </div>

        <div className='flex items-center justify-center mt-6 text-yellow gap-3'>
        <div className='flex flex-col items-center justify-center gap-2'>
              <img src={MailIcon} alt="mail_icon" className='w-5' />
              <div>Mail</div>
              <div className='text-[10px] font-thin'>
                jobset@support.com
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={PhoneIcon} alt="mail_icon" className='w-5' />
              <div>Call</div>
              <div className='text-[10px] font-thin text-center'>
                +91 123457896
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={GPSIcon} alt="mail_icon" className='w-5' />
              <div>Find Us</div>
              <div className='text-[10px] font-thin'>
                Kopar Khairane
              </div>
            </div>


        </div>
        <div className='mt-9 text-[12px] flex items-center justify-between text-yellow'>
            <div>Copyright © 2023 Relief DAO. All rights reserved.</div>
            <div className='flex gap-2'>
              <img src={GithubIcon} alt="github_icon" className='w-5' />
              <img src={InstagramIcon} alt="instagram_icon" className='w-5' />
              <img src={LinkedInIcon} alt="linkedin_icon" className='w-5' />
              <img src={TwitterIcon} alt="twitter_icon" className='w-5' />
            </div>

          </div>
      </div>
    </div>

  );
}

export default Footer;
