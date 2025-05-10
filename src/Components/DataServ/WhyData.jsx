import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import web3 from '../../assets/Service/WEB 3.svg';
import web4 from '../../assets/Service/WEB 4.svg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const WhyDataScience = () => {
    const expertisePoints = [
        {
            title: 'Data Collection & Cleaning',
            description:
                'We help businesses gather and clean raw data from multiple sources, transforming it into high-quality datasets ready for analysis and model building.',
            list: [
                'Data Scraping & ETL Processes',
                'Data Quality Assurance',
                'Handling Missing Data & Outliers',
            ],
            image: web1,
        },
        {
            title: 'Advanced Data Visualization',
            description:
                'Our data visualization techniques provide interactive and insightful dashboards, helping businesses understand complex data patterns and trends.',
            list: [
                'Interactive Dashboards & Reports',
                'Real-Time Data Monitoring',
                'Visualization of Large Datasets',
            ],
            image: web2,
        },
        {
            title: 'Predictive Analytics & Forecasting',
            description:
                'Using statistical models and machine learning algorithms, we help businesses predict future trends, optimize decisions, and mitigate risks.',
            list: [
                'Time-Series Forecasting',
                'Regression & Classification Models',
                'Risk Analysis & Predictive Modeling',
            ],
            image: web3,
        },
        {
            title: 'Data-Driven Decision Making',
            description:
                'Our data-driven approach empowers businesses with actionable insights to make informed decisions, increase efficiency, and maximize profitability.',
            list: [
                'Data-Driven Business Strategy',
                'Automated Reporting & Insights',
                'Optimizing Operations Through Data',
            ],
            image: web4,
        },
    ];

    return (
        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                        Our Data Science & Analytics Edge
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                        Leveraging data to drive actionable insights and business growth
                    </p>
                </div>

                <div className="space-y-16">
                    {expertisePoints.map((point, index) => (
                        <AnimatedCard key={index} point={point} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AnimatedCard = ({ point }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const animation = useAnimation();

    React.useEffect(() => {
        if (inView) {
            animation.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
        } else {
            animation.start({ opacity: 0, y: 50 });
        }
    }, [inView, animation]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col md:flex-row items-center w-full bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
        >
            {/* Left: Text */}
            <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-gray-300 mb-4">{point.description}</p>
                {point.list && (
                    <ul className="space-y-2 mt-4">
                        {point.list.map((item, i) => (
                            <li key={i} className="flex items-start text-gray-200">
                                <CheckCircle className="text-green-400 mt-1 mr-2" size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center p-8">
                <img
                    src={point.image}
                    alt={point.title}
                    className="w-3/4 max-w-md h-auto object-contain pt-4 md:pt-10"
                />
            </div>
        </motion.div>
    );
};

export default WhyDataScience;
