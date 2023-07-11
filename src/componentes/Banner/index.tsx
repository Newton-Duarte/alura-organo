import './Banner.css';

interface BannerProps {
  imageURL?: string;
  imageAlt?: string
}

export const Banner = ({ imageURL = '/imagens/banner.png', imageAlt }: BannerProps) => {
    return (
      <header className="banner">
        <img src={imageURL} alt={imageAlt} />
      </header>
    )
}