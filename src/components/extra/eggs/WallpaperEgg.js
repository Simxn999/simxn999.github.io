import "../../../style/eggs/wallpaper_egg.scss";

export const WallpaperEgg = () => {
  return (
    <button
      className='wallpaper-egg-button'
      onClick={() => document.getElementsByTagName('html')[0].classList.toggle('wallpaper-egg-found')}>
    </button>
  );
};