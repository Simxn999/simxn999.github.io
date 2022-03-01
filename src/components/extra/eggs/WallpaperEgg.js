import "../../../style/eggs/css/wallpaper_egg.css";

export const WallpaperEgg = () => {
  return (
    <button
      className='wallpaper-egg-button'
      onClick={() => document.getElementsByTagName('html')[0].classList.toggle('wallpaper-egg-found')}>
    </button>
  );
};