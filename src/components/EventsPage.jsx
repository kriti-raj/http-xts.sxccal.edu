import { BgInternal } from "./Assets";

const EventsPage = () => {
  return (
    <div
      className="min-h-[100vh] w-full bg-cover bg-center flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="m-4 flex flex-col justify-center bg-black bg-opacity-70 rounded-lg p-4 sm:p-6 shadow-2xl max-w-5xl w-full mx-auto">
        <h1 className="font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide mb-4 text-center drop-shadow-lg">
          Khwaab Workshop
        </h1>
        <p className="text-red-200 font-semibold px-2 py-2 sm:px-4 sm:py-4 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg text-justify leading-snug sm:leading-relaxed border-l-4 border-pink-400 mb-6 sm:mb-8 break-words">
          XTS is more than thrilled to unveil the series of events that are
          organized all throughout the session. Our theatrical journey begins
          with the KHWAAB series of workshops that dives into acting and
          storytelling to triggers each and everyone to embrace the actor
          within. The Khwaab series of workshops for the session 2023-24 were a
          huge success with their capability to fetch out creative minds through
          a very interactive and mesmerizing session. XTS was honoured to have
          Mirchi Agni who took the floor by storm with his radio-play workshop
          that delved into a variety of topics ranging from Mahishasur-Mardini,
          to Tagore’s poetry, from juggling octaves, to mapping an R. D. Burman
          composition. The acting workshop was led by none other than Rwitobroto
          Mukherjee who put into perspective the gravity of performing arts in
          the modern-day context and the immense responsibility of an artist
          towards the art and audience. The entire session is interspersed with
          many such miscellaneous events that range from small-scale
          productions, street plays, competitions, creative brain-storming
          sessions and sometime even unexpected surprises. The Khwaab series of
          workshop is returning with all its fervour in September’24 for the
          session 2024-25. The exact dates and the registration process will be
          notified shortly. Stay tuned till then!
        </p>
        <h2 className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-wide mb-2 sm:mb-4 text-center drop-shadow-lg">
          Theaxav
        </h2>
        <p className="text-red-200 font-semibold px-2 py-2 sm:px-4 sm:py-4 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg text-justify leading-snug sm:leading-relaxed border-l-4 border-pink-400 break-words">
          In 1991, XTS developed a new concept in contemporary theatre. Named by
          Late Khaled Chowdhury as ‘Collage Theatre’ the play ‘Jibonerjonney,
          Bhalobasharjonney’ combined various forms of art like song, dance,
          music and mime with acting and dialogue. The play was later taken up
          as the subject of a documentary film that received widespread
          acclamation. Another theatre collage, ‘From Dirt to dust’, won the
          first prize in the Malhar Youth Festival (2000), in Mumbai; 60
          Colleges from all over India participated in this competition. In
          2001, XTS staged another experimental play ‘The Rebirth’; over 40
          students participated in this ‘large scale, energetic spectacle, with
          exemplary and diverse creative inputs of choreography, live songs and
          music’ (from The Telegraph, October 19, 2001). This is perhaps the
          only play in which the late Pandit Kanan rendered the music for the
          song ‘Tum Sab Jantey Ho’. In 2009, in collaboration with the St.
          Xavier’s College Alumni Association (SXCAA), XTS staged an opera
          entitled ‘A Medical Crisis – Revisited’ to celebrate 150 years of
          theatre in St. Xavier’s College. XTS successfully staged ‘Hacchoo!!’
          which is an adaptation of Anton Chekhov’s unforgettable creation ‘The
          Death of a Clerk’ on November 3, 2014. The play was a stunning display
          of ‘Black Comedy’ that is characteristic of many of Chekhov’s
          writings. The short operatic production involved live music, dance,
          singing and acting by the past and present students of St. Xavier’s
          College. The ‘movie-scene’ in particular, was very special. The play
          revealed the teamwork, talent and dedication of the young Xaverians,
          who made it look thoroughly professional. The music was scored by
          Professor Abhijit Roy (Jadavpur University) and the choreography by
          Gautam Upadhyay. The play was preceded by the screening of a 1947 film
          “Night Journey” (courtesy: American Center, Kolkata), choreographed by
          the legendary American choreographer and dancer, Martha Graham. The
          long theatrical journey for 2023-24 culminated in the annual
          inter-college event of the society entitled THEAXAV. Theaxav is an
          inclusive amalgamation of all sorts of theatrical art forms namely
          ‘Tell a Tale’ ( a storytelling via dance and music), ‘Copycat’
          (re-enacting iconic movie scenes), ‘Darpan’ (a stage play event),
          ‘Shor’ (a street play event), ‘Adwitiya’ (Mono-act), ‘Tarang’
          (Radio-play) and finally the much awaited theatre production by XTS
          itself. XTS took pleasure in having the presence of Goutam Haldar,
          Rudraprasad Sengupta, Agnijit Sen, Surangana Bandyopadhyay, Sayan
          Bhattacharya, Sharanya Dey, Chandraboli Rudra Dutta, Rahul Dev Mondal,
          Preeti Sarkar, and Rwitobroto Mukherjee as part of Theaxav-‘24.
          THEAXAV ‘24 also marked an epoch-making moment with the staging of the
          home production titled Der Rücktritt- The Abdication, a play that
          weaves an ironic story of a zealot who climbs the heap of corpses as
          Fate waits to chortle in his doom. We look forward to many such
          Theaxav in the upcoming sessions. XTS welcomes each and everyone to
          join us in this undaunted adventure for this is how dreams and
          imaginations unleash themselves on the stage of life. The stage is
          set…will see you there!
        </p>
      </div>
    </div>
  );
};

export default EventsPage;