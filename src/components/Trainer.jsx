import React from 'react';
import Ricky from '../assets/ricky.png';
import FootballImage from '../assets/football.png';
import Hockey from '../assets/hockey.png';
import Tennis from '../assets/tennis.png';
const trainersData = [
  {
    id: 1,
    name: 'Ricky Pointing',
    sport: 'Cricket and Australia',
    bio: 'Ricky Ponting, one of the greatest batsmen in cricket history, debuted for Australia in 1995 and scored over 13,000 runs in both Test and ODI formats, with 71 international centuries. As captain, he led Australia to World Cup victories in 2003 and 2007 and became one of the most successful leaders in the sport. After retiring in 2012, Ponting transitioned to coaching, taking on roles with IPL teams like Mumbai Indians, Delhi Capitals, and currently Punjab Kings, where he continues to influence the game as a coach and mentor.',
    image: Ricky,
  },
  {
    id: 2,
    name: 'Carlo Ancelotti',
    sport: 'Football',
    bio: 'Carlo Ancelotti is a renowned Italian football manager and former player, widely regarded as one of the greatest coaches in football history. As a player, he had a successful career with clubs like Roma, AC Milan, and the Italian national team, winning numerous titles. After retiring as a player, Ancelotti became a manager and achieved great success, winning domestic league titles, UEFA Champions League trophies, and other prestigious honors with clubs such as AC Milan, Chelsea, Paris Saint-Germain, Bayern Munich, and Real Madrid. Known for his tactical flexibility and calm demeanor, Ancelotti is respected for his ability to manage star players and lead teams to victory. He has won the Champions League three times as a manager, making him one of the most successful coaches in the competition’s history.',

    image: FootballImage,
  },
  {
    id: 3,
    name: 'Toni Nadal',
    sport: 'Tennis',
    bio: 'Toni Nadal is a former Spanish tennis coach, best known for his long and successful partnership with his nephew, Rafael Nadal. As a coach, Toni played a pivotal role in shaping Rafaels career, helping him become one of the greatest tennis players of all time. Under his guidance, Rafael won numerous Grand Slam titles, including multiple French Open victories, and became a dominant force in the sport. Toni Nadal is a renowned tennis coach who guided his nephew Rafael Nadal to multiple Grand Slam titles and world number one rankings. His coaching focused on discipline mental toughness and a strong work ethic leading Rafael to become one of the greatest players in tennis history.',
    image: Tennis,
  },
  {
    id: 4,
    name: 'Tahir Zaman',
    sport: 'Hockey',
    bio: 'Tahir Zaman is the current head coach of the Pakistan men',
    image: Hockey,
  },
];

function Trainer() {
  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-40 w-40 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{trainer.name}</h3>
              <p className="text-center text-gray-500">{trainer.sport}</p>
              <p className="mt-4 text-gray-700">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainer;
