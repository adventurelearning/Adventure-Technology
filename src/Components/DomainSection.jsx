import { motion } from "framer-motion";

const DomainsSection = () => {
  const domains = [
    {
      name: "Full Stack Development",
      image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1746505223~exp=1746508823~hmac=810d66cd16ecbce40cd466c647515118cfcc93526c58f5e35ff876daa2c3fc4f&w=996",
    },
    {
      name: "Embedded System / IOT",
      image: "https://img.freepik.com/free-photo/neon-motherboard-background_23-2151704825.jpg?t=st=1746505658~exp=1746509258~hmac=cfcfae1299a2adf121d33866a126446873a90be3bc77b393b0d74812195d3bc4&w=1380",
    },
    {
      name: "Data Science & Analytics",
      image: "https://img.freepik.com/free-photo/man-is-working-computer-with-graph-screen_23-2151929046.jpg?t=st=1746505744~exp=1746509344~hmac=a07bd85fc4068eb5b44d6c67de298692189037c0ac0617ef92bb6a62517b6eda&w=1060",
    },
    {
      name: "AI & ML",
      image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/06/Machine-Learning-vs-Deep-Learning-vs-Artificial-Intelligence-ML-vs-DL-vs-AI-.webp",
    },
    {
      name: "Cloud Computing",
      image: "https://img.freepik.com/free-photo/woman-scrolling-laptop_53876-167050.jpg?t=st=1746506244~exp=1746509844~hmac=4dfdb490b86acd67fbd900a325f31858b5bcaa567b090e457ba7c854e616ea31&w=740",
    },
    {
      name: "Networking",
      image: "https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?t=st=1746506636~exp=1746510236~hmac=a85e7a87c7e1c6eb7915170569dbb0e1c92be5d6e91479ecfa9aee7681e08a40&w=826",
    },
    {
      name: "Cyber Security",
      image: "https://img.freepik.com/free-photo/futuristic-technology-hologram_23-2151917457.jpg?t=st=1746506966~exp=1746510566~hmac=cd36af5321a30404a01694839da76d6d65f81492ba8f4efe620b8b4535e25048&w=1060",
    },
    {
      name: "Robotics",
      image: "https://img.freepik.com/free-photo/automated-robotic-systems-enhance-manufacturing-smart-warehouses_60438-3780.jpg?t=st=1746506690~exp=1746510290~hmac=b3384d7574a7f890dbc2ad042ae332d23baa912aca8f79dec868ed428f9318e8&w=1380",
    },
  ];

  // Color variants for cards
  const cardColors = [
    "bg-gray-900 hover:bg-gray-800",
   "bg-gray-900 hover:bg-gray-800",
   "bg-gray-900 hover:bg-gray-800",
 "bg-gray-900 hover:bg-gray-800",
   "bg-gray-900 hover:bg-gray-800",
   "bg-gray-900 hover:bg-gray-800",
    "bg-gray-900 hover:bg-gray-800",
    "bg-gray-900 hover:bg-gray-800",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-semibold text-white mb-4">
            Our <span className="text-blue-400">Domains</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore diverse internship opportunities across cutting-edge technology sectors
          </p>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`rounded-lg border border-gray-800 overflow-hidden transition-all duration-300 ${cardColors[index]}`}
            >
              <div className="p-2 h-full flex flex-col">
                {/* Image at the top of the card */}
                <div className="mb-4">
                  <img
                    src={domain.image}
                    alt={domain.name}
                    className="w-full h-44 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{domain.name}</h3>
                <div className="mt-auto pt-4">
                  <button className="w-full py-2 px-4 bg-transparent border border-blue-500 text-blue-400 rounded-md font-medium hover:bg-blue-900/30 transition-colors duration-300 flex items-center justify-center">
                    Apply Now
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-10 opacity-10">
          <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
