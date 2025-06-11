interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] bg-[#323232] rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-3">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-3">{description}</p>

        <a
          href={link}
          className="inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-[#323232] hover:text-white transition duration-200 shadow cursor-pointer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
export default Card;
