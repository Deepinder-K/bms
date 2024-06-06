import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard";
import axios from "../../utils/middleware";
import { useStore } from "../../hooks/useStore";
interface Category {
  categoryName: string;
}
function Trending() {
  const {
    root: { event },
  } = useStore();
  const [categories,setCategories] = useState([]); // Array of strings
  const [selectedLocation, setSelectedLocation] = useState("Bengaluru"); 
  useEffect(() => {
    const fetchLocationOptions = async () => {
      try {
      } catch (error) {
        console.error("Error fetching location options:", error);
      }
    };
    const fetchCategories = async () => {
      const response = await axios.get(
        "http://3.253.146.194:3001/api/v1/categories/getallcategories"
      );
      setCategories(response.data.data);
    };
    const fetchEvents = async () => {
      await event.fetchEvents("28.4262481", "77.0581663");
      console.log(event.liveEvents);
      console.log(event.trendingCategories);
      console.log(event.currentCity);
      console.log(event.upcomingEvents);
    };
    fetchCategories();
    fetchLocationOptions();
    fetchEvents();
  }, []);
  const eventData = [
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/959f/1738/c3e5a2be170a46585dd0a716826faa49?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3KUvOyCY4RP4cBbnTFMm-VDMUX02Ld9x2SEoZmWFq7UdqEDHZrhrPHW7VHRJaZLhFlrSVZ-UbD58rEEwHmCxbIkLMmOlCYvIIDj-HAVv-nkzdTg2-x3s329NUhR9MWTNjzAWjMGbVy8EtysyQrOT9cR4RjaG~9Fl1Mq2~nAigC37HusRY43xeicGvNYQF69UsGpfGql8OkvPBoOsZDbOe061PaomqnAa7SYTQhOmyL8FI3fT6et08GL2cE5MukW~I05Iwj42pIF9GmadcSDHhmHBhM0IU3tivIOb6a2sSDniOdcplYhLrlIGy0JJdSGTXZawcLanhxAq6hAKAV3rw__",
      date: "DEC 24",
      location: "Boston",
    },
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/bb90/a815/4e97da869bd386736fb25728c68cb5ca?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XT4R6e17Ky9lWrvQrYF~b3M4BZhIo0LBfQzbi5eEjDFafpfmYMcrUNVGhUBMsiKxTo77F5fmIs2pdKwJifJ9cI3ysT9mKOj1wWbzCmLjwpYvVNZvIpJFFw2VGCLD3O14m~i~ZZ4rQZu54xdBLF0TRGbMRgiOYoH3Fu8iSAoH10YxJMX5wcPZapCKqSBNe8rPl4wEBObZexrQfElkQCXTYON1qZeH2t3LUz4MNDpeou7K7fO8Y0TQKAxN7ACJRVsqMQ2JOWm4cYdDl8ud7-8WwjuOxbNGMsWA1AMYUR~dMkolqSK3u1VDbL63R1kFL-B1xdmjnkzDGPvU0IM6c8PeGA__",
      date: "DEC 24",
      location: "Boston",
    },
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/e6f7/afea/18e6163a82e41b420bed6926cc768cee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKIE61vv1TSZEVuC61~K-o81FsIiUIvMmosh9BSE5NXPc9~JSGg-MIbzMqgmX1qt2iCQ3SNAtojcIt093yfO4z7koAmlRKfp3ObDH8BDvUtH6FvNxXTn80T9dw-kg0wo81FbSmO~FTFELXbCeBgOSeSkhYB5rRf6JzYCWiGU3eG7EOf1FGZ95nJ0yDEIb71N~FfhfbIopat5ceJYlXrXuFBei-2S3hhAPD6CyAquPS116nzreWXJCDKbINAorb1C1Q-1mRkx21dD8NGiwKWgzS8JilmKDe9CNcl~vF6QqD2piDIEsemYSbG~BjPRjioYSFJ1aq3Egb8Kotx2nrUg2w__",
      date: "DEC 24",
      location: "Boston",
    },
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/7c0c/4551/03f4daaa2748f9135fb1b5adecb43fb4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdks-o45fCfFJEhtlanv-tr2GfoYg5fCvvo99ldLCswVWL5KYlgNd9d-3oGkfv20rArD2utwPgtnIyJjWjcMZntxC26KPSJO8nkotmKoUAUFZcWQSpVCKfMLJhnb78tWgrBDzPmcwHXIGAKOqqwiZJndx4ngUFLHF-cV4dACqHLigbkkLhlMMeaK7an6He1imioKz5xmlAsb0OXFhHDvHYG3nOrh1Pbd0FHUBn0uuWz7izi5p6Bx2WpfW8D8ow1oruzt76hoYjfqJXD0WYeqiiYcFAwmtyLmKLgkS7NlDCZy9ZpMWP3AWL3eOs7nn74nu6LKj7RnBDRr2~QOj34LNQ__",
      date: "DEC 24",
      location: "Boston",
    },
  ];
  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };
  return (
    <div className="lg:px-[8%] px-[8vw] mt-[7vh] flex flex-col gap-8">
      <div className="flex items-center mb-4">
        <div className="lg:text-[1.2rem] text-[0.7rem] font-medium">
          Discover events in
        </div>
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="ml-4 py-1 px-4 bg-transparent border border-gray-800 rounded-md shadow-sm focus:outline-none lg:text-[1rem] text-[0.7rem]  font-medium text-blue-700"
        >
          <option value="Bengaluru">{selectedLocation}</option>
          {/* {locationOptions.map(() => (
            // <option key={option.value} value={option.value}>
            //   {option.label}
            // </option>
          ))} */}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-medium mb-2 lg:text-[1.4rem] text-[0.9rem]">
          <span className="inline-block transform -rotate-90 mr-2">▼</span>{" "}
          Trending Categories
        </h2>

        <div className="flex space-x-4 overflow-x-auto">
          {categories.slice(0, 7).map((category: Category) => (
            <button className="lg:w-[200px] md:w-[20vw] py-1 min-w-[84px] font-medium md:text-[1rem] text-[0.7rem] rounded-full border-2 bg-[#EBEBEBB2] text-gray-800 transition-colors duration-200">
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Events in {selectedLocation}
          </div>
          <div className="hover:font-medium hover:underline ">
            <Link to="">See More</Link>
          </div>
        </div>
        <div className="flex justify-around md:hidden gap-2">
          {eventData.slice(0, 2).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden md:flex lg:hidden">
          {eventData.slice(0, 3).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden lg:flex">
          {eventData.slice(0, 4).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-10">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Upcoming Events
          </div>
          <div className="hover:font-medium hover:underline ">
            <Link to="">See More</Link>
          </div>
        </div>
        <div className="flex justify-around md:hidden gap-2">
          {eventData.slice(0, 2).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden md:flex lg:hidden">
          {eventData.slice(0, 3).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden lg:flex">
          {eventData.slice(0, 4).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
