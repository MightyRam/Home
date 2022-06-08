import React from "react";
import "./HomePage.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const HomePage = () => {
  return (
    <div>
      <div className="top-text">
        <h2>FARM ANIMALS</h2>
        <br></br>
        <h1>ABOUT SHEEP</h1>
      </div>
      <div className="textcontainer">
        <p>
          <div>
            <img
              className="sheep-pic"
              src="https://grist.org/wp-content/uploads/2014/07/curious-sheep.jpg"
              alt="baby-sheep"
            />
          </div>
          <br></br>
          Sheep are a domesticated animal, usually bred for their fleece, meat,
          and their milk. Hundreds of different breeds exist, and they are
          considered one of the most important of all farming animals, with an
          estimated one billion in existence today.
        </p>

        <p>
          A ram is a male sheep, sometimes known as a buck, and a young ram is
          called a ram lamb. In some parts of the world, especially the UK, the
          ram is called a tup, which means that the mating season is called the
          tupping season. The ram is usually taller and heavier than the ewe,
          which is the name for a female sheep. Other names for sheep, dictated
          by the age or sex of the animal, include wethers, which are castrated
          males. There are also yearlings, which are sheep aged between 1-2
          years old that have not given birth to young. Sheep can be kept in a
          homestead for self-sufficiency. Some can be bred as pets and
          companions, but the typical use of the domesticated sheep is for
          large-scale farming.
        </p>
        <div>
          <img
            className="sheep-pic"
            src="https://cdn.britannica.com/71/80571-050-4E3877DE/Merino-rams.jpg"
            alt="sheeps"
          />
        </div>
        <p>
          The ram is a male sheep, aged 12 months or over. A farmer requires
          both ewes and rams if they wish to breed lambs for the meat, or if
          they want to extract milk from the sheep. Rams may also be kept as
          stud rams, whereby their semen is sold to farmers and breeders or they
          are encouraged to impregnate ewes. Stud rams must be able to produce
          semen and those with a high production will earn more. On average, a
          farmer will keep one ram for every 100 ewes in his flock, although
          this ratio can vary from 1:50 to 1:150. Personality Character Rams are
          known for being feisty. They can be aggressive, especially when it is
          mating season and they are around ewes that are in heat. They will
          fight with other rams for the right to mate, and if they feel
          threatened, a ram may turn on a person, dog, or any other animals or
          visitors to the farm. A ram may also turn on people or things that
          they view as a threat and/or see with their ewes. So, you should try
          and keep interaction with the ewes to a minimum. This isn’t the case
          with all rams, but no matter how sweet and kind one of your stock of
          rams is, you should always be prepared for them to become aggressive.
        </p>
      </div>
      <div className="textbottom">
        <br></br>
        <h3> More about sheep: </h3>

        <br></br>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            href="http://www.sheep101.info/201/index.html"
            target="_blank"
          >
            Sheep101
          </Button>
          <Button
            variant="contained"
            href="https://petkeen.com/ram-vs-sheep/"
            target="_blank"
          >
            Pet Keen
          </Button>
          <Button
            variant="contained"
            href="https://www.britannica.com/animal/ram-male-sheep"
            target="_blank"
          >
            {" "}
            Britannica
          </Button>
        </Stack>
      </div>
    </div>
  );
};
